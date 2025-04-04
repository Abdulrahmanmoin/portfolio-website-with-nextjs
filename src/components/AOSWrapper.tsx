'use client'
import AOS from 'aos';
import { ReactNode, FC, useEffect } from 'react';
import 'aos/dist/aos.css';

interface AOSWrapperProps {
  children: ReactNode;
}

const AOSWrapper: FC<AOSWrapperProps> = ({ children }) => {

  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
      // once: true, // Whether animation should happen only once
    })
  }, [])

  return (
    <div>
      {children}
    </div>
  )
}

export default AOSWrapper;