import React, { useEffect, useRef, useState, useMemo } from 'react';
import { Review } from '../../types/users';
import Iframe from 'react-iframe';
import Button from '@/components/general/button';
import Popup from '@/components/general/popup';
import Image from 'next/image';
import Link from 'next/link';


const emoji = ['😃', '😆', '😄', '😆', '😊', '😎', '😳', '🤗'];
const color = [
    'text-rose-400',
    'text-orange-400',
    'text-yellow-400',
    'text-lime-500',
    'text-emerald-400',
    'text-sky-400',
    'text-purple-400',
];

const ratingOptions = [
    'My match ghosted me',
    'My match and I were not a physical match',
    'My match and I were not a personality match',
    'I did not reach out',
    'They did not reach out',
    'We have nothing in common, but they seem cool',
    'Different majors, but could be fun to learn something new',
    'Same college - gives us something to talk about!',
    'Their class year makes them an interesting match',
    'Major heart-eyes for their music taste',
    'Their three words are a vibe, we might click',
    'They seem fun, and their profile stands out',
    'Our majors are worlds apart, but opposites attract?',
    'Their song choice is my jam, we could be in tune',
    'Feels like we’d click, their profile just clicked with me',
    'The way they describe themselves is intriguing, wanna know more',
    'Everything aligns – their college, major, and those three words',
    'Their profile is all good vibes, can’t wait to chat',
    'They sound ambitious, and their taste in music is a bonus',
    'Just my type on paper – from their major to their song choice',
    'Their description’s got depth and their song choice rocks',
    'Their profile’s a perfect pitch – right college, right year, right tune',
    'We’re in the same class year, and their profile’s class apart',
    'Their college and major are impressive, and so is their profile',
    'It’s a match! Their profile’s got personality and brains',
    'A+ profile – love the academic flair and personal touch',
];

