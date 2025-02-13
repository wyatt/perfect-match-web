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
    template = template.replaceAll('{{user}}', user?.name!);

    const matchPoked = body.matchEmail;
    const userMatches = (await getUser(user)).matchReviews;

    for (const match of userMatches) {
        if (match.partnerAId.email === matchPoked || match.partnerBId.email === matchPoked) {
            const matchProfile = match.partnerAId.email === matchPoked ? match.partnerAId : match.partnerBId;
            template = template.replaceAll('{{name}}', matchProfile.profile.firstName);
            const emailParams = {
                Destination: { ToAddresses: [matchPoked] },
                Message: {
                    Body: { Html: { Charset: 'UTF-8', Data: template }, },
                    Subject: { Charset: 'UTF-8', Data: `💘 Psst… ${user?.name!} Just Poked You! 💘` }
                },
                Source: 'Perfect Match <perfectmatch@cornell.edu>'
            };
            const command = new SendEmailCommand(emailParams);
            await sesClient.send(command);
        }
    }
    return res.status(200).send('Match poked successfully!');
}
