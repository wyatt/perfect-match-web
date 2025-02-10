import { SESClient, SendEmailCommand } from '@aws-sdk/client-ses';
import { NextApiRequest, NextApiResponse } from 'next';
import { unstable_getServerSession } from 'next-auth/next';
import authOptions from './auth/[...nextauth]';
import { Session } from 'next-auth';
import { connect } from '@/database';
import { getUser } from '@/controllers';

const sesClient = new SESClient({
    region: 'us-east-1',
    credentials: {
        accessKeyId: process.env.AWS_ACCESS_KEY_ID!,
        secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY!,
    }
});

export default async function handler(req: NextApiRequest, res: NextApiResponse<String>) {
    const session: Session | null = await unstable_getServerSession(req, res, authOptions);
    if (!session) return res.status(401).send('Unauthorized');
    if (req.method !== 'POST') return res.status(405).send('Method Not Allowed');

    const user = session.user;

    await connect();

    const body = JSON.parse(req.body);
    let template = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/poke_email.html`).then(res => res.text());
    template = template.replaceAll('USER', user?.name!);

    const match_poked = body.match;
    const user_matches = (await getUser(user)).matchReviews;

    for (const match of user_matches) {
        if (match.partnerAId === match_poked || match.partnerBId === match_poked) {
            const matchProfile = await getUser(match.partnerAId === match_poked ? match.partnerBId : match.partnerAId);
            const match_email = matchProfile.email;
            template = template.replaceAll('MATCH', matchProfile.profile.firstName);
            const emailParams = {
                Destination: { ToAddresses: [match_email] },
                Message: {
                    Body: { Html: { Charset: 'UTF-8', Data: template }, },
                    Subject: { Charset: 'UTF-8', Data: 'You have been poked!' }
                },
                Source: 'Perfect Match <perfectmatch@cornell.edu>'
            };
            const command = new SendEmailCommand(emailParams);
            await sesClient.send(command);
        }
    }
    return res.status(200).send('Email sent');
}
