import Image from 'next/image'
import React from 'react'
import { Button } from "@/components/ui/button"
import SocialIcons from '@/components/SocialIcons'
import { Download } from 'lucide-react'

const About = () => {

    return (
        <>
            <section id='about' className='bg-white '>
                <div>
                    <div className='flex flex-col items-center'>
                        <h2 className='capitalize text-4xl sm:text-5xl font-bold py-20 text-center leading-[4rem]'>About <span className='text-blue-800'> Me </span></h2>

                        <div className='flex flex-col md:flex-row gap-y-4 gap-x-2 md:px-10 items-center'>
                            <div
                                data-aos="fade-right"
                                data-aos-duration="800"
                                data-aos-offset="0"
                                className='w-full md:w-1/2 order-2 md:order-1'>
                                <Image className='my-image w-2/3 sm:w-1/2 md:w-2/3 self-center mx-auto' src="/assets/myImage.jpg" alt="Web Developer - Abdul Rahman Moin" width="1000" height="1000" />
                            </div>
                            <div className='overflow-hidden w-full md:w-1/2 order-1 md:order-2 flex flex-col gap-y-4 px-6 md:px-0 text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl'>
                                <p
                                    data-aos="fade-left"
                                    data-aos-duration="800"
                                    data-aos-offset="100"
                                >I&apos;m a <strong>Next.js developer</strong> specializing in building <strong>scalable, high-performance web applications.</strong> I help businesses create <em>fast, SEO-friendly, and maintainable web solutions</em> using modern technologies like  <strong>TypeScript, Mongoose, MongoDB, Tailwind CSS, Shadcn UI, and Aceternity UI.</strong></p>
                                <p
                                    data-aos="fade-left"
                                    data-aos-duration="800"
                                    data-aos-offset="100"
                                >I focus on <strong>RESTful APIs</strong>, efficient <strong>database design</strong>, and optimized <strong>UI/UX</strong>, ensuring that every project is <em>responsive, secure, and built for growth</em>. Whether it&apos;s an <strong>e-commerce platform</strong>, <strong>SaaS application</strong>, or a <strong>custom business solution</strong>, I deliver <strong>clean, maintainable, and production-ready code</strong>.</p>
                                <p
                                    data-aos="fade-left"
                                    data-aos-duration="800"
                                    data-aos-offset="100"
                                >If you&apos;re looking for a <strong>skilled Next.js developer</strong> to <em>bring your ideas to life,</em> let&apos;s connect and build something great together!</p>

                                <a
                                    href="/assets/resume_abdul_rahman_moin_Next.js_developer.pdf"
                                    download
                                    data-aos="fade-left"
                                    data-aos-duration="800"
                                    data-aos-offset="50"
                                >
                                    <Button variant="default" className="w-36 text-xs sm:text-base sm:w-52 bg-blue-700 hover:bg-blue-800 hover:shadow-2xl">
                                        Download Resume <Download />
                                    </Button>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className='py-10'>
                        <SocialIcons className='bg-transparent ' />
                    </div>
                </div>
            </section>
        </>
    )
}

export default About