function MatchFeedback({ matchID, matchFeedback, refresh }: any) {
    const [review, setReview] = useState<Review>({
        overallRating: matchFeedback?.overallRating || '',
        topReasonForRating: matchFeedback?.topReasonForRating || '',
        metMatch: matchFeedback?.metMatch || false,
        numberOfDates: matchFeedback?.numberOfDates || 0,
        inRelationshipWithMatch: matchFeedback?.inRelationshipWithMatch || false,
        additionalComments: matchFeedback?.additionalComments || '',
    });
    const [isModalOpen, setIsModalOpen] = useState(false);

    const submitFeedback = async () => {
        await fetch(`/api/review/${matchID}`, {
            method: 'POST',
            body: JSON.stringify({ ...review, dateSubmitted: new Date() }),
        });
        refresh();
        setIsModalOpen(false);
    };
    return (
        <div>
            <button
                onClick={() => setIsModalOpen(true)}
                className="mt-1 mb-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
                Leave Feedback
            </button>
            ;
            {isModalOpen && (
                <div className="fixed top-0 left-0 w-full h-full bg-gray-500 bg-opacity-50 flex items-center justify-center">
                    <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
                        <h2 className="text-2xl mb-4 mt-2 font-extrabold text-rose-400">Match Feedback</h2>

                        {/* Feedback form */}
                        <div className="space-y-4 text-gray-500">
                            {/* Overall Rating */}
                            <div>
                                <label>
                                    On a scale of 1-10, is this match a Perfect Match? &#40;1-terrible match; 10-Perfect
                                    Match!&#41;
                                </label>
                                <input
                                    type="number"
                                    min="1"
                                    max="10"
                                    value={review.overallRating}
                                    onChange={(e) => setReview({ ...review, overallRating: Number(e.target.value) })}
                                    className="w-full bg-white p-2 mt-1 border rounded-md text-base leading-light focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                                />
                            </div>

                            {/* Top Reason for Rating */}
                            <div>
                                <label>Top Reason for Rating:</label>
                                <select
                                    autoFocus
                                    className="w-full bg-white border rounded-md overflow-hidden"
                                    value={review.topReasonForRating}
                                    onChange={(e) => setReview({ ...review, topReasonForRating: e.target.value })}
                                >
                                    {ratingOptions.map((option: string) => (
                                        <option key={option} value={option} className="bg-white">
                                            {option}
                                        </option>
                                    ))}
                                </select>
                            </div>

                            {/* Met Match */}
                            <div>
                                <label className="text-gray-600">Have you met this match?</label>
                                <input
                                    className="ml-1 cursor-pointer"
                                    type="checkbox"
                                    checked={review.metMatch}
                                    onChange={(e) => setReview({ ...review, metMatch: e.target.checked })}
                                />
                            </div>

                            {/* Number of Dates */}
                            <div>
                                <label className="text-gray-600">Number of Dates:</label>
                                <input
                                    className="bg-white ml-1 pl-1"
                                    type="number"
                                    value={review.numberOfDates}
                                    onChange={(e) => setReview({ ...review, numberOfDates: Number(e.target.value) })}
                                />
                            </div>

                            {/* In Relationship with Match */}
                            <div>
                                <label className="text-gray-600">In Relationship with Match:</label>
                                <input
                                    className="ml-1 cursor-pointer"
                                    type="checkbox"
                                    checked={review.inRelationshipWithMatch}
                                    onChange={(e) =>
                                        setReview({
                                            ...review,
                                            inRelationshipWithMatch: e.target.checked,
                                        })
                                    }
                                />
                            </div>

                            {/* Additional Comments */}
                            <div>
                                <label className="text-gray-600">Additional Comments:</label>
                                <textarea
                                    value={review.additionalComments}
                                    onChange={(e) => setReview({ ...review, additionalComments: e.target.value })}
                                    className="w-full p-2 mt-1 border rounded-md bg-white"
                                    rows={4}
                                />
                            </div>
                        </div>

                        {/* Buttons */}
                        <div className="mt-2 mb-2 flex justify-end space-x-4">
                            <button
                                onClick={() => setIsModalOpen(false)}
                                className="px-4 py-2 bg-gray-300 text-gray-700 rounded hover:bg-gray-400 transition"
                            >
                                Close
                            </button>
                            <button
                                onClick={submitFeedback}
                                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
                            >
                                Submit Feedback
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

function MatchTile({ matchID, matchData, contact, matchFeedback, refresh, mutualCrush, superMatch, platonic, matchPoked }: any) {
    const matchEmoji = useMemo(() => {
        return emoji[Math.floor(Math.random() * emoji.length)];
    }, []);

    // Function to render the play button or emoji for the hookupsong
    const renderSongSection = () => {
        if (matchData.survey.hookupsongURL) {
            const spotifyID = matchData.survey.hookupsongURL.url.split('/')[4];
            const spotifyURL = `https://open.spotify.com/embed/track/${spotifyID}?utm_source=generator&theme=0`;
            return (
                <div>
                    <p className="mb-3 sm:mb-3 text-gray-500">
                        <button
                            onClick={() => window.open(matchData.survey.hookupsongURL.url, '_blank')}
                            className="font-bold"
                        >
                            <Iframe
                                url={spotifyURL}
                                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                                loading="lazy"
                                styles={{
                                    border: 'none',
                                    maxHeight: '80px',
                                    borderRadius: '13px',
                                    backgroundColor: 'rgba(0, 0, 0, 0.1)',
                                    margin: '7px 0px',
                                    width: '320px',
                                }}
                            ></Iframe>
                        </button>
                    </p>
                </div>
            );
        }
    };

    const [showBack, setShowBack] = useState(false);
    const [showPopup, setShowPopup] = useState(false);
    const buttonRef = React.createRef<HTMLButtonElement>();
    const [poked, setPoked] = useState(matchPoked);

    const handleFlip = (): void => {
        const selection = window.getSelection();
        if (selection && selection.toString().length > 0) {
            return;
        }
        setShowPopup(false);
        setShowBack(!showBack);
    }

    const handlePop = (e: React.MouseEvent<HTMLButtonElement>): void => {
        e.stopPropagation();
        setShowPopup(!showPopup);
    }

    const handlePoke = (): void => {
        fetch(`/api/poke/`, {
            method: 'POST',
            body: JSON.stringify({ matchEmail: matchData.email }),
        }).then((res) => {
            if (!res.ok) alert('Failed to poke match. Please try again later or contact us for help.');
            else setPoked(true);
            setShowPopup(false);
        });
    }

    return (
        <div className={`relative sm:w-3/4 lg:w-2/3 lg:max-w-3xl mx-[2%] sm:mx-auto perspective-400
        transform-3d transition-transform duration-1000 ease-in-out
        ${showBack ? 'rotate-y-half' : 'rotate-y-0'}
        `} onClick={handleFlip}>
            {/* Front of Card  */}
            <div className={`h-full w-full absolute top-0 bottom-0 left-0 right-0
            shadow-[0px_4px_8px_0px_rgba(0,0,0,0.25),18px_12px_0px_0px_rgba(36,67,141,1)] 
            rounded-lg border-2 border-pmblue-500
            sm:flex backface-hidden 
            ${showBack ? 'pointer-events-none' : 'pointer-events-auto'}`}>
                <div
                    className={`flex flex-col bg-white rounded-lg mx-auto w-full h-full
                        ${mutualCrush ? 'animate-pulse-glow' : ''}
                    `}
                >
                    <div className="relative pt-6 px-5 md:px-10 w-full z-10 h-[90%] md:h-3/4">
                        {mutualCrush ? (<div className="-z-10 absolute -top-[0px] -left-[0px] h-[220px] w-[220px] block pointer-events-none">
                            <Image src="/mutualcrushstamp.svg" alt="pm logo" layout='fill' priority={true} draggable='false' />
                        </div>) :
                            (superMatch && (platonic ? (
                                <div className="-z-10 absolute -top-[0px] -left-[0px] h-[220px] w-[220px] block pointer-events-none">
                                    <Image src="/supermatchstampplatonic.svg" alt="pm logo" layout='fill' priority={true} draggable='false' />
                                </div>) :
                                (<div className="-z-10 absolute -top-[0px] -left-[0px] h-[220px] w-[220px] block pointer-events-none">
                                    <Image src="/supermatchstamp.svg" alt="pm logo" layout='fill' priority={true} draggable='false' />
                                </div>)))}
                        <div className="flex justify-end items-center w-full h-[12.5%] md:h-1/4">
                            <div className="flex justify-between w-full md:w-[65%]">
                                <div className="w-3/4">
                                    <h3 className="text-4xl font-bold w-full text-pmred-500">
                                        {matchData.profile.firstName}
                                    </h3>
                                </div>
                                {platonic ?
                                    (<div className="w-1/4 h-auto items-center">
                                        <Image src="/matchcardheartsplatonic.svg" alt="hearts" height={35} width={130} loading='lazy' draggable='false' />
                                    </div>) :
                                    (<div className="w-1/4 h-auto items-center">
                                        <Image src="/matchcardhearts.svg" alt="hearts" height={35} width={130} loading='lazy' draggable='false' />
                                    </div>)}
                            </div>
                        </div>
                        <div className="mt-4 flex h-3/4 min-h-fit justify-end items-center w-full font-work-sans text-xl font-semibold">
                            <div className="flex sm:contents w-1/2 md:w-1/4">
                                <div className="my-0 text-[120px] -ml-4 md:ml-0 md:my-[60px] md:text-[170px]">{matchEmoji}</div>
                            </div>
                            <div className="text-pmblue-500 flex flex-col gap-2 w-1/2 md:w-3/4">
                                <div className="flex justify-start gap-2 flex-wrap text-sm/3 md:text-lg/6">
                                    <div className="flex items-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="22" viewBox="0 0 22 27" fill="none">
                                            <path d="M10.6616 13.2886C11.3925 13.2886 12.0182 13.0283 12.5386 12.5079C13.0591 11.9874 13.3193 11.3617 13.3193 10.6309C13.3193 9.89999 13.0591 9.27432 12.5386 8.75385C12.0182 8.23338 11.3925 7.97314 10.6616 7.97314C9.93075 7.97314 9.30508 8.23338 8.78461 8.75385C8.26414 9.27432 8.00391 9.89999 8.00391 10.6309C8.00391 11.3617 8.26414 11.9874 8.78461 12.5079C9.30508 13.0283 9.93075 13.2886 10.6616 13.2886ZM10.6616 23.0557C13.3636 20.5751 15.368 18.3216 16.6747 16.2951C17.9814 14.2686 18.6348 12.4691 18.6348 10.8966C18.6348 8.48254 17.8651 6.50586 16.3259 4.9666C14.7866 3.42734 12.8985 2.65771 10.6616 2.65771C8.42471 2.65771 6.53663 3.42734 4.99737 4.9666C3.45811 6.50586 2.68848 8.48254 2.68848 10.8966C2.68848 12.4691 3.34183 14.2686 4.64854 16.2951C5.95525 18.3216 7.95961 20.5751 10.6616 23.0557ZM10.6616 26.5771C7.09585 23.5429 4.4326 20.7246 2.67187 18.1223C0.91113 15.5199 0.0307617 13.1114 0.0307617 10.8966C0.0307617 7.57449 1.09938 4.92785 3.23663 2.95671C5.37388 0.985569 7.84887 0 10.6616 0C13.4744 0 15.9494 0.985569 18.0866 2.95671C20.2239 4.92785 21.2925 7.57449 21.2925 10.8966C21.2925 13.1114 20.4121 15.5199 18.6514 18.1223C16.8906 20.7246 14.2274 23.5429 10.6616 26.5771Z" fill="#00438D" />
                                        </svg>
                                        <p className="ml-2 text-left">{matchData.profile.city} </p>
                                    </div>
                                    <div className="flex items-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 19 23" fill="none">
                                            <path d="M4.49941 22.2881C3.43608 22.2881 2.52858 21.9123 1.77691 21.1606C1.02525 20.4089 0.649414 19.5014 0.649414 18.4381V4.13809C0.649414 3.07475 1.02525 2.16725 1.77691 1.41559C2.52858 0.663919 3.43608 0.288086 4.49941 0.288086H18.2494V16.7881C17.7911 16.7881 17.4015 16.9485 17.0807 17.2693C16.7598 17.5902 16.5994 17.9798 16.5994 18.4381C16.5994 18.8964 16.7598 19.286 17.0807 19.6068C17.4015 19.9277 17.7911 20.0881 18.2494 20.0881V22.2881H4.49941ZM2.84941 14.9456C3.10608 14.8173 3.37191 14.7256 3.64691 14.6706C3.92191 14.6156 4.20608 14.5881 4.49941 14.5881H5.04941V2.48809H4.49941C4.04108 2.48809 3.6515 2.6485 3.33066 2.96934C3.00983 3.29017 2.84941 3.67975 2.84941 4.13809V14.9456ZM7.24941 14.5881H16.0494V2.48809H7.24941V14.5881ZM4.49941 20.0881H14.7569C14.6469 19.8314 14.5598 19.5702 14.4957 19.3043C14.4315 19.0385 14.3994 18.7498 14.3994 18.4381C14.3994 18.1448 14.4269 17.8606 14.4819 17.5856C14.5369 17.3106 14.6286 17.0448 14.7569 16.7881H4.49941C4.02275 16.7881 3.62858 16.9485 3.31691 17.2693C3.00525 17.5902 2.84941 17.9798 2.84941 18.4381C2.84941 18.9148 3.00525 19.3089 3.31691 19.6206C3.62858 19.9323 4.02275 20.0881 4.49941 20.0881Z" fill="#00438D" />
                                        </svg>
                                        <p className="ml-2 text-left">{matchData.profile.year}, {matchData.profile.major} </p>
                                    </div>
                                    <div className="flex items-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="19" viewBox="0 0 21 22" fill="none">
                                            <circle cx="8.47521" cy="8.70519" r="7.19444" stroke="#00438D" stroke-width="2.5" />
                                            <path d="M18.147 21.2C18.6352 21.6881 19.4267 21.6881 19.9148 21.2C20.403 20.7118 20.403 19.9204 19.9148 19.4322L18.147 21.2ZM12.6054 15.6583L18.147 21.2L19.9148 19.4322L14.3731 13.8905L12.6054 15.6583Z" fill="#00438D" />
                                        </svg>
                                        <p className="ml-2 text-left">{matchData.profile.relationshipType} </p>
                                    </div>
                                </div>
                                <div className="font-normal text-base/4 md:text-base/5 italic text-left">
                                    <p>
                                        &#8220; {matchData.profile.bio} &#8221;
                                    </p>
                                </div>
                                <div className="flex flex-col justify-start gap-1 text-base flex-wrap font-normal">
                                    <div className="flex items-top">
                                        <div className="mt-1">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="18" viewBox="0 0 28 21" fill="none">
                                                <g filter="url(#filter0_d_1266_695)">
                                                    <path d="M2.96586 18.6783C1.34485 18.671 0.0366807 17.351 0.0439821 15.7299L0.098063 3.72333C0.105364 2.10233 1.42537 0.794157 3.04638 0.801459L20.7786 0.881329C23.3344 0.892841 24.6554 3.93861 22.9173 5.81243L21.0504 7.82523C20.0141 8.94246 20.0052 10.6669 21.0298 11.7948L22.8963 13.8495C24.6135 15.7399 23.2644 18.7697 20.7105 18.7582L2.96586 18.6783Z" fill="#72E16E" />
                                                    <path d="M2.97023 17.7068C1.88577 17.7019 1.0106 16.8188 1.01549 15.7343L1.06957 3.72771C1.07445 2.64325 1.95754 1.76808 3.042 1.77297L20.7742 1.85284C22.484 1.86054 23.3678 3.89817 22.2051 5.15176L20.3381 7.16456C18.9588 8.65158 18.9469 10.9468 20.3107 12.448L21.0298 11.7948L20.3107 12.448L22.1772 14.5028C23.326 15.7674 22.4234 17.7944 20.7149 17.7867L2.97023 17.7068Z" stroke="#00438D" stroke-width="1.94303" />
                                                </g>
                                                <defs>
                                                    <filter id="filter0_d_1266_695" x="0.0439453" y="0.801758" width="25.6621" height="19.9561" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                                        <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                                        <feOffset dx="2" dy="2" />
                                                        <feComposite in2="hardAlpha" operator="out" />
                                                        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0.262975 0 0 0 0 0.554769 0 0 0 1 0" />
                                                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1266_695" />
                                                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1266_695" result="shape" />
                                                    </filter>
                                                </defs>
                                            </svg>
                                        </div>
                                        <div className="w-full">
                                            <p className="ml-2 text-left text-base/5 md:text-lg/6">My green flag: <strong>{matchData.survey.greenflag}</strong> </p>
                                        </div>
                                    </div>
                                    <div className="flex items-top">
                                        <div className="mt-1">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="18" viewBox="0 0 28 21" fill="none">
                                                <g filter="url(#filter0_d_1266_699)">
                                                    <path d="M2.96586 18.6783C1.34485 18.671 0.0366807 17.351 0.0439821 15.7299L0.098063 3.72333C0.105364 2.10233 1.42537 0.794157 3.04638 0.801459L20.7786 0.881329C23.3344 0.892841 24.6554 3.93861 22.9173 5.81243L21.0504 7.82523C20.0141 8.94246 20.0052 10.6669 21.0298 11.7948L22.8963 13.8495C24.6135 15.7399 23.2644 18.7697 20.7105 18.7582L2.96586 18.6783Z" fill="#BB5EED" />
                                                    <path d="M2.97023 17.7068C1.88577 17.7019 1.0106 16.8188 1.01549 15.7343L1.06957 3.72771C1.07445 2.64325 1.95754 1.76808 3.042 1.77297L20.7742 1.85284C22.484 1.86054 23.3678 3.89817 22.2051 5.15176L20.3381 7.16456C18.9588 8.65158 18.9469 10.9468 20.3107 12.448L21.0298 11.7948L20.3107 12.448L22.1772 14.5028C23.326 15.7674 22.4234 17.7944 20.7149 17.7867L2.97023 17.7068Z" stroke="#00438D" stroke-width="1.94303" />
                                                </g>
                                                <defs>
                                                    <filter id="filter0_d_1266_699" x="0.0439453" y="0.801758" width="25.6621" height="19.9561" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                                        <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                                        <feOffset dx="2" dy="2" />
                                                        <feComposite in2="hardAlpha" operator="out" />
                                                        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0.262975 0 0 0 0 0.554769 0 0 0 1 0" />
                                                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1266_699" />
                                                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1266_699" result="shape" />
                                                    </filter>
                                                </defs>
                                            </svg>
                                        </div>
                                        <div className="w-full">
                                            <p className="ml-2 text-left text-base/5 md:text-lg/6">My guilty pleasure: <strong>{matchData.profile.guiltyPleasure}</strong> </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {mutualCrush ? (<div className="w-full h-auto z-10">
                        <Image src="/mutualcrushstripe.svg" alt="mutual crush" height={40} width={913} loading='lazy' draggable='false' />
                    </div>) : (superMatch ? (platonic ? (<div className="w-full h-auto mt-4 z-10">
                        <Image src="/supermatchstripeplatonic.svg" alt="platonic super match" height={40} width={913} loading='lazy' draggable='false' />
                    </div>) :
                        (<div className="w-full h-auto mt-4 z-10">
                            <Image src="/supermatchstripe.svg" alt="super match" height={40} width={913} loading='lazy' draggable='false' />
                        </div>))
                        : (platonic ? (<hr className="z-10 mt-6 mb-2 border-pmorange-500 border-8"></hr>) :
                            (<hr className="z-10 mt-6 mb-2 border-pmpink2-500 border-8"></hr>)))}

                    <div className="mx-6 relative rounded-md w-auto mb-5 h-auto mt-3 px-6 py-3 font-work-sans text-base md:text-lg font-semibold text-pmblue-500 bg-pmpink-500">
                        <div className="absolute -top-[120px] -right-[20px] h-[150px] w-[220px] hidden lg:block pointer-events-none">
                            <Image src="/matchcardpmlogo.svg" alt="pm logo" layout='fill' priority={true} draggable='false' />
                        </div>
                        <p className="text-left">Interests: <span style={{ color: '#F4001F' }}>{matchData.survey.interests.join(', ')}</span></p>
                        <p className="text-left">Looking For: <span style={{ color: '#F4001F' }}>{matchData.profile.relationshipType}</span></p>
                    </div>
                </div>
            </div >

            {/* Back of Card  */}

            <div className={`h-full w-full absolute top-0 bottom-0 left-0 right-0
            shadow-[0px_4px_8px_0px_rgba(0,0,0,0.25),18px_12px_0px_0px_rgba(36,67,141,1)] 
            rounded-lg border-2 border-pmblue-500 rotate-y-half
            sm:flex backface-hidden 
            ${showBack ? 'pointer-events-auto' : 'pointer-events-none'}`}>
                <div
                    className={`flex flex-col bg-white rounded-lg mx-auto w-full h-full
                        ${mutualCrush ? 'animate-pulse-glow' : ''}
                    `}
                >
                    <div className=" pt-6 w-full z-10 h-1/4">
                        <div className="px-10">
                            {/* <p className="text-gray-500">
                        📚 {matchData.profile.year.charAt(0).toUpperCase() + matchData.profile.year.slice(1)},{' '}
                        {matchData.profile.major.charAt(0).toUpperCase() + matchData.profile.major.slice(1)}
                    </p> */}
                            <div className=" flex justify-center items-center w-full">
                                {platonic ?
                                    (<div className="w-fit h-auto items-center">
                                        <Image src="/matchcardheartsplatonic.svg" alt="hearts" height={35} width={130} loading='lazy' draggable='false' />
                                    </div>) :
                                    (<div className="w-fit h-auto items-center">
                                        <Image src="/matchcardhearts.svg" alt="hearts" height={35} width={130} loading='lazy' draggable='false' />
                                    </div>)}
                                <div className="w-full">
                                    <h3 className="text-4xl font-bold w-full text-pmred-500 text-center">
                                        {matchData.profile.firstName}
                                    </h3>
                                </div>
                                {platonic ?
                                    (<div className="w-fit h-auto items-center">
                                        <Image src="/matchcardheartsplatonic.svg" alt="hearts" height={35} width={130} loading='lazy' draggable='false' />
                                    </div>) :
                                    (<div className="w-fit h-auto items-center">
                                        <Image src="/matchcardhearts.svg" alt="hearts" height={35} width={130} loading='lazy' draggable='false' />
                                    </div>)}
                            </div>
                        </div>
                        <div className='mt-6'>
                            {platonic ? (<div className="w-full h-auto z-10">
                                <Image src="/pokestripeplatonic.svg" alt="poke to unlock" height={60} width={913} loading='lazy' draggable='false' />
                            </div>) :
                                (<div className="w-full h-auto z-10">
                                    <Image src="/pokestripe.svg" alt="poke to unlock" height={60} width={913} loading='lazy' draggable='false' />
                                </div>)
                            }
                        </div>
                    </div>

                    <div className=" pt-3 px-10 w-full z-10 h-3/4">
                        <div className="flex justify-start items-center w-full font-work-sans font-semibold gap-2 md:gap-8 h-1/2">
                            <div className="text-pmblue-500 flex flex-col gap-2 text-xl justify-start w-full">
                                {contact.insta && (<div className="flex items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 42 43" fill="none">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M27.4545 5.99414C29.73 5.99414 31.9122 6.89805 33.5211 8.50701C35.1301 10.116 36.034 12.2982 36.034 14.5736V28.3007C36.034 30.5762 35.1301 32.7584 33.5211 34.3673C31.9122 35.9763 29.73 36.8802 27.4545 36.8802H13.7274C11.452 36.8802 9.26978 35.9763 7.66082 34.3673C6.05185 32.7584 5.14795 30.5762 5.14795 28.3007V14.5736C5.14795 12.2982 6.05185 10.116 7.66082 8.50701C9.26978 6.89805 11.452 5.99414 13.7274 5.99414H27.4545ZM27.4545 9.42592H13.7274C12.3622 9.42592 11.0528 9.96827 10.0875 10.9336C9.12208 11.899 8.57973 13.2084 8.57973 14.5736V28.3007C8.57973 29.666 9.12208 30.9753 10.0875 31.9407C11.0528 32.9061 12.3622 33.4484 13.7274 33.4484H27.4545C28.8198 33.4484 30.1291 32.9061 31.0945 31.9407C32.0599 30.9753 32.6022 29.666 32.6022 28.3007V14.5736C32.6022 13.2084 32.0599 11.899 31.0945 10.9336C30.1291 9.96827 28.8198 9.42592 27.4545 9.42592ZM20.591 14.5736C22.4113 14.5736 24.1571 15.2967 25.4443 16.5839C26.7314 17.8711 27.4545 19.6168 27.4545 21.4372C27.4545 23.2575 26.7314 25.0033 25.4443 26.2904C24.1571 27.5776 22.4113 28.3007 20.591 28.3007C18.7706 28.3007 17.0249 27.5776 15.7377 26.2904C14.4505 25.0033 13.7274 23.2575 13.7274 21.4372C13.7274 19.6168 14.4505 17.8711 15.7377 16.5839C17.0249 15.2967 18.7706 14.5736 20.591 14.5736ZM20.591 18.0054C19.6808 18.0054 18.8079 18.3669 18.1643 19.0105C17.5208 19.6541 17.1592 20.527 17.1592 21.4372C17.1592 22.3473 17.5208 23.2202 18.1643 23.8638C18.8079 24.5074 19.6808 24.869 20.591 24.869C21.5011 24.869 22.374 24.5074 23.0176 23.8638C23.6612 23.2202 24.0228 22.3473 24.0228 21.4372C24.0228 20.527 23.6612 19.6541 23.0176 19.0105C22.374 18.3669 21.5011 18.0054 20.591 18.0054ZM28.3125 11.9998C28.7676 11.9998 29.204 12.1805 29.5258 12.5023C29.8476 12.8241 30.0284 13.2606 30.0284 13.7157C30.0284 14.1707 29.8476 14.6072 29.5258 14.929C29.204 15.2508 28.7676 15.4315 28.3125 15.4315C27.8574 15.4315 27.421 15.2508 27.0992 14.929C26.7774 14.6072 26.5966 14.1707 26.5966 13.7157C26.5966 13.2606 26.7774 12.8241 27.0992 12.5023C27.421 12.1805 27.8574 11.9998 28.3125 11.9998Z" fill="#00438D" />
                                    </svg>
                                    <p className="ml-2 text-left">Ins: @{contact.insta} </p>
                                </div>)}
                                {contact.phone && (<div className="flex items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="35" height="32" viewBox="0 0 42 42" fill="none">
                                        <path d="M13.7272 5.17578C14.5852 5.17578 18.017 12.8973 18.017 13.7552C18.017 15.4711 15.4431 17.187 14.5852 18.9029C13.7272 20.6188 15.4431 22.3347 17.159 24.0506C17.8282 24.7198 20.5908 27.4824 22.3067 26.6244C24.0226 25.7665 25.7385 23.1926 27.4544 23.1926C28.3123 23.1926 36.0338 26.6244 36.0338 27.4824C36.0338 30.9142 33.46 33.488 30.8862 34.3459C28.3123 35.2039 26.5964 35.2039 23.1646 34.3459C19.7329 33.488 17.159 32.6301 12.8693 28.3403C8.57957 24.0506 7.72162 21.4768 6.86367 18.045C6.00573 14.6132 6.00573 12.8973 6.86367 10.3235C7.72162 7.74962 10.2955 5.17578 13.7272 5.17578Z" stroke="#00438D" stroke-width="3.43178" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M24.0225 12.1074C25.1549 12.6393 26.1845 13.36 27.0424 14.2351C27.8832 15.0759 28.5867 16.0883 29.1015 17.1865" stroke="#00438D" stroke-width="3.43178" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M25.7383 5.60449C28.1577 6.23937 30.3197 7.49197 32.0356 9.20787C33.7343 10.9238 34.9869 13.0686 35.6047 15.4709" stroke="#00438D" stroke-width="3.43178" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                    <p className="ml-2 text-left">Tel: {contact.phone} </p>
                                </div>)}
                                {contact.fb && (<div className="flex items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="19" viewBox="0 0 21 22" fill="none">
                                        <circle cx="8.47521" cy="8.70519" r="7.19444" stroke="#00438D" stroke-width="2.5" />
                                        <path d="M18.147 21.2C18.6352 21.6881 19.4267 21.6881 19.9148 21.2C20.403 20.7118 20.403 19.9204 19.9148 19.4322L18.147 21.2ZM12.6054 15.6583L18.147 21.2L19.9148 19.4322L14.3731 13.8905L12.6054 15.6583Z" fill="#00438D" />
                                    </svg>
                                    <p className="ml-2 text-left">Fbk: {contact.fb} </p>
                                </div>)}
                                {contact.twitter && (<div className="flex items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="19" viewBox="0 0 21 22" fill="none">
                                        <circle cx="8.47521" cy="8.70519" r="7.19444" stroke="#00438D" stroke-width="2.5" />
                                        <path d="M18.147 21.2C18.6352 21.6881 19.4267 21.6881 19.9148 21.2C20.403 20.7118 20.403 19.9204 19.9148 19.4322L18.147 21.2ZM12.6054 15.6583L18.147 21.2L19.9148 19.4322L14.3731 13.8905L12.6054 15.6583Z" fill="#00438D" />
                                    </svg>
                                    <p className="ml-2 text-left">Twt: {contact.twitter} </p>
                                </div>)}
                                {contact.linkedin && (<div className="flex items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="19" viewBox="0 0 21 22" fill="none">
                                        <circle cx="8.47521" cy="8.70519" r="7.19444" stroke="#00438D" stroke-width="2.5" />
                                        <path d="M18.147 21.2C18.6352 21.6881 19.4267 21.6881 19.9148 21.2C20.403 20.7118 20.403 19.9204 19.9148 19.4322L18.147 21.2ZM12.6054 15.6583L18.147 21.2L19.9148 19.4322L14.3731 13.8905L12.6054 15.6583Z" fill="#00438D" />
                                    </svg>
                                    <p className="ml-2 text-left">L: {contact.linkedin} </p>
                                </div>)}
                                {contact.snap && (<div className="flex items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="19" viewBox="0 0 21 22" fill="none">
                                        <circle cx="8.47521" cy="8.70519" r="7.19444" stroke="#00438D" stroke-width="2.5" />
                                        <path d="M18.147 21.2C18.6352 21.6881 19.4267 21.6881 19.9148 21.2C20.403 20.7118 20.403 19.9204 19.9148 19.4322L18.147 21.2ZM12.6054 15.6583L18.147 21.2L19.9148 19.4322L14.3731 13.8905L12.6054 15.6583Z" fill="#00438D" />
                                    </svg>
                                    <p className="ml-2 text-left">Snp: {contact.snap} </p>
                                </div>)}

                                {contact.other && (<div className="flex items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="19" viewBox="0 0 21 22" fill="none">
                                        <circle cx="8.47521" cy="8.70519" r="7.19444" stroke="#00438D" stroke-width="2.5" />
                                        <path d="M18.147 21.2C18.6352 21.6881 19.4267 21.6881 19.9148 21.2C20.403 20.7118 20.403 19.9204 19.9148 19.4322L18.147 21.2ZM12.6054 15.6583L18.147 21.2L19.9148 19.4322L14.3731 13.8905L12.6054 15.6583Z" fill="#00438D" />
                                    </svg>
                                    <p className="ml-2 text-left">Other: {contact.other} </p>
                                </div>)}
                            </div>
                            <div className=" justify-center font-work-sans text-lg font-semibold items-center min-w-[250px]">
                                <div className='flex flex-col items-center justify-center'>
                                    <Button bold={true} mt={0} onClick={handlePop} ref={buttonRef}>See More!</Button>
                                    {showPopup && (
                                        <Popup triggerRef={buttonRef} placement="top" open={showPopup} arrowHeight={35} arrowWidth={30}>
                                            <div className='max-w-[40vw] lg:max-w-[30vw] min-w-64 font-work-sans text-center text-sm md:text-base
                                            bg-pmblue-500 border border-[#ccc] p-3 rounded-3xl shadow 
                                             '>
                                                <div className='flex flex-col items-center justify-center mx-6 my-3'>
                                                    <div className='font-bold text-md md:text-xl mb-5 drop-shadow-[6px_6px_0_[pmblue-500]]'>👉 WHAT&apos;S A POKE 👈</div>
                                                    <div>By poking your match, we’ll send an email letting them know you’re curious about them 👀
                                                        <br />
                                                        <br />
                                                        In return, you unlock the locked info about your match! Note this is not anonymous,
                                                        meaning if you chose to poke a match, they will know which match poked them.
                                                    </div>
                                                    <div className='grid grid-cols-1 md:grid-cols-2 gap-0 md:gap-8 justify-center mt-5'>
                                                        <Button bold={true} mt={5} onClick={handlePoke}>Poke My Match!</Button>
                                                        <Button bold={true} mt={5} >Go Back</Button>
                                                    </div>
                                                </div>
                                            </div>
                                        </Popup>
                                    )}
                                </div>
                                <div>
                                    <p className="mt-2 text-pmpink2-500 text-xs text-center">*note: poking is <u>not</u> anonymous</p>
                                </div>
                            </div>
                        </div>
                        <div className="relative rounded-md w-auto mb-5 h-auto mt-3 px-6 py-3 font-work-sans text-sm md:text-lg font-semibold text-pmblue-500 bg-pmpink-500 ">
                            {!poked && <div className="absolute top-0 right-[40px] h-[100px] w-[90px] hidden lg:block pointer-events-none">
                                <Image src="/pokelock.svg" alt="pm logo" layout='fill' priority={true} draggable='false' />
                            </div>}
                            <p className="text-left">My Sense of Humor is: {poked ? (<span style={{ color: '#F4001F' }}>{matchData.survey.humor.join(', ')}</span>) : (<span className="select-none" style={{ color: '#F4001F', filter: 'blur(5px)' }}>{matchData.survey.humor.join(', ')}</span>)}</p>
                            <p className="text-left">Where I would go on a first date: {poked ? (<span style={{ color: '#F4001F' }}>{matchData.survey.date}</span>) : (<span className="select-none" style={{ color: '#F4001F', filter: 'blur(5px)' }}>{matchData.survey.date}</span>)}</p>
                            <p className="text-left">1 = Introvert, 10 = Extrovert, I&apos;m a: {poked ? (<span style={{ color: '#F4001F' }}>{matchData.survey.introvert}</span>) : (<span className="select-none" style={{ color: '#F4001F', filter: 'blur(5px)' }}>{matchData.survey.introvert}</span>)}</p>
                            <p className="text-left">A green flag to me in a relationship: {poked ? (<span style={{ color: '#F4001F' }}>{matchData.survey.greenflag}</span>) : (<span className="select-none" style={{ color: '#F4001F', filter: 'blur(5px)' }}>{matchData.survey.greenflag}</span>)}</p>
                        </div>
                    </div>
                </div>
            </div >
        </div >

    );
}

export default MatchTile;
