import Image from 'next/image';
import Link from 'next/link';
import React, { FC } from 'react'

interface SocialIconsProps {
    className?: string;
}

const SocialIcons: FC<SocialIconsProps> = ({ className }) => {
    return (
        <section className={` ${className}`}>
            <div className='flex flex-col gap-5 ml-6'>
                <Link href={"https://www.linkedin.com/in/abdulrahman-moin/"}  target='_blank' className=' bg-white rounded-full p-2 w-10 '>
                    <Image src="/assets/linkedInIcon.png" alt='LinkedIn Icon' className='w-6' width={100} height={100}/>
                </Link>

                <Link href={"https://github.com/Abdulrahmanmoin"} target='_blank' className=' bg-white rounded-full p-2 w-10 '>
                    <Image src="/assets/githubIcon.png" alt='LinkedIn Icon' className='w-6 ' width={100} height={100}/>
                </Link>

            </div>
        </section>
    )
}

export default SocialIcons;