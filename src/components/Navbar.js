import { useState } from 'react'
import { Link } from 'react-router-dom'

import { Dialog, Popover } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

export default function Navbar() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    return (
        <header className="bg-white">
            <nav className="mx-auto flex w-full items-center justify-between p-6 lg:px-8" aria-label="Global">

                <div className="flex lg:flex-1">
                    <a href="/" className="font-semibold text-lg hover:underline hover:underline-offset-4 lg:pt-0 ">
                        <p>KelliAnn Ramirez</p>
                    </a>
                </div>

                <div className="flex lg:hidden">
                    <button type="button" className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                        onClick={() => setMobileMenuOpen(true)}>
                        <span className="sr-only">Open main menu</span>
                        <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                    </button>
                </div>

                <Popover.Group className="hidden lg:flex lg:gap-x-12">
                    <Link to="/" className="text-sm font-semibold leading-6 text-gray-900 hover:underline hover:underline-offset-4">
                        Home
                    </Link>
                    <Link to="/about" className="text-sm font-semibold leading-6 text-gray-900 hover:underline hover:underline-offset-4">
                        About
                    </Link>
                    <Link to="/portfolio" className="text-sm font-semibold leading-6 text-gray-900 hover:underline hover:underline-offset-4">
                        Portfolio
                    </Link>
                    <Link to="Resume.pdf" target='_blank' className="text-sm font-semibold leading-6 text-gray-900 hover:underline hover:underline-offset-4">
                        Resume
                    </Link>
                </Popover.Group>

                <div className="hidden lg:flex space-x-3 lg:flex-1 lg:justify-end">
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
            </nav>
            <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
                <div className="fixed inset-0 z-10" />
                <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                    <div className="flex items-center justify-between">
                        <a href="/" className="font-semibold text-lg hover:underline hover:underline-offset-4 lg:pt-0 sm:pt-6">
                            <p>KelliAnn Ramirez</p>
                        </a>
                        <button type="button" className="-m-2.5 rounded-md p-2.5 text-gray-700" onClick={() => setMobileMenuOpen(false)}>
                            <span className="sr-only">Close menu</span>
                            <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                        </button>
                    </div>
                    <div className="mt-6 flow-root">
                        <div className="-my-6 divide-y divide-gray-500/10">
                            <div className="space-y-2 py-6">

                                <Link to="/" onClick={() => setMobileMenuOpen(false)} className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-6 text-gray-900 hover:underline hover:underline-offset-4">
                                    Home
                                </Link>
                                <Link to="/about" onClick={() => setMobileMenuOpen(false)} className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-6 text-gray-900 hover:underline hover:underline-offset-4">
                                    About
                                </Link>
                                <Link to="/portfolio" onClick={() => setMobileMenuOpen(false)} className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-6 text-gray-900 hover:underline hover:underline-offset-4">
                                    Portfolio
                                </Link>
                                <Link to="Resume.pdf" onClick={() => setMobileMenuOpen(false)} className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-6 text-gray-900 hover:underline hover:underline-offset-4">
                                    Resume
                                </Link>
                            </div>
                            <div className="py-6 flex space-x-3">
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
                    </div>
                </Dialog.Panel>
            </Dialog>
        </header>
    )
}
