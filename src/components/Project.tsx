'use client'

import React, { useEffect, useState } from 'react'
import ProjectCard from './ProjectCard'
import SocialIcons from './SocialIcons'

const Project = () => {

  const [btnCategory, setBtnCategory] = useState("All")

  useEffect(() => {

  }, [btnCategory])



  const categories = ["React.js", "Next.js", "Bootstrap", "HTML & CSS", "All"]

  const projectSecData = [
    {
      title: "Practice Portfolio Website",
      category: "Bootstrap",
      description: "A personal portfolio site created to hone skills in HTML, CSS, Bootstrap, and JavaScript. Built as a practice project to experiment with responsive layouts and interactive design elements.",
      imageSrc: "/assets/PracticePortfolioWebsite.png",
      githubLink: "https://github.com/Abdulrahmanmoin/Portfolio-Website",
      liveDemoLink: "https://connectwithabdulrahman.vercel.app/"
    },

    {
      title: "Amazon Clone",
      category: "HTML & CSS",
      description: "A static e-commerce website inspired by Amazon, made with HTML and CSS. This was my first website, created to practice CSS and build a basic layout with product listings and navigation.",
      imageSrc: "/assets/AmazonWebsite.png",
      githubLink: "https://github.com/Abdulrahmanmoin/Amazon-Clone",
      liveDemoLink: "https://leafy-daffodil-d2e028.netlify.app/"
    },
    {
      title: "Blog Site",
      category: "React.js",
      description: " A feature-rich blog platform built with Vite, React, and AppWrite's services, incorporating CRUD operations for managing posts. This project includes an integrated RTE editor",
      imageSrc: "/assets/blogSite.png",
      githubLink: "https://github.com/Abdulrahmanmoin/blog-site-with-react-and-appwrite",
      liveDemoLink: "https://blog-site-with-react-and-appwrite.vercel.app/"
    },
    {
      title: "E-Commerce Site",
      category: "React.js",
      description: " An e-commerce platform built with API integration to display product data. Includes category-based data fetching and filtering, allowing users to view specific categories like men's clothing.",
      imageSrc: "/assets/e-commerce-site-with-react.png",
      githubLink: "https://github.com/Abdulrahmanmoin/e-commerce-site-with-react",
      liveDemoLink: "https://e-commerce-site-with-react.vercel.app/"
    },
    {
      title: "Weather App",
      category: "HTML & CSS",
      description: "A weather information tool built with HTML, CSS, and JavaScript that lets users check the humidity, temperature, and wind speed of their favorite city by typing its name. This project integrates the Weather API to display real-time weather data.",
      imageSrc: "/assets/weatherApp.png",
      githubLink: "https://github.com/Abdulrahmanmoin/Weather-App",
      liveDemoLink: "https://radiant-brigadeiros-9de527.netlify.app/"
    },
    {
      title: "Joke Fetcher",
      category: "React.js",
      description: "Joke Fetcher — A simple React app built with Vite that fetches and displays jokes from an API. This project demonstrates API integration and dynamic content rendering on the page.",
      imageSrc: "/assets/getJokeswithReact.png",
      githubLink: "https://github.com/Abdulrahmanmoin/Get-Jokes",
      liveDemoLink: "https://get-jokes-with-react.vercel.app/"
    }
    , {
      title: "Learning Studio",
      category: "Next.js",
      description: "A learning platform built with Next.js as my first project with this framework. Implemented app routing and styled the interface using Aceternity UI for a polished look with enhanced components.",
      imageSrc: "/assets/learningStudio.png",
      githubLink: "https://github.com/Abdulrahmanmoin/learning-studio-with-nextjs",
      liveDemoLink: "https://learning-studio-with-nextjs.vercel.app/"
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


  return (
    <section id='projects' className='mb-20'>
      <div>
        <div className='flex flex-col items-center justify-center'>
          <h2 className='capitalize text-4xl sm:text-5xl font-bold py-20 text-center leading-[4rem]'>My Creative  <span className='text-blue-800'> Portfolio </span> Section </h2>


          {/*  buttons */}
          <div className='flex gap-14 flex-wrap justify-center'>
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setBtnCategory(category)}
                className='bg-white hover:bg-blue-800 hover:text-white font-semibold px-7 py-3 rounded-xl '
              >{category}</button>
            ))}
          </div>

          <div className='grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-x-14 gap-y-14 mt-6 mx-8 sm:mx-8  md:mx-20 lg:mx-14'>{((btnCategory === "All")) &&
            projectSecData.map((item: ProjectData) => (
              <ProjectCard
                key={item.title}
                objFromArr={item} />
            ))}
          </div>

          <div className='grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-x-14 gap-y-14 mt-6 mx-8 md:mx-20 lg:mx-14 '>{(!(btnCategory === "All")) &&
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

export default Project
