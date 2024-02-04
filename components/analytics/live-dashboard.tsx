import React from 'react';
import Bar from './live-charts/barTemplate';
import Pie from './live-charts/pieTemplate';
import TreeMap from './live-charts/treeMapTemplate';
import DescribeSelfLive from './live-charts/describeSelfLive';
import BestAlternativeLive from './live-charts/bestAlternativeLive';
import DescribePartnerLive from './live-charts/describePartnerLive';
import IckLive from './live-charts/ickLive';
import RelationshipTypeLive from './live-charts/relationshipTypeLive';


function LiveDashboard() {
    return (
        <div className="bg-white p-8">
            <div className="shadow-2xl">
                <div className="flex p-3 gap-4">
                    <div className="w-1/2 shadow-lg">
                        <h3>TITLE</h3>
                        <DescribeSelfLive />
                    </div>
                    <div className="w-1/2 shadow-lg">
                        <h3>TITLE</h3>
                        <DescribePartnerLive />
                    </div>
                </div>
                <div className="flex p-3 gap-4">
                    <div className="w-2/5 shadow-lg">
                        <h3>TITLE</h3>
                        <Pie />
                    </div>
                    <div className="w-3/5 shadow-lg">
                        <h3>TITLE</h3>
                        <IckLive />
                    </div>
                </div>
                <div className="flex p-3 gap-4">
                    <div className="w-2/5 shadow-lg">
                        <h3>TITLE</h3>
                        <RelationshipTypeLive />
                    </div>
                    <div className="w-3/5 shadow-lg">
                        <h3>TITLE</h3>
                        <BestAlternativeLive />
                    </div>
                </div>
            </div>
        </div>


    );
}

export default LiveDashboard;