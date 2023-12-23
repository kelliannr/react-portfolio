import React from "react";
import { Link } from "react-router-dom";

export default function ProjectList(props) {
    return (
        <div className="bg-white">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

                <CurrentProjects />
                <ProjectArchive />

            </div>
        </div>
    );
}

function CurrentProjects(props) {
    return (
        <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:pt-0 lg:pb-8">
            <h2 className="text-2xl font-bold text-gray-900 text-center">Current Projects</h2>

            {/* div containing project cards */}
            <div className="mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0 lg:gap-y-6">
                <div className="group relative">
                    <ProjectCard title="Wordplay"
                        location="UW iSchool Faculty Research Lab"
                        imgLink="/images/project-imgs/wordplay/wordplay2.png"
                        alt="Wordplay.dev on white background with floating Chinese characters that have eyes"
                        pageLink="/portfolio/wordplay" />
                </div>

            </div>
        </div>
    );
}

function ProjectArchive(props) {
    return (
        <div class="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:pt-0 lg:pb-8">
            <h2 className="text-2xl font-bold text-gray-900 text-center">Project Archive</h2>

            {/* div containing project cards */}
            <div className="mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0 lg:gap-y-6">

                <div className="group relative">
                    <ProjectCard title="UW Food Pantry App Design"
                        location="INFO 360 Course Project"
                        imgLink="/images/project-imgs/food-pantry/food-pantry-cover.jpg"
                        alt="image representing uw food pantry app design"
                        pageLink="/portfolio/food-pantry" />
                </div>

                <div className="group relative">
                    <ProjectCard title="Encapsulate"
                        location="INFO 340 Course Project"
                        imgLink="/images/project-imgs/encapsulate/encapsulate-cover.png"
                        alt="image representing encapsulate"
                        pageLink="/portfolio/encapsulate" />
                </div>

                {/* <div className="group relative">
                    <ProjectCard title="Wordplay"
                                 location="UW iSchool Faculty Research Lab"
                                 imgLink="/images/project-imgs/wordplay/wordplay2.png"
                                 alt="Wordplay.dev on white background with floating Chinese characters that have eyes"
                                 pageLink="/portfolio/wordplay" />
                </div> */}

                <div className="group relative">
                    <ProjectCard title="The STAR-ting Point"
                        location="INFO 201 Final Project"
                        imgLink="https://assets.newatlas.com/dims4/default/3168c10/2147483647/strip/true/crop/1080x720+0+180/resize/1200x800!/quality/90/?url=http%3A%2F%2Fnewatlas-brightspot.s3.amazonaws.com%2Farchive%2Fearth-from-space-6.jpg"
                        alt="view of earth from outer space on the moon"
                        pageLink="/portfolio/starting" />
                </div>

                <div className="group relative">
                    <ProjectCard title="DiscGlobe"
                        location="WINFO 11th Annual Hackathon"
                        imgLink="/images/project-imgs/discglobe/discglobe.png"
                        alt="discglobe logo"
                        pageLink="/portfolio/discglobe" />
                </div>

                <div className="group relative">
                    <ProjectCard title="Accessible Access"
                        location="Figmathon 2022"
                        imgLink="/images/project-imgs/access/access-cover.jpg"
                        alt="school supplies surrounding words accessible access"
                        pageLink="/portfolio/access" />
                </div>

                {/* <div className="group relative">
                    <ProjectCard title="Redesigning Concepts" 
                                 location="INFO 200 Project" 
                                 imgLink="/images/project-imgs/concepts/concepts.png"
                                 alt="concepts logo with the word concepts next to it"
                                 pageLink="/portfolio/concepts" />
                </div> */}

                <div className="group relative">
                    <ProjectCard title="Nagano Travel Website"
                        location="Web Design Final Project"
                        imgLink="/images/project-imgs/nagano/na-cover.jpeg"
                        alt="mt fuji with cherry blossoms and the word nagano layered over"
                        pageLink="/portfolio/nagano" />
                </div>
            </div>
        </div>
    );
}

function ProjectCard(props) {
    return (
        <Link to={props.pageLink}> {/* page link */}
            <div className="relative h-80 w-full overflow-hidden rounded-lg border border-gray-200 bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-64">
                {/* thumbnail img */}
                <img src={props.imgLink} alt={props.alt} className="h-full w-full object-cover object-center" />
            </div>
            <h3 className="mt-4 text-sm text-gray-500">
                <span className="absolute inset-0"></span>
                {props.location} {/* project location */}
            </h3>
            <p className="text-base font-semibold text-gray-900">
                {props.title} {/* project title */}
            </p>
        </Link>
    )
}