import Navigation from '../components/Layout/Navigation';
import Footer from '../components/Layout/Footer';
import Typewriter from 'typewriter-effect'; 
import Link from 'next/link';
import Image, { StaticImageData } from 'next/image';
import project1img from '../../public/img/blobodoro.com.png'
import githubimg from '../../public/img/github-thin.svg'

interface FeaturedProjectsProps {
    type: string;
    title: string;
    summary: string;
    img: string | StaticImageData; 
    link: string;
    github: string;
  }
const FeaturedProjects: React.FC<FeaturedProjectsProps> = ({
    type,
    title,
    summary,
    img,
    link,
    github,
    }) => {
  
    return (
        <article className='w-full flex items-center justify-between relative border-4 border-zinc-800 bg-white rounded-3xl  p-5 m-5'>
            <div className='absolute top-1 -right-6 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-zinc-800'/>
            <Link href={link} target="_blank" className='w-1/2 cursor-pointer overflow-hidden rounded-lg'>
                <Image src={img} alt={title} className="w-full h-auto"/>
            </Link>
            
            
            <div className='w-1/2 flex flex-col items-start justify-between pl-6'>
                <span className='text-rose-300 font-medium text-xl'>{type}</span>
                <Link href={link} target="_blank" className='hover:underline underline-offset-2'>
                    <h2 className='my-2 w-full text-left text-4xl font-bold'>{title}</h2>
                </Link>
                <p className='my-2 font-medium'>{summary}</p>
                <div className='mr-auto'>
                <Link href={github} target="_blank" className="flex items-center justify-center mt-2">
                    <Image src={githubimg}  width={40} height={40} alt={title} className="mb-2" />
                    <span className="ml-4 mb-2 rounded-lg bg-zinc-600 text-white p-2 px-6 text-lg font-semibold hover:bg-rose-200 transition duration-500 ease-in-out">Visit Project</span>
                </Link>
                </div>
            </div>
        </article>     
    );
}

interface ProjectProps {
    type: string;
    title: string;
    img: string | StaticImageData; 
    link: string;
    github: string;
  }
const Project: React.FC<ProjectProps> = ({
    type,
    title,
    img,
    link,
    github,
    }) => {

    return (
        <article className='w-full h-80 flex flex-col items-center justify-between border border-zinc-400 shadow-custom bg-white rounded-3xl p-5'>
            {/* <div className='absolute top-1 -right-3 -z-10 w-[102%] h-[102%] rounded-[2rem] bg-zinc-800 hover:bg-zinc-400'/> */}
            <Link href={link} target="_blank" className='w-full cursor-pointer overflow-hidden rounded-lg'>
                <Image src={img} alt={title} className=" h-auto mx-auto overflow-hidden"/>
            </Link>
            
            <div className='w-full flex flex-col mt-2 '>
                
                <span className='text-rose-300 font-medium text-md'>{type}</span>
                <Link href={link} target="_blank" className='hover:underline underline-offset-2 '>
                    <h2 className='my-0.5 w-full text-left text-lg font-bold'>{title}</h2>
                </Link>

                <div className=' flex justify-between mt-2 mx-5'>
                        <Image src={githubimg}  width={20} height={20} alt={title} className="my-0.5" />
                    <div>
                        <Link href={github} target="_blank">
                            <span className="text-md text-zinc-800 font-bold">
                                Visit</span>
                        </Link>
                    </div>
                </div>

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

                <section className='w-1/2 grid grid-cols-12 gap-20 mt-5 '>
                    <div className='col-span-12'>
                        <FeaturedProjects 
                            title="Blobodoro"
                            img={project1img}
                            summary="Productive studying with a cute pixel twist. Created using react native, tailwind css, react router, jj djfuhwuh jshjshsu shjshsu shushsjsn suwhjuwwjsn sjshu"
                            link="https://www.blobodoro.com/"
                            github="https://github.com/blobodoro"
                            type="Featured Project"
                        />
                    </div>
                </section>
                    <section className='grid grid-cols-12 w-1/2 justify-center mt-10'>
                        <div className='col-span-6 row-span-4 ml-10 my-5'>
                                <Project 
                                    title="Blobodoro"
                                    img={project1img}
                                    link="https://www.blobodoro.com/"
                                    github="https://github.com/blobodoro"
                                    type="Featured Project"
                                />
                            </div>
                            <div className='col-span-6 row-span-4 ml-10 my-5'>
                                <Project 
                                    title="Blobodoro"
                                    img={project1img}
                                    link="https://www.blobodoro.com/"
                                    github="https://github.com/blobodoro"
                                    type="Featured Project"
                                />
                            </div>
                            <div className='col-span-6 row-span-4 ml-10 my-5'>
                                <Project 
                                    title="Blobodoro"
                                    img={project1img}
                                    link="https://www.blobodoro.com/"
                                    github="https://github.com/blobodoro"
                                    type="Featured Project"
                                />
                            </div>
                            <div className='col-span-6 row-span-4 ml-10 my-5'>
                                <Project 
                                    title="Blobodoro"
                                    img={project1img}
                                    link="https://www.blobodoro.com/"
                                    github="https://github.com/blobodoro"
                                    type="Featured Project"
                                />
                            </div>
                    </section>
                        

                
                
                
            </main>
            <Footer />
        </>   
    );
}
export default Projects;
