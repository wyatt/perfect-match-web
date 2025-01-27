import React from 'react';
import Image from 'next/image';
import { team } from './members';

const Members: React.FC = () => {
    return (
        <div className="pt-16 pb-10 sm:py-6 mx-[5%] sm:mx-[10%] lg:mx-[15%]">
            <div className="container px-5 sm:px-0 py-2 sm:py-20 mx-auto sm:mx-0">
                <div className="text-center mb-0">
                    <h2 className="dela-gothic-one mb-6 text-3xl tracking-tight font-extrabold text-pmred-500 sm:text-5xl sm:mb-8">
                        Meet the Cupids
                    </h2>

                    <p className="work-sans text-pmred-500 italic text-base sm:text-xl mb-10">
                        We currently have fifteen members, divided into two teams – Engineering and Business.
                    </p>
                    <hr className="border-1 border-pmred-500 w-[100%]" />
                </div>

                {team.map((division, idx) => (
                    <div key={idx}>
                        <h3 className="dela-gothic-one mb-6 text-xl sm:text-3xl text-center font-bold text-pmred-500 sm:mt-16 mt-10">
                            {division.Name}
                        </h3>
                        <p className="work-sans mb-12 italic text-center text-pmred-500 text-sm sm:text-base">
                            {division.Description}
                        </p>

                        <div className="flex flex-wrap justify-center gap-10">
                            {division.Members &&
                                division.Members.map((member) => (
                                    <a
                                        key={member.Name}
                                        className="sm:w-1/4"
                                        href={member.Linkedin}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <div className="flex flex-col items-center">
                                            <Image
                                                src={member.Img}
                                                alt={member.Name}
                                                width={208}
                                                height={208}
                                                className="rounded-full object-cover"
                                                loading="eager"
                                            />
                                            <p className="text-pmred-500 dela-gothic-one font-semibold sm:text-lg text-center sm:mt-4 mt-3">
                                                {member.Name}
                                            </p>
                                            <p className="work-sans text-pmred-500 text-sm text-center">
                                                {member.Major}, {member.ClassYear}
                                            </p>
                                            <p className="work-sans text-pmred-500 text-sm text-center">{member.Title1}</p>
                                            <p className="work-sans text-pmred-500 text-sm text-center">{member.Title2}</p>
                                        </div>
                                    </a>
                                ))}
                        </div>
                        <hr className="border-1 border-pmred-500 sm:mt-16 mt-12 w-[100%]" />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Members;
