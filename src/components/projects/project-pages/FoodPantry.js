import React from "react";
import { Link } from "react-router-dom";

import { ProjectNavigation } from "../ProjectNavigation";
import { BackToTop } from "../ProjectPage";

export default function FoodPantry(props) {
    return (
        <div>
            <ProjectNavigation prevPgLink="/portfolio/nagano" prevPgTitle="Nagano Travel Website" nextPgLink="/portfolio/encapsulate" nextPgTitle="Encapsulate" />

            <div className="bg-white">

                <div className="px-8 pt-2 pb-4 lg:pt-1 lg:px-28 lg:py-5">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl flex items-center justify-center">
                        {/* title */}
                        UW Food Pantry App Design
                    </h2>

                    <p className="text-center mt-1">
                        September 2023 - December 2023
                    </p>

                    <p className="mt-4 text-gray-500">
                        {/* project desc */}
                        This INFO 360 Design Methods course long project was the result of collecting data, sketching solutions, building a numerous prototypes, and testing and critiquing them from various angles. The project is centered on helping food insecure UW students by increasing the online presence of the UW Food Pantry, a program that provides community resources to help students battle hunger. They additionally fund food-related programming and develop tools to help food insecure students. Our team was able to visit the Food Pantry itself and interview some of the staff members, which provided us lots of insight into how the pantry works. From survey collection data and these interviews, we sketched solutions and built a paper prototype of an app that would help boost the pantry's online presence, both of which are respectively pictured below:
                    </p>
                </div>

                {/* imgs */}
                <div className="grid grid-cols-1 pb-2 lg:grid-cols-2 place-items-center px-8 gap-4 lg:px-32 lg:pb-4">
                    <img src="/images/project-imgs/food-pantry/solution-sketches.jpg" width={500} height={250} alt="home page of nagano website" className="rounded-lg" />
                    <img src="/images/project-imgs/food-pantry/paper-summary.jpg" width={500} alt="yuru-chara page of nagano website" className="rounded-lg border h-full" />
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 px-8 pt-2 lg:pt-2 lg:px-28 lg:py-5 gap-x-4">
                    <p className="mt-0 text-gray-500 pb-4">
                        We conducted usability tests to test our paper prototype and had a few of our classmates as particpants, which provided helpful feedback going forward into polishing our design for a high fidelity protoype. After transitioning our paper prototype into a high fidelity one, we again conducted usability tests with our classmates as participants. We also conducted A/B tests to compare our app's features to that of similar apps and also critiqued the prototype based on <Link to="https://www.nngroup.com/articles/ten-usability-heuristics/" target="_blank" className="underline underline-offset-2 hover:text-black">Jakob Nielsen's ten user interface design heuristics</Link>. The analysis and feedback we obtained from these tests and critiques helped us see additional flaws in our design and how we might've done things differently if we did the project again. A few screens from our high fidelity prototype are pictured:
                    </p>
                    <img src="/images/project-imgs/food-pantry/food-pantry-high-fidelity.jpg" width={500} height={250} alt="yuru-chara page of nagano website" className="rounded-lg border place-self-center" />
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
                                        <li>App navigation along the bottom of screen</li>
                                        <li>Community recipe page to view recipes submitted by the community</li>
                                        <li>Current stock of food pantry inventory page</li>
                                        <li>Checkout page with summary of order</li>
                                        <li>Order history sorted by weeks of the UW quarter</li>
                                    </ul>
                                </dd>
                            </div>

                            <div className="pt-4 w-96">
                                <dt className="font-medium text-gray-900 flex items-center justify-center"> Technical Features</dt>
                                <dd className="mt-2 text-sm text-gray-500">
                                    {/* Technical Features */}
                                    <p>Includes the following:</p>
                                    <ul className="list-disc pl-4">
                                        <li>Sign in/up screens</li>
                                        <li>Ability to submit own recipe on <em>Community Recipe</em> page</li>
                                        <li>Ability to add items to cart</li>
                                        <li>When placing order, can select a time and date for in person pick up</li>
                                        <li>Profile/order history page tells you the points (food pantry currency) you have remaining</li>
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
                                        Click <Link to="https://www.figma.com/proto/Xuxu5ohep0lSYZtyTnBQUu/%22Paper%22-Prototype?page-id=0%3A1&type=design&node-id=2-2&viewport=1152%2C361%2C0.21&t=XYI9cD6VurzehYgk-1&scaling=scale-down&starting-point-node-id=2%3A2&show-proto-sidebar=1&mode=design" target="_blank" className="hover:text-black underline underline-offset-2">here</Link> to view the Figma protoype.
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