import styles from '@/styles/Home.module.css';
import Head from 'next/head';
import { Footer } from '@/components/footer';
import { Header } from '@/components/header';
import Link from 'next/link';
import Script from 'next/script';
import Image from 'next/image';
import Stats2023 from '@/components/analytics/2023Analytics';
import Stats2022 from '@/components/analytics/2022Analytics';
import { Stats } from 'fs';
import { useState } from 'react';

const Statistics: any = (props: any) => {
    const [year, setYear] = useState(2023);

    return (
        <div>
            <Head>
                <title>Statistics</title>
            </Head>
            <Header />
            <div className="absolute left-[-3vw] top-24 h-screen w-[18vw] hidden lg:block z-20 pointer-events-none">
                <Image src="/left_hearts.svg" alt="left hearts" layout='fill' priority={true} draggable='false' />
            </div>
            <div className="absolute right-0 top-0 translate-y-[200px] h-screen w-[8vw] hidden lg:block z-20 pointer-events-none">
                <Image src="/right_hearts.svg" alt="right hearts" layout='fill' priority={true} draggable='false' />
            </div>
            <div className="bg-pmpink-500 sm:py-14 lg:py-10 sm:pr-4 pt-6">
                <section
                    className="sm:mr-0"
                    style={{
                        // paddingBottom: '10px',
                        // paddingTop: '10px',
                        height: '100%',
                        backgroundSize: 'contain',
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: 'right top',
                        // backgroundImage: 'url("valentine.png")',
                    }}
                >
                    <div className="pb-6 pt-24 sm:pt-32 lg:pt-32 lg:pb-36">
                        <div className="max-w-xl text-center sm:text-left sm:ml-[15%] mt-8 sm:mt-0 opacity-100">
                            <h1 className="text-4xl sm:text-3xl font-dela-gothic text-pmblue-500 lg:text-5xl opacity-100">
                                Can Love be Visualized?
                            </h1>
                            <p className="font:semibold mt-4 mx-[10%] sm:mx-0 max-w-lg sm:text-lg text-pmblue-500 sm:leading-relaxed">
                                <strong>
                                    Perhaps not without daydreaming about your crush, but your survey responses can!
                                </strong>{' '}
                                Join us on this journey to learn about some of the preferences and habits we&apos;ve
                                discovered from several years of survey responses!
                            </p>
                        </div>
                    </div>
                </section>
            </div>
            <div className="bg-pmpink-500">
                <div className="w-full bg-pmpink-500"></div>
                <div className="left-0 w-full overflow-hidden">
                    <svg className="relative block w-full h-[60px]" // Adjust height as needed
                        viewBox="0 0 1200 120"
                        preserveAspectRatio="none">
                        <path
                            d="M0,60 C16.67,40 33.33,40 50,60 C66.67,80 83.33,80 100,60 C116.67,40 133.33,40 150,60 C166.67,80 183.33,80 200,60 C216.67,40 233.33,40 250,60 C266.67,80 283.33,80 300,60 C316.67,40 333.33,40 350,60 C366.67,80 383.33,80 400,60 C416.67,40 433.33,40 450,60 C466.67,80 483.33,80 500,60 C516.67,40 533.33,40 550,60 C566.67,80 583.33,80 600,60 C616.67,40 633.33,40 650,60 C666.67,80 683.33,80 700,60 C716.67,40 733.33,40 750,60 C766.67,80 783.33,80 800,60 C816.67,40 833.33,40 850,60 C866.67,80 883.33,80 900,60 C916.67,40 933.33,40 950,60 C966.67,80 983.33,80 1000,60 C1016.67,40 1033.33,40 1050,60 C1066.67,80 1083.33,80 1100,60 C1116.67,40 1133.33,40 1150,60 C1166.67,80 1183.33,80 1200,60 V120 H0 Z"
                            fill="#f7a4af"
                        ></path>
                    </svg>
                </div>
            </div>
            <div>
                <div className="w-full flex flex-col sm:flex-row items-center sm:justify-between text-white bg-pmpink2-500 sm:py-12 py-8 px-64">

                    <p className="text-center sm:text-left mt-0 sm:text-3xl text-pmblue-500 font-bold mx-[5%] sm:mx-0 max-w-lg">
                        Travel back in time to explore statistics from past years!
                    </p>
                    <div className="flex sm:mt-0 mt-2 gap-4">
                        <button
                            className="text-lg px-8 py-2 m-2 rounded-full bg-white text-red-500 border-2 border-pmblue-500 font-bold shadow-[4px_4px_0px_0px_rgba(59,130,246,0.5)] transition-all hover:translate-x-[2px] hover:translate-y-[2px]
                                    hover:shadow-[2px_2px_0px_0px_rgba(59,130,246,0.5)] active:translate-x-[4px] active:translate-y-[4px] active:shadow-none"
                            onClick={() => setYear(2022)}
                        >
                            2022
                        </button>
                        <button
                            className="text-lg px-8 py-2 m-2 rounded-full bg-white text-red-500 border-2 border-pmblue-500 font-bold shadow-[4px_4px_0px_0px_rgba(59,130,246,0.5)] transition-all hover:translate-x-[2px] hover:translate-y-[2px]
                                    hover:shadow-[2px_2px_0px_0px_rgba(59,130,246,0.5)] active:translate-x-[4px] active:translate-y-[4px] active:shadow-none"
                            onClick={() => setYear(2023)}
                        >
                            2023
                        </button>

                        {/* <button
                            className="text-lg bg-rose-400 hover:bg-rose-300 text-white font-bold py-2 px-8 rounded-full m-2"
                            onClick={() => setYear(2024)}
                        >
                            2024
                        </button> */}
                    </div>

                </div>
                <div className="bg-pmpink-500">
                    <div className="w-full bg-pmpink-500"></div>
                    <div className="left-0 w-full overflow-hidden">
                        <svg className="relative block w-full h-[60px] scale-y-[-1]" // Adjust height as needed
                            viewBox="0 0 1200 120"
                            preserveAspectRatio="none">
                            <path
                                d="M0,60 C16.67,40 33.33,40 50,60 C66.67,80 83.33,80 100,60 C116.67,40 133.33,40 150,60 C166.67,80 183.33,80 200,60 C216.67,40 233.33,40 250,60 C266.67,80 283.33,80 300,60 C316.67,40 333.33,40 350,60 C366.67,80 383.33,80 400,60 C416.67,40 433.33,40 450,60 C466.67,80 483.33,80 500,60 C516.67,40 533.33,40 550,60 C566.67,80 583.33,80 600,60 C616.67,40 633.33,40 650,60 C666.67,80 683.33,80 700,60 C716.67,40 733.33,40 750,60 C766.67,80 783.33,80 800,60 C816.67,40 833.33,40 850,60 C866.67,80 883.33,80 900,60 C916.67,40 933.33,40 950,60 C966.67,80 983.33,80 1000,60 C1016.67,40 1033.33,40 1050,60 C1066.67,80 1083.33,80 1100,60 C1116.67,40 1133.33,40 1150,60 C1166.67,80 1183.33,80 1200,60 V120 H0 Z"
                                fill="#f7a4af"
                            ></path>
                        </svg>
                    </div>
                </div>

                {year === 2022 ? <Stats2022 /> : <Stats2023 />}
                {/* {year === 2022 ? <Stats2022 /> : year === 2023 ? <Stats2023 /> : <Stats2024 />} */}

            </div>


            <Footer />
        </div>
    );
};

export async function getStaticProps() {
    return {
        props: {
            title: 'Statistics',
        },
    };
}

export default Statistics;
