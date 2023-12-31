import React from "react";
import { Link } from "react-router-dom";

import { ProjectNavigation } from "../ProjectNavigation.js";
import { BackToTop } from "../ProjectPage.js";

export default function AccessibleAccess(props) {
    return (
        <div>
            <ProjectNavigation prevPgLink="/portfolio/discglobe" prevPgTitle="DiscGlobe" nextPgLink="/portfolio/nagano" nextPgTitle="Nagano Travel Website" />

            <div className="bg-white">

                <div className="px-8 pt-2 pb-4 lg:pt-1 lg:px-28 lg:py-5">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl flex items-center justify-center">
                        {/* title */}
                        Accessible Access
                    </h2>

                    <p className="text-center mt-1">
                        May 2022
                    </p>

                    <p className="mt-4 text-gray-500">
                        {/* project desc */}
                        Figmathon 2022 was a UX Hackathon that aimed to bring people together with diverse skill sets to develop creative solutions that empower and uplift us into a brighter and more equitable future. The issue my team chose to address was how difficult it can be for the disabled to move around the UW Seattle campus. This is made harder by the fact that the campus is stair heavy and that the accessible-friendly paths can be fairly hidden. Four screens from the Figma prototype are pictured below:
                    </p>
                </div>

                {/* imgs */}
                <div className="grid grid-cols-2 pb-2 lg:grid-cols-4 place-items-center px-8 gap-4 lg:px-32 lg:pb-4">
                    <img src="/images/project-imgs/access/access-pg1.jpeg" width={150} height={250} alt="home page of accessible access" className="rounded-lg" />
                    <img src="/images/project-imgs/access/access-pg3.jpeg" width={150} height={250} alt="favorites page of accessible access" className="rounded-lg" />
                    <img src="/images/project-imgs/access/access-pg2.jpeg" width={150} height={250} alt="displayed route to mcmahon hall in accessible access" className="rounded-lg" />
                    <img src="/images/project-imgs/access/access-pg4.jpeg" width={150} height={250} alt="recents page of accessible access" className="rounded-lg" />
                </div>

                <div className="px-8 pt-2 lg:pt-1 lg:px-28 lg:py-5">
                    <p className="mt-0 text-gray-500">
                        We decided to solve the problem by creating a prototype of an app that functions similar to Google Maps, but takes into account where the stairs are and only shows accessible-friendly routes to the desired destination. This app would save the trouble of trying to remember where alternative routes are and guessing how much extra time would be needed to take the accessible route.
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
                                        <li>Draggable map of the University of Washington Seattle campus</li>
                                        <li>Display of accessible friendly route to desination</li>
                                        <li>Favorite desinations page</li>
                                        <li>Recent desinations page</li>
                                    </ul>
                                </dd>
                            </div>

                            <div className="pt-4 w-96">
                                <dt className="font-medium text-gray-900 flex items-center justify-center"> Technical Features</dt>
                                <dd className="mt-2 text-sm text-gray-500">
                                    {/* Technical Features */}
                                    <p>Includes the following:</p>
                                    <ul className="list-disc pl-4">
                                        <li>Uses Figma</li>
                                        <li>Contains small transition animations</li>
                                        <li>UW colors</li>
                                        <li>Simple UI design</li>
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
                                        Click <Link to="https://www.figma.com/proto/Ud5y2Sjh0OkULtUeJabdNB/Disability-Access-App?type=design&node-id=21-22&t=M7MsIP8xGOGALG75-1&scaling=scale-down&page-id=0%3A1&starting-point-node-id=21%3A22&mode=design" target="_blank" className="hover:text-black underline underline-offset-2">here</Link> to view the Figma protoype.
                                        <br />
                                        <strong>*DISCLAIMER: </strong>The only route in the prototype that works is from Kane Hall to McMahon Hall.
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