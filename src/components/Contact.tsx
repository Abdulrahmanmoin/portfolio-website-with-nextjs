import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Contact = () => {
    return (
        <section id='contact' className='bg-white pb-40'>
            <div>
                <div className='flex flex-col items-center'>
                    <h2 className='capitalize text-4xl sm:text-5xl font-bold py-20 text-center leading-[4rem]'>Take a <span className='text-blue-800'> coffee </span> & <span className='text-blue-800'> Connect </span> with me</h2>

                    <div className='flex flex-col lg:flex-row  gap-10 mb-6'>
                        <Link
                            href="mailto:iam.armoin@gmail.com"
                            className='p-5  bg-pink-50  rounded-lg'
                        >
                            <div className='flex items-center justify-center gap-x-3 '>
                                <Image className='w-11 pl-2' src={"/assets/email.png"} alt='email' width={1000} height={1000} />

                                <p> iam.armoin@gmail.com</p>
                            </div>
                        </Link>
                        <Link
                            href="tel: +92 330 2089288"
                            className='p-5  bg-blue-100 rounded-lg'
                        >
                            <div className='flex items-center justify-center gap-x-3 bg-blue-100 rounded-lg'>
                                <Image className='w-11 ' src={"/assets/phone.png"} alt='email' width={1000} height={1000} />

                               <p> +92 330 2089288 </p>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact
