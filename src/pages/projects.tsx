import Navigation from '../components/Layout/Navigation';
import Footer from '../components/Layout/Footer';
import Typewriter from 'typewriter-effect'; 
import Link from 'next/link';
import Image, { StaticImageData } from 'next/image';
import katmilnedotcom from '../../public/img/katmilne-website.png'
import pokemongoSearchStringImg from '../../public/img/pokemongo-searchstring.png'
import marketBellImg from '../../public/img/market-bell.png'
import swapparelImg from '../../public/img/swapparel.png'
import blobodoroImg from '../../public/img/blobodoro.com.png'

interface FeaturedProjectsProps {
    type: string;
    title: string;
    summary: string;
    img: string | StaticImageData; 
    link: string;
    detailsLink?: string;
  }
const FeaturedProjects: React.FC<FeaturedProjectsProps> = ({
    type,
    title,
    summary,
    img,
    link,
    detailsLink,
    }) => {
  
    return (
        <article className='w-full lg:flex lg:items-center lg:justify-between shadow-custom lg:shadow-none lg:relative border-4 border-zinc-800 bg-white rounded-3xl  lg:p-5 lg:m-5 mt-6'>
            <div className='lg:absolute top-1 -right-6 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-zinc-800'/>
            <Link href={link} target="_blank" className='w-1/2 cursor-pointer'>
                <Image src={img} alt={title} className="lg:w-full lg:h-auto "/>
            </Link>
            
            
            <div className='lg:w-1/2 flex flex-col items-start justify-between lg:pl-6 m-2'>
                <span className='text-rose-300 font-medium text-xl'>{type}</span>
                <Link href={detailsLink || link} className='hover:underline underline-offset-2'>
                    <h2 className='my-2 w-full text-left text-3xl lg:text-4xl font-bold'>{title}</h2>
                </Link>
                <p className='lg:my-2 font-medium '>{summary}</p>
                <div className='mt-4'>
                    <p className='text-sm text-gray-600 mb-3'>Join the waitlist, get notified on progress, and get first access as a beta tester</p>
                    <Link href={link} target="_blank" className='inline-flex items-center gap-2 px-6 py-3 bg-rose-50 border-2 border-zinc-800 hover:bg-rose-100 hover:shadow-custom transition duration-300'>
                        <span className="text-md font-[VT323]">Join Waitlist</span>
                    </Link>
                </div>
            </div>
        </article>     
    );
}

interface ProjectProps {
    type: string;
    title: string;
    summary?: string;
    img: string | StaticImageData; 
    link: string;
    showButton?: boolean;
    buttonText?: string;
    detailsLink?: string;
  }
const Project: React.FC<ProjectProps> = ({
    type,
    title,
    summary,
    img,
    link,
    showButton = true,
    buttonText = "Live Site",
    detailsLink,
    }) => {

    return (
        <article className='w-full flex items-center justify-between shadow-custom lg:shadow-none relative border-4 border-zinc-800 bg-white rounded-3xl p-5'>
            <div className='absolute top-1 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-zinc-800'/>
            
            <Link href={detailsLink || link} target={detailsLink ? undefined : "_blank"} className='w-1/2 cursor-pointer rounded-lg'>
                <Image src={img} alt={title} className="w-full h-auto "/>
            </Link>
            
            <div className='w-1/2 flex flex-col items-start justify-between pl-6'>
                <span className='text-rose-300 font-medium text-xl'>{type}</span>
                <Link href={detailsLink || link} target={detailsLink ? undefined : "_blank"} className='hover:underline underline-offset-2'>
                    <h2 className='my-2 w-full text-left text-2xl font-bold'>{title}</h2>
                </Link>
                {summary && (
                    <p className='my-2 font-medium text-xs'>{summary}</p>
                )}
                {showButton && (
                    <div className='mt-2'>
                        <Link href={link} target="_blank" className='flex items-center gap-2 px-4 py-2 bg-rose-50 border-2 border-zinc-800 hover:bg-rose-100 hover:shadow-custom transition duration-300'>
                            <span className="text-md font-[VT323]">{buttonText}</span>
                        </Link>
                    </div>
                )}
            </div>
        </article> 
    )
}

const Projects = () => {
    return (
        <>
            <Navigation />
            <main className=' flex flex-col items-center justify-center mx-auto mt-10'>
                <Typewriter
                    onInit={(typewriter) => { 
                        typewriter.typeString('Projects')
                            .start(); 
                    }} 
                    options={{
                        autoStart: true,
                        wrapperClassName: 'text-7xl font-[VT323] tracking-wider', // Apply Tailwind CSS classes here
                        cursor: '|',
                        cursorClassName: 'Typewriter__cursor text-5xl',
                        delay: 'natural',
                    }}
                /> 

                {/* Featured Project */}
                <section className='lg:w-1/2 '>
                    <div className=' m-4 lg:m-0 '>
                        <FeaturedProjects 
                            title="Market Bell"
                            img={marketBellImg}
                            summary="Worldwide market exchange open/close time tracker all in one app, with live notifications - never miss a trade opportunity. Stay in sync across time zones with real-time updates on your iPhone."
                            link="https://www.marketbell.app/"
                            detailsLink="/market-bell"
                            type="In Production - iOS App"
                        />
                    </div>
                </section>

                {/* Grid of projects */}
                <section className='w-full max-w-6xl px-4 mt-10 mb-10'>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6'>
                        <Project 
                            title="Swapparel"
                            summary="Full-stack sustainable fashion platform enabling clothing swaps. University group project covering conceptualization, market research, UX/UI design in Figma, development, and CI/CD deployment."
                            img={swapparelImg}
                            link="https://www.figma.com/design/o1ea986MMq4DvGzcQa2MKW/swapparel-website"
                            type="University Group Project"
                            buttonText="Figma Design"
                        />
                        <Project 
                            title="Pokémon Go Search String Builder"
                            summary="A web tool for generating complex Pokémon GO search filters. Creates advanced search queries to efficiently manage and filter through large Pokémon collections in-game."
                            img={pokemongoSearchStringImg}
                            link="https://www.pokestring.com/"
                            type="Web App"
                        />
                        <Project 
                            title="Blobodoro"
                            summary="Pomodoro timer app with collectable fish. Designed complete UI/UX experience in Figma, featuring customizable timers, focus sessions, and motivational fish collection."
                            img={blobodoroImg}
                            link="https://next-blobodoro-1zvbraj8f-katmilnes-projects.vercel.app/"
                            type="Design Project"
                            detailsLink="/blobodoro"
                        />
                        <Project 
                            title="Personal Portfolio Website"
                            summary="Responsive personal portfolio website showcasing projects and resume. Built with Next.js 14, TypeScript, and Tailwind CSS and deployed on Vercel."
                            img={katmilnedotcom}
                            link="https://katmilne.com/"
                            type="Web App"
                        />
                        {/* Add more projects here */}
                    </div>
                </section>
                <section className='w-full max-w-6xl px-4 mt-3 mb-3 text-3xl font-[VT323] tracking-wider text-center text-rose-200'>
                    More projects coming soon...
                </section>
            </main>
            <Footer />
        </>   
    );
}
export default Projects;
