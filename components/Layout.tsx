import Link from "next/link";
import { useRouter } from "next/router";

import { useState } from 'react';

export function Layout({ children }) {
    return (
        <div className="w-full min-h-screen dark:bg-gray-700 dark:text-white">
            <Nav />
            <div className="max-w-screen-sm px-4 py-12 mx-auto antialiased font-body">
                <main>{children}</main>
            </div>
        </div>
    );
}

/**
 * Kometa UI Nav from Kitwind
 * https://kitwind.io/products/kometa/components/navs
 */
const Nav = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    return (
        <div className="bg-blue-400">
            <div className="px-4 py-6 mx-auto lg:py-8 sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
                <div className="relative flex items-center justify-between lg:justify-center lg:space-x-16">
                    <ul className="flex items-center hidden space-x-8 lg:flex">
                        <NavItem label="Personal blog" route="/blog" text="Blog" />
                        <NavItem label="Match predictions" route="/matches" text="Matches" />
                    </ul>
                    <NavLogo text="chrismac" />
                    <ul className="flex items-center hidden space-x-8 lg:flex">
                        <NavItem label="Resume" route="/resume" text="Resume" />
                        <NavItem label="About me" route="/about" text="About" />
                    </ul>
                    <div className="lg:hidden">
                        <button
                            aria-label="Open Menu"
                            title="Open Menu"
                            className="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline"
                            onClick={() => setIsMenuOpen(true)}
                        >
                            <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
                                <path
                                    fill="currentColor"
                                    d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
                                />
                                <path
                                    fill="currentColor"
                                    d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
                                />
                                <path
                                    fill="currentColor"
                                    d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
                                />
                            </svg>
                        </button>
                        {isMenuOpen && (
                            <div className="absolute top-0 left-0 w-full">
                                <div className="p-5 bg-white border rounded shadow-sm">
                                    <div className="flex items-center justify-between mb-4">
                                        <div>
                                            <a
                                                href="/"
                                                aria-label="chrismac"
                                                title="chrismac"
                                                className="inline-flex items-center"
                                            >
                                                <span className="ml-2 text-xl font-bold tracking-wide text-gray-800 uppercase">
                                                    chrismac
                        </span>
                                            </a>
                                        </div>
                                        <div>
                                            <button
                                                aria-label="Close Menu"
                                                title="Close Menu"
                                                className="p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                                                onClick={() => setIsMenuOpen(false)}
                                            >
                                            </button>
                                        </div>
                                    </div>
                                    <nav>
                                        <ul className="space-y-4">
                                            <HamburgerItem label="Personal blog" route="/blog" text="Blog" />
                                            <HamburgerItem label="Match predictions" route="/matches" text="Matches" />
                                            <HamburgerItem label="Resume" route="/resume" text="Resume" />
                                            <HamburgerItem label="About me" route="/about" text="About" />
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

const NavItem = ({ label, route, text }) => {
    return (
        <li>
            <a
                href={route}
                aria-label={label}
                title={label}
                className="font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-teal-accent-400">
                {text}
            </a>
        </li>
    );
}

const NavLogo = ({ text }) => {
    return (
        <a
            href="/"
            aria-label={text}
            title={text}
            className="inline-flex items-center">
            <span className="ml-2 text-xl font-bold tracking-wide text-gray-100 uppercase">
                {text}
            </span>
        </a>
    );
}

const HamburgerItem = ({ label, text, route }) => {
    return (
        <li>
            <a
                href={route}
                aria-label={label}
                title={label}
                className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400">
                {text}
            </a>
        </li>
    );
}