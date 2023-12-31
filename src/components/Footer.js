import React from "react";
import { Link } from 'react-router-dom'

export default function Footer(props) {
    return (
        <footer className="md:flex md:justify-between bg-white pt-1">
            <div className="grid grid-cols-1 mx-auto items-center justify-between p-6 md:px-8" aria-label="Global">
                {/* <p className="text-center text-xs mb-2">
                    &copy; KelliAnn Ramirez. All rights reserved
                </p> */}

                <div className="grid grid-cols-1 md:flex md:gap-x-12">
                    <Link to="/" className="text-sm font-semibold leading-6 mb-2 text-gray-900 hover:underline hover:underline-offset-4">
                        Home
                    </Link>
                    <Link to="/about" className="text-sm font-semibold leading-6 mb-2 text-gray-900 hover:underline hover:underline-offset-4">
                        About
                    </Link>
                    <Link to="/portfolio" className="text-sm font-semibold leading-6 mb-2 text-gray-900 hover:underline hover:underline-offset-4">
                        Portfolio
                    </Link>
                    <Link to="Resume.pdf" target='_blank' className="text-sm font-semibold leading-6 mb-2 text-gray-900 hover:underline hover:underline-offset-4">
                        Resume
                    </Link>
                </div>

                <div className="flex space-x-3 md:flex-1 md:justify-center">
                    {/* linkedin logo source link: https://icons8.com/icon/102748/linkedin-2
                      *  envelope icon source link: https://icons8.com/icon/85467/email
                      */}
                    <a href="https://www.linkedin.com/in/kelliann-ramirez/" target="_blank">
                        <img src="/images/icons/linkedin.png" width={20} height={20} alt="linkedin logo" />
                    </a>
                    <a href="kmramirez125@gmail.com" target="_blank">
                        <img src="/images/icons/mail.png" width={20} height={20} alt="envelope" />
                    </a>
                </div>
            </div>
        </footer>
    );
}