import React from "react";
import { Link } from "react-router-dom";

import { ProjectNavigation } from "../ProjectNavigation.js";

export default function Encapsulate(props) {
    return (
        <div>
            <ProjectNavigation prevPgLink="/portfolio/food-pantry" prevPgTitle="UW Food Pantry App Design" nextPgLink="/portfolio/starting" nextPgTitle="The STAR-ting Point" />

            <div className="bg-white">
                <div className="mx-auto max-w-2xl items-center px-4 py-24 sm:px-6 sm:py-32 lg:max-w-7xl lg:px-6 lg:py-5 lg:pb-0">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl flex items-center justify-center">
                        {/* title */}
                        Encapsulate
                    </h2>

                    <p className="text-center mt-1">
                        September 2023 - December 2023
                    </p>

                    <p className="mt-4 text-gray-500">
                        {/* project desc */}
                        Encapsulate is a data driven web application built as a course project for <em>INFO 340: Client-Side Development</em>. This web application strives to help users keep track of their clothes in an online fashion, providing them an easy reference to their current wardrobe while they are out shopping. The application strives to promote the idea of a "capsule wardrobe," meaning that you only have under a certain number of items in your closet, for example, having no more than 50. This concept helps users maintain a sustainable stance and get the most of out of the items they already have. Two of the screens are pictured below:
                    </p>
                </div>

                {/* imgs */}
                <div className="flex gap-4 sm:gap-6 lg:gap-16 justify-center pt-8 pb-4">
                    <img src="/images/project-imgs/encapsulate/encapsulate-home.png" width={500} height={250} alt="home page of encapsualate" className="rounded-lg border border-black" />
                    <img src="/images/project-imgs/encapsulate/encapsulate-browse.png" width={500} height={250} alt="encapsulate browse page" className="rounded-lg border border-black" />
                </div>

                <div className="mx-auto max-w-2xl items-center px-4 py-24 sm:px-6 sm:py-32 lg:max-w-7xl lg:px-6 lg:py-5 lg:pb-0">
                    <p className="mt-0 text-gray-500">
                        Encapsulate was first mocked up in Figma so that we as a team knew what we were aiming to make. Then, we converted our Figma prototype into a static HTML and CSS web page. This static mockup did not include use of JavaScript and thus is not interactive. After we had our static version of Encapsulate, we converted it again into a React application. Finally, once we made the successful conversion, we started making our features actually work. This process involved state and event handling, connecting the app to a Firebase real time database, and enabling the use of the database to pull data and display it on the application. Because of the application's connection to Firebase, Encapsulate's displayed data is able to stay persistent through page refreshes and support clothing item image displays.
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
                                            <li>Web application navigation at the top</li>
                                            <li>Footer documenting copyright and contributers</li>
                                            <li>Simple user interactive interfaces</li>
                                            <li>Visual, online representation of a user's "closet"</li>
                                            <li>Clothing items display their associated tags</li>
                                            <li><em>Browse</em> page displayed data persistent through page refreshes</li>
                                        </ul>
                                    </dd>
                                </div>

                                <div className="pt-4 w-96">
                                    <dt className="font-medium text-gray-900 flex items-center justify-center"> Technical Features</dt>
                                    <dd className="mt-2 text-sm text-gray-500">
                                        {/* Technical Features */}
                                        <p>Includes the following:</p>
                                        <ul className="list-disc pl-4">
                                            <li>Written in React</li>
                                            <li>Uses state and event handlers to support user interactivity</li>
                                            <li>Uses a real time database from Firebase to support a data driven web application</li>
                                            <li>User can upload clothing items and make outfits and see them on the <em>Browse</em> page </li>
                                            <li><em>Browse</em> page supports a search feature that changes dynamically changes inputs based on what is currently being displayed</li>
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
                                        Figma, HTML, CSS, JavaScript, React, React Bootstrap, React Router, Firebase 
                                    </dd>
                                </div>

                                <div className="pt-4">
                                    <dt className="font-medium text-gray-900 flex items-center justify-center">Viewing</dt>
                                    <div className="grid grid-cols-1 justify-items-center">
                                        <dd className="mt-2 text-sm text-gray-500">
                                            {/* viewing */}
                                            Visit Encapsulate at <Link to="https://encapsulate-8a2f6.web.app/" target="_blank" className="hover:text-black underline underline-offset-2">encapsulate-8a2f6.web.app/</Link>!
                                        </dd>
                                        <dd className="mt-2 text-sm text-gray-500">
                                            {/* viewing */}
                                            <strong>*NOTE: </strong>Please understand that some behaviors of the app may be buggy and inconsistent. Additionally, depending on how long after December 2023 the app is being viewed, some functionality may not work at all because of database expiration.
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