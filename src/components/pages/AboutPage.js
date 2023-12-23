import React from "react";
import { Link } from "react-router-dom";

export default function AboutPage() {
    return (
        <div className="grid lg:grid-cols-3 justify-items-center items-center mx-24 sm:grid-cols-1 mt-12">
            <div>
                <img src="/images/self-crop.jpg" width={300} height={650} alt="self image" className="rounded-3xl" />
            </div>
            <div className="lg:col-span-2 sm:col-span-1">
                <div className="grid grid-cols-1 gap-3 text-gray-500">
                    <h2 className="font-semibold text-black">
                        Hello! I'm currently a junior majoring in informatics at University of Washington!
                    </h2>
                    <p>
                        All throughout my life, I’ve enjoyed puzzles. Whether the puzzle is a maze, Rubik’s cube or a project I have
                        to manage, the process of getting to a solution has been the most exciting. This drew me to technology.
                        Throughout my tech classes, I always enjoyed thinking about how to approach a problem, the corresponding
                        benefits and drawbacks, and finally translating it into a solution that works. What drew me to informatics
                        is the people. The users are what give technology its purpose and technology can bring so much value to a
                        person’s life.
                    </p>
                    <p>
                        I work to develop solutions and products that work to empower, and raise the voices of minority groups
                        whether those groups are racial, LGBTQ+, or disability related. I accomplish this through designing
                        accessible products to improve day to day experiences; focusing on the needs of the users; and research
                        for accessible programming experiences. In the future, I hope to continue striving to deliver user-focused
                        products that will uplift minority groups and contribute to creating a more equitable and inclusive society.
                    </p>
                    <p>
                        I am currently working as a Classroom Support Technician (CST) at UW Academic Technologies. I work on a team
                        with other CSTs to provide technical assistance to UW faculty, students and staff on troubleshooting equipment,
                        relaying classroom information and performing preventative maintenance. I also interact with users of the
                        classrooms in person and over digital correspondence to educate on proper use of the equipment.
                    </p>
                    <p>
                        As I continue to gain experience, my <Link to="/portfolio" className="underline underline-offset-2 hover:text-black">portfolio</Link> will update!
                    </p>
                </div>
            </div>
        </div>
    )
}