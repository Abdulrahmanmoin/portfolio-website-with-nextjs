import Image from 'next/image'
import React from 'react'
import AOSWrapper from '@/components/AOSWrapper'
import SocialIcons from '@/components/SocialIcons'

const About = () => {

    const aboutSecData = [
        {
            title: "Fluency With Dev Tools",
            description: "Gaining familiarity with Dev Tools like VSCode and Git, which assist in tasks like writing, debugging, and managing code effectively.",
            imageSrc: "/assets/devTools.png"
        },
        {
            title: "Frontend Development",
            description: "Learning to build clean and efficient UI designs, focusing on creating reusable code and following best practices and standards.",
            imageSrc: "/assets/frontendDevelopment.png"
        },
        {
            title: "Backend Development",
            description: "Building a strong foundation in scalable and maintainable web applications using Express.js.",
            imageSrc: "/assets/backendDevelopment.png"
        },
        {
            title: "Database Technologies",
            description: "Currently learning to design and optimize database schemas, write efficient queries, and understand indexing strategies.",
            imageSrc: "/assets/databaseTechnologies.png"
        }
    ]

    return (
        <>
            <section id='about' className='bg-white '>
                <div>
                    <div className='flex flex-col items-center'>
                        <h2 className='capitalize text-4xl sm:text-5xl font-bold py-20 text-center leading-[4rem]'>I Know that <span className='text-blue-800'> Good Apps </span> <br /> means Good Business</h2>

                        <div className='grid sm:grid-cols-2 xl:grid-cols-4 gap-x-14 gap-y-14'>{aboutSecData.map(item => (

                            <AOSWrapper
                                key={item.title}
                            >
                                <div
                                    data-aos="zoom-in"
                                    data-aos-easing="linear"
                                    data-aos-duration="500"
                                    className='flex flex-col gap-y-4 items-center px-4 py-3 sm:px-0 w-60 hover:scale-110 transition transform duration-300 ease-in-out'>
                                    <Image className='w-52' width="1000" height="1000" src={item.imageSrc} alt={item.title} />
                                    <h2 className='text-lg font-bold self-start'>{item.title}</h2>
                                    <p className='text-gray-500 text-sm px-4 pl-0 self-start'>{item.description}</p>
                                </div>
                            </AOSWrapper>
                        ))}</div>
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
