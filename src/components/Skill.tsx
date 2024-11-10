import Image from "next/image"
import SocialIcons from "./SocialIcons"

const Skill = () => {


    const skillsData = [
        {
            title: "Tailwind CSS",
            imageSrc: "/assets/tailwind.png"
        },
        {
            title: "Git",
            imageSrc: "/assets/git.png"
        },
        {
            title: "React",
            imageSrc: "/assets/react.png"
        },
        {
            title: "Next.js",
            imageSrc: "/assets/nextjs.png"
        },
        {
            title: "Aceternity UI",
            imageSrc: "/assets/aceternityUI.png"
        },
        {
            title: "Typescript",
            imageSrc: "/assets/typescript.png"
        }
    ]

    return (
        <section id="skills" className='bg-white'>
            <div className="flex flex-col">
                <h2 className='capitalize text-4xl sm:text-5xl font-bold py-20 text-center leading-[4rem]'>Skills</h2>
                <div data-aos="zoom-in-up"
                    data-aos-anchor-placement="center-bottom"
                    className="grid grid-cols-2 sm:grid-cols-3 md:mx-28 lg:mx-60 gap-y-10 gap-x-0 justify-center flex-wrap">
                    {skillsData.map(item => (
                        <div
                            key={item.title}
                            data-aos="zoom-in-up"
                            data-aos-anchor-placement="center-bottom"
                            className="flex flex-col items-center mx-0 mb-12">
                            <div className="bg-gray-100 h-28 w-28 rounded-full flex items-center justify-center">
                                <Image className="w-20 rounded-full" width={1000} height={1000} src={item.imageSrc} alt={item.title} />
                            </div>
                            <h3 className="text-md text-gray-500 pt-3">{item.title}</h3>
                        </div>
                    ))}
                </div>
            </div>

            <div className='-pt-5 -mt-10 pb-5'>
                <SocialIcons className='bg-transparent ' />
            </div>
        </section>
    )
}

export default Skill
