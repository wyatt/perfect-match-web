import { count } from 'console';
import React from 'react';
import Countdown, { CountdownRenderProps } from 'react-countdown';
import Image from 'next/image';
import { useState, useEffect } from 'react';

const CountDown: React.FC = () => {
    const countdownDate = new Date('Feb 3, 2025 17:00:00 EST');

    type RemainingTime = {
        days: number;
        hours: number;
        minutes: number;
        seconds: number;
        total: number
    };

    const calculateTimeRemaining = (launchDate: Date): RemainingTime => {
        // Calculate the time remaining (in milliseconds) between the launch date and start date
        const time = launchDate.getTime() - new Date().getTime();
        const gap = time < 0 ? 0 : time;
        // Calculate days, hours, and minutes remaining
        const days = Math.floor(gap / (1000 * 60 * 60 * 24));
        const hours = Math.floor((gap / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((gap / (1000 * 60)) % 60);
        const seconds = Math.floor((gap / 1000) % 60);
        return { days, hours, minutes, seconds, total: gap };
    };

    const [timeRemaining, setTimeRemaining] = useState<RemainingTime>(calculateTimeRemaining(countdownDate));
    const [completed, setCompleted] = useState(false);
    const { days, hours, minutes, seconds } = timeRemaining;
    const [easterEggTextDisplay, setEasterEggTextDisplay] = useState(false);

    function easterEggTextChange() {
        setEasterEggTextDisplay(true);
        setTimeout(() => {
            setEasterEggTextDisplay(false);
        }, 3000);
    }

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeRemaining(calculateTimeRemaining(countdownDate));
            if (timeRemaining.total <= 1) {
                setCompleted(true);
                clearInterval(timer);
            }
        }, 1000);
        return () => clearInterval(timer);
    }, []);

    return (
        <div className='z-10 max-w-[85vw] w-full min-w-fit h-full min-h-fit relative'>
            <div className="w-full relative h-2 -z-10">
                {/* Alarm Top buttons */}
                <div className='absolute mx-[5%] my-[0.2%] bg-red-600 w-[10%] h-3 border-2 border-blue-900 rounded-xl' />
                <div className='absolute mx-[18%] my-[0.2%] bg-red-600 w-[10%] h-3 border-2 border-blue-900 rounded-xl' />
                <div className='absolute mx-[31%] my-[0.2%] bg-red-600 w-[20%] h-3 border-2 border-blue-900 rounded-xl' />
            </div>
            <div className="bg-[#FBE7F3] h-full rounded-lg p-5 border-blue-900 border-4 z-10 min-h-fit">
                <div className="flex flex-grid w-full h-full">
                    <div className="flex items-center justify-center h-full w-[90%] bg-[#00162F] text-white text-3xl rounded-lg lg:p-2">
                        <div className="flex items-center text-3xl sm:text-4xl space-x-2 px-4 md:px-2 font-press-start lg:text-6xl w-full justify-center">
                            <div className="flex flex-col items-center">
                                <span className={completed ? 'animate-flash' : ''}>{easterEggTextDisplay ? '0' : (days > 0 ? days : hours)}</span>
                                <span className="text-xs sm:text-sm lg:text-base tracking-wider">{easterEggTextDisplay ? 'I' : (days > 0 ? 'days' : 'hours')}</span>
                            </div>
                            <div className="flex flex-col items-center text-center w-fit">
                                <span className='text-lg lg:text-3xl'>:</span>
                            </div>
                            <div className="flex flex-col items-center">
                                <span className={completed ? 'animate-flash' : ''}>{easterEggTextDisplay ? '-' : (days > 0 ? hours : minutes)}</span>
                                <span className="text-xs sm:text-sm lg:text-base tracking-wider">{easterEggTextDisplay ? "Can't" : (days > 0 ? 'hours' : 'minutes')}</span>
                            </div>
                            <div className="flex flex-col items-center text-center w-fit">
                                <span className='text-lg lg:text-3xl'>:</span>
                            </div>
                            <div className="flex flex-col items-center">
                                <span className={completed ? 'animate-flash' : ''}>{easterEggTextDisplay ? '0' : (days > 0 ? minutes : seconds)}</span>
                                <span className="text-xs sm:text-sm lg:text-base tracking-wider">{easterEggTextDisplay ? "Wait" : (days > 0 ? 'minutes' : 'seconds')}</span>
                            </div>
                        </div>
                    </div>
                    <div className='w-[10%] relative flex-row'>
                        <div className='h-1/2'>
                            <div className='absolute top-0 -right-[5%]'>
                                <div className='grid grid-cols-2 gap-2'>
                                    {Array(6).fill(0).map((_, i) => (
                                        <div key={i} className='w-2 h-2 rounded-full bg-pmblue-500' />
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div className="my-1 flex flex-col space-y-2 justify-center items-center">
                            <button
                                className="
                                w-6 h-6 rounded-full bg-red-500 border-2 border-blue-600 font-semibold
                                shadow-[4px_4px_0px_0px_rgba(59,130,246,0.5)] transition-all
                                hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_rgba(59,130,246,0.5)]
                                active:translate-x-[4px] active:translate-y-[4px] active:shadow-none"
                                onClick={easterEggTextChange}
                            ></button>
                            <button
                                className="
                                w-6 h-6 rounded-full bg-blue-500 border-2 border-blue-600 font-semibold
                                shadow-[4px_4px_0px_0px_rgba(59,130,246,0.5)] transition-all
                                hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_rgba(59,130,246,0.5)]
                                active:translate-x-[4px] active:translate-y-[4px] active:shadow-none"
                            ></button>
                            <button
                                className="
                                w-6 h-6 rounded-full bg-red-500 border-2 border-blue-600 font-semibold
                                shadow-[4px_4px_0px_0px_rgba(59,130,246,0.5)] transition-all
                                hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_rgba(59,130,246,0.5)]
                                active:translate-x-[4px] active:translate-y-[4px] active:shadow-none"
                            ></button>
                        </div>
                    </div>
                </div>
            </div>
            <div className='bg-pmred-500 w-full h-full -z-20 absolute top-[6%] left-[4%] rounded-lg' />
            <div className='absolute -top-[60%] w-full h-[85%] flex justify-end'><Image src='/scream_bubble.svg' alt='scream bubble' height={200} width={300} priority={true} draggable='false' /></div>
        </div>
    );
}

export default CountDown;
