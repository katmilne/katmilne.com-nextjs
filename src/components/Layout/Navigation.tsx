import React from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image'; 

const Navigation = () => {
    const router = useRouter();

    const handleNavigation = (path : string) => {
      router.push(path);
    };

    const isActive = (path: string) => router.pathname === path;

    return (
        <header className="bg-white h-28 shadow-custom text-xl">
            <nav className="font-[Inter] text-2xl font-bold flex items-center justify-between px-20 h-28">
                <ul className="flex items-center ml-52">
                    <li className="ml-10"><Image src="/img/poppy3.png" alt="Poppy" width={100} height={100} className="max-h-24 max-w-22" /></li>
                    <h2 className="pl-6">katmilne.com</h2>
                </ul>
                <ul className="flex items-center ml-auto mr-52">
                    <li><a className={`hover:text-rose-100 mx-16 transition duration-300 cursor-pointer ${isActive('/') ? 'text-zinc-400' : ''}`} onClick={() => handleNavigation('/')}>Home</a></li>
                    <li><a className={`hover:text-rose-100 mx-16 transition duration-300 cursor-pointer ${isActive('/projects') ? 'text-zinc-400' : ''}`} onClick={() => handleNavigation('/projects')}>Projects</a></li>
                    <li><a className={`hover:text-rose-100 mx-16 transition duration-300 cursor-pointer ${isActive('/cv') ? 'text-zinc-400' : ''}`} onClick={() => handleNavigation('/cv')}>CV</a></li>
                </ul>
            </nav>
        </header>
    );
};

export default Navigation;
