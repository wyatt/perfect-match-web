import MatchTile from './matchTile';
import styles from '/styles/Matches.module.css';
import React from 'react';

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
        </div>
    );
}

export default Matches;
