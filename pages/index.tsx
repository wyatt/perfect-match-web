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
    const { data: currentCount, error } = useSWR('/api/users/count', fetcher, {
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


            <div className="bg-pmpink-500">
                <div className="w-full bg-pmpink-500"></div>
                <div className="left-0 w-full overflow-hidden">
                    <svg className="relative block w-full h-[60px]" // Adjust height as needed
                        viewBox="0 0 1200 120"
                        preserveAspectRatio="none">
                        <path
                            d="M0,60 C40,40 80,80 120,60 C160,40 200,80 240,60 C280,40 320,80 360,60 C400,40 440,80 480,60 C520,40 560,80 600,60 C640,40 680,80 720,60 C760,40 800,80 840,60 C880,40 920,80 960,60 C1000,40 1040,80 1080,60 C1120,40 1160,80 1200,60 V120 H0 Z"
                            fill="#f7a4af"
                        ></path>
                    </svg>
                </div>
            </div>

            <section className="bg-pmpink2-500 flex flex-col pr-0 lg:pr-32 xl:pr-40 xl:pl-8 lg:flex-row">

                <div className="lg:mt-16 mt-0 mb-8 mx-auto hidden sm:block">
                    <Image src="/examplecountdown.png" width={500} height={500} ></Image>

                </div>
                <div className="pb-6 pt-8 sm:pt-20 lg:pt-44 lg:pb-36 lg:w-2/3 lg:pr-3">
                    <div className="mx-2 max-w-xl text-center lg:text-left sm:mx-auto lg:ml-[17%] mt-8 sm:mt-0 opacity-100">
                        <div className="dela-gothic-one">
                            <h1 className="text-4xl text-pmblue-500 font-extrabold font-family-dela sm:text-3xl lg:text-4xl">
                                <strong>
                                    We know you&#39;ve</strong>
                            </h1>

                            <h1 className="text-3xl text-pmblue-500 font-extrabold sm:text-3xl lg:text-4xl">

                                <strong>been waiting</strong>

                            </h1>
                        </div>
                        <div className='work-sans'>
                            <p className="text-lg text-pmblue-500 mt-4 lg:max-w-lg lg:text-left text-center lg:text-xl text-gray-500 sm:leading-relaxed">
                                Perfect Match opens <strong> February 3rd</strong>
                            </p>
                            <p className="text-lg mt-1 text-pmblue-500 lg:max-w-lg lg:text-left text-center lg:text-xl text-gray-500 sm:leading-relaxed">
                                We&#39;ll see you back then ;&#41; </p>


                        </div>
                    </div>

                </div>






            </section >
            <div className="bg-pmpink2-500">
                <div className="w-full bg-pmpink-500"></div>
                <div className="left-0 w-full overflow-hidden">
                    <svg className="relative block w-full h-[60px]" // Adjust height as needed
                        viewBox="0 0 1200 120"
                        preserveAspectRatio="none">
                        <path
                            d="M0,60 C40,40 80,80 120,60 C160,40 200,80 240,60 C280,40 320,80 360,60 C400,40 440,80 480,60 C520,40 560,80 600,60 C640,40 680,80 720,60 C760,40 800,80 840,60 C880,40 920,80 960,60 C1000,40 1040,80 1080,60 C1120,40 1160,80 1200,60 V120 H0 Z"
                            fill="#fce5f3"
                        ></path>
                    </svg>
                </div>
            </div>
            <section className="bg-pmpink-500 flex flex-col pr-0 lg:pr-32 xl:pr-40 xl:pl-8 lg:flex-row">

                <div className="pb-6 pt-8 sm:pt-20 lg:pt-44 lg:pb-36 lg:w-2/3 lg:pr-3">
                    <div className="mx-2 max-w-xl text-center lg:text-left sm:mx-auto lg:ml-[17%] mt-8 sm:mt-0 opacity-100">
                        <div className="dela-gothic-one">
                            <h1 className="text-3xl text-pmred-500 font-extrabold sm:text-3xl lg:text-4xl">
                                Captivating heats since 2020

                            </h1>
                        </div>
                        <div className='work-sans'>
                            <p className="text-lg text-pmred-500 mt-6 lg:max-w-lg lg:text-left text-center lg:text-xl text-gray-500 sm:leading-relaxed">
                                Perfect Match is Cornell&#39;s very own <strong>match making survey</strong> that pairs students with potential partners with our comprehensive algorithm.
                            </p>
                            <p className="text-lg mt-6 text-pmred-500 lg:max-w-lg lg:text-left text-center lg:text-xl text-gray-500 sm:leading-relaxed">
                                Last year we matched over <strong>5,000 students!</strong> Don&#39;t believe us? Check out our statistics. </p>

                            <Link href="/statistics">
                                <button
                                    className="
                                    px-6 
                                    py-2 
                                    mt-6
                                    rounded-full 
                                    bg-white 
                                    text-red-500 
                                    border-2 
                                    border-blue-500 
                                    font-medium
                                    shadow-[4px_4px_0px_0px_rgba(59,130,246,0.5)]
                                    transition-all
                                    hover:translate-x-[2px]
                                    hover:translate-y-[2px]
                                    hover:shadow-[2px_2px_0px_0px_rgba(59,130,246,0.5)]
                                    active:translate-x-[4px]
                                    active:translate-y-[4px]
                                    active:shadow-none
                                "
                                >
                                    last years stats
                                </button>
                            </Link>
                        </div>

                    </div>
                </div>

            </section >
            <div className="bg-pmpink-500">
                <div className="w-full bg-pmpink-500"></div>
                <div className="left-0 w-full overflow-hidden">
                    <svg className="relative block w-full h-[60px]" // Adjust height as needed
                        viewBox="0 0 1200 120"
                        preserveAspectRatio="none">
                        <path
                            d="M0,60 C40,40 80,80 120,60 C160,40 200,80 240,60 C280,40 320,80 360,60 C400,40 440,80 480,60 C520,40 560,80 600,60 C640,40 680,80 720,60 C760,40 800,80 840,60 C880,40 920,80 960,60 C1000,40 1040,80 1080,60 C1120,40 1160,80 1200,60 V120 H0 Z"
                            fill="#f7a4af"
                        ></path>
                    </svg>
                </div>
            </div>

            <Footer />
        </div >
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
