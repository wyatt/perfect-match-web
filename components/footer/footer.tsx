import React from 'react';

function Footer() {
    return (

        <div className="bg-pmpink2-500">
            <footer>
                <div className="flex justify-between items-center mb-5">
                    {/* Left Side: Social Links */}
                    <div className="flex justify-left items-center">
                        <a href="https://www.reddit.com/user/PerfectMatch2020/" target="_blank" rel="noreferrer">
                            <img src="\reddit.svg" alt="Reddit Logo" className="w-7 sm:w-9 mr-4" />
                        </a>
                        <a href="https://www.instagram.com/perfectmatch.at.cornell/?hl=en" target="_blank" rel="noreferrer">
                            <img src="\ins.svg" alt="Instagram Logo" className="w-7 sm:w-9 mr-3" />
                        </a>
                    </div>

                    {/* Right Side: Contact Info with Logo */}
                    <div className="flex items-center text-right">
                        <div>
                            <div className='dela-gothic-one'>
                                <h1 className="text-pmblue-500 text-lg">
                                    <strong>Questions for the Cupids?</strong>
                                </h1>
                                <div className='work-sans'>
                                    <h3 className="text-pmblue-500">Reach out to us at perfectmatch@cornell.edu</h3>
                                </div>
                            </div>
                        </div>
                        <img src="\logo.png" alt="Logo" className="w-10 sm:w-12 mr-3 ml-3" />

                    </div>
                </div>


                <div className='work-sans'>
                    <div className="text-sm text-pmblue-500 flex justify-center items-center mb-1">
                        <p>
                            ©
                            <a href="/" target="_blank" rel="noreferrer" className="hover:underline">
                                Perfect Match 2025.
                            </a>
                            &nbsp;All Rights Reserved.
                        </p>
                    </div>

                    <div className="text-xs text-pmblue-500 flex justify-center mb-1 mx-1">
                        This organization is a registered student organization of Cornell University.
                    </div>
                    <div className="text-xs text-pmblue-500 flex justify-center pb-6 mx-1">
                        If you have a disability and are having trouble accessing information on this website or need
                        materials in an alternate format, please contact us at perfectmatch@cornell.edu.
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default Footer;
