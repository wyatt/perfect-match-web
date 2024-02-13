import Head from 'next/head';
import { Footer } from '../components/footer';
import { Header } from '../components/header';
import { ProfileTabs } from '../components/profile-tabs';
import { Spinner } from '../components/general';
import { NextPage } from 'next';
import { getSession } from 'next-auth/react';
import { fetcher } from '../utils/fetch';
import useSWR from 'swr';

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
            <div>
                <section className="text-gray-500">
                    <div className="pt-12 sm:pt-28 mx-[2%] sm:mx-[15%] lg:mx-[22%] mx-auto">
                        <h1 className="text-2xl sm:text-3xl font-extrabold text-rose-400 text-center">
                            Welcome Back, {data.profile.firstName}!
                        </h1>
                    </div>
                </section>
            </div>
            <div>
                <section>
                    <div>
                        <div className="bg-white rounded-lg h-auto">
                            <ProfileTabs user={data} refresh={refresh} />
                        </div>
                    </div>
                </section>
            </div>
            <Footer />
        </div>
    );
};

export async function getServerSideProps(context: any) {
    const session = await getSession(context);
    if (!session)
        return {
            redirect: { permanent: false, destination: '/api/auth/signin' },
            props: {},
        };
    return {
        props: {
            user: session.user,
        },
    };
}

export default Profile;
