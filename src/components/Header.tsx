'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { Poppins } from 'next/font/google';

const poppins = Poppins({
    weight: ['400', '600', '700'],
    subsets: ['latin'],
});




const Header = () => {

    const navItems = ["home", "about", "projects", "skills", "testimonials", "contact"]

    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }

    return (
        <>
            <nav className="backdrop-blur-sm bg-opacity-80 sticky top-0 z-20">
                <div className="mx-auto max-w-7xl px-2 py-3 sm:px-6 lg:px-8">
                    <div className="relative flex h-16 items-center justify-between">
                        <div className="absolute inset-y-0 left-0 flex items-center lg:hidden">
                            {/* Mobile menu button */}
                            <button
                                type="button"
                                className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                                aria-controls="mobile-menu"
                                aria-expanded={isMenuOpen}
                                onClick={toggleMenu}
                            >
                                <span className="absolute -inset-0.5"></span>
                                <span className="sr-only">Open main menu</span>
                                {/* Icon when menu is closed */}
                                <svg
                                    className={`${isMenuOpen ? 'hidden' : 'block'} h-6 w-6`}
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="1.5"
                                    stroke="currentColor"
                                    aria-hidden="true"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                                </svg>
                                {/* Icon when menu is open */}
                                <svg
                                    className={`${isMenuOpen ? 'block' : 'hidden'} h-6 w-6`}
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="1.5"
                                    stroke="currentColor"
                                    aria-hidden="true"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>
                        <div className="flex flex-1 items-center justify-center lg:items-stretch lg:justify-between px-4">
                            {/* LOGO */}
                            <div className="flex flex-shrink-0 items-center text-black">
                                <h1 className={`navbar-brand-name ${poppins.className} text-xl sm:text-2xl font-extrabold`}>Abdul <span className='text-blue-700'> Rahman </span> Moin</h1>
                            </div>


                            <div className="hidden lg:block lg:ml-20
                            ">
                                <ul className="flex space-x-10 items-center text-gray-600 text-sm mr-9">

                                    {navItems.map(item => (
                                        <>
                                            {!(item == "about" || item == "contact") &&
                                                < li key={item}>
                                                    <Link
                                                        href={`/#${item}`}
                                                        className='uppercase rounded-md px-3 py-2  font-medium  hover:bg-blue-700 hover:text-white'
                                                    >
                                                        {item}
                                                    </Link>
                                                </li >
                                            }


                                            {(item == "about" || item == "contact") &&
                                                < li key={item}>
                                                    <Link
                                                        href={`${item}`}
                                                        className='uppercase rounded-md px-3 py-2  font-medium  hover:bg-blue-700 hover:text-white'
                                                    >
                                                        {item}
                                                    </Link>
                                                </li>
                                            }
                                        </>
                                    ))}

                                </ul>
                            </div>
                        </div>

                    </div>
                </div >

                {/* Mobile menu */}
                < div className={`${isMenuOpen ? 'block' : 'hidden'} lg:hidden`
                } id="mobile-menu" >
                    <ul className="space-y-4 px-2 pb-3 pt-2 text-gray-600 text-sm">

                        {navItems.map(item => (
                           <>
                           {!(item == "about" || item == "contact") &&
                               < li key={item}>
                                   <Link
                                       href={`/#${item}`}
                                       className='uppercase rounded-md px-3 py-2  font-medium  hover:bg-blue-700 hover:text-white'
                                   >
                                       {item}
                                   </Link>
                               </li >
                           }


                           {(item == "about" || item == "contact") &&
                               < li key={item}>
                                   <Link
                                       href={`${item}`}
                                       className='uppercase rounded-md px-3 py-2  font-medium  hover:bg-blue-700 hover:text-white'
                                   >
                                       {item}
                                   </Link>
                               </li>
                           }
                       </>
                        ))}

                    </ul>
                </div >
            </nav >
        </>
    )
}

export default Header