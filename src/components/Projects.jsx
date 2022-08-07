import React from 'react'
import PlantBuddy from '../assets/PlantBuddy.png'
import CoinSearch from '../assets/coinsearch.png'
import Starbucks from '../assets/Starbucks.png'
const Projects = () => {
  return (
    <div className='projects-section w-full mx-auto bg-[#0a192f] text-gray-300 px-8 md:h-screen pt-40 sm:pt-0' id="projects">

      {/* PARENT CONTAINER */}
      <div className='max-w-[1000px] sm:max-w-[1200px] mx-auto'>
        {/* FLEX CONTAINER */}
        <div className='w-full flex flex-col gap-3 items-center mb-4'>
          <h1 className='text-4xl sm:text-5xl font-bold underline underline-offset-4 decoration-indigo-500 decoration-4'>Work</h1>
          <p className='text-xl sm:text-2xl'>Check out some of my recent work:</p>
        </div>

        {/* GRID CONTAINER */}
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3'>
          {/* GRID ITEM */}
          <div
          style={{ backgroundImage: `url(${CoinSearch})` }}
          className='container group shadow-lg shadow-[#040c16] bg-no-repeat bg-cover bg-center h-[300px] rounded-lg '>
            <div className='opacity-0 group-hover:opacity-100 flex flex-col justify-center items-center h-full group-hover:bg-gradient-to-r from-sky-500 to-indigo-500 group-hover:rounded-lg'>
              <span className='text-2xl w-full font-bold text-gray-300 tracking-wider text-center'>
                CoinSearch: React & Tailwind CSS
              </span>
              <div className='pt-8 text-center'>
                <a href='https://chipper-cucurucho-50cc32.netlify.app'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-indigo-500 text-white font-bold text-lg'>
                    Demo
                  </button>
                </a>
              </div>
            </div>
          </div>
          {/* GRID ITEM */}
          <div
          style={{ backgroundImage: `url(${Starbucks})` }}
          className='container group shadow-lg shadow-[#040c16] bg-no-repeat bg-cover bg-center h-[300px] rounded-lg'>
            <div className='opacity-0 group-hover:opacity-100 flex flex-col justify-center items-center h-full group-hover:bg-gradient-to-r from-sky-500 to-indigo-500 group-hover:rounded-lg'>
              <span className='text-2xl w-full font-bold text-gray-300 tracking-wider text-center'>
              Starbucks Landing Page Clone: React & Tailwind CSS
              </span>
              <div className='pt-8 text-center'>
                <a href='https://venerable-brioche-99856e.netlify.app'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-indigo-500 text-white font-bold text-lg'>
                    Demo
                  </button>
                </a>
              </div>
            </div>
          </div>
          {/* GRID ITEM */}
          <div
          style={{ backgroundImage: `url(${PlantBuddy})` }}
          className='container group shadow-lg shadow-[#040c16] bg-no-repeat bg-cover bg-center h-[300px] rounded-lg '>
            <div className='opacity-0 group-hover:opacity-100 flex flex-col justify-center items-center h-full group-hover:bg-gradient-to-r from-sky-500 to-indigo-500 group-hover:rounded-lg'>
              <span className='text-2xl w-full font-bold text-gray-300 tracking-wider text-center'>
                Plant Buddy - JS & Tailwind CSS & Firebase
              </span>
              <div className='pt-8 text-center'>
                <a href='/'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-indigo-500 text-white font-bold text-lg'>
                    Demo
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Projects