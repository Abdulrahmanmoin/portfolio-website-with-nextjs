'use client'

import React, { useState } from 'react'
import ProjectCard from './ProjectCard'
import SocialIcons from './SocialIcons'
import { Button } from './ui/button'

const Projects = () => {

  const [btnCategory, setBtnCategory] = useState("Next.js (Full Stack)")
  const [categories, setCategories] = useState([
    {
      categoryName: "Next.js (UI only)",
      bgColor: "bg-gray-200 text-black"
    },
    {
      categoryName: "Next.js (Full Stack)",
      bgColor: "bg-blue-800 text-white"
    },
    {
      categoryName: "All",
      bgColor: "bg-gray-200 text-black"
    }
  ])


  const projectSecData = [
    {
      title: "Learning Studio",
      category: "Next.js (UI only)",
      description: "A learning platform built with Next.js as my first project with this framework. Implemented app routing and styled the interface using Aceternity UI for a polished look with enhanced components.",
      imageSrc: "/assets/learningStudio.png",
      githubLink: "https://github.com/Abdulrahmanmoin/learning-studio-with-nextjs",
      liveDemoLink: "https://learning-studio-with-nextjs.vercel.app/"
    },
    {
      title: "Faceless Messages",
      category: "Next.js (Full Stack)",
      description: "Faceless Messages is a full-stack application developed using Next.js, enabling anonymous messaging in a secure and intuitive environment. Built with MongoDB for data storage and Next Auth for authentication.",
      imageSrc: "/assets/facelessMessages.png",
      githubLink: "https://github.com/Abdulrahmanmoin/anonymous-message-nextjs",
      liveDemoLink: "https://faceless-message.vercel.app/"
    },
    {
      title: "Car Rental Website",
      category: "Next.js (UI only)",
      description: "Morent is a modern car rental platform built with Next.js. It offers a sleek UI and efficient state management for a smooth browsing experience. Users can explore cars with a responsive and intuitive design.",
      imageSrc: "/assets/morent.png",
      githubLink: "https://github.com/Abdulrahmanmoin/anonymous-message-nextjs",
      liveDemoLink: "https://morent-car-rental-ar.vercel.app/"
    },
    {
      title: "The Twitter Clone",
      category: "Next.js (Full Stack)",
      description: "Twitter Clone is a full-stack social media app built with Next.js. It features user authentication, real-time posts, and interactive engagement for a seamless experience. Designed with a clean UI and smooth performance.",
      imageSrc: "/assets/twitter.png",
      githubLink: "https://github.com/Abdulrahmanmoin/twitter-next.js",
      liveDemoLink: "https://twitterzone.vercel.app/"
    }
  ]

  interface ProjectData {
    title: string
    category: string
    description: string
    imageSrc: string
    githubLink: string
    liveDemoLink: string
  }

  const handleSelectedButtonBgColor = (categoryName: string) => {
    setBtnCategory(categoryName)

    setCategories(prevCategories =>
      prevCategories.map(category =>
        category.categoryName === categoryName
          ? { ...category, bgColor: "bg-blue-800 text-white" } // Change the clicked button's color
          : { ...category, bgColor: "bg-gray-200 text-black" } // Reset other buttons' colors
      )
    )

  }

  return (
    <section id='projects' className='pb-20 bg-white'>
      <div>
        <div className='flex flex-col items-center justify-center'>
          <h2 className='capitalize text-4xl sm:text-5xl font-bold py-20 text-center leading-[4rem]'>My Creative  <span className='text-blue-800'> Portfolio </span> Section </h2>


          {/*  buttons */}
          <div className='flex gap-14 flex-wrap justify-center'>
            {categories.map(category => (
              <Button
                key={category.categoryName}
                variant="outline"
                onClick={() => handleSelectedButtonBgColor(category.categoryName)}
                className={`${category.bgColor} border-[1px] border-black hover:bg-blue-800 hover:text-white font-semibold px-7 py-3 rounded-xl `}
              >{category.categoryName}</Button>
            ))}
          </div>

          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-14 gap-y-14 mt-6 mx-8 sm:mx-8  md:mx-20 lg:mx-14'>{((btnCategory === "All")) &&
            projectSecData.map((item: ProjectData) => (
              <ProjectCard
                key={item.title}
                objFromArr={item} />
            ))}
          </div>

          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-14 gap-y-14 mt-6 mx-8 md:mx-20 lg:mx-14'>{(!(btnCategory === "All")) &&
            (projectSecData.filter(((arr: { category: string }) => (arr.category === btnCategory))))
              .map((item: ProjectData) => (
                <ProjectCard
                  key={item.title}
                  objFromArr={item} />
              ))}
          </div>
        </div>
        <div className='pt-10 pb-5'>
          <SocialIcons className='bg-transparent ' />
        </div>
      </div>
    </section>
  )
}

export default Projects
