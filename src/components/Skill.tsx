import Image from "next/image"
import SocialIcons from "./SocialIcons"

const Skill = () => {


    const skillsData = [
        {
            title: "Tailwind CSS",
            imageSrc: "/assets/tailwind.png"
        },
        {
            title: "Next.js",
            imageSrc: "/assets/nextjs.png"
        },
        {
            title: "Typescript",
            imageSrc: "/assets/typescript.png"
        },
        {
            title: "Git",
            imageSrc: "/assets/git.png"
        },
        {
            title: "Mongo DB",
            imageSrc: "/assets/mongoDB.png"
        },
        {
            title: "Shadcn UI",
            imageSrc: "/assets/shadcnUi.png"
        },
        {
            title: "React.js",
            imageSrc: "/assets/react.png"
        },
        {
            title: "Next Auth",
            imageSrc: "/assets/nextAuth.png"
        },       
        {
            title: "Aceternity UI",
            imageSrc: "/assets/aceternityUI.png"
        },
        
    ]

    return (
        <section id="skills" >
            <div className="flex flex-col">
                <h2 className='capitalize text-4xl sm:text-5xl font-bold pt-20 pb-10 md:py-16 text-center leading-[4rem]'>Sk<span className="text-blue-700">il</span>ls</h2>
                <div
                    className="grid grid-cols-2 sm:grid-cols-3 gap-y-5 gap-x-5 sm:gap-x-14 md:gap-x-16 lg:gap-x-20 pb-10 self-center justify-center flex-wrap"
                >
                    {skillsData.map(item => (
                        <div
                            key={item.title}
                            data-aos="zoom-in-up"
                            data-aos-offset="0"
                            data-aos-anchor-placement="center-bottom"
                            data-aos-duration="400"

                            className="flex flex-col items-center mx-0 mb-12 w-24"
                        >
                            <div className="bg-gray-100  rounded-full flex items-center justify-center">
                                <Image className="w-16 lg:w-20 p-2 rounded-full" width={1000} height={1000} src={item.imageSrc} alt={item.title} />
                            </div>
                            <h3 className="text-xs lg:text-sm font-bold text-gray-500 pt-3">{item.title}</h3>
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
