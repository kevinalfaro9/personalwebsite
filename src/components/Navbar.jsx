import {FaBars, FaTimes, FaGithub, FaLinkedin} from 'react-icons/fa';
import {HiOutlineMail} from 'react-icons/hi';
import {BsFillPersonLinesFill} from 'react-icons/bs'
import { Link, animateScroll as scroll } from "react-scroll";

import { useState } from 'react'
const Navbar = () => {

  const [mobile, hideMobile] = useState(true);

  const openMobile = () => {
    hideMobile(!mobile);
  }

  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  return (
    <div onClick={scrollToTop} className="navbar-section fixed top-0 z-100 w-full bg-[#0a192f] text-gray-300 p-6 flex justify-between items-center">
      {/* LOGO */}
      <div className="logo" onClick={scrollToTop}>
        <p className='font-bold text-5xl italic'>KA</p>
      </div>
      {/* DESK TOP MENU */}
      <div className='hidden md:flex'>
        <ul className="list-none flex font-semibold cursor-pointer text-xl">
          <Link activeClass='active' to="hero" spy={true} smooth={true} offset={-70} duration={150}>
            <li className='px-6 hover:underline'>Home</li>
          </Link>
          <Link activeClass='active' to="about" spy={true} smooth={true} offset={-70} duration={150}>
            <li className='px-6 hover:underline'>About</li>
          </Link>
          <Link activeClass='active' to="experience" spy={true} smooth={true} offset={-140} duration={150}>
            <li className='px-6 hover:underline'>Experience</li>
          </Link>
          <Link activeClass='active' to="projects" spy={true} smooth={true} offset={-140} duration={150}><li className='px-6 hover:underline'>Work</li></Link>
          <Link activeClass='active' to="contact" spy={true} smooth={true} offset={-140} duration={150}><li className='px-6 hover:underline'>Contact</li></Link>
        </ul>
      </div>

      {/* HAMBURER ICON */}
      <div onClick={openMobile} className="md:hidden z-10">
        {mobile ? <FaBars size={30}/> : <FaTimes size={30}/>}
      </div>

      {/* MOBILE MENU */}
       <ul className={!mobile ? 'absolute top-0 left-0 h-screen w-full bg-[#0a192f] flex flex-col justify-center items-center text-4xl gap-20' : 'hidden'}>
          <Link onClick={openMobile} activeClass='active' to="hero" spy={true} smooth={true} offset={-70} duration={150}><li className='hover:underline'>Home</li></Link>
          <Link onClick={openMobile} activeClass='active' to="about" spy={true} smooth={true} offset={-70} duration={150}><li className='hover:underline'>About</li></Link>
          <Link onClick={openMobile} activeClass='active' to="experience" spy={true} smooth={true} offset={-110} duration={150}><li className='hover:underline'>Experience</li></Link>
          <Link onClick={openMobile} activeClass='active' to="projects" spy={true} smooth={true} offset={-70} duration={150}><li className='hover:underline'>Work</li></Link>
          <Link onClick={openMobile} activeClass='active' to="contact" spy={true} smooth={true} offset={-110} duration={150}><li className='hover:underline'>Contact</li></Link>
      </ul>

      {/* SOCIAL ICONS */}
      <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
        <ul>
          <li className='w-[140px] h-[50px] flex ml-[-100px] hover:ml-[0px] duration-300 bg-blue-500'>
              <a
                className='flex justify-between items-center w-full text-gray-300'
                href='https://www.linkedin.com/in/kevinalfaro/'
              >
                Linkedin <FaLinkedin size={40} className="" />
              </a>
            </li>

            <li className='w-[140px] flex h-[50px] ml-[-100px] hover:ml-[0px] duration-300 bg-slate-500'>
              <a
                className='flex justify-between items-center w-full text-gray-300'
                href='https://github.com/kevinalfaro9'
              >
                Github <FaGithub size={40} className="" />
              </a>
            </li>

            <li className='w-[140px] flex h-[50px] ml-[-100px] hover:ml-[0px] duration-300 bg-indigo-500'>
              <a
                className='flex justify-between items-center w-full text-gray-300'
                href='mailto: kalfaro545@gmail.com'
              >
                Email <HiOutlineMail size={40} className="" />
              </a>
            </li>

            <li className='w-[140px] flex h-[50px] ml-[-100px] hover:ml-[0px] duration-300 bg-[#8892b0]'>
              <a
                className='flex justify-between items-center w-full text-gray-300'
                href='https://drive.google.com/file/d/1o0A938Bytk-UyCC7DBzWxz9CzzLcoLXD/view?usp=sharing'
              >
                Resume <BsFillPersonLinesFill size={40} className="" />
              </a>
            </li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar