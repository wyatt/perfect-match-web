import React from 'react';
import Bar from './live-charts/barTemplate';
import Pie from './live-charts/pieTemplate';
import TreeMap from './live-charts/treeMapTemplate';
import DescribeSelf from './live-charts/describeSelf';


function LiveDashboard() {
    return (
        <div className="bg-white p-8">
            <div className="shadow-2xl">
                <div className="flex p-3 gap-4">
                    <div className="w-1/2 shadow-lg">
                        <h3>TITLE</h3>
                        <DescribeSelf />
                    </div>
                    <div className="w-1/2 shadow-lg">
                        <h3>TITLE</h3>
                        <TreeMap />
                    </div>
                </div>
                <div className="flex p-3 gap-4">
                    <div className="w-2/5 shadow-lg">
                        <h3>TITLE</h3>
                        <Pie />
                    </div>
                    <div className="w-3/5 shadow-lg">
                        <h3>TITLE</h3>
                        <Bar />
                    </div>
                </div>
                <div className="flex p-3 gap-4">
                    <div className="w-2/5 shadow-lg">
                        <h3>TITLE</h3>
                        <Pie />
                    </div>
                    <div className="w-3/5 shadow-lg">
                        <h3>TITLE</h3>
                        <Bar />
                    </div>
                </div>
            </div>
        </div>


    );
}

export default LiveDashboard;