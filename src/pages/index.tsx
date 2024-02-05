// pages/index.tsx
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Navigation from '../components/Layout/Navigation';
import Footer from '../components/Layout/Footer';
import Typewriter from 'typewriter-effect';




const Home = () => {
  const router = useRouter();

  const handleNavigation = (path : string) => {
    router.push(path);
  };

  return (
    <div className="font-[Sono] bg-white text-md">
      <Navigation />

      {/* MAIN CONTENT */}
      <section className="flex items-center justify-center w-1/2 mx-auto">
        <div className="flex flex-col items-center justify-center">
          <Image src="/img/me.jpg" alt="Kat Milne" width={250} height={442} priority={true} className=" mt-20 m-10 shadow-custom rounded-md" />
          <ul className="flex items-center justify-center space-x-10">
            <li className="transition duration-500 ease-in-out transform hover:scale-150">
              <a href="https://github.com/katmilne"><Image src="/img/github-thin.svg" alt="GitHub" width={36} height={36} /></a>
            </li>
            <li className="transition duration-500 ease-in-out transform hover:scale-150">
              <a href="https://www.blobodoro.com/"><Image src="/img/Blob-icon2.png" alt="Blobodoro" width={58} height={58} /></a>
            </li>
            <li className="transition duration-500 ease-in-out transform hover:scale-150">
              <a href="https://www.linkedin.com/in/katmilne/"><Image src="/img/linkedin-thin.svg" alt="LinkedIn" width={36} height={36}/></a>
            </li>
          </ul>
        </div>

        <div className="w-1/2">
        <Typewriter 
                onInit={(typewriter) => { 
                    typewriter.typeString("Hi I'm Kat")
                        .callFunction(() => {
                            console.log('String typed out!');
                        })
                        .start(); 
                }} 
                options={{
                    autoStart: true,
                    wrapperClassName: 'text-2xl font-[VT323] tracking-wider', // Apply Tailwind CSS classes here
                    cursor: '|',
                    cursorClassName: 'Typewriter__cursor text-2xl',
                    delay: 'natural',
                }}
            /> 
          <h1 className="mt-2 text-md">Full Stack Software Developer</h1>
          <p className="mt-7">I'm a recent graduate of the University of Birmingham with a BSc in Computer Science.</p>
          <p className="mt-5">
            While I'm not coding cute things or doodling, I love to spend time with all types of animals, from fostering cats to walking my dogs.
          </p>
          <p className="mt-7 font-bold">Skills: html css tailwindcss js c# git react next.js node react-native </p>
        </div>
      </section>

      {/* CALL TO ACTION BUTTON */}
      <div className="flex justify-center align-middle mt-20 font-[VT323] text-3xl">
        <Link href="/projects" passHref>
          <div className="flex outline outline-black outline-2 bg-rose-50 transition duration-300 hover:bg-rose-100 hover:shadow-custom">
            <h2 className="p-5 pr-2">CHECK OUT MY WORK</h2>
            <Image src="/img/chevron-right.svg" alt="Chevron Right" width={46} height={46} className="pr-3" />
          </div>
        </Link>
      </div>

      <Footer/>

      <script ></script>
    </div>
  );
};

export default Home;
