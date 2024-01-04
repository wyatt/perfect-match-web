import { count } from 'console';
import React from 'react';
import Countdown, { CountdownRenderProps } from 'react-countdown';

function CountDown() {
    const countdownDate = new Date('February 1, 2024 15:00:00 EST');

    const renderer = ({ days, hours, minutes, seconds, completed }: CountdownRenderProps) => {
        if (completed) {
            return <span>It's Perfect Match Time!</span>;
        } else {
            return (
                <div>

                    <span>{days} days : </span>
                    <span>{hours} hours : </span>
                    <span>{minutes} minutes : </span>
                    <span>{seconds} seconds</span>


                </div>
            );
        }
    };

    return (
        <section className="bg-slate-100">
            <div
                className=" max-w-screen-xl lg:px-6 lg:flex-row mx-[5%] sm:mx-[10%] lg:mx-[15%] sm:py-16 lg:py-20 py-12 text-center
                "

            >
                <div className="font text-gray-500 sm:text-lg dark:text-gray-400">
                    <h2 className="text-xl text-gray-600 font-extrabold md:text-3xl mb-4">
                        Perfect Match Returns <span className="text-rose-400"> Feburary 2024 </span>
                    </h2>
                    <h2 className="mb-6 text-2xl sm:text-4xl font-extrabold text-rose-400">
                        <Countdown date={countdownDate} renderer={renderer} />
                    </h2>
                </div>


            </div>
        </section>

    );
}

export default CountDown;