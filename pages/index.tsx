import Head from 'next/head';
import type { NextPage } from 'next';
import { getSession } from 'next-auth/react';
import { Footer } from '@/components/footer';
import { GoogleAuth } from '@/components/general';
import { Header } from '@/components/header';
import { fetcher } from '@/utils/fetch';
import useSWR from 'swr';
import styles from '@/styles/Home.module.css';
import Link from 'next/link';
import Script from 'next/script';
import Image from 'next/image';
import BestAlternative from '@/components/analytics/apex-charts/bestAlternative';
import demo from 'public/feedback-demo.gif';
import Countdown from '@/components/countdown';
import word from 'public/wordcloud-hq.gif';
import SpotifyPlaylist from '@/components/playlist'
import SpotifyPlaylistNarrow from '@/components/playlist-narrow';

const Home: NextPage = (props: any) => {
    const { data: currentCount, error } = useSWR('/api/count', fetcher, {
        refreshInterval: 60000,
    });
    return (
        <div>
            <Head>
                <title>Perfect Match</title>
                <meta name="description" content="Find your Perfect Match" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header />
            {/*
            <div className="bg-pink-100">
                <div className="py-2 px-3 sm:py-3 flex">
                    <div className="flex flex-wrap items-center sm:mx-auto">
                        <div>
                            <p className="ml-2 font-lg text-gray-500 sm:text-xl pb-1">
                                <strong>❗PM24 Special❗</strong>
                                Let us help you{' '}
                                <Link href="/profile#crushes">
                                    <strong className="text-rose-400 underline hover:text-rose-500 hover:cursor-pointer">
                                        Nudge Your Crush
                                    </strong>
                                </Link>{' '}
                                with an anonymous hint 💌!
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            */}
            <div className="bg-pink-100">
                <div className="py-2 px-3 sm:py-3 flex">
                    <div className="flex flex-wrap items-center sm:mx-auto">
                        <div>
                            <p className="ml-2 font-lg text-gray-500 sm:text-xl pb-1">
                                Did &#34;Nudge Your Crush&#34; work? Check out{' '}
                                <Link href="/dashboard">
                                    <strong className="text-rose-400 underline hover:text-rose-500 hover:cursor-pointer">
                                        PM2024 quick results
                                    </strong>
                                </Link>{' '}
                                now !🤔✨
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <section className="bg-white flex flex-col pr-0 lg:pr-32 xl:pr-40 xl:pl-8 lg:flex-row">
                <div className="pb-6 pt-8 sm:pt-20 lg:pt-44 lg:pb-36 lg:w-2/3 lg:pr-3">
                    <div className="mx-2 max-w-xl text-center lg:text-left sm:mx-auto lg:ml-[17%] mt-8 sm:mt-0 opacity-100">
                        <h1 className="text-3xl text-gray-600 font-extrabold sm:text-3xl lg:text-4xl">
                            Happy Valentine&#39;s Day
                            <strong className="mt-1 lg:mt-2 lg:mt-3 block font-extrabold text-rose-400">
                                With your Perfect Match💓!
                            </strong>
                        </h1>
                        <p className="text-lg mt-6 lg:max-w-lg lg:text-left text-center lg:text-xl text-gray-500 sm:leading-relaxed">
                            <strong className="text-bold">Matches for PM2024 have been released! </strong>{' '}
                            Thanks for waiting. It&#39;s time to log in and discover who are waiting
                            for you. Don&#39;t miss this opportunity to shoot your shot. Who knows,
                            this could be the start of something beautiful 💐!
                        </p>
                        {!error && currentCount && (
                            <p className="text-lg mt-4 mx-2 lg:max-w-lg lg:text-left text-center lg:text-xl text-gray-500 sm:leading-relaxed">
                                Over{' '}
                                <strong className="text-xl text-rose-400 font-extrabold lg:text-2xl">
                                    {currentCount}
                                </strong>{' '}
                                Cornellians getting matched this year!
                            </p>
                        )}
                        <div className="flex lg:contents">
                            <div className="mt-8 flex flex-wrap gap-4 text-center mx-auto">
                                <GoogleAuth login={!props.user} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="lg:mt-16 mt-0 mb-8 mx-auto hidden sm:block">
                    <SpotifyPlaylist />
                </div>
                <div className="mt-0 mb-8 mx-auto sm:hidden">
                    <SpotifyPlaylistNarrow />
                </div>
            </section>
            <Footer />
        </div>
    );
};

export async function getServerSideProps(context: any) {
    const session = await getSession(context);
    return {
        props: {
            user: session?.user || null,
        },
    };
}

export default Home;
