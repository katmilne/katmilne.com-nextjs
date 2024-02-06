import React, { useState } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image'; 

const Navigation = () => {
    const router = useRouter();
    const [isMenuOpen, setIsMenuOpen] = useState(false); // Define the state variable and its setter function

    const handleNavigation = (path: string) => {
        router.push(path);
        setIsMenuOpen(false); // Close the menu after clicking on a link
    };

    const isActive = (path: string) => router.pathname === path;

    return (
        <header className="bg-white shadow-custom text-xl">
            <nav className="font-[Inter] text-2xl font-bold flex items-center justify-between h-28 w-full ">
                <ul className="flex items-center w-2/3 justify-center">
                    <li className=""><Image src="/img/poppy3.png" alt="Poppy" width={100} height={100} className="p-2" /></li>
                    <h2 className="text-3xl font-[VT323] font-medium tracking-wider">katmilne.com</h2>
                </ul>
                {/* Render burger icon for small and medium screens */}
                <div className="flex justify-center md:hidden">
                    <Image src="/img/menu.svg" alt="Menu" width={30} height={30} onClick={() => setIsMenuOpen(!isMenuOpen)} className="cursor-pointer" />
                </div>
                {/* Render regular navigation links for larger screens */}
                <div className={`hidden md:flex md:left-0 md:top-[16%] md:w-full ${isMenuOpen ? 'hidden' : 'block'}`}>
                    <ul className="flex lg:flex-row w-full mx-auto justify-center items-center gap-2">
                        <li><a className={`hover:text-rose-100 mx-8 transition duration-300 cursor-pointer ${isActive('/') ? 'text-zinc-400' : ''}`} onClick={() => handleNavigation('/')}>Home</a></li>
                        <li><a className={`hover:text-rose-100 mx-8 transition duration-300 cursor-pointer ${isActive('/projects') ? 'text-zinc-400' : ''}`} onClick={() => handleNavigation('/projects')}>Projects</a></li>
                        <li><a className={`hover:text-rose-100 mx-8 transition duration-300 cursor-pointer ${isActive('/cv') ? 'text-zinc-400' : ''}`} onClick={() => handleNavigation('/cv')}>CV</a></li>
                    </ul>
                </div>
                {/* Render burger menu for small and medium screens */}
                {isMenuOpen && (
                    <div className="absolute top-28 left-0 w-full bg-white md:hidden">
                        <ul className="flex flex-col w-full mx-auto justify-center items-center gap-2">
                            <li><a className={`hover:text-rose-100 mx-8 transition duration-300 cursor-pointer text-sm ${isActive('/') ? 'text-zinc-400' : ''}`} onClick={() => handleNavigation('/')}>Home</a></li>
                            <li><a className={`hover:text-rose-100 mx-8 transition duration-300 cursor-pointer text-sm ${isActive('/projects') ? 'text-zinc-400' : ''}`} onClick={() => handleNavigation('/projects')}>Projects</a></li>
                            <li><a className={`hover:text-rose-100 mx-8 transition duration-300 cursor-pointer text-sm ${isActive('/cv') ? 'text-zinc-400' : ''}`} onClick={() => handleNavigation('/cv')}>CV</a></li>
                        </ul>
                    </div>
                )}
            </nav>
        </header>
    );
};

export default Navigation;
