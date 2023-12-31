import React from "react"

export default function HomeFeature() {
    return (
        <div>
            <div className="bg-white py-6 lg:py-20">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">

                    <div className="mx-auto max-w-2xl lg:text-center">
                        <h2 className="text-base font-semibold leading-7 text-black">Hello!</h2>
                        <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                            I'm KelliAnn!
                        </p>
                        <p className="mt-6 text-lg leading-8 text-gray-600">
                            Welcome to my website! I'm a junior studying informatics at University of Washington! Here, you'll
                            find information about me, the projects I've worked on, and my resume!
                        </p>
                    </div>

                    <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
                        <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-3 lg:gap-y-16">
                            
                            {/** user logo source tag
                              * <a target="_blank" href="https://icons8.com/icon/zxB19VPoVLjK/user">User</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a>
                            */}
                            <FeatureSection 
                                src="/images/icons/user.png" 
                                alt="user logo" 
                                title="About" 
                                summary="Information about me and my journey so far!" 
                                linkName="Learn more" 
                                pageLink="/about" 
                            />
                            
                            {/** book icon source tag
                              * <a target="_blank" href="https://icons8.com/icon/eNGYrRlc8FgP/open-book">Open Book</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a>
                            */}
                            <FeatureSection 
                                src="/images/icons/book.png" 
                                alt="book icon" 
                                title="Portfolio" 
                                summary="Overviews of the projects I've worked on!" 
                                linkName="View projects" 
                                pageLink="/portfolio" 
                            />

                            {/**
                              * resume icon source tag
                              * <a target="_blank" href="https://icons8.com/icon/14086/file">Paper</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a>
                            */}
                            <FeatureSection 
                                src="/images/icons/paper.png" 
                                alt="resume icon" 
                                title="Resume" 
                                summary="My skills and experience summarized!" 
                                linkName="See resume" 
                                pageLink="/Resume.pdf" 
                            />

                        </dl>
                    </div>
                </div>
            </div>
        </div>
    )
}

function FeatureSection(props) {
    return (
        <div className="relative pl-16">
            <dt className="text-base font-semibold leading-7 text-gray-900">
                <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-[#eee4e1]">
                    {/**
                      * resume icon source tag
                      * <a target="_blank" href="https://icons8.com/icon/14086/file">Paper</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a>
                    */}
                    <img src={props.src} width={25} height={25} alt={props.alt} />
                </div>
                {props.title}
            </dt>
            <dd className="mt-2 text-base leading-7 text-gray-600">
                {props.summary}
                <br />
                <a href={props.pageLink}>
                    <button className="text-black flex py-2 px-4 mt-4 items-center justify-center rounded-lg bg-[#eee4e1] hover:outline hover:outline-2 hover:outline-[#eee4e1] hover:bg-white transition duration-500">
                        {props.linkName} →
                    </button>
                </a>
            </dd>
        </div>
    );
}