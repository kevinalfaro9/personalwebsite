import React from 'react'
import { HiArrowNarrowRight } from 'react-icons/hi'
import { Link } from "react-scroll";

const Hero = () => {
  return (
    <div className='hero-section bg-[#0a192f] text-white h-screen'>
      {/* CONTAINER */}
      <div className='max-w-[1000px] mx-auto h-full px-8 flex flex-col justify-center gap-3' id="hero">
        <p className='text-indigo-600 text-xl sm:text-3xl'>Hi, my name is</p>
        <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>Kevin Alfaro</h1>
        <h2 className='text-4xl sm:text-6xl font-bold text-[#8892b0]'>PM & Front-End Developer.</h2>
        <p className='text-[#8892b0] sm:max-w-[70%] text-lg sm:text-xl'>
          By being a PM with software development experience, I can better partner with Engineers, Stakeholders, & Designers to execute and ship out products that will make an impact.
        </p>
        <div className='group'>
          <Link activeClass='active' to="projects" spy={true} smooth={true} offset={-150} duration={150}>
            <button className='text-white border-2 px-6 py-3 flex items-center gap-4 hover:bg-indigo-600 hover:border-indigo-600'>View Work
              <HiArrowNarrowRight size={20} className='group-hover:rotate-90 duration-100'/>
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Hero