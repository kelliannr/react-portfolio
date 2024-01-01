import React from "react";
import { Link } from "react-router-dom";

import { ProjectNavigation } from "../ProjectNavigation";
import { BackToTop } from "../ProjectPage";

export default function StartingPoint(props) {
    return (
        <div>
            <ProjectNavigation prevPgLink="/portfolio/encapsulate" prevPgTitle="Encapsulate" nextPgLink="/portfolio/discglobe" nextPgTitle="DiscGlobe" />

            <div className="bg-white">

                <div className="px-8 pt-2 pb-4 lg:pt-1 lg:px-28 lg:py-5">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl flex items-center justify-center">
                        {/* title */}
                        December 2022
                    </h2>

                    <p className="text-center mt-1">
                        September 2023 - Present
                    </p>

                    <p className="mt-4 text-gray-500">
                        {/* project desc */}
                        This data analysis, wrangling, and visualization project was created as the final project for my INFO 201 class. My team and I selected a topic and asked questions that could be answered using datasets we find. The group's topic focused on outer space and specifically, how we can discover and study exoplanets and their surroundings to determine if they are habitable. The topic also concerns human well-being, as the state of Earth may affect the ability for humans to inhabit it in the future.
                    </p>
                </div>

                {/* imgs */}
                <div className="grid grid-cols-1 pb-2 lg:grid-cols-2 place-items-center px-8 gap-4 lg:px-32 lg:pb-4">
                    <img src="/images/project-imgs/starting/starting-pg1.png" width={500} height={250} alt="project brief page of the starting point" className="rounded-lg" />
                    <img src="/images/project-imgs/starting/starting-pg2.png" width={500} height={250} alt="number of explanets visualization page of starting point" className="rounded-lg" />
                </div>

                <div className="px-8 pt-2 lg:pt-1 lg:px-28 lg:py-5">
                    <p className="mt-0 text-gray-500">
                        In addition to using an exoplanet dataset, we also used fire data and temperature data in the US to look at how the rise in temperature might increase the need to find another planet.
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
                                        <li>Dark colors to match an outer space theme</li>
                                        <li>Navigation bar to organize information and data visualizations</li>
                                        <li>A dropdown menu that groups the visualization pages together</li>
                                        <li>A tabbed report page to organize the different parts </li>
                                        <li>Color indication of current location in web application</li>
                                    </ul>
                                </dd>
                            </div>

                            <div className="pt-4 w-96">
                                <dt className="font-medium text-gray-900 flex items-center justify-center"> Technical Features</dt>
                                <dd className="mt-2 text-sm text-gray-500">
                                    {/* Technical Features */}
                                    <p>Includes the following:</p>
                                    <ul className="list-disc pl-4">
                                        <li>Three pages of interactive data visualizations, one of which allows the user to explore on their own</li>
                                        <li>Interactive visualizations for viewing sub data at exact points</li>
                                        <li>Data displayed on visualizations can be changed by the user.</li>
                                        <li>Different types of visualizations for easy understanding and interpretation</li>
                                        <li>User input capabilities to change what is being shown on the visualizations</li>
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
                                    R, ShinyApps integration with R
                                </dd>
                            </div>

                            <div className="">
                                <dt className="font-medium text-gray-900 flex items-center justify-center">Viewing</dt>
                                <div className="grid grid-cols-1 justify-items-center">
                                    {/* viewing */}
                                    <dd className="mt-2 text-sm text-gray-500 text-center">
                                        Click <Link to="https://kelliannramirez.shinyapps.io/project-app/" target="_blank" className="hover:text-black underline underline-offset-2">here</Link> to view the web application.
                                        <br />
                                        When viewing, please allow a few seconds for the web application and visualizations to load.
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