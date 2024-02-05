import Head from 'next/head';
import { Footer } from '@/components/footer';
import { Header } from '@/components/header';
import { ProfileTabs } from '@/components/profile-tabs';
import { Spinner } from '@/components/general';
import { NextPage } from 'next';
import { getSession } from 'next-auth/react';
import { fetcher } from '@/utils/fetch';
import useSWR from 'swr';
import CountDown from '@/components/countdown';

const Profile: NextPage = (props: any) => {
    const { data, error, mutate } = useSWR('/api/profile', fetcher);
    const refresh = () => mutate();
    if (!data) return <Spinner />;
    return (
        <div className="bg-white">
            <Head>
                <title>Profile</title>
            </Head>
            <Header />
            <CountDown />
            <Footer />
        </div>
    );
};

/**
 * Declaring the server-side props makes the page server-side rendered.
 * If the user is not logged in, redirect to the login page. Otherwise, return the user's session.
 * @param context The request context that contains the request object.
 * @returns The user's session if they are logged in, otherwise redirect to the login page.
 */
export async function getServerSideProps(context: any) {
    const session = await getSession(context);
    if (!session)
        return {
            redirect: { permanent: false, destination: '/api/auth/signin' },
            props: {},
        };
    return {
        props: { user: session.user },
    };
}

export default Profile;
