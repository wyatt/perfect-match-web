import React, { useState } from 'react';
import Link from 'next/link';
import Script from 'next/script';
import ByGenderHeight2024 from '@/components/analytics/charts-2024/apex-charts/by_gender_height_2024';
import ByGenderRicePurity2024 from '@/components/analytics/charts-2024/apex-charts/by_gender_rice_purity_2024';
import ByGenderNumDated2024 from '@/components/analytics/charts-2024/apex-charts/by_gender_numDated_2024';
import ByStateRicePurity2024 from '@/components/analytics/charts-2024/d3-charts/by_state_rice_purity_2024';
import ByStateDrinkOften2024 from '@/components/analytics/charts-2024/d3-charts/by_state_drinking_2024';
import ByStatePolitics2024 from '@/components/analytics/charts-2024/d3-charts/by_state_politics_2024';
import ByGenderWhoPays2024 from '@/components/analytics/charts-2024/apex-charts/by_gender_who_pays_2024';
import ByGenderIck2024 from '@/components/analytics/charts-2024/apex-charts/by_gender_ick_2024';
import ByGenderGreenflag2024 from '@/components/analytics/charts-2024/apex-charts/by_gender_greenflag_2024';
import ByCollegeSleepDuration2024 from '@/components/analytics/charts-2024/apex-charts/by_college_sleep_duration_2024';
import ByCollegeRicePurity2024 from '@/components/analytics/charts-2024/apex-charts/by_college_rice_purity_2024';
import ByCollegeSleepTime2024 from '@/components/analytics/charts-2024/apex-charts/by_college_sleep_time_2024';
import ByGenderLoveLanguage2024 from '@/components/analytics/charts-2024/apex-charts/by_gender_love_language_2024';
import ByYearNumParticipants2024 from '@/components/analytics/charts-2024/apex-charts/by_year_num_participants_2024';
import ByYearNumDated2024 from '@/components/analytics/charts-2024/apex-charts/by_year_num_dated_2024';
import ByYearRicePurity2024 from '@/components/analytics/charts-2024/apex-charts/by_year_rice_purity_2024';

