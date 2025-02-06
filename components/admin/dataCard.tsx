import React from 'react';

interface DataCardProps {
    gradientColors: [string, string];
    className?: string;
    children: React.ReactNode;
}

const DataCard: React.FC<DataCardProps> = ({ gradientColors, className, children }) => {
    const gradientStyle = {
        backgroundImage: `linear-gradient(to right, ${gradientColors[0]}, ${gradientColors[1]})`
    };
    return (
        <div style={gradientStyle} className={`rounded-lg shadow-md p-4 w-full h-full relative overflow-hidden ${className || ''}`}>
            <div className="absolute -right-8 top-1/2 -translate-y-1/2 w-[50%] h-[40%] bg-white/10 rounded-full" />
            <div className="absolute -right-1/4 top-1/2 -translate-y-[-10%] -translate-x-[20%] w-[70%] h-[40%] bg-white/10 rounded-full" />
            <div className="absolute -left-8 bottom-0 w-[25%] h-[30%] bg-white/10 rounded-full" />
            <div className="absolute top-0 left-1/2 w-[30%] h-[20%] bg-white/10 rounded-full" />

            {children}
        </div>
    );
}

export default DataCard;
