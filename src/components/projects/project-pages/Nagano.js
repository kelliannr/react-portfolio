import React from "react";
import { Link } from "react-router-dom";

import { ProjectNavigation } from "../ProjectNavigation";
import { BackToTop } from "../ProjectPage";

export default function Nagano(props) {
    return (
        <div>
            <ProjectNavigation prevPgLink="/portfolio/access" prevPgTitle="Accessible Access" nextPgLink="/portfolio/food-pantry" nextPgTitle="UW Food Pantry App Design" />

            <div className="bg-white">

                <div className="px-8 pt-2 pb-4 lg:pt-1 lg:px-28 lg:py-5">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl flex items-center justify-center">
                        {/* title */}
                        Nagano Travel Website
                    </h2>

                    <p className="text-center mt-1">
                        November 2018 - December 2018
                    </p>

                    <p className="mt-4 text-gray-500">
                        {/* project desc */}
                        As the final project for my web design class, I was tasked to use my newfound skills in HTML and CSS to create a static website about anything I wanted. I chose to create a travel website about one of Japan's prefectures, Nagano. Two of the pages are pictured below:
                    </p>
                </div>

                {/* img */}
                <div className="grid grid-cols-1 pb-2 lg:grid-cols-2 place-items-center px-8 gap-4 lg:px-32 lg:pb-4">
                    <img src="/images/project-imgs/nagano/na-1.png" width={500} height={250} alt="home page of nagano website" className="rounded-lg" />
                    <img src="/images/project-imgs/nagano/na-2.png" width={500} height={250} alt="yuru-chara page of nagano website" className="rounded-lg" />
                </div>

                <div className="px-8 pt-2 lg:pt-1 lg:px-28 lg:py-5">
                    <p className="mt-0 text-gray-500">
                        This website does not use any significant amount JavaScript. In addition, there are design decisions present in the website that if I were redo the whole project, I would not do again. Looking back on the project there are aspects of the website that are simply embarrassing. However, it was thanks to this project that laid the foundation for me to eventually decide to pursue front end development.
                    </p>
                </div>

                {/* --------- */}

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
                                    <p>Includes the following:</p>
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
                        <div className="grid grid-cols-1 lg:grid-cols-2 justify-items-center">

                            <div className="pb-4">
                                <dt className="font-medium text-gray-900 flex items-center justify-center">Tools</dt>
                                <dd className="mt-2 text-sm text-gray-500">
                                    {/* tools */}
                                    HTML, CSS
                                </dd>
                            </div>

                            <div className="">
                                <dt className="font-medium text-gray-900 flex items-center justify-center">Viewing</dt>
                                <div className="grid grid-cols-1 justify-items-center">
                                    {/* viewing */}
                                    <dd className="mt-2 text-sm text-gray-500 text-center">
                                        Click <Link to="https://kelliannr.github.io/hs-final-project/index.html" target="_blank" className="hover:text-black underline underline-offset-2">here</Link> to view the website.
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

/*
<div className="lg:max-w-7xl mx-32">

    {/* project details *
    <dl className="lg:space-y-8">

        {/* features grid *
        <div className="grid grid-cols-1 lg:grid-cols-2 justify-items-center pb-4">

            <div className="pt-4 w-96">
                <dt className="font-medium text-gray-900 flex items-center justify-center"> Visual Features</dt>
                <dd className="mt-2 text-sm text-gray-500">
                    {/* Visual Features *
                    <p>Includes the following:</p>
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
                    {/* Technical Features *
                    <p>Includes the following:</p>
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

        {/* misc grid *
        <div className="grid grid-cols-1 lg:grid-cols-2 justify-items-center">

            <div className="pb-4">
                <dt className="font-medium text-gray-900 flex items-center justify-center">Tools</dt>
                <dd className="mt-2 text-sm text-gray-500">
                    {/* tools *
                    HTML, CSS
                </dd>
            </div>

            <div className="">
                <dt className="font-medium text-gray-900 flex items-center justify-center">Viewing</dt>
                <div className="grid grid-cols-1 justify-items-center">
                    {/* viewing *
                    <dd className="mt-2 text-sm text-gray-500 text-center">
                        Click <Link to="https://kelliannr.github.io/hs-final-project/index.html" target="_blank" className="hover:text-black underline underline-offset-2">here</Link> to view the website.
                    </dd>
                </div>

            </div>
        </div>

        <BackToTop />

    </dl>
</div>

*/