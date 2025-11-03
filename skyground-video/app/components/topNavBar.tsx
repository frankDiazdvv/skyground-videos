'use client';

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { RxHamburgerMenu } from "react-icons/rx";



const TopNavBar = () => {

    const [toggleMenu, setToggleMenu] = useState(false);


    return(
        <nav className="fixed top-8 right-20 left-20 flex flex-row justify-between p-4 px-8 bg-black/20 backdrop-blur-sm h-28 rounded-full border border-slate-500 shadow-inner shadow-white/20">
            <div>
                <Link href={'/'}><img src="./topNavLogoWhite.png" alt="Logo Here" loading="lazy" className="h-full"></img></Link>     
            </div>

            {/* Desktop menu */}
            <div className="hidden md:flex flex-row items-center gap-4 text-lg text-white">
                <Link href={'/'} className="hover:text-gray-400">Servicios</Link>
                <Link href={'/'} className="hover:text-gray-400">Galeria</Link>
                <Link href={'/'} className="hover:text-gray-400">Acerca de</Link>
                <Link href={'/'} className="hover:text-gray-400">Contactanos</Link>
            </div>

            {/* Hamburger Menu - Mobile Only */}
            <div 
                className="flex md:hidden items-center text-xl hover:cursor-pointer"
                onClick={() => setToggleMenu(!toggleMenu)}
            >
                    <RxHamburgerMenu />                
            </div>

            <div className={`fixed flex md:hidden flex-col top-28 right-0 bottom-0 bg-blue-100 p-6 gap-4 text-lg duration-200 ${
                toggleMenu ? "translate-x-0" : "translate-x-full"
            }`}>
                <Link href={'/'} className="hover:text-gray-600">Servicios</Link>
                <Link href={'/'} className="hover:text-gray-600">Galeria</Link>
                <Link href={'/'} className="hover:text-gray-600">Acerca de</Link>
                <Link href={'/'} className="hover:text-gray-600">Contactanos</Link>
            </div>
        
        </nav>
    );
    
}

export default TopNavBar;