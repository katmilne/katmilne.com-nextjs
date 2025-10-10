import Navigation from '../components/Layout/Navigation';
import Footer from '../components/Layout/Footer';
import Image from 'next/image';
import Link from 'next/link';
import blobodoroImg from '../../public/img/blobfish.png';
import blobWireframe from '../../public/img/blob-wireframe.png';
import blobLandingPage from '../../public/img/blob-landing-page.png';
import blobHighFidelity from '../../public/img/blob-high-fidelity.png';
import blobHighFidelityComponents from '../../public/img/blob-high-fidelity-components.png';
import blobHighFidelityComponents2 from '../../public/img/blob-high-fidelity-components2.png';

const Blobodoro = () => {
    return (
        <>
            <Navigation />
            <main className='flex flex-col items-center justify-center mx-auto mt-10 px-4'>
                {/* Title */}
                <div className='w-full max-w-4xl mb-10'>
                    <Link href="/projects" className=' font-[VT323] items-center gap-2 px-6 py-3 bg-rose-50 border-2 border-zinc-800 hover:bg-rose-100 hover:shadow-custom transition duration-300'>
                        ← Back to Projects
                    </Link>
                    <h1 className='text-5xl lg:text-6xl font-bold tracking-wider mt-4 mb-4'>
                        Blobodoro
                    </h1>
                    <p className='text-xl text-gray-600 mb-3'>
                        Design Project - Pomodoro Timer App
                    </p>
                    <div className='flex items-center gap-2 text-sm text-gray-600'>
                        <span className='font-semibold'>Designer:</span>
                        <span>Kat Milne</span>
                    </div>
                </div>

                {/*Hero Image */}
                <div className='w-full max-w-xs mb-3 mx-auto'>
                    <Image 
                        src={blobodoroImg} 
                        alt="Blobodoro" 
                        className="w-full h-auto"
                    />
                </div>

                {/* Project Overview */}
                <section className='w-full max-w-4xl mb-12'>
                    <h2 className='text-3xl font-bold font-[VT323] mb-4'>Project Overview</h2>
                    <p className='text-lg mb-4'>
                        Blobodoro is a Pomodoro timer app concept that combines productivity with gamification. Users can focus on their work while collecting adorable fish companions that motivate and reward their dedication.
                    </p>
                    <p className='text-lg'>
                        The app features customizable focus timers, break reminders, and a collection system that makes time management fun and engaging.
                    </p>
                </section>

                {/* Design Concepts */}
                <section className='w-full max-w-4xl mb-12'>
                    <h2 className='text-3xl font-bold font-[VT323] mb-4'>Design Concepts</h2>
                    <div className='bg-rose-50 border-4 border-zinc-800 rounded-3xl p-6 shadow-custom'>
                        <ul className='space-y-4'>
                            <li className='flex items-start'>
                                <span className='text-2xl mr-3'>⏱️</span>
                                <div>
                                    <h3 className='font-bold text-lg'>Customizable Pomodoro Timer</h3>
                                    <p className='text-gray-700'>Set work and break intervals that fit your workflow, with visual progress indicators</p>
                                </div>
                            </li>
                            <li className='flex items-start'>
                                <span className='text-2xl mr-3'>🐟</span>
                                <div>
                                    <h3 className='font-bold text-lg'>Collectible Fish Companions</h3>
                                    <p className='text-gray-700'>Earn unique fish as you complete focus sessions - each with their own personality</p>
                                </div>
                            </li>
                            <li className='flex items-start'>
                                <span className='text-2xl mr-3'>📊</span>
                                <div>
                                    <h3 className='font-bold text-lg'>Progress Tracking</h3>
                                    <p className='text-gray-700'>View your productivity stats and see how many sessions you've completed</p>
                                </div>
                            </li>
                            <li className='flex items-start'>
                                <span className='text-2xl mr-3'>🎨</span>
                                <div>
                                    <h3 className='font-bold text-lg'>Calming Aesthetic</h3>
                                    <p className='text-gray-700'>Soft colors and smooth animations create a peaceful, distraction-free environment</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </section>

                {/* Design Showcase */}
                <section className='w-full max-w-4xl mb-12'>
                    <h2 className='text-3xl font-bold font-[VT323] mb-4'>Design Process</h2>
                    <p className='text-gray-600 mb-8'>From wireframes to high-fidelity mockups</p>
                    
                    {/* Low Fidelity - Wireframes */}
                    <div className='mb-10'>
                        <h3 className='font-bold text-2xl mb-4 font-[VT323]'>📝 Low Fidelity Wireframes</h3>
                        <div className='border-4 border-zinc-800 rounded-3xl overflow-hidden bg-white shadow-custom mb-3'>
                            <Image 
                                src={blobWireframe} 
                                alt="Blobodoro Wireframes" 
                                className="w-full h-auto"
                            />
                        </div>
                        <p className='text-sm text-gray-700'>Initial wireframe sketches exploring the app layout, timer interface, and fish collection system</p>
                    </div>

                    {/* UI Components */}
                    <div className='mb-10'>
                        <h3 className='font-bold text-2xl mb-4 font-[VT323]'>🎨 UI Components</h3>
                        <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mb-3'>
                            <div>
                                <Image 
                                    src={blobHighFidelityComponents} 
                                    alt="Blobodoro UI Components 1" 
                                    className="w-full h-auto"
                                />
                                <p className='text-sm font-semibold text-center mt-2'>Timer Components</p>
                            </div>
                            <div>
                                <Image 
                                    src={blobHighFidelityComponents2} 
                                    alt="Blobodoro UI Components 2" 
                                    className="w-full h-auto"
                                />
                                <p className='text-sm font-semibold text-center mt-2'>Fish Collection</p>
                            </div>
                        </div>
                        <p className='text-sm text-gray-700'>Detailed component library including buttons, timers, and character elements</p>
                    </div>

                    {/* High Fidelity Mockups */}
                    <div className='mb-10'>
                        <h3 className='font-bold text-2xl mb-4 font-[VT323]'>✨ High Fidelity Mockups</h3>
                        <div className='border-4 border-zinc-800 rounded-3xl overflow-hidden bg-white shadow-custom mb-3'>
                            <Image 
                                src={blobHighFidelity} 
                                alt="Blobodoro High Fidelity Mockup" 
                                className="w-full h-auto"
                            />
                        </div>
                        <p className='text-sm text-gray-700'>Complete app screens with final colors, typography, and visual design</p>
                    </div>

                    {/* Landing Page Design */}
                    <div className='mb-10'>
                        <h3 className='font-bold text-2xl mb-4 font-[VT323]'>🌐 Landing Page Design</h3>
                        <div className='border-4 border-zinc-800 rounded-3xl overflow-hidden bg-white shadow-custom mb-3'>
                            <Image 
                                src={blobLandingPage} 
                                alt="Blobodoro Landing Page" 
                                className="w-full h-auto"
                            />
                        </div>
                        <p className='text-sm text-gray-700'>Marketing landing page design showcasing the app's features and aesthetic</p>
                    </div>
                </section>

                {/* Key Features */}
                <section className='w-full max-w-4xl mb-12'>
                    <h2 className='text-3xl font-bold font-[VT323] mb-4'>Key Features</h2>
                    <div className='space-y-4'>
                        <div className='border-4 border-zinc-800 rounded-2xl p-6 bg-white shadow-custom'>
                            <h3 className='font-bold text-lg mb-2'>⏰ Focus Sessions</h3>
                            <p className='text-gray-700'>Traditional 25-minute work sessions with 5-minute breaks, fully customizable</p>
                        </div>
                        <div className='border-4 border-zinc-800 rounded-2xl p-6 bg-white shadow-custom'>
                            <h3 className='font-bold text-lg mb-2'>🏆 Rewards System</h3>
                            <p className='text-gray-700'>Unlock new fish companions as you complete sessions and maintain streaks</p>
                        </div>
                        <div className='border-4 border-zinc-800 rounded-2xl p-6 bg-white shadow-custom'>
                            <h3 className='font-bold text-lg mb-2'>📈 Statistics</h3>
                            <p className='text-gray-700'>Track your productivity with detailed insights and achievement milestones</p>
                        </div>
                        <div className='border-4 border-zinc-800 rounded-2xl p-6 bg-white shadow-custom'>
                            <h3 className='font-bold text-lg mb-2'>🔕 Distraction-Free</h3>
                            <p className='text-gray-700'>Minimalist interface that helps you stay focused without unnecessary clutter</p>
                        </div>
                    </div>
                </section>

                {/* Call to Action */}
                <section className='w-full max-w-4xl mb-20'>
                    <div className='border-4 border-zinc-800 rounded-3xl p-8 bg-rose-50 shadow-custom text-center'>
                        <h2 className='text-3xl font-bold font-[VT323] mb-4'>Design Project</h2>
                        <p className='text-lg mb-6'>
                            This is a conceptual design project created in Figma, exploring gamification in productivity apps.
                        </p>
                        <Link 
                            href="https://next-blobodoro-1zvbraj8f-katmilnes-projects.vercel.app/" 
                            target="_blank"
                            className='inline-flex items-center gap-2 px-8 py-4 bg-white border-4 border-zinc-800 rounded-lg hover:bg-gray-50 hover:shadow-custom transition duration-300 text-xl font-[VT323]'
                        >
                            Visit Site →
                        </Link>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}

export default Blobodoro;
