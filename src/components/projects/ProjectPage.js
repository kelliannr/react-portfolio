import React from "react";

import { Link } from "react-router-dom";

export function BackToTop(props) {
    return (
        <div className="flex items-center justify-center pt-5 pb-8">
            <Link className="w-20" onClick={props.scrollToTop}>
                <dd className="text-sm text-gray-500 hover:text-black underline underline-offset-2">
                    Back to top
                </dd>
            </Link>
        </div>
    );
}

/*
access
discglobe
encapsulate
food pantry

wordplay
*/