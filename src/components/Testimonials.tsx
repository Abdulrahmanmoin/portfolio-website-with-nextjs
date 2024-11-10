import Image from 'next/image'

import { Poppins } from 'next/font/google';

const poppins = Poppins({
    weight: ['400', '600', '700'],
    subsets: ['latin'],
});

const Testimonials = () => {

    const testimonialsData = [
        {
            text:
                "Abdul Rahman Moin has shown remarkable growth in web development with Next.js, building projects that reflect a solid understanding of high-performance applications. His skill in developing interactive user interfaces stands out, creating engaging user experiences. With a keen interest across multiple technologies, Abdul Rahman Moin has proven himself as a dedicated and capable developer.",
            imgSrc: "/assets/ameenAlam.png",
            name: "Ameen Alam",
            profession: "Founder & CTO of Doblier Technology"
        }, {
            text:
                "Teaching Next.js to Abdul Rahman Moin has been a rewarding experience. His grasp of the framework shows great potential in creating smooth, interactive sites. He built an impressive learning studio, navigating app routing and styling with Aceternity UI. His curiosity and enthusiasm are commendable. Excited to see his future projects grow!",
            imgSrc: "/assets/ziaKhan.png",
            name: "Zia Khan",
            profession: "Founder of Pana Cloud"
        },
        {
            text:
                "Abdul Rahman Moin has an impressive talent for transforming designs into functional, seamless applications. His skill in Next.js and CSS shines through in every pixel-perfect detail. With Tailwind CSS, he combines aesthetics and functionality beautifully, adding a unique touch to each project. His technical precision and dedication make him a valuable contributor to any development team.",
            imgSrc: "/assets/qasim.png",
            name: "Muhammad Qasim",
            profession: "Chief Data Scientist - Cancer Clarity LLC"
        }
    ]

    const disclaimerText: string = "Disclaimer: The testimonial is purely fictional."

    return (
        <section id='testimonials' className='mb-20 overflow-hidden'>
            <div>
                <div className='flex flex-col items-center justify-center'>
                    <h2 className='capitalize text-4xl sm:text-5xl font-bold py-20 text-center leading-[4rem]'>Words that are <span className='text-blue-800'> Trustable </span></h2>

                    <div className='flex gap-x-10 gap-y-8 xl:flex-nowrap flex-wrap justify-center'>
                        {testimonialsData.map(testimonial => (
                            <div
                                key={testimonial.name}
                                className='testimonial-box w-80 sm:w-96 flex flex-col sm:grid grid-cols-2 mx-5 gap-x-0 shadow-xl bg-white rounded-lg border  justify-center items-center'>
                                <div className='w-16 sm:w-24'>
                                    <Image className='rounded-full w-16 sm:w-24 mx-1' src={testimonial.imgSrc} alt={testimonial.name} width={1000} height={1000} />
                                </div>
                                <div className='flex flex-col sm:-ml-24 self-center '>
                                    <h5 className={`testimonial-text ${poppins.className} font-medium py-5 px-8`}>
                                        {testimonial.text}
                                    </h5>

                                    <h5 className='testimonial-name text-blue-700 font-bold py-1 px-8  sm:px-8 '>
                                        {testimonial.name}
                                    </h5>

                                    <h6 className='testimonial-profession text-sm  px-8  sm:px-8  pb-4 sm:pb-4'>
                                        {testimonial.profession}
                                    </h6>

                                    <p className='disclaimer-text text-gray-500 text-xs py-3 px-8 sm:py-0 sm:px-8 pb-2 sm:pb-2'>{disclaimerText}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </section>
    )
}

export default Testimonials
