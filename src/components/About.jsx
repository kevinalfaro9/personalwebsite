import React from 'react'

const About = () => {
  return (
    <div className='about-section bg-[#0a192f] text-gray-300 h-screen' id="about">
      {/* FLEX CONTAINER */}
      <div className="flex flex-col w-full max-w-[1000px] mx-auto h-full justify-center px-8 gap-4">
        {/* FLEX CHILD 1 */}
        <div className="w-full grid grid-cols-2 gap-8">
          <div className='pb-2 sm:text-right'>
            <p className='text-4xl sm:text-5xl font-bold underline underline-offset-8 decoration-indigo-600 decoration-4'>About</p>
          </div>
          <div></div>
        </div>

        {/* FLEX CHILD 2 */}
        <div className='w-full grid sm:grid-cols-2 gap-8'>
          <div className='text-4xl sm:text-5xl sm:text-right font-bold'>
            <p>Hi. I'm Kevin, nice to meet you. Please take a look around!</p>
          </div>
          <div className='text-xl'>
            <p className='text-indigo-500'>
              I am currently a Product Manager who is also passionate about Web & Mobile development. Although you
              don't need software development experience as a PM to be effective, I believe having these skills
              can only make a more well rounded Product Manager.
            </p>
          </div>
        </div>

      </div>
    </div>
  )
}

export default About