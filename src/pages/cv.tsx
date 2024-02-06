import Navigation from '../components/Layout/Navigation';
import Footer from '../components/Layout/Footer';
import Typewriter from 'typewriter-effect'; 
import Image from 'next/image';
import Link from 'next/link';

const CV = () => {

    return (
        <>
            <Navigation />

            
            <main className=' w-1/2 flex flex-col items-center justify-center mx-auto mt-10'>
                {/* typing heading */}
                <div className=''>
                    <Typewriter
                        onInit={(typewriter) => { 
                            typewriter.typeString('Katherine Milne')
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
                </div>

                {/* Links */}
                <div className='flex m-2'>
                        <div className="flex p-2 mx-2">
                            <Image src="/img/phone.svg" alt="Phone" width={30} height={30} className="mx-1 "/>
                            <h4 className='pt-1'>(+44)7718939345</h4>
                        </div>
                        
                        <Link className="flex p-2 mx-2" href="mailto: katmilne39@gmail.com">
                            <Image src="/img/mail.svg" alt="Mail" width={30} height={30} className="mx-1"/>
                            <h4 className='pt-1'>katmilne39@gmail.com</h4>
                        </Link>
                        <Link className="flex p-2 mx-2" href="https://github.com/katmilne">
                            <Image src="/img/github-thin.svg" alt="Github" width={30} height={30} className="mx-1"/>
                            <h4 className='pt-1'>katmilne</h4>
                        </Link>
                        <Link className="flex p-2 mx-2" href="https://www.linkedin.com/in/katmilne/">
                            <Image src="/img/linkedin-thin.svg" alt="Linked In" width={30} height={30} className="mx-1"/>
                            <h4 className='pt-1'>katmilne</h4>
                        </Link>
                    </div>

                {/* About me paragraph */}
                <section className='font-[Inter] mt-2'>
                    <h2 className='text-4xl font-bold font-[sono] my-6'>About Me</h2>
                    <div className='flex flex-grow my-2'>
                        <div className='font-bold whitespace-nowrap mr-6'>Technical  Skills</div>
                            <div className='grid grid-cols-6 gap-x-1 gap-y-1 text-rose-300 font-bold'>
                                <div>JavaScript</div>
                                <div>HTML</div>
                                <div>CSS</div>
                                <div>Python</div>
                                <div>Java</div>
                                <div>Git</div>
                                <div>SQL</div>
                                <div>Unix</div>
                                <div>Linux</div>
                                <div>Next.js</div>
                                <div>Node</div>
                                <div>Tailwind CSS</div>
                                
                            </div>
                    </div>
                    <p className='py-2 '>I’m a creative and detail‑oriented individual with a deep passion for infusing artistry into coding to craft innovative and
                        user‑friendly software. My goal is to harness the potential of software to enhance and enrich people’s daily experiences.
                        I’m dedicated to delivering high‑quality work and thrive in collaborative environments, where I love bouncing around
                        ideas and learning from my fellow team members.
                    </p>
                </section>

                {/* Education paragraph */}
                <section className='font-[inter] w-full mt-2'>
                    <h2 className='text-4xl font-bold font-[sono] my-6'>Education</h2>
                    <div className='flex my-2 justify-between'>
                        <div className='font-bold '>University of Birmingham</div>
                        <div className='font-light  text-rose-300'>Birmingham, UK</div>
                    </div>
                    <div className='flex my-2 justify-between'>
                        <div className='font-light text-sm '>BSc Computer Science - 2:1</div>
                        <div className='font-light text-sm text-rose-300'>Sep. 2020 - Jun 2023</div>
                    </div>
                    <ul className='list-disc font-[Inter]'>
                        <li className='my-4'> <span className='font-bold'>Final Year Project:</span> Positional Transformation of Pixel Art Character Sprites using Pix2Pix
                            Where I investigated the Pix2Pix model’s capabilities in character positional transformation for pixel art, focusing on
                            the impact of hyper parameter optimisation on the output image quality with the goal of generating indistinguishable
                            pixel images for use in AI pixel character animation.
                        </li>
                        <li className='my-4'><span className='font-bold'>Human‑Computer Interaction Design Project:</span> All‑in‑One Smart Bike Gadget
                            In collaboration with a team, I led comprehensive <span className='text-rose-300 font-bold'>user research</span> through interviews and questionnaires, employing
                            a <span className='text-rose-300 font-bold'>human‑centered design</span> approach. Our project involved conceptualising, designing, and <span className='text-rose-300 font-bold'>prototyping</span> a cutting‑
                            edge bike attachment. Throughout the process, we leveraged various tools such as <span className='text-rose-300 font-bold'>UML diagrams</span>, <span className='text-rose-300 font-bold'>storyboarding</span>,
                            <span className='text-rose-300 font-bold'>Figma</span> and <span className='text-rose-300 font-bold'>iterative design</span> methodologies to create an intuitive and <span className='text-rose-300 font-bold'>user‑centric</span> product.
                        </li>
                        <li className='my-4'><span className='font-bold'>Full stack website Group Project:</span> Clothes Swapping Website
                            As a group we designed and implemented Swapparel, an innovative clothes swapping website aimed at connecting
                            users interested in trading items of similar value, employing a Tinder‑style swipe functionality. I worked on both the
                            front and back‑end design, ensuring seamless communication of data. I developed my skills working with <span className='text-rose-300 font-bold'>Figma</span>,
                            <span className='text-rose-300 font-bold'>HTML, CSS, JavaScript</span> and <span className='text-rose-300 font-bold'>React</span>. Our team embraced industry‑standard practices, including daily <span className='text-rose-300 font-bold'>Scrum meetings</span>,
                            a robust <span className='text-rose-300 font-bold'>CI/CD pipeline</span>, <span className='text-rose-300 font-bold'>pair programming</span>, and efficient project tracking using <span className='text-rose-300 font-bold'>burn‑down charts</span> and <span className='text-rose-300 font-bold'>GIT</span>.
                        </li>
                    </ul>

                    <div className='flex my-2 justify-between'>
                        <div className='font-bold '>St. David’s Catholic College</div>
                        <div className='font-light  text-rose-300'>Cardiff, UK</div>
                    </div>
                    <div className='flex my-2 justify-between'>
                        <div className='font-light text-sm '>A‑LEVELS</div>
                        <div className='font-light text-sm text-rose-300'>Sep. 2017 - Jul. 2019</div>
                    </div>
                    <ul className='list-disc font-[Inter]'>
                        <li className='my-4'> Maths ‑ A*, Biology ‑ A*, Physics ‑ A, Art ‑ A
                        </li>
    
                        
                    </ul>
                    <div className='flex my-2 justify-between'>
                        <div className='font-bold '>Cardiff High School </div>
                        <div className='font-light  text-rose-300'>Cardiff, UK</div>
                    </div>
                    <div className='flex my-2 justify-between'>
                        <div className='font-light text-sm '>GCSE</div>
                        <div className='font-light text-sm text-rose-300'>Sep. 2015 - Jul. 2017</div>
                    </div>
                    <ul className='list-disc font-[Inter]'>
                        <li className='my-4'> 13 GCSEs, including Maths (A*) and English (A)
                        </li>
                        
                        
                    </ul>
                </section>

                

            </main>
            
            
            
            
        

            <Footer />
        </>
        
    );

}
export default CV;
