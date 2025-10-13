import Navigation from '../components/Layout/Navigation';
import Footer from '../components/Layout/Footer';
import Image from 'next/image';
import Link from 'next/link';
import marketBellImg from '../../public/img/market-bell.png';


const MarketBell = () => {
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
                        Market Bell
                    </h1>
                    <p className='text-xl text-gray-600 mb-3'>
                        iOS App - In Production
                    </p>
                    <div className='flex items-center gap-2 text-sm text-gray-600'>
                        <span className='font-semibold'>Developers:</span>
                        <span>Antonie Huang & Kat Milne</span>
                    </div>
                </div>

                {/*Image */}
                <div className='w-full max-w-4xl mb-12'>
                    <Image 
                        src={marketBellImg} 
                        alt="Market Bell" 
                        className="w-full h-auto rounded-3xl border-4 border-zinc-800 shadow-custom"
                    />
                </div>

                {/* Project Overview */}
                <section className='w-full max-w-4xl mb-12'>
                    <h2 className='text-3xl font-bold font-[VT323] mb-4'>Project Overview</h2>
                    <p className='text-lg mb-4'>
                        Market Bell is a worldwide market exchange open/close time tracker designed to help traders and investors stay on top of global market hours. With live notifications, you'll never miss a trade opportunity again.
                    </p>
                    <p className='text-lg'>
                        The app provides real-time updates across different time zones, ensuring you're always in sync with markets worldwide, right from your iPhone.
                    </p>
                </section>

                {/* Current Progress */}
                <section className='w-full max-w-4xl mb-12'>
                    <h2 className='text-3xl font-bold font-[VT323] mb-4'>Current Progress</h2>
                    <div className='bg-rose-50 border-4 border-zinc-800 rounded-3xl p-6 shadow-custom'>
                        <ul className='space-y-4'>
                            <li className='flex items-start'>
                                <span className='text-2xl mr-3'>✅</span>
                                <div>
                                    <h3 className='font-bold text-lg'>Core Concept & Planning</h3>
                                    <p className='text-gray-700'>App concept finalized with key features mapped out</p>
                                </div>
                            </li>
                            <li className='flex items-start'>
                                <span className='text-2xl mr-3'>🎨</span>
                                <div>
                                    <h3 className='font-bold text-lg'>Design Phase</h3>
                                    <p className='text-gray-700'>Working on UI/UX designs in Figma</p>
                                </div>
                            </li>
                            <li className='flex items-start'>
                                <span className='text-2xl mr-3'>📱</span>
                                <div>
                                    <h3 className='font-bold text-lg'>Logo & Branding</h3>
                                    <p className='text-gray-700'>Creating app icon and brand identity</p>
                                </div>
                            </li>
                            <li className='flex items-start'>
                                <span className='text-2xl mr-3'>⏳</span>
                                <div>
                                    <h3 className='font-bold text-lg'>Development</h3>
                                    <p className='text-gray-700'>iOS app development coming soon</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </section>

                {/* Design Showcase */}
                <section className='w-full max-w-4xl mb-12'>
                    <h2 className='text-3xl font-bold font-[VT323] mb-4'>Design & Visuals</h2>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                        {/* Figma Designs Placeholder */}
                        <div className='border-4 border-zinc-800 rounded-3xl p-8 bg-white shadow-custom flex flex-col items-center justify-center min-h-[300px]'>
                            <h3 className='font-bold text-xl mb-2 text-center'>Figma Designs</h3>
                            <p className='text-gray-600 text-center'>UI/UX mockups coming soon</p>
                            <div className='mt-4 text-6xl'>🎨</div>
                        </div>

                        {/* Logo Design Placeholder */}
                        <div className='border-4 border-zinc-800 rounded-3xl p-8 bg-white shadow-custom flex flex-col items-center justify-center min-h-[300px]'>
                            <h3 className='font-bold text-xl mb-2 text-center'>Logo Design</h3>
                            <p className='text-gray-600 text-center'>App icon & branding in progress</p>
                            <div className='mt-4 text-6xl'>📱</div>
                        </div>
                    </div>
                </section>

                {/* Future Plans */}
                <section className='w-full max-w-4xl mb-12'>
                    <h2 className='text-3xl font-bold font-[VT323] mb-4'>Future Plans & Features</h2>
                    <div className='space-y-4'>
                        <div className='border-4 border-zinc-800 rounded-2xl p-6 bg-white shadow-custom'>
                            <h3 className='font-bold text-lg mb-2'>📊 Market Coverage</h3>
                            <p className='text-gray-700'>Support for major global exchanges including NYSE, NASDAQ, LSE, TSE, and more</p>
                        </div>
                        <div className='border-4 border-zinc-800 rounded-2xl p-6 bg-white shadow-custom'>
                            <h3 className='font-bold text-lg mb-2'>🔔 Smart Notifications</h3>
                            <p className='text-gray-700'>Customizable alerts for market open, close, and pre/post-market sessions</p>
                        </div>
                        <div className='border-4 border-zinc-800 rounded-2xl p-6 bg-white shadow-custom'>
                            <h3 className='font-bold text-lg mb-2'>🌍 Time Zone Intelligence</h3>
                            <p className='text-gray-700'>Automatic conversion and tracking across multiple time zones</p>
                        </div>
                        <div className='border-4 border-zinc-800 rounded-2xl p-6 bg-white shadow-custom'>
                            <h3 className='font-bold text-lg mb-2'>✨ Live Activities</h3>
                            <p className='text-gray-700'>Dynamic Island and Lock Screen widgets for at-a-glance market status</p>
                        </div>
                    </div>
                </section>

                {/* Call to Action */}
                <section className='w-full max-w-4xl mb-20'>
                    <div className='border-4 border-zinc-800 rounded-3xl p-8 bg-rose-50 shadow-custom text-center'>
                        <h2 className='text-3xl font-bold font-[VT323] mb-4'>Join the Waitlist</h2>
                        <p className='text-lg mb-6'>
                            Get notified on progress and be the first to try/beta test Market Bell
                        </p>
                        <Link 
                            href="https://www.marketbell.app/" 
                            target="_blank"
                            className='inline-flex items-center gap-2 px-8 py-4 bg-white border-4 border-zinc-800 rounded-lg hover:bg-gray-50 hover:shadow-custom transition duration-300 text-xl font-[VT323]'
                        >
                            Join Waitlist →
                        </Link>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}

export default MarketBell;
