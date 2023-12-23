import React from "react";
import { Link } from "react-router-dom";

export function ProjectNavigation(props) {
    return (
        <div>
            <div className="grid grid-cols-3 text-sm text-gray-500 px-6 mx-auto max-w-7xl">
                <Link to={ props.prevPgLink } className="justify-self-start">
                    <p className="hover:underline hover:underline-offset-2 hover:text-black">← { props.prevPgTitle }</p>
                </Link>
                <Link to="/portfolio" className="justify-self-center">
                    <p className="hover:underline hover:underline-offset-2 hover:text-black">Back to project list</p>
                </Link>
                <Link to={ props.nextPgLink } className="justify-self-end">
                    <p className="hover:underline hover:underline-offset-2 hover:text-black">{ props.nextPgTitle } →</p>
                </Link>
            </div>
        </div>
    );
}

export function ProjectNavSingle() {
    return (
        <div>
            <div className="flex justify-center items-center text-sm text-gray-500 px-6 mx-auto max-w-7xl">
                <Link to="/portfolio" className="justify-self-center">
                    <p className="hover:underline hover:underline-offset-2 hover:text-black">Back to project list</p>
                </Link>
            </div>
        </div>
    );
}