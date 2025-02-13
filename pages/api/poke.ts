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

    const matchPoked = body.matchEmail;
    const userProfile = await getUser(user);
    const userMatches = userProfile.matchReviews;
    template = template.replaceAll('{{user}}', userProfile.profile.firstName);


    for (const match of userMatches) {
        if (match.partnerAId.email === matchPoked || match.partnerBId.email === matchPoked) {
            if (match.poked) return res.status(400).send('Match already poked!');
            const matchProfile = match.partnerAId.email === matchPoked ? match.partnerAId : match.partnerBId;
            template = template.replaceAll('{{name}}', matchProfile.profile.firstName);
            const emailParams = {
                // Change this to the email of the user being poked (matchPoked)
                Destination: { ToAddresses: ['perfectmatch@cornell.edu'] },
                Message: {
                    Body: { Html: { Charset: 'UTF-8', Data: template }, },
                    Subject: { Charset: 'UTF-8', Data: `💘 Psst… ${userProfile.profile.firstName} Just Poked You! 💘` }
                },
                Source: 'Perfect Match <perfectmatch@cornell.edu>'
            };
            const command = new SendEmailCommand(emailParams);
            await sesClient.send(command);
            return res.status(200).send('Match poked successfully!');
        }
    }
    return res.status(400).send('Match not found.')
}
