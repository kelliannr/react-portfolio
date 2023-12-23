import React from "react";
import { Link } from "react-router-dom";

import { ProjectNavigation } from "../ProjectNavigation";

export default function Nagano(props) {
    return (
        <div>
            <ProjectNavigation prevPgLink="/portfolio/access" prevPgTitle="Accessible Access" nextPgLink="/portfolio/food-pantry" nextPgTitle="UW Food Pantry App Design" />

            <div className="bg-white">
                <div className="mx-auto max-w-2xl items-center px-4 py-24 sm:px-6 sm:py-32 lg:max-w-7xl lg:px-6 lg:py-5 lg:pb-0">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl flex items-center justify-center">
                        {/* title */}
                        Nagano Travel Website
                    </h2>

                    <p className="text-center mt-1">
                        November 2018 - December 2018
                    </p>

                    <p className="mt-4 text-gray-500">
                        {/* project desc */}
                        As the final project for my web design class, I was tasked to use my newfound skills in HTML and CSS to
                        create a static website about anything I wanted. I chose to create a travel website about one of Japan's
                        prefectures, Nagano. Two of the pages are pictured below:
                    </p>
                </div>

                {/* img */}
                <div className="flex gap-4 sm:gap-6 lg:gap-16 justify-center pt-8 pb-4">
                    <img src="/images/project-imgs/nagano/na-1.png" width={500} height={250} alt="home page of nagano website" className="rounded-lg" />
                    <img src="/images/project-imgs/nagano/na-2.png" width={500} height={250} alt="yuru-chara page of nagano website" className="rounded-lg" />
                </div>

                <div className="mx-auto max-w-2xl items-center px-4 py-24 sm:px-6 sm:py-32 lg:max-w-7xl lg:px-6 lg:py-5 lg:pb-0">
                    <p className="mt-4 text-gray-500">
                        This website does not use any significant amount JavaScript. In addition, there are design decisions present
                        in the website that if I were redo the whole project, I would not do again. Looking back on the project,
                        there are aspects of the website that are simply embarrassing. However, it was thanks to this project that
                        laid the foundation for me to eventually decide to pursue front end development.
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
                                        <p>Includes pages with the following:</p>
                                        <ul className="list-disc pl-4">
                                            <li>Overview of Nagano</li>
                                            <li>Brief Nagano History</li>
                                            <li>Nagano's climate</li>
                                            <li>Directions to Nagano from Tokyo and Osaka</li>
                                            <li>Hotels in Nagano</li>
                                            <li>Resturants in Nagano</li>
                                            <li>Tourist attractions</li>
                                            <li>Nagano map</li>
                                            <li>Nagano's yuru-chara</li>
                                        </ul>
                                    </dd>
                                </div>

                                <div className="pt-4 w-96">
                                    <dt className="font-medium text-gray-900 flex items-center justify-center"> Technical Features</dt>
                                    <dd className="mt-2 text-sm text-gray-500">
                                        {/* Technical Features */}
                                        <p>Includes pages with the following:</p>
                                        <ul className="list-disc pl-4">
                                            <li>Horizontal list, acting as website navigation</li>
                                            <li>Navigation items change color depending on current page</li>
                                            <li>Image for website background</li>
                                            <li>Clickable images</li>
                                            <li>Image borders</li>
                                            <li>Paragraph text wraps around images</li>
                                            <li>Custom bulleted list icons</li>
                                            <li>Custom logo at the top of every page</li>
                                            <li>Consistent footer at bottom of every page</li>
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
                                        HTML, CSS
                                    </dd>
                                </div>

                                <div className="pt-4">
                                    <dt className="font-medium text-gray-900 flex items-center justify-center">Viewing</dt>
                                    <dd className="mt-2 text-sm text-gray-500">
                                        {/* viewing */}
                                        Click <Link to="https://kelliannr.github.io/hs-final-project/index.html" target="_blank" className="hover:text-black underline underline-offset-2">here</Link> to view the website.
                                    </dd>
                                </div>
                            </div>



                            <div className="flex items-center justify-center">
                                <Link className="w-20" to="/portfolio/nagano">
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