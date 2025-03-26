import React from 'react'
import SocialIcons from './SocialIcons';
import Image from 'next/image';
import AOSWrapper from './AOSWrapper';

const HomeComp = () => {
  return (
    <section id='home' className='mb-5 lg:mb-14'>


      <div className='sm:flex sm:gap-x-[6rem] md:gap-x-[14rem] lg:gap-x-[26rem]  xl:gap-x-[40rem]'>
        {/* div for the both boxes */}
        <div className='intro-both-boxes flex flex-col items-center justify-center -ml-7 sm:items-start sm:mt-8 sm:ml-28 lg:mt-1 lg:ml-28'>

          {/* first box */}
          <AOSWrapper >
            <div data-aos="fade-right" data-aos-duration="700" className='intro-box max-w-72 shadow-xl mt-9 ml-3 sm:ml-0 self-start rounded-xl flex gap-3 items-center justify-center bg-gray-100 p-4 py-6 sm:px-4 sm:py-5 md:py-6 lg:py-6 lg:px-4'>
              <div>
                <span className='text-4xl'>👋</span>
              </div>
              <div>
                <p className='text-gray-500 text-sm'>Hello, I am</p>
                <h2 className='intro-box-name-heading text-xl font-bold'>Abdul Rahman Moin</h2>
              </div>
            </div>
          </AOSWrapper>

          {/* second box */}


          <AOSWrapper >
            <div data-aos="fade-right" data-aos-duration="700" className='intro-box intro-laptop-box max-w-72 shadow-xl self-start rounded-xl flex gap-10 sm:gap-14 flex-row-reverse items-center bg-white px-4 py-3  sm:px-4 sm:py-3 md:px-5 md:py-4 mt-9 sm:mt-6 lg:mt-8'>
              <div>
                <span className='intro-box-laptop-icon text-3xl '>💻</span>
              </div>
              <div>
                <h2 className='intro-box-profession-heading text-gray-500 text-xs uppercase font-semibold '>Front-end Developer</h2>
              </div>
            </div>
          </AOSWrapper>
        </div>

        {/* circle in the right corner */}
        <div className='hidden sm:block -z-10 sm:-mt-20 lg:-mt-28'>
          <div className='block'>
            <svg className='sm:w-36 lg:w-52 xl:w-52' viewBox="0 0 511 511" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="255.5" cy="255.5" r="255.5" fill="url(#paint0_linear_615_28)" />
              <defs>
                <linearGradient id="paint0_linear_615_28" x1="434.452" y1="427.308" x2="63.2796" y2="56.1352" gradientUnits="userSpaceOnUse">
                  <stop stop-color="#C0C8D5" />
                  <stop offset="1" stop-color="#BDC6D2" stop-opacity="0" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>
      </div>


      {/* Links for social ids */}
      <div>
        <SocialIcons className='bg-transparent absolute hidden sm:block sm:mt-28 md:mt-40 lg:mt-52 xl:mt-60' />
      </div>


      {/* tech stack iamges */}


      <AOSWrapper >
        <div className=''>
          <div className="tech-stack-and-mid-ball-div w-full grid grid-cols-3 items-center text-center justify-items-center ">

            <div data-aos="zoom-in-right" data-aos-easing="linear" data-aos-duration="800" data-aos-offset="0" className='nextjs-box bg-white w-32 sm:w-44 md:w-52 rounded-full ml-28 sm:ml-40 md:ml-52'>
              <Image src={"/assets/nextjs.png"} alt='next.js' width={100} height={100} loading='lazy' className='nextjs-img w-32 sm:w-44 md:w-72 p-3 sm:p-5 md:p-6' />

            </div>

            {/* middle ball */}
            <div data-aos="zoom-in" data-aos-easing="linear" data-aos-duration="800" className='middle-home-ball hidden sm:block ml-14 sm:ml-0 overflow-hidden'>

              <svg className=' w-8 sm:w-14 lg:w-72 xl:w-72' viewBox="0 0 511 511" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="255.5" cy="255.5" r="255.5" fill="url(#paint0_linear_615_28)" />
                <defs>
                  <linearGradient id="paint0_linear_615_28" x1="434.452" y1="427.308" x2="63.2796" y2="56.1352" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#C0C8D5" />
                    <stop offset="1" stopColor="#BDC6D2" stopOpacity="0" />
                  </linearGradient>
                </defs>
              </svg>
            </div>



            {/* tailwind img */}

            <div data-aos="zoom-in" data-aos-easing="linear" data-aos-duration="800" className="tailwind-box bg-white rounded-full w-8 sm:hidden">
              <Image src={"/assets/tailwind.png"} alt='tailwind CSS' width={100} height={100} loading='lazy' className='tailwind-img w-8 p-1' />
            </div>



            <div className='react-typescript-box mt-5 -ml-24 sm:mt-0'>
              <div data-aos="zoom-in-left" data-aos-easing="linear" data-aos-duration="800" className='typescript-box bg-white w-16 sm:w-24 md:w-32 rounded-full sm:mr-20 md:mr-32'>
                <Image src={"/assets/typescript.png"} alt='typescript' width={100} height={100} loading='lazy' className='typescript-img w-16 sm:w-24 md:w-32 p-3 sm:p-4 md:p-5' />
              </div>

              <div data-aos="zoom-in-left" data-aos-easing="linear" data-aos-duration="800" data-aos-offset="0" className='react-box bg-white w-16 sm:w-24 md:w-32 rounded-full mt-10 sm:mr-20 md:mr-32'>
                <Image src={"/assets/react.png"} alt='react.js' width={100} height={100} loading='lazy' className='react-img w-16 sm:w-24 md:w-32 p-2 sm:p-3 md:p-4' />
                {/* <Image src={"/assets/mongoDB.png"} alt='mongoDB' width={100} height={100} loading='lazy' className='react-img w-16 sm:w-24 md:w-32 p-2 sm:p-3 md:p-4' /> */}
              </div>
            </div>

          </div>
        </div>
      </AOSWrapper>

    </section>
  )
}

export default HomeComp;