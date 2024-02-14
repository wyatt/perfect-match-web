import Head from 'next/head';
import { Footer } from '../components/footer';
import { Header } from '../components/header';
import { ProfileTabs } from '../components/profile-tabs';
import { Spinner } from '../components/general';
import { NextPage } from 'next';
import { getSession } from 'next-auth/react';
import { fetcher } from '../utils/fetch';
import useSWR from 'swr';
import styles from '/styles/Matches.module.css';
import React, { useState } from 'react';

const Profile: any = (props: any) => {
    const { data, error, mutate } = useSWR('/api/profile', fetcher);
    const refresh = () => mutate();
    if (!data) return <Spinner />;
    return (
        <div className="bg-white">
            <Header />
            <div>
                <section className="text-gray-500 flex flex-col">
                    <div className="pt-12 sm:pt-20 mx-[2%] sm:mx-[15%] lg:mx-[22%] mx-auto">
                        <h1 className="text-2xl sm:text-3xl font-extrabold text-rose-400 text-center mb-10">
                            Happy Valentine&#39;s Day, {data.profile.firstName} 💝!
                        </h1>
                        <p className="text-lg text-center mt-8 mb-8">
                            Thanks for waiting!
                            Our cupid algorithm has been hard at work, 
                            meticulously analyzing data and crunching numbers to bring 
                            you the perfect matches for this Valentine&#39;s Day! We&#39;ve 
                            done the heavy lifting, and now it&#39;s time for you to 
                            seize the moment and make this Valentine&#39;s Day truly special 💖.
                            Good luck!
                        </p>
                    </div>
                </section>
                <p className="text-4xl sm:text-7xl lg:text-8xl mb-10 sm:mb-12 lg:mb-16 sm:mt-6 text-center animate-bounce">❤️🧡💛💚💌💙💜🤍🖤</p>
                <section>
                    <div>
                        <div className="bg-white rounded-lg h-auto">
                            <ProfileTabs user={data} refresh={refresh} />
                        </div>
                        <p className="text-lg mx-2 mt-6 lg:max-w-lg sm:mx-auto lg:text-left text-center lg:text-xl text-gray-500 sm:leading-relaxed">
                            Thanks for filling out PM2024!
                            Matches are released sometime tonight, with a reminder 
                            email sent to you. Get excited❤️‍🔥!
                        </p>
                    </div>
                </div>
                <Image priority={true} src={word} alt="Loading..." className="lg:w-2/5"></Image>
            </section>
            <Footer />
        </div>
    );
};

{/*export async function getServerSideProps(context: any) {
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
}*/}

export default Profile;
