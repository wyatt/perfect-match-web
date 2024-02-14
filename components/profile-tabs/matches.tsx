import MatchTile from './matchTile';
import styles from '/styles/Matches.module.css';
import React from 'react';

function Matches({ matches, userId, refresh, matchCount }: any) {
    const [visible, setVisible] = React.useState(false);
    console.log('matches', matchCount);
    return (
        <div>
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
