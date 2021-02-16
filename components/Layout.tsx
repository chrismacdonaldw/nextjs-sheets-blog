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
                    <NavLogo text="chrismac.dev blog" />
                </div>
            </div>
        </div>
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