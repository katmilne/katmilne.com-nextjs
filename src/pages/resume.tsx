import Navigation from '../components/Layout/Navigation';
import Footer from '../components/Layout/Footer';
import Typewriter from 'typewriter-effect'; 
import Image from 'next/image';
import Link from 'next/link';

const Resume = () => {

    return (
        <>
            <Navigation />

            
            <main id="top" className=' md:w-2/3 xl:w-1/2 flex flex-col items-center justify-center md:mx-auto md:mt-10 mx-2'>
                {/* typing heading */}
                <div className=' '>
                    <Typewriter
                        onInit={(typewriter) => { 
                            typewriter.typeString('Katherine Milne')
                                .start(); 
                        }} 
                        options={{
                            autoStart: true,
                            wrapperClassName: 'md:text-7xl text-5xl font-[VT323] tracking-wider', // Apply Tailwind CSS classes here
                            cursor: '|',
                            cursorClassName: 'Typewriter__cursor text-5xl',
                            delay: 'natural',
                        }}
                    /> 
                </div>

                {/* Links */}
                <div className='flex justify-center md:m-2 w-full '>
                        
                        <Link className="flex mdp-2 md:mx-2 m-2" href="mailto: katmilne39@gmail.com">
                            <Image src="/img/mail.svg" alt="Mail" width={35} height={35} className="md:mx-1"/>
                            <h4 className='pt-1 mr-2 hidden md:block md:text-sm lg:text-base'>katmilne39@gmail.com</h4>
                        </Link>
                        <Link className="flex mdp-2 md:mx-2 m-2" href="https://github.com/katmilne">
                            <Image src="/img/github-thin.svg" alt="Github" width={30} height={30} className="md:mx-1"/>
                            <h4 className='pt-1 mr-2 hidden md:block md:text-sm lg:text-base'>katmilne</h4>
                        </Link>
                        <Link className="flex mdp-2 md:mx-2 m-2 mr-8" href="https://www.linkedin.com/in/katmilne/">
                            <Image src="/img/linkedin-thin.svg" alt="Linked In" width={30} height={30} className="md:mx-1"/>
                            <h4 className='pt-1 hidden md:block md:text-sm lg:text-base'>katmilne</h4>
                        </Link>
                    </div>

                {/* Navigation Buttons */}
                <nav className='flex flex-wrap justify-center gap-2 my-6 w-full md:gap-3'>
                    <a href="#about" className='px-4 py-2 bg-rose-50 border-2 border-zinc-800 font-[VT323] text-lg tracking-wider transition duration-300 hover:bg-rose-100 hover:shadow-custom'>
                        About Me
                    </a>
                    <a href="#projects" className='px-4 py-2 bg-rose-50 border-2 border-zinc-800 font-[VT323] text-lg tracking-wider transition duration-300 hover:bg-rose-100 hover:shadow-custom'>
                        Projects
                    </a>
                    <a href="#work" className='px-4 py-2 bg-rose-50 border-2 border-zinc-800 font-[VT323] text-lg tracking-wider transition duration-300 hover:bg-rose-100 hover:shadow-custom'>
                        Work Experience
                    </a>
                    <a href="#education" className='px-4 py-2 bg-rose-50 border-2 border-zinc-800 font-[VT323] text-lg tracking-wider transition duration-300 hover:bg-rose-100 hover:shadow-custom'>
                        Education
                    </a>
                </nav>

                {/* About me paragraph */}
                <section id="about" className='font-[Inter] md:mt-2 w-full'>
                    <h2 className='md:text-4xl text-2xl font-bold font-[sono] md:my-6 my-2'>About Me</h2>
                    <div className='lg:flex lg:flex-grow lg:my-2  '>
                        <div className='font-bold whitespace-nowrap md:mr-6'>Technical Skills</div>
                            <div className='grid grid-cols-3 text-rose-300 font-bold w-full mt-2
                                            md:grid-cols-6 md:mt-0
                                            xl:grid-cols-7'>
                                <div className='flex justify-center'>JavaScript</div>
                                <div className='flex justify-center'>Java</div>
                                <div className='flex justify-center'>Python</div>
                                <div className='flex justify-center'>HTML</div>
                                <div className='flex justify-center'>CSS</div>
                                <div className='flex justify-center'>NextJS (React)</div>
                                <div className='flex justify-center'>React Native</div>
                                <div className='flex justify-center'>Git</div>
                                <div className='flex justify-center'>SQL</div>
                                <div className='flex justify-center'>Linux</div>
                                <div className='flex justify-center'>Figma</div>
                                <div className='flex justify-center'>TailwindCSS</div>
                                <div className='flex justify-center'>CI/CD</div>
                                <div className='flex justify-center'>Swift</div>
                            </div>
                    </div>
                    <p className='md:py-2 mt-4 md:text-md text-sm'>I’m a creative and detail‑oriented individual with a deep passion for infusing artistry into coding to craft innovative and
                        user‑friendly software. My goal is to harness the potential of software to enhance people’s daily lives.
                        I’m dedicated to delivering high‑quality work and thrive in collaborative environments, where I love bouncing around
                        ideas and learning from my fellow team members.
                    </p>
                </section>

                {/* Personal Projectsparagraph */}
                <section id="projects" className='font-[inter] w-full'>
                    <h2 className='md:text-4xl text-3xl font-bold font-[sono] md:my-6'>Personal Projects</h2>

                    {/* Market Bell App */}
                    <div className='flex my-2 justify-between'>
                        <div className='font-bold text-xl'>Markets Trading Hours App</div>
                        <div className='font-light  text-rose-300'>Remote</div>
                    </div>
                    <div className='flex my-2 justify-between'>
                        <div className='font-light text-sm '>MARKET BELL</div>
                        <div className='font-light text-sm text-rose-300'>2025</div>
                    </div>
                    <ul className='list-disc font-[Inter]'>
                        <li className='md:text-md text-sm'>Designed <span className='text-rose-300 font-bold'>Figma</span> and <span className='text-rose-300 font-bold'>Excalidraw</span> UI designs for 4 different variants of <span className='text-rose-300 font-bold'>Live Activity widget</span> views.</li>
                        <li className='md:text-md text-sm'>Documented the design of the trading hours Live Activity iOS widget <span className='text-rose-300 font-bold'>state diagram</span>, specifying its constant attributes and variable contents.</li>
                    </ul>

                    {/* My Study App
                    <div className='flex my-2 mt-6 justify-between'>
                        <div className='font-bold text-xl'>Blobodoro: Study App (IOS/Android)</div>
                        <div className='font-light  text-rose-300'>Birmingham, UK</div>
                    </div>
                    <div className='flex my-2 justify-between'>
                        <div className='font-light text-sm '>BLOBODORO.COM</div>
                        <div className='font-light text-sm text-rose-300'>Dec. 2023 - Present</div>
                    </div>
                    <ul className='list-disc font-[Inter]'>
                        <li className='md:text-md text-sm'>Employed <span className='text-rose-300 font-bold'>Git</span> along with <span className='text-rose-300 font-bold'>Kanban</span> methodology to efficiently track feature development and project progress.</li>
                        <li className='md:text-md text-sm'>Designed Blobodoro's user interface in <span className='text-rose-300 font-bold'>Figma</span>, employing reusable components for easy iteration and editing of designs.</li>
                        <li className='md:text-md text-sm'>Integrated <span className='text-rose-300 font-bold'>Clerk</span>, a user-friendly <span className='text-rose-300 font-bold'>authentication</span> and user management solution, into Blobodoro using <span className='text-rose-300 font-bold'>React Native</span>, enabling swift implementation of <span className='text-rose-300 font-bold'>sign-up</span>, <span className='text-rose-300 font-bold'>log-in</span>, and <span className='text-rose-300 font-bold'>profile management</span> functionalities within the app.</li>
                        <li className='md:text-md text-sm'>Structured Blobodoro app with a three-page layout in <span className='text-rose-300 font-bold'>React Native</span> with the use of <span className='text-rose-300 font-bold'>Expo router</span>: Aquarium for storing gained fish, Stats page for goal tracking and habit analysis, and a Shop interface for purchasing rewards.</li>
                    </ul> */}

                    

                    {/* Java Backend Project */}
                    <div className='flex my-2 mt-6 justify-between'>
                        <div className='font-bold text-xl'>Java Backend Project with Ticketmaster API</div>
                        <div className='font-light  text-rose-300'>Remote</div>
                    </div>
                    <div className='flex my-2 justify-between'>
                        <div className='font-light text-sm '>WILEY EDGE</div>
                        <div className='font-light text-sm text-rose-300'>2024</div>
                    </div>
                    <ul className='list-disc font-[Inter]'>
                        <li className='md:text-md text-sm'>Developed a backend <span className='text-rose-300 font-bold'>MVC architecture</span> using <span className='text-rose-300 font-bold'>Spring Boot</span> with <span className='text-rose-300 font-bold'>RESTful endpoints</span> for comprehensive <span className='text-rose-300 font-bold'>CRUD operations</span>.</li>
                        <li className='md:text-md text-sm'>Implemented functional <span className='text-rose-300 font-bold'>unit testing</span> with <span className='text-rose-300 font-bold'>JUnit 5</span>, ensuring robust code quality and error handling.</li>
                        <li className='md:text-md text-sm'>Designed suitable data model and persisted data in <span className='text-rose-300 font-bold'>PostgreSQL</span> with <span className='text-rose-300 font-bold'>JPA</span>.</li>
                    </ul>

                    {/* My Website */}
                    <div className='flex my-2 mt-6 justify-between'>
                        <div className='font-bold text-xl'>Personal Website</div>
                        <div className='font-light  text-rose-300'>Birmingham, UK</div>
                    </div>
                    <div className='flex my-2 justify-between'>
                        <div className='font-light text-sm '>KATMILNE.COM</div>
                        <div className='font-light text-sm text-rose-300'>2024</div>
                    </div>
                    <ul className='list-disc font-[Inter]'>
                        <li className='md:text-md text-sm'>Designed in <span className='text-rose-300 font-bold'>Figma</span>, drew own graphics <span className='text-rose-300 font-bold'>using Procreate</span> and styled with cute pink pixel art theme.</li>
                        <li className='md:text-md text-sm'>Developed a personal website with <span className='text-rose-300 font-bold'>Next.js</span> and <span className='text-rose-300 font-bold'>Tailwind CSS</span>, utlising <span className='text-rose-300 font-bold'>page-based routing.</span></li>
                        <li className='md:text-md text-sm'>Ensured <span className='text-rose-300 font-bold'>responsiveness</span> across all screen sizes through <span className='text-rose-300 font-bold'>responsive design principles</span> and rigorous <span className='text-rose-300 font-bold'>testing.</span></li>
                        <li className='md:text-md text-sm'><span className='text-rose-300 font-bold'>Deployed</span> the website on Vercel for efficient hosting and <span className='text-rose-300 font-bold'>continuous deployment</span>.
                        </li>
                    </ul>

                    {/* Swapparel Project */}
                    <div className='flex my-2 mt-6 justify-between'>
                        <div className='font-bold text-xl'>Clothes Swapping Website</div>
                        <div className='font-light  text-rose-300'>Birmingham, UK</div>
                    </div>
                    <div className='flex my-2 justify-between'>
                        <div className='font-light text-sm '>SWAPPAREL</div>
                        <div className='font-light text-sm text-rose-300'>2023</div>
                    </div>
                    <ul className='list-disc font-[Inter]'>
                        <li className='md:text-md text-sm'>Co-designed and implemented Swapparel, a clothes-swapping website with <span className='text-rose-300 font-bold'>Tinder-style swipe functionality</span>.</li>
                        <li className='md:text-md text-sm'>Contributed to <span className='text-rose-300 font-bold'>front-end</span> and <span className='text-rose-300 font-bold'>back-end</span> development, ensuring seamless data communication.</li>
                        <li className='md:text-md text-sm'>Utilized <span className='text-rose-300 font-bold'>Figma</span>, <span className='text-rose-300 font-bold'>HTML</span>, <span className='text-rose-300 font-bold'>CSS</span>, <span className='text-rose-300 font-bold'>JavaScript</span>, and <span className='text-rose-300 font-bold'>React</span>, practicing <span className='text-rose-300 font-bold'>Scrum</span>, <span className='text-rose-300 font-bold'>CI/CD</span>, and <span className='text-rose-300 font-bold'>pair programming</span>.</li>
                    </ul>
                </section>

                
                {/* Work Experience */}
                <section id="work" className='font-[inter] w-full mt-2'>
                    <h2 className='md:text-4xl text-3xl font-bold font-[sono] md:my-6'>Work Experience</h2>
                    <div className='flex my-2 justify-between'>
                        <div className='font-bold '>Nordstrom Rack</div>
                        <div className='font-light  text-rose-300'>Tigard, OR</div>
                    </div>
                    <div className='flex my-2 justify-between'>
                        <div className='font-light text-sm text-rose-300'>Logistic Processor</div>
                        <div className='font-light text-sm text-rose-300'>2025</div>
                    </div>
                    <ul className='list-disc font-[Inter]'>
                        <li className='my-4 md:text-md text-sm'>Consistently ranked in the top 5 for fulfillment pick rate in Nordstrom Rack’s Pacific North‑West Region, exceeding performance targets through
                            high speed and accuracy.
                        </li>
                        <li className='my-4 md:text-md text-sm'>Followed a systematic process to locate, verify, and pack items, demonstrating high attention to detail for error‑free work.
                        </li>
                        <li className='my-4 md:text-md text-sm'>Proactively identified workflow inefficiencies, developing and sharing improved picking strategies with colleagues to boost overall team perforance.
                        </li>
                        <li className='my-4 md:text-md text-sm'>Acted as the first line of quality assurance, verifying each item for defects and condition before packing to eliminate errors and maintain high customer satisfaction.
                        </li>                   
                    </ul>

                    <div className='flex my-2 justify-between'>
                        <div className='font-bold '>HM Revenue and Customs (HMRC)</div>
                        <div className='font-light text-rose-300'>Cardiff, UK</div>
                    </div>
                    <div className='flex my-2 justify-between'>
                        <div className='font-light text-sm text-rose-300'>Customer Service Advisor</div>
                        <div className='font-light text-sm text-rose-300'>2024</div>
                    </div>
                    <ul className='list-disc font-[Inter]'>
                        <li className='my-4 md:text-md text-sm'> Followed strict protocols to resolve customer inquiries, ensuring all actions were compliant with established regulations and procedures.</li>
                        <li className='my-4 md:text-md text-sm'> Maintained and updated records using multiple systems, ensuring data accuracy for process compliance and historical reference. </li>
                        <li className='my-4 md:text-md text-sm'> Adapted communication and problem‑solving approaches to meet diverse individual needs, consistently delivering clear and effective solutions.</li>

                    </ul>
                </section>

                {/* Education paragraph */}
                <section id="education" className='font-[inter] w-full mt-2'>
                    <h2 className='md:text-4xl text-3xl font-bold font-[sono] md:my-6'>Education</h2>
                    <div className='flex my-2 justify-between'>
                        <div className='font-bold '>University of Birmingham</div>
                        <div className='font-light  text-rose-300'>Birmingham, UK</div>
                    </div>
                    <div className='flex my-2 justify-between'>
                        <div className='font-light text-sm '>BSc Computer Science - 2:1</div>
                        <div className='font-light text-sm text-rose-300'>Sep. 2020 - Jun 2023</div>
                    </div>
                    <ul className='list-disc font-[Inter]'>
                        <li className='my-4 md:text-md text-sm'> <span className='font-bold '>Final Year Project:</span> Positional Transformation of Pixel Art Character Sprites using Pix2Pix
                            Where I investigated the Pix2Pix model’s capabilities in character positional transformation for pixel art, focusing on
                            the impact of hyper parameter optimisation on the output image quality with the goal of generating indistinguishable
                            pixel images for use in AI pixel character animation.
                        </li>
                        <li className='my-4 md:text-md text-sm'><span className='font-bold'>Human‑Computer Interaction Design Project:</span> All‑in‑One Smart Bike Gadget
                            In collaboration with a team, I led comprehensive <span className='text-rose-300 font-bold'>user research</span> through interviews and questionnaires, employing
                            a <span className='text-rose-300 font-bold'>human‑centered design</span> approach. Our project involved conceptualising, designing, and <span className='text-rose-300 font-bold'>prototyping</span> a cutting‑
                            edge bike attachment. Throughout the process, we leveraged various tools such as <span className='text-rose-300 font-bold'>UML diagrams</span>, <span className='text-rose-300 font-bold'>storyboarding</span>,
                            <span className='text-rose-300 font-bold'>Figma</span> and <span className='text-rose-300 font-bold'>iterative design</span> methodologies to create an intuitive and <span className='text-rose-300 font-bold'>user‑centric</span> product.
                        </li>
                        <li className='my-4 md:text-md text-sm'><span className='font-bold'>Full stack website Group Project:</span> Clothes Swapping Website
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
                        <li className='my-4 md:text-md text-sm'> Maths ‑ A*, Biology ‑ A*, Physics ‑ A, Art ‑ A
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
                        <li className='my-4 md:text-md text-sm'> 13 GCSEs, including Maths (A*) and English (A)
                        </li>
                        
                        
                    </ul>
                </section>

                

            </main>
            
            {/* Back to Top Button */}
            <div className='flex justify-center my-8'>
                <a href="#top" className='px-6 py-3 bg-rose-50 border-2 border-zinc-800 font-[VT323] text-xl tracking-wider transition duration-300 hover:bg-rose-100 hover:shadow-custom'>
                    ↑ Back to Top
                </a>
            </div>

            <Footer />
        </>
        
    );

}
export default Resume;
