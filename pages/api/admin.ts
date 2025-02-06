import { NextApiRequest, NextApiResponse } from "next";
import { unstable_getServerSession } from "next-auth/next";
import authOptions from "./auth/[...nextauth]";
import { Session } from 'next-auth';
import { isAdmin } from "@/utils/admins";

/**
 * API handler to verify if the user is an admin.
 * Returns true if the user is an admin, false otherwise.
 * 
 * @param {NextApiRequest} req - The API request object.
 * @param {NextApiResponse<boolean>} res - The API response object used to return the admin status.
 * @returns {Promise<void>} - A promise that resolves when the response is sent.
 */

export default async function handler(req: NextApiRequest, res: NextApiResponse<boolean>) {
    const session: Session = (await unstable_getServerSession(req, res, authOptions))!;

    if (!session) return res.status(401).json(false);
    return res.status(200).json(isAdmin(session.user?.email!));
}