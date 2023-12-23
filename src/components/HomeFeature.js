import React from "react"

export default function HomeFeature() {
    return (
        <div>
            <div className="bg-white py-24 sm:py-32 lg:py-20">
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

                            <div className="relative pl-16">
                                <dt className="text-base font-semibold leading-7 text-gray-900">
                                    <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-[#eee4e1]">
                                        {/**
                                         * user logo source tag
                                         * <a target="_blank" href="https://icons8.com/icon/zxB19VPoVLjK/user">User</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a>
                                         */}
                                        <img src="/images/icons/user.png" width={25} height={25} alt="user logo" />
                                    </div>
                                    About
                                </dt>
                                <dd className="mt-2 text-base leading-7 text-gray-600">
                                    Information about me and my journey so far!
                                    <br />
                                    <a href="/about">
                                        <button className="text-black flex py-2 px-4 mt-4 items-center justify-center rounded-lg bg-[#eee4e1] hover:outline hover:outline-2 hover:outline-[#eee4e1] hover:bg-white transition duration-500">
                                            Learn more →
                                        </button>
                                    </a>
                                </dd>
                            </div>

                            <div className="relative pl-16">
                                <dt className="text-base font-semibold leading-7 text-gray-900">
                                    <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-[#eee4e1]">
                                        {/**
                                         * book icon source tag
                                         * <a target="_blank" href="https://icons8.com/icon/eNGYrRlc8FgP/open-book">Open Book</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a>
                                         */}
                                        <img src="/images/icons/book.png" width={25} height={25} alt="book icon" />
                                    </div>
                                    Portfolio
                                </dt>
                                <dd className="mt-2 text-base leading-7 text-gray-600">
                                    Overviews of the projects I've worked on!
                                    <br />
                                    <a href="/portfolio">
                                        <button className="text-black flex py-2 px-4 mt-4 items-center justify-center rounded-lg bg-[#eee4e1] hover:outline hover:outline-2 hover:outline-[#eee4e1] hover:bg-white transition duration-500">
                                            View projects →
                                        </button>
                                    </a>
                                </dd>
                            </div>

                            <div className="relative pl-16">
                                <dt className="text-base font-semibold leading-7 text-gray-900">
                                    <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-[#eee4e1]">
                                        {/**
                                         * resume icon source tag
                                         * <a target="_blank" href="https://icons8.com/icon/14086/file">Paper</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a>
                                         */}
                                        <img src="/images/icons/paper.png" width={25} height={25} alt="resume icon" />
                                    </div>
                                    Resume
                                </dt>
                                <dd className="mt-2 text-base leading-7 text-gray-600">
                                    My skills and experience summarized!
                                    <br />
                                    <a href="/Resume.pdf" target="_blank">
                                        <button className="text-black flex py-2 px-4 mt-4 items-center justify-center rounded-lg bg-[#eee4e1] hover:outline hover:outline-2 hover:outline-[#eee4e1] hover:bg-white transition duration-500">
                                            See resume →
                                        </button>
                                    </a>
                                </dd>
                            </div>

                        </dl>
                    </div>
                </div>
            </div>




        </div>
    )
}