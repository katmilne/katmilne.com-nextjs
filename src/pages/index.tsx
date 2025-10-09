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
      <section className="md:flex items-center justify-center w-full md:w-full md:m-6 mx-auto xl:w-1/2 xl:mx-auto">
        <div className="flex flex-col md:flex-row-reverse items-center justify-center md:w-1/2 md:justify-start ">
          <div className="flex flex-col items-center">
              <Image src="/img/meandella.jpg" alt="Kat Milne and Ella" width={250} height={442} className="xl:mt-20 m-10 shadow-custom rounded-md" />
            <ul className="flex items-center justify-center space-x-10">
              <li className="transition duration-500 ease-in-out transform hover:scale-150">
                <a href="https://github.com/katmilne"><Image src="/img/github-thin.svg" alt="GitHub" width={36} height={36} /></a>
              </li>
              {/* <li className="transition duration-500 ease-in-out transform hover:scale-150">
                <a href="https://www.blobodoro.com/"><Image src="/img/Blob-icon2.png" alt="Blobodoro" width={58} height={58} /></a>
              </li> */}
              <li className="transition duration-500 ease-in-out transform hover:scale-150">
                <a href="https://www.linkedin.com/in/katmilne/"><Image src="/img/linkedin-thin.svg" alt="LinkedIn" width={36} height={36}/></a>
              </li>
            </ul>
          </div>
        </div>



      {/* BIO TEXT */}
        <div className="m-4 md:w-1/2 md:mr-20 md:mb-10 xl:mt-12 ">
        <Typewriter 
                onInit={(typewriter) => { 
                    typewriter.typeString("Hi I'm Kat")
                        .start(); 
                }} 
                options={{
                    autoStart: true,
                    wrapperClassName: 'text-2xl font-[VT323] tracking-wider', // Apply Tailwind CSS classes here
                    cursor: '|',
                    cursorClassName: 'Typewriter__cursor text-xl',
                    delay: 'natural',
                }}
            /> 
          <h1 className="mt-2 text-md">Full Stack Software Developer, UX/UI</h1>
          <p className="mt-7">I’m a Computer Science graduate from the University of Birmingham, now based in the U.S. with a passion for creativity and learning.</p>
          <p className="mt-5">
            When I’m not coding or sketching ideas for new projects, you'll find me fostering cats, making pottery or learning mandarin.
          </p>
          <p className="mt-7 font-bold">Skills: html, css, tailwindcss, js, SQL, git, react, next.js, node, figma </p>
        </div>
      </section>

      {/* CALL TO ACTION BUTTON */}
      <div className="flex justify-center align-middle md:mt-20 font-[VT323] text-3xl">
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
