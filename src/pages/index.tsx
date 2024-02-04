// pages/index.tsx
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Home: React.FC = () => {
  return (
    <div className="font-[Sono] bg-white text-md">
      {/* NAVBAR */}
      <header className="bg-white h-28 shadow-custom text-xl">
        <nav className="font-[Inter] text-2xl font-bold flex items-center justify-between px-20 h-28">
          <ul className="flex items-center ml-52">
            <li className="ml-10">
              <Image src="/img/poppy3.png" alt="Poppy" width={100} height={100} className="max-h-24 max-w-22" />
            </li>
            <h2 className="pl-6">katmilne.com</h2>
          </ul>
          <ul className="flex items-center ml-auto mr-52">
            <li><a className="hover:text-rose-100 mx-16 transition duration-300" href="#">Home</a></li>
            <li><a className="hover:text-rose-100 mx-16 transition duration-300" href="#">Projects</a></li>
            <li><a className="hover:text-rose-100 mx-16 transition duration-300" href="#">CV</a></li>
          </ul>
        </nav>
      </header>

      {/* MAIN CONTENT */}
      <section className="flex items-center justify-center w-1/2 mx-auto">
        <div className="flex flex-col items-center justify-center">
          <Image src="/img/me.jpg" alt="Kat Milne" width={250} height={442} className="mt-20 m-10 shadow-custom rounded-md" />
          <ul className="flex items-center justify-center space-x-10">
            <li className="transition duration-500 ease-in-out transform hover:scale-150">
              <a href="https://github.com/katmilne">
                <Image src="/img/github-thin.svg" alt="GitHub" width={36} height={36} />
              </a>
            </li>
            <li className="transition duration-500 ease-in-out transform hover:scale-150">
              <a href="https://www.blobodoro.com/">
                <Image src="/img/Blob-icon2.png" alt="Blobodoro" width={58} height={58} />
              </a>
            </li>
            <li className="transition duration-500 ease-in-out transform hover:scale-150">
              <a href="https://www.linkedin.com/in/katmilne/">
                <Image src="/img/linkedin-thin.svg" alt="LinkedIn" width={36} height={36}/>
              </a>
            </li>
          </ul>
        </div>

        <div className="w-1/2">
          <h1 className="font-semibold text-3xl font-[VT323] tracking-wider">Hi, I'm Kat.</h1>
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

      {/* Footer content */}
      <footer className="flex justify-center mt-28 font-[VT323] tracking-wider text-xl">© Copyright 2024 Katherine Milne</footer>

      <script ></script>
    </div>
  );
};

export default Home;