const Stats2024 = () => {
    const by_state_visualizations: Record<string, JSX.Element> = {
        "What is your Rice Purity Score?": <ByStateRicePurity2024 />,
        "How 'juice head' are you?": <ByStateDrinkOften2024 />,
        "What are your political tendencies?": <ByStatePolitics2024 />
    };

    const by_gender_visualizations: Record<string, JSX.Element> = {
        "What is your most important love language?": <ByGenderLoveLanguage2024 />,
        "What is your Rice Purity Score?": <ByGenderRicePurity2024 />,
        "Would you prefer that your match ___ on the first date?": <ByGenderWhoPays2024 />,
        "What is your biggest ick in a relationship?": <ByGenderIck2024 />,
        "What is your biggest green flag in a relationship?": <ByGenderGreenflag2024 />,
        "Your height?": <ByGenderHeight2024 />
    };

    const by_college_visualizations: Record<string, JSX.Element> = {
        "Daily sleep duration?": <ByCollegeSleepDuration2024 />,
        "What is your Rice Purity Score?": <ByCollegeRicePurity2024 />,
        "What time do you go to bed?": <ByCollegeSleepTime2024 />
    };

    const by_year_visualizations: Record<string, JSX.Element> = {
        "How many people have you dated in the last 5 years?": <ByYearNumDated2024 />,
        "What is your Rice Purity Score?": <ByYearRicePurity2024 />,
        "Number of participants?": <ByYearNumParticipants2024 />
    };

    const [selectedVizState, setSelectedVizState] = useState(Object.keys(by_state_visualizations)[0]);
    const [selectedVizGender, setSelectedVizGender] = useState(Object.keys(by_gender_visualizations)[0]);
    const [selectedVizCollege, setSelectedVizCollege] = useState(Object.keys(by_college_visualizations)[0]);
    const [selectedVizYear, setSelectedVizYear] = useState(Object.keys(by_year_visualizations)[0]);

    return (
        <div style={{ fontFamily: 'Work Sans' }}>
            {' '}
            <Script src="https://d3js.org/d3.v7.min.js" />
            <Script src="https://d3js.org/topojson.v3.min.js" />
            <div>

                <section className="bg-white pt-12 sm:pt-16 lg:pt-20 sm:pb-5 pb-1 text-gray-700">
                    <p className="my-8 sm:lg-8 lg:my-10 sm:text-lg text-gray-700 mx-[3%] sm:mx-[10%] lg:mx-[20%]" style={{ fontFamily: 'Work Sans' }}>
                        In 2024, we received <strong className="text-rose-400"> 3,983 </strong>
                        valid responses — representing <strong className="text-rose-400">1/4</strong> of
                        Cornell&#39;s undergraduate student body! Thank you all for filling out the survey and
                        helping spread love at Cornell🫶! Here is a look at the results of the survey.
                    </p>
                    <hr className="border-1 border-solid border-rose-300 mx-[3%] sm:mx-[10%] lg:mx-[20%]" />
                </section>

                <section className="bg-white pt-12 sm:pt-16 lg:pt-20 sm:pb-5 pb-1">

                    <div className="text-center mt-6">
                        <label htmlFor="viz-select" className="text-lg font-semibold mr-4 font-dela-gothic text-gray-700" style={{ fontFamily: 'Dela Gothic One', fontSize: "18px" }}>
                            Viz by Gender:
                        </label>
                        <select
                            id="viz-select"
                            value={selectedVizGender}
                            onChange={(e) => setSelectedVizGender(e.target.value)}
                            className="border rounded-lg px-4 py-2 text-gray-700"
                            style={{ fontFamily: 'Dela Gothic One', fontSize: "18px", borderColor: "darkgray", borderWidth: "2px" }}
                        >
                            {Object.keys(by_gender_visualizations).map((key) => (
                                <option key={key} value={key}>
                                    {key}
                                </option>
                            ))}
                        </select>
                    </div>

                    {selectedVizGender === "What is your Rice Purity Score?" && (
                        <div className="text-center">
                            <p className="text-gray-700 sm:mx-[10%] lg:mx-[10%] mt-6">
                                The lower your score, the more &apos;corrupt&apos; or rebellious you are; the higher the number, the purer you are.
                            </p>
                        </div>
                    )}

                    <div className="sm:mx-[10%] lg:mx-[20%] -mb-4 sm:my-4">{by_gender_visualizations[selectedVizGender]}</div>

                    <div className="text-center text-gray-700">
                        <p style={{ marginTop: "-10px", fontSize: "14px", marginBottom: "0px", fontFamily: 'Work Sans' }}>
                            Participants who gave their gender as non-binary individual or other are not included due to small sample size.
                        </p>
                    </div>

                    <hr className="border-1 border-solid border-rose-300 mx-[3%] sm:mx-[10%] lg:mx-[20%] my-24" />

                    <div className="text-center mt-6">
                        <label htmlFor="viz-select" className="text-lg font-semibold mr-4 font-dela-gothic text-gray-700" style={{ fontFamily: 'Dela Gothic One', fontSize: "18px" }}>
                            Viz by State:
                        </label>
                        <select
                            id="viz-select"
                            value={selectedVizState}
                            onChange={(e) => setSelectedVizState(e.target.value)}
                            className="border rounded-lg px-4 py-2 text-gray-700"
                            style={{ fontFamily: 'Dela Gothic One', fontSize: "18px", borderColor: "darkgray", borderWidth: "2px" }}
                        >
                            {Object.keys(by_state_visualizations).map((key) => (
                                <option key={key} value={key}>
                                    {key}
                                </option>
                            ))}
                        </select>
                    </div>

                    <div className="mt-2">{by_state_visualizations[selectedVizState]}</div>

                    <hr className="border-1 border-solid border-rose-300 mx-[3%] sm:mx-[10%] lg:mx-[20%] my-24" />

                    <div className="text-center mt-6">
                        <label htmlFor="viz-select" className="text-lg font-semibold mr-4 font-dela-gothic text-gray-700" style={{ fontFamily: 'Dela Gothic One', fontSize: "18px" }}>
                            Viz by College:
                        </label>
                        <select
                            id="viz-select"
                            value={selectedVizCollege}
                            onChange={(e) => setSelectedVizCollege(e.target.value)}
                            className="border rounded-lg px-4 py-2 text-gray-700"
                            style={{ fontFamily: 'Dela Gothic One', fontSize: "18px", borderColor: "darkgray", borderWidth: "2px" }}
                        >
                            {Object.keys(by_college_visualizations).map((key) => (
                                <option key={key} value={key}>
                                    {key}
                                </option>
                            ))}
                        </select>
                        {selectedVizCollege === "What is your Rice Purity Score?" && (
                            <div className="text-center">
                                <p className="text-gray-700 sm:mx-[10%] lg:mx-[10%] mt-6">
                                    The lower your score, the more &apos;corrupt&apos; or rebellious you are; the higher the number, the purer you are.
                                </p>
                            </div>
                        )}
                        <div className="text-center text-gray-700">
                            <p style={{ marginTop: "24px", fontSize: "16px", marginBottom: "0px", fontFamily: 'Work Sans' }}>
                                ❗Hover over the college names below to explore the distributions❗
                            </p>
                        </div>
                    </div>
                    <div className="sm:mx-[8%] lg:mx-[16%] -mb-4 sm:my-4">{by_college_visualizations[selectedVizCollege]}</div>

                    <div className="text-center text-gray-700">
                        <p style={{ marginTop: "-10px", fontSize: "14px", marginBottom: "0px", fontFamily: 'Work Sans' }}>
                            Participants from other colleges or divisions are not included due to a small sample size.
                        </p>
                    </div>

                    <hr className="border-1 border-solid border-rose-300 mx-[3%] sm:mx-[10%] lg:mx-[20%] my-24" />

                    <div className="text-center mt-6">
                        <label htmlFor="viz-select" className="text-lg font-semibold mr-4 font-dela-gothic text-gray-700" style={{ fontFamily: 'Dela Gothic One', fontSize: "18px" }}>
                            Viz by Year:
                        </label>
                        <select
                            id="viz-select"
                            value={selectedVizYear}
                            onChange={(e) => setSelectedVizYear(e.target.value)}
                            className="border rounded-lg px-4 py-2 text-gray-700"
                            style={{ fontFamily: 'Dela Gothic One', fontSize: "18px", borderColor: "darkgray", borderWidth: "2px" }}
                        >
                            {Object.keys(by_year_visualizations).map((key) => (
                                <option key={key} value={key}>
                                    {key}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div className="sm:mx-[8%] lg:mx-[18%] -mb-4 sm:my-4">{by_year_visualizations[selectedVizYear]}</div>

                    <hr className="border-1 border-solid border-rose-300 mx-[3%] sm:mx-[10%] lg:mx-[20%] mt-24" />
                </section>

                <section className="bg-white pt-12 sm:pt-16 lg:pt-20 sm:pb-5 pb-1 text-gray-700">
                    <h2 className="mb-6 text-xl sm:text-3xl tracking-tight text-rose-400 mx-[3%] sm:mx-[10%] lg:mx-[20%]" style={{ fontFamily: 'Dela Gothic One' }}>
                        About Crushes 💓
                    </h2>
                    <div className="mx-[3%] sm:mx-[10%] lg:mx-[20%]">
                        <p>
                            💌 PM lets you secretly list your crush&#40;es&#41;, boosting your chances of matching
                            with them! 💘 In PM24, we introduced a fun new feature - <strong className="text-rose-400">&quot;Nudge Your Crush&quot;</strong> -
                            where we sent a mystery love email to your crush&#40;es&#41;, letting them know someone
                            &#40;👀&#41; had listed them and encouraging them to join PM. Hope we helped spark
                            some connections! ✨💕
                        </p>
                        <ul className="list-disc mb-8 sm:mb-12 ml-4">
                            <li className="my-3 lg:my-5 max-w-4xl">
                                <strong className="text-rose-400 text-xl">18.9%</strong> of you listed at least one crush in your response. 💘
                            </li>
                            <li className="my-3 lg:my-5 max-w-4xl">
                                <strong className="text-rose-400 text-xl">47.8%</strong> of those who listed a crush opted for Nudge Your Crush ✉️✨
                            </li>
                            <li className="my-3 lg:my-5 max-w-4xl">
                                <strong className="text-rose-400 text-xl">72</strong> pairs of crush matches were made! 💞
                            </li>
                            <li className="my-3 lg:my-5 max-w-4xl">
                                <strong className="text-rose-400 text-xl">16</strong> mutual crushes found their match! 😍💕
                            </li>
                        </ul>
                    </div>

                    <hr className="border-1 border-solid border-rose-300 mx-[3%] sm:mx-[10%] lg:mx-[20%] my-8 sm:mt-10" />
                    <p className="mt-4 sm:mt-8 mb-10 sm:mb-12 lg:mt-12 max-w-4xl sm:text-lg text-gray-700 mx-[3%] sm:mx-[10%] lg:mx-[20%]">
                        Thanks for taking Perfect Match this year and don&apos;t be afraid to shoot your shot!
                    </p>
                </section>
                <section id="privacy" className="text-gray-700 bg-pink-100">
                    <div className="container px-5 sm:px-0 py-16 sm:py-24 mx-auto">
                        <div className="text-center mb-15">
                            <h2 className="mb-12 text-2xl tracking-tight text-rose-400 sm:text-4xl" style={{ fontFamily: 'Dela Gothic One' }}>
                                FAQ&apos;s about User Privacy
                            </h2>
                        </div>
                        <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
                            <div className="w-full lg:w-1/2 px-4">
                                <details className="mb-5">
                                    <summary className="font-semibold  bg-white rounded-md py-2 px-4 cursor-pointer">
                                        Are my survey responses visible to others?
                                    </summary>

                                    <p style={{ paddingTop: '10px', paddingLeft: '15px' }}>
                                        Absolutely not! All user data collected from our surveys is anonymized, and then
                                        privately stored. Only your name and provided contact information is shared, and
                                        that is only with your matches.
                                    </p>
                                </details>
                                <details className="mb-5">
                                    <summary className="font-semibold bg-white rounded-md py-2 px-4 cursor-pointer">
                                        Can I be identified from these statistics?
                                    </summary>

                                    <p style={{ paddingTop: '10px', paddingLeft: '15px' }}>
                                        <strong>
                                            Preserving the privacy of our participants is our utmost concern and is
                                            rooted behind every decision made in crafting these visualizations.
                                        </strong>{' '}
                                        We have taken several measures to remove any identifiable characteristics from
                                        the data we have collected, and the resulting datasets are randomly shuffled.
                                    </p>
                                </details>
                                <details className="mb-5">
                                    <summary className="font-semibold  bg-white rounded-md py-2 px-4 cursor-pointer">
                                        How are these visualizations generated?
                                    </summary>

                                    <p style={{ paddingTop: '10px', paddingLeft: '15px' }}>
                                        These visualizations were generated using the ApexCharts and d3 JavaScript libraries.
                                    </p>
                                </details>
                            </div>
                            <div className="w-full lg:w-1/2 px-4">
                                <details className="mb-5">
                                    <summary className="font-semibold  bg-white rounded-md py-2 px-4 cursor-pointer">
                                        Is my data sold to third-party advertisers?
                                    </summary>

                                    <p style={{ paddingTop: '10px', paddingLeft: '15px' }}>
                                        Absolutely not! All of your data is stored privately and will not be viewed by
                                        any third party.
                                    </p>
                                </details>
                                <details className="mb-5">
                                    <summary className="font-semibold  bg-white rounded-md py-2 px-4 cursor-pointer">
                                        What happens to my data?
                                    </summary>

                                    <p style={{ paddingTop: '10px', paddingLeft: '15px' }}>
                                        Your data is safe with us! We will never share your data with a third party
                                        advertisers, and we will only interact with your information as needed to
                                        resolve user issues. We may collect anonymous statistics to improve our
                                        algorithm, but your identity will always be separated from such reports.
                                    </p>
                                    <p style={{ paddingTop: '10px', paddingLeft: '15px' }}>
                                        Anonymized statistics are published each year on our website and provided to
                                        media and student groups for publications. In the past, these are included
                                        Cornell Daily Sun, Big Red Heads, Cornell Chronicle, etc.
                                    </p>
                                    <p style={{ paddingTop: '10px', paddingLeft: '15px' }}>
                                        For media requests, please reach out at{' '}
                                        <Link href="mailto:perfectmatch@cornell.edu">perfectmatch@cornell.edu</Link>.
                                    </p>
                                </details>
                                <details className="mb-5">
                                    <summary className="font-semibold  bg-white rounded-md py-2 px-4 cursor-pointer">
                                        Who can I contact if I have a privacy concern?
                                    </summary>

                                    <p style={{ paddingTop: '10px', paddingLeft: '15px' }}>
                                        We greatly encourage you to reach out to us with any questions or concerns that
                                        you may have regarding data privacy. In fact, feedback from the Cornell
                                        community already has and will continue to be used in to improve our algorithm
                                        and measures to protect privacy. We can be reached at{' '}
                                        <Link href="mailto:perfectmatch@cornell.edu">perfectmatch@cornell.edu</Link>.
                                    </p>
                                </details>
                            </div>
                        </div>
                    </div>
                </section>
            </div>{' '}
        </div>
    );
};

export default Stats2024;
