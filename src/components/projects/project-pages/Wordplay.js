import React from "react";
import { Link } from "react-router-dom";

import { ProjectNavSingle } from "../ProjectNavigation.js";
import { BackToTop } from "../ProjectPage.js";

export default function Wordplay(props) {
    return (
        <div>
            <ProjectNavSingle />

            <div className="bg-white">

                <div className="px-8 pt-2 pb-4 lg:pt-1 lg:px-28 lg:py-5">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl flex items-center justify-center">
                        {/* title */}
                        Wordplay
                    </h2>

                    <p className="text-center mt-1">
                        September 2023 - Present
                    </p>

                    <p className="mt-4 text-gray-500">
                        {/* project desc */}
                        Wordplay is a platform that aims to make programming more global and accessible while also celebrating the world's cultures, identities and values. The development of this platform is led by a faculty member from the Univeristy of Washington Information School, Amy Ko. My role is to design new features that align with the platform's goals. The platform released a beta version on October 31, 2023 and can be viewed at <a href="https://wordplay.dev/" className="underline underline-offset-2 hover:text-black">wordplay.dev</a>. The following are screenshots from the platform:
                    </p>
                </div>

                {/* imgs */}
                <div className="grid grid-cols-1 pb-2 lg:grid-cols-2 place-items-center px-8 gap-4 lg:px-32 lg:pb-4">
                    <img src="/images/project-imgs/wordplay/wordplay-pg1.png" width={500} height={250} alt="home page of wordplay" className="rounded-lg border border-black" />
                    <img src="/images/project-imgs/wordplay/wordplay-pg2.png" width={500} height={250} alt="a wordplay learn screen" className="rounded-lg border border-black" />
                </div>

                <div className="px-8 pt-2 lg:pt-1 lg:px-28 lg:py-5">
                    <p className="mt-0 text-gray-500">
                        We are currently working on issues for a 1.0 version. I am currently working on designing a visual clipboard for users to store their code for later use and also working with members of the development team to design a regular expression scheme for Wordplay that is also accessible. You can keep up to date with current issues and our next version plans that are linked on the home page of Wordplay, linked at <a href="https://wordplay.dev/" className="underline underline-offset-2 hover:text-black">wordplay.dev</a>.
                    </p>
                </div>

                <div className="lg:max-w-7xl mx-32">

                    {/* project details */}
                    <dl className="lg:space-y-8">

                        {/* features grid */}
                        <div className="grid grid-cols-1 lg:grid-cols-2 justify-items-center pb-4">

                            <div className="pt-4 w-96">
                                <dt className="font-medium text-gray-900 flex items-center justify-center"> Visual Features</dt>
                                <dd className="mt-2 text-sm text-gray-500">
                                    {/* Visual Features */}
                                    <p>Includes the following:</p>
                                    <ul className="list-disc pl-4">
                                        <li>Various charcters with eyes to provide to fun atmosphere</li>
                                        <li>Contrasting colors to account for color blindness</li>
                                        <li>Simple user interactive interfaces</li>
                                        <li>Localized to different languages</li>
                                    </ul>
                                </dd>
                            </div>

                            <div className="pt-4 w-96">
                                <dt className="font-medium text-gray-900 flex items-center justify-center"> Technical Features</dt>
                                <dd className="mt-2 text-sm text-gray-500">
                                    {/* Technical Features */}
                                    <p>Includes the following:</p>
                                    <ul className="list-disc pl-4">
                                        <li>Custom programming language</li>
                                        <li>Create and shareable projects made by users</li>
                                        <li>Inclusion of a programming development environment</li>
                                        <li>Drag and drop features to easily move code around</li>
                                    </ul>
                                </dd>
                            </div>
                        </div>

                        {/* misc grid */}
                        <div className="grid grid-cols-1 lg:grid-cols-2 justify-items-center">

                            <div className="pb-4">
                                <dt className="font-medium text-gray-900 flex items-center justify-center">Tools</dt>
                                <dd className="mt-2 text-sm text-gray-500">
                                    {/* tools */}
                                    Figma
                                </dd>
                            </div>

                            <div className="">
                                <dt className="font-medium text-gray-900 flex items-center justify-center">Viewing</dt>
                                <div className="grid grid-cols-1 justify-items-center">
                                    {/* viewing */}
                                    <dd className="mt-2 text-sm text-gray-500 text-center">
                                        Visit Wordplay at <Link to="https://wordplay.dev" target="_blank" className="hover:text-black underline underline-offset-2">wordplay.dev</Link>!
                                        <br />
                                        <strong>*DISCLAIMER: </strong>Wordplay is still in beta, meaning that there may be functionality issues and language localizations are still incomplete.
                                    </dd>
                                </div>

                            </div>
                        </div>

                        <BackToTop />

                    </dl>
                </div>

            </div>
        </div>
    );
}