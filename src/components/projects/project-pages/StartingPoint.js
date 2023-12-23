import React from "react";
import { Link } from "react-router-dom";

import { ProjectNavigation } from "../ProjectNavigation";

export default function StartingPoint(props) {
    return (
        <div>
            <ProjectNavigation prevPgLink="/portfolio/encapsulate" prevPgTitle="Encapsulate" nextPgLink="/portfolio/discglobe" nextPgTitle="DiscGlobe" />

            <div className="bg-white">
                <div className="mx-auto max-w-2xl items-center px-4 py-24 sm:px-6 sm:py-32 lg:max-w-7xl lg:px-6 lg:py-5 lg:pb-0">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl flex items-center justify-center">
                        {/* title */}
                        The STAR-ting Point
                    </h2>

                    <p className="text-center mt-1">
                        December 2022
                    </p>

                    <p className="mt-4 text-gray-500">
                        {/* project desc */}
                        This data analysis, wrangling, and visualization project was created as the final project for my INFO 201
                        class. My team and I selected a topic and asked questions that could be answered using datasets we find.
                        The group's topic focused on outer space and specifically, how we can discover and study exoplanets and their
                        surroundings to determine if they are habitable. The topic also concerns human well-being, as the state of
                        Earth may affect the ability for humans to inhabit it in the future.
                    </p>
                </div>

                {/* imgs */}
                <div className="flex gap-4 sm:gap-6 lg:gap-16 justify-center pt-8 pb-4">
                    <img src="/images/project-imgs/starting/starting-pg1.png" width={500} height={250} alt="project brief page of the starting point" className="rounded-lg" />
                    <img src="/images/project-imgs/starting/starting-pg2.png" width={500} height={250} alt="number of explanets visualization page of starting point" className="rounded-lg" />
                </div>

                <div className="mx-auto max-w-2xl items-center px-4 py-24 sm:px-6 sm:py-32 lg:max-w-7xl lg:px-6 lg:py-5 lg:pb-0">
                    <p className="mt-0 text-gray-500">
                        In addition to using an exoplanet dataset, we also used fire data and temperature data in the US to look at
                        how the rise in temperature might increase the need to find another planet.
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
                            <div className="grid grid-cols-2 justify-items-center">
                                <div className="">
                                    <dt className="font-medium text-gray-900 flex items-center justify-center">Tools</dt>
                                    <dd className="mt-2 text-sm text-gray-500">
                                        {/* tools */}
                                        R, ShinyApps integration with R
                                    </dd>
                                </div>

                                <div className="pt-4">
                                    <dt className="font-medium text-gray-900 flex items-center justify-center">Viewing</dt>
                                    <div className="grid grid-cols-1 justify-items-center">
                                        <dd className="mt-2 text-sm text-gray-500">
                                            {/* viewing */}
                                            Click <Link to="https://kelliannramirez.shinyapps.io/project-app/" target="_blank" className="hover:text-black underline underline-offset-2">here</Link> to view the web application.
                                        </dd>
                                        <dd className="mt-2 text-sm text-gray-500">
                                            {/* viewing */}
                                            When viewing, please allow a few seconds for the web application and visualizations to load
                                        </dd>
                                    </div>

                                </div>
                            </div>

                            <div className="flex items-center justify-center">
                                <Link className="w-20" to="/portfolio/starting">
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