import React from 'react';
import Bar from './live-charts/barTemplate';
import Pie from './live-charts/pieTemplate';
import TreeMap from './live-charts/treeMapTemplate';
import DescribeSelfLive from './live-charts/describeSelfLive';
import BestAlternativeLive from './live-charts/bestAlternativeLive';
import DescribePartnerLive from './live-charts/describePartnerLive';
import IckLive from './live-charts/ickLive';
import RelationshipTypeLive from './live-charts/relationshipTypeLive';
import LoveLanguageLive from './live-charts/loveLanguageLive';


function LiveDashboard() {
    return (
        <div className="bg-white p-1 sm:p-6 lg:p-12">
            <div className="shadow-2xl">
                <div className="flex p-3 gap-4 flex-col sm:flex-row">
                    <div className="mb-2 sm:mb-0 sm:w-1/2 sm:shadow-lg shadow-md pl-3">
                        <h3 className="text-gray-500 md:text-lg font-semibold mt-2 -mb-2">
                            Top 10 Adjectives to Describe Oneself
                        </h3>
                        <DescribeSelfLive />
                    </div>
                    <div className="mb-2 sm:mb-0 sm:w-1/2 sm:shadow-lg shadow-md pl-3">
                        <h3 className="text-gray-500 md:text-lg font-semibold mt-2 -mb-2">
                            Top 10 Adjectives to Describe One&#39;s Ideal Partner
                        </h3>
                        <DescribePartnerLive />
                    </div>
                </div>
                <div className="flex p-3 gap-4 flex-col sm:flex-row">
                    <div className="mb-2 sm:mb-0 sm:w-2/5 sm:shadow-lg shadow-md pb-3 sm:pb-0">
                        <h3 className="text-gray-500 md:text-lg font-semibold mt-4 mb-4 sm:mb-2 pl-4">
                            What&#39;s Your Most Important Love Language?
                        </h3>
                        <LoveLanguageLive />
                    </div>
                    <div className="mb-2 sm:mb-0 sm:w-3/5 sm:shadow-lg shadow-md pr-2">
                        <h3 className="text-gray-500 md:text-lg font-semibold mt-4 -mb-2 pl-4">
                            What&#39;s Your Biggest Ick in a Romantic Interest?
                        </h3>
                        <IckLive />
                    </div>
                </div>
                <div className="flex p-3 gap-4 flex-col sm:flex-row">
                    <div className="mb-2 sm:mb-0 sm:w-2/5 sm:shadow-lg shadow-md pb-3 sm:pb-0">
                        <h3 className="text-gray-500 md:text-lg font-semibold mt-4 mb-4 sm:mb-2 pl-4">
                            What Type of Relationship Are You Looking for with Your Match?
                        </h3>
                        <RelationshipTypeLive />
                    </div>
                    <div className="mb-4 sm:mb-0 sm:w-3/5 sm:shadow-lg shadow-md pr-2">
                        <h3 className="text-gray-500 md:text-lg font-semibold mt-4 -mb-2 pl-4">
                            Choose the Best Alternative. Your Match is a 10, but They ____.
                        </h3>
                        <BestAlternativeLive />
                    </div>
                </div>
            </div>
        </div>


    );
}

export default LiveDashboard;