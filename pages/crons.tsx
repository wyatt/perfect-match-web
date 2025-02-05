import React from 'react';
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import { isAdmin } from '@/utils/admins';
import { useRouter } from "next/router";

export default function Dashboard() {
    const [message, setMessage] = useState<string | null>(null);
    const [error, setError] = useState<string | null>(null);
    const { data: session, status } = useSession();
    const router = useRouter();

    useEffect(() => {
        if (session && !isAdmin(session.user?.email!)) {
            router.push('/');
        }
    }, [session, router]);

    const triggerAction = async (endpoint: string) => {
        try {
            const res = await fetch(`http://localhost:5050/trigger/${endpoint}`, {
                method: "POST",
                headers: { "Content-Type": "application/json" }
            });

            if (!res.ok) {
                throw new Error("Failed to trigger action");
            }

            setMessage(`Successfully triggered ${endpoint}`);
            setError(null);
        } catch (err: any) {
            setError(err.message);
            setMessage(null);
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white flex flex-col items-center p-8">
            <h1 className="text-4xl font-extrabold mb-8">Dashboard</h1>

            {error && <p className="text-red-400 text-lg">{error}</p>}
            {message && <p className="text-green-400 text-lg">{message}</p>}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-5xl">
                {/* Trigger Crushes */}
                <div className="bg-gray-700 shadow-md rounded-2xl p-6 text-center">
                    <h2 className="text-2xl font-semibold mb-4">Trigger Crushes</h2>
                    <button onClick={() => triggerAction("crushes")} className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg">Trigger</button>
                </div>

                {/* Trigger Songs */}
                <div className="bg-gray-700 shadow-md rounded-2xl p-6 text-center">
                    <h2 className="text-2xl font-semibold mb-4">Trigger Songs</h2>
                    <button onClick={() => triggerAction("songs")} className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-lg">Trigger</button>
                </div>
            </div>
        </div>
    );
}
