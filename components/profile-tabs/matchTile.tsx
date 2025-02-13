import React, { useState, useMemo } from 'react';
import { Review } from '../../types/users';
import Iframe from 'react-iframe';
import Image from 'next/image';

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

function MatchTile({ matchID, matchData, contact, matchFeedback, refresh, mutualCrush, superMatch, platonic }: any) {
    const matchEmoji = useMemo(() => {
        return emoji[Math.floor(Math.random() * emoji.length)];
    }, []);
    console.log(matchData);
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

    const mutualCrushGlowClass = mutualCrush ? 'mutual-crush-glow' : '';

    return (
        <div>
            {/* Front of Card  */}
            <div className="grid gap-8 mb-6 lg:mb-16 md:grid-cols-1 sm:flex" >
                <div
                    className={`flex flex-col bg-white rounded-lg border-2 border-pmblue-500 shadow-xl sm:w-full mx-auto lg:w-3/4 
                    shadow-[0px_4px_8px_rgba(0,0,0,0.25),18px_12px_0px_rgba(36,67,141,1)] ${mutualCrushGlowClass}`}
                >
                    <div className="relative pt-6 px-10 w-full z-10">
                        {superMatch && (platonic ? (
                            <div className="-z-10 absolute -top-[0px] -left-[0px] h-[220px] w-[220px] hidden lg:block pointer-events-none">
                                <Image src="/supermatchstampplatonic.svg" alt="pm logo" layout='fill' priority={true} draggable='false' />
                            </div>) :
                            (<div className="-z-10 absolute -top-[0px] -left-[0px] h-[220px] w-[220px] hidden lg:block pointer-events-none">
                                <Image src="/supermatchstamp.svg" alt="pm logo" layout='fill' priority={true} draggable='false' />
                            </div>))}
                        {mutualCrush && (
                            <div className="p-3 mb-4 rounded-lg bg-pink-100 border border-pink-200 text-pink-500">
                                <p>
                                    💌 There was no need for us to execute the algorithm, as your compatibility was
                                    unmistakable - indeed, a mutual crush. Now, what comes next is not for us to dictate -
                                    take the next step and go on a date ❤️‍🔥!
                                </p>
                            </div>
                        )}
                        <div className="flex justify-center items-center w-full">
                            <div className="ml-[94px] w-full">
                                <h3 className="text-4xl font-bold w-full text-pmred-500">
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
                        {/* <p className="text-gray-500">
                        📚 {matchData.profile.year.charAt(0).toUpperCase() + matchData.profile.year.slice(1)},{' '}
                        {matchData.profile.major.charAt(0).toUpperCase() + matchData.profile.major.slice(1)}
                    </p> */}
                        <div className="mt-4 flex justify-end items-center w-full font-work-sans text-xl font-semibold gap-8">
                            <div className="flex sm:contents">
                                <div className="mt-0 text-[170px]">{matchEmoji}</div>
                            </div>
                            <div className="text-pmblue-500 flex flex-col gap-2">
                                <div className="flex justify-start gap-2 flex-wrap text-lg/6">
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
                                <div className="font-normal text-base/5 italic text-left">
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
                                            <p className="ml-2 text-left">My green flag: <strong>{matchData.survey.greenflag}</strong> </p>
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
                                            <p className="ml-2 text-left">My guilty pleasure: <strong>{matchData.profile.guiltyPleasure}</strong> </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* 
                        <div className="w-1/2">{renderSongSection()}</div>
                         <MatchFeedback matchID={matchID} matchFeedback={matchFeedback} refresh={refresh} />
                        <p className="">Interests: {matchData.survey.interests.join(', ')}</p>
                        <p className="">Looking For: {matchData.profile.relationshipType}</p>*/}


                    </div>
                    {superMatch ? (platonic ? (<div className="w-full h-auto mt-4 z-10">
                        <Image src="/supermatchstripeplatonic.svg" alt="platonic super match" height={40} width={913} loading='lazy' draggable='false' />
                    </div>) :
                        (<div className="w-full h-auto mt-4 z-10">
                            <Image src="/supermatchstripe.svg" alt="super match" height={40} width={913} loading='lazy' draggable='false' />
                        </div>))
                        : (platonic ? (<hr className="z-10 mt-6 mb-2 border-pmorange-500 border-8"></hr>) :
                            (<hr className="z-10 mt-6 mb-2 border-pmpink2-500 border-8"></hr>))}

                    <div className="mx-6 relative rounded-md w-auto mb-5 h-auto mt-3 px-6 py-3 font-work-sans text-lg font-semibold text-pmblue-500 bg-pmpink-500">
                        <div className="absolute -top-[120px] -right-[20px] h-[150px] w-[220px] hidden lg:block pointer-events-none">
                            <Image src="/matchcardpmlogo.svg" alt="pm logo" layout='fill' priority={true} draggable='false' />
                        </div>
                        <p className="text-left">Interests: <span style={{ color: '#F4001F' }}>{matchData.survey.interests.join(', ')}</span></p>
                        <p className="text-left">Looking For: <span style={{ color: '#F4001F' }}>{matchData.profile.relationshipType}</span></p>
                    </div>
                </div>

            </div >

            {/* Back of Card  */}


            <div className="grid gap-8 mb-6 lg:mb-16 md:grid-cols-1 sm:flex">
                <div
                    className={`items-center rounded-lg shadow-xl mx-[2%] sm:flex sm:w-3/4 lg:2/3 lg:max-w-3xl sm:mx-auto ${mutualCrushGlowClass}`}
                >
                    <div className="flex sm:contents">
                    </div>
                    <div className="p-3 pt-1 sm:pl-6 sm:pr-10 sm:py-5 lg:pl-10">
                        {mutualCrush && (
                            <div className="p-3 mb-4 rounded-lg bg-pink-100 border border-pink-200 text-pink-500">
                                <p>
                                    💌 There was no need for us to execute the algorithm, as your compatibility was
                                    unmistakable - indeed, a mutual crush. Now, what comes next is not for us to dictate -
                                    take the next step and go on a date ❤️‍🔥!
                                </p>
                            </div>
                        )}

                        <hr className="h-0.5 my-2 bg-rose-200 border-0"></hr>
                        {/* <p className="text-gray-500">
                        📚 {matchData.profile.year.charAt(0).toUpperCase() + matchData.profile.year.slice(1)},{' '}
                        {matchData.profile.major.charAt(0).toUpperCase() + matchData.profile.major.slice(1)}
                    </p> */}
                        <p className="text-gray-500 ">Back of the Card***</p>


                        {contact.insta && (
                            <p className="mb-4 sm:mb-3 text-gray-500">
                                Instagram: <span className="font-bold">{contact.insta}</span>
                            </p>
                        )}
                        {contact.fb && (
                            <p className="mb-4 sm:mb-3 text-gray-500">
                                Facebook: <span className="font-bold">{contact.fb}</span>
                            </p>
                        )}
                        {contact.twitter && (
                            <p className="mb-4 sm:mb-3 text-gray-500">
                                Twitter: <span className="font-bold">{contact.twitter}</span>
                            </p>
                        )}
                        {contact.linkedin && (
                            <p className="mb-4 sm:mb-3 text-gray-500">
                                LinkedIn: <span className="font-bold">{contact.linkedin}</span>
                            </p>
                        )}
                        {contact.phone && (
                            <p className="mb-4 sm:mb-3 text-gray-500">
                                Phone Number: <span className="font-bold">{contact.phone}</span>
                            </p>
                        )}
                        {contact.snap && (
                            <p className="mb-4 sm:mb-3 text-gray-500">
                                Snapchat: <span className="font-bold">{contact.snap}</span>
                            </p>
                        )}
                        {contact.other && (
                            <p className="mb-4 sm:mb-3 text-gray-500">
                                Other: <span className="font-bold">{contact?.other}</span>
                            </p>
                        )}
                        {/* <div className="w-1/2">{renderSongSection()}</div> */}
                        {/* <MatchFeedback matchID={matchID} matchFeedback={matchFeedback} refresh={refresh} /> */}
                        <p className="text-gray-500 ">My Sense of Humor is: {matchData.survey.humor.join(', ')}</p>
                        <p className="text-gray-500 ">Where I would go on a first date {matchData.survey.date}</p>
                        <p className="text-gray-500 ">1 = Introvert, 10 = Extrovert, I'm a {matchData.survey.introvert}</p>
                        <p className="text-gray-500 ">A green flag to me in a relationship:  {matchData.survey.greenflag}</p>




                    </div>

                </div>

            </div >
        </div >

    );
}

export default MatchTile;
