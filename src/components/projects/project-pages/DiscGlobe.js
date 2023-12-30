import React from "react";
import { Link } from "react-router-dom";

import { ProjectNavigation } from "../ProjectNavigation.js";

export default function DiscGlobe(props) {
    return (
        <div>
            <ProjectNavigation prevPgLink="/portfolio/starting" prevPgTitle="The STAR-ting Point" nextPgLink="/portfolio/access" nextPgTitle="Accessible Access" />

            <div className="bg-white">
                <div className="mx-auto max-w-2xl items-center px-4 py-24 sm:px-6 sm:py-32 lg:max-w-7xl lg:px-6 lg:py-5 lg:pb-0">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl flex items-center justify-center">
                        {/* title */}
                        DiscGlobe
                    </h2>

                    <p className="text-center mt-1">
                        December 2022
                    </p>

                    <p className="mt-4 text-gray-500">
                        {/* project desc */}
                        DiscGlobe was developed during WINFO's (Women in Informatics) 11th Annual Hackathon. The theme was
                        "Reframe, Build and Innovate Onwards" which encouraged the participants to bring their diverse
                        backgrounds, past experiences, and skills to design a future that strives to be more inclusive. My
                        team based our project around how we could diversify the music listening experience. Four screens from
                        the Figma prototype are pictured below:
                    </p>
                </div>

                {/* imgs */}
                <div className="flex gap-4 sm:gap-6 lg:gap-16 justify-center pt-9 pb-4">
                    <img src="/images/project-imgs/discglobe/dg-pg1.png" width={150} height={250} alt="home page of disglobe" className="rounded-lg" />
                    <img src="/images/project-imgs/discglobe/dg-pg2.png" width={150} height={250} alt="india profile page on discglobe" className="rounded-lg" />
                    <img src="/images/project-imgs/discglobe/dg-pg4.png" width={150} height={250} alt="user profile page on discglobe" className="rounded-lg" />
                    <img src="/images/project-imgs/discglobe/dg-pg3.png" width={150} height={250} alt="search page on discglobe" className="rounded-lg" />
                </div>

                <div className="mx-auto max-w-2xl items-center px-4 py-24 sm:px-6 sm:py-32 lg:max-w-7xl lg:px-6 lg:py-5 lg:pb-0">
                    <p className="mt-0 text-gray-500">
                        Current streaming services like Spotify and Apple Music make it difficult for listeners to discover
                        international artists from different genres and countries. DiscGlobe seeks to highlight artists from
                        around the world, helping to create a more inclusive and diverse music streaming experience. When users
                        create an account, they are prompted to take a <em>Music Profile Quiz</em> where they describe their music
                        taste. DiscGlobe is then able to recommend music based on their answers. DiscGlobe allows users to find
                        music by searching for a specific place or searching by a variety of filters. On their profile, users are
                        able to customize the colors used on the app, view music they’ve recently listened to, view a summary of
                        music they’ve played, and update or retake the <em>Music Profile Quiz</em>.
                    </p>
                </div>

                <div className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-x-8 gap-y-16 px-4 py-24 sm:px-6 sm:py-32 lg:max-w-7xl lg:px-8 lg:pb-12 lg:pt-6">

                    {/* project details */}
                    <div>
                        <dl className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8 lg:grid-cols-1">

                            {/* features grid */}
                            <div className="grid grid-cols-2 justify-items-center">

                                <div className="pt-4 w-96">
                                    <dt className="font-medium text-gray-900 flex items-center justify-center"> Visual Features</dt>
                                    <dd className="mt-2 text-sm text-gray-500">
                                        {/* Visual Features */}
                                        <p>Includes the following:</p>
                                        <ul className="list-disc pl-4">
                                            <li>App navigation along the bottom of screen</li>
                                            <li>Display of current song playing right above app navigation</li>
                                            <li>Draggable and clickable world map to view country profiles</li>
                                            <li>A recommended country of the world to explore</li>
                                            <li>Country profile listing popular songs and artists</li>
                                            <li>Profile page to view listening statistics and update Music Profile Quiz</li>
                                        </ul>
                                    </dd>
                                </div>

                                <div className="pt-4 w-96">
                                    <dt className="font-medium text-gray-900 flex items-center justify-center"> Technical Features</dt>
                                    <dd className="mt-2 text-sm text-gray-500">
                                        {/* Technical Features */}
                                        <p>Includes the following:</p>
                                        <ul className="list-disc pl-4">
                                            <li>A <em>Music Profile Quiz</em> the user can take to describe their music taste</li>
                                            <li>Available app theme changes</li>
                                            <li>"Recently Listented To" list</li>
                                            <li>Monthly summary of user listening trends</li>
                                            <li>A search with various filters for music exploration</li>
                                            <li>Accessibility features such as high color contrast and search with speech</li>
                                        </ul>
                                    </dd>
                                </div>
                            </div>

                            {/* misc grid */}
                            <div className="grid grid-cols-2 justify-items-center">
                                <div className="">
                                    <dt className="font-medium text-gray-900 flex items-center justify-center">Tools</dt>
                                    <dd className="mt-2 text-sm text-gray-500">
                                        {/* tools */}
                                        Figma
                                    </dd>
                                </div>

                                <div className="pt-4">
                                    <dt className="font-medium text-gray-900 flex items-center justify-center">Viewing</dt>
                                    <div className="grid grid-cols-1 justify-items-center">
                                        <dd className="mt-2 text-sm text-gray-500">
                                            {/* viewing */}
                                            Click <Link to="https://www.figma.com/proto/0cWQ45Smh1hXDiujw2f5m3/Hackathon-Project?type=design&t=Fx95ZByluWXeK2fa-1&scaling=scale-down&page-id=0%3A1&starting-point-node-id=10%3A26&show-proto-sidebar=1&node-id=10-26&mode=design" target="_blank" className="hover:text-black underline underline-offset-2">here</Link> to view the Figma protoype.
                                        </dd>
                                        <dd className="mt-2 text-sm text-gray-500">
                                            {/* viewing */}
                                            <strong>*DISCLAIMER: </strong>The only clickable country in the prototype that works is India
                                        </dd>
                                    </div>

                                </div>
                            </div>

                            <div className="flex items-center justify-center">
                                <Link className="w-20" onClick={props.scrollToTop}>
                                    <dd className="text-sm text-gray-500 hover:text-black underline underline-offset-2">
                                        Back to top
                                    </dd>
                                </Link>
                            </div>

                        </dl>
                    </div>
                </div>

            </div>
        </div>
    );
}