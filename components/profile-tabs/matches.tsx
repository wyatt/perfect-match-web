import MatchTile from './matchTile';
import styles from '/styles/Matches.module.css';
import React from 'react';
import Iframe from 'react-iframe';

function Matches({ matches, userId, refresh, matchCount }: any) {
    const [visible, setVisible] = React.useState(false);
    console.log('matches', matchCount);
    const showNote = matchCount > 8 ? "" : "hidden"
    return (
        <div>
            <div className={`mx-[2%] sm:mx-[15%] lg:mx-[22%] mx-auto ${showNote}`}>
                <p className="text-gray-500 text-lg text-center mt-4 sm:mb-20 mb-12 font-bold">
                ❗❗ You were a popular choice according to the algorithm - 
                keep your eye out for some surprise matches reaching out 🤩❗❗
                </p>
            </div>
            {matches.map((match: any, index: number) => {
                const matchData = match.partnerAId._id === userId ? match.partnerBId : match.partnerAId;
                const matchFeedback = match.partnerAId._id === userId ? match.partnerAFeedback : match.partnerBFeedback;
                const mutualCrush = match?.mutual || false;
                return (
                    <MatchTile
                        key={match._id}
                        matchID={match._id}
                        matchData={matchData}
                        contact={matchData.survey.contact}
                        matchFeedback={matchFeedback}
                        refresh={refresh}
                        mutualCrush={mutualCrush}
                    />
                );
            })}
            <div className="grid gap-8 mb-6 lg:mb-16 md:grid-cols-1 sm:flex">
            <div
                className="items-center rounded-lg shadow-xl mx-[2%] sm:flex sm:w-3/4 lg:2/3 lg:max-w-3xl sm:mx-auto ${mutualCrushGlowClass}"
            >
                <div className="flex sm:contents">
                    <div className="text-8xl mt-4 sm:mt-0 sm:text-9xl mx-auto sm:ml-8 sm:mr-0">💖</div>
                </div>
                <div className="p-3 pt-1 sm:pl-6 sm:pr-10 sm:py-5 lg:pl-10">
                    <h3 className="text-3xl font-bold font-botracking-tight text-gray-500">
                        <span className="text-rose-400">
                            Perfect Match
                        </span>
                    </h3>
                    <hr className="h-0.5 my-2 bg-rose-200 border-0"></hr>
                    <p className="text-gray-500">
                        📚 Repeater &#40;sixth-year student&#41;, majoring in LOVE
                    </p>
                    <p className="text-gray-500 ">📍 Ithaca</p>
                    <p className="mt-3 sm:mt-4 mb-2 text-gray-500">
                        Three words to describe me:{' '}
                        <span className="font-bold text-xl">💔</span>{' '}
                        <span className="font-bold text-xl">❤️‍🩹</span>{' '}
                        <span className="font-bold text-xl">❤️</span>
                    </p>
                    <p className="mt-2 sm:mt-2 mb-2 text-gray-500">
                        First song on my hookup playlist:
                        <span className="font-bold"> <Iframe
                                url={"https://open.spotify.com/embed/track/7FbrGaHYVDmfr7KoLIZnQ7?utm_source=generator&theme=0"}
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
                            ></Iframe></span>
                    </p>
                    <p className="mb-2 sm:mb-2 text-gray-500">
                        Bio: <span className="font-bold">Hey, hope this doesn&#39;t disappoint you when you see me, your cupid,
                        as your last match. I want to genuinely apologize for the delay in the release of matches. {" "}
                        <strong className="text-rose-400">So many thanks for your patience and support.</strong> I am not always perfect, but I am always here 
                        for you every February if you need me. And I will be ever-improving, I promise.
                        Lastly, wish you a meaningful Valentine&#39;s Day 🫶 ! -- Your Cupid</span>
                    </p>
                    <p className="mb-4 sm:mb-3 text-gray-500">
                        Instagram: <span className="font-bold underline"><a href="https://www.instagram.com/cornellperfectmatch">cornellperfectmatch</a></span>
                    </p>
                    {/*<div className="w-1/2">{renderSongSection()}</div> */}
                    {/* <MatchFeedback matchID={matchID} matchFeedback={matchFeedback} refresh={refresh} /> */}
                </div>
            </div>
        </div>
        </div>
    );
}

export default Matches;
