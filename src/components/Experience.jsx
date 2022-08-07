import HTML from '../assets/html.png';
import CSS from '../assets/css.png';
import JavaScript from '../assets/javascript.png';
import ReactImg from '../assets/react.png';
import FireBase from '../assets/firebase.png';
import GitHub from '../assets/github.png';
import Tailwind from '../assets/tailwind.png';
import Node from '..//assets/node.png'

const Experience = () => {
  return (
    <div className='experience-section h-screen bg-[#0a192f] text-gray-300' id="experience">
      <div className='h-full px-8 max-w-[1000px] mx-auto'>
        <div className='h-full w-full'>
          <div className='flex flex-col items-center'>
            <h1 className='text-4xl sm:text-5xl font-bold underline underline-offset-4 decoration-indigo-500 decoration-4'>Experience</h1>
            <p className='pt-4 text-xl sm:text-2xl font-medium'>Technologies I have worked with:</p>
          </div>
          <div className='grid grid-cols-2 mt-6 gap-5 sm:grid-cols-4'>
            <div className='p-6 shadow-2xl flex flex-col items-center hover:scale-110 duration-300'>
              <img src={CSS} className="w-20 mx-auto" alt="css"/>
              <p className='pt-4 text-lg'>CSS</p>
            </div>
            <div className='p-6 shadow-2xl flex flex-col items-center hover:scale-110 duration-300'>
              <img className="w-20 mx-auto" src={HTML} alt="html"/>
              <p className='pt-4 text-lg'>HTML</p>
            </div>
            <div className='p-6 shadow-2xl flex flex-col items-center hover:scale-110 duration-300'>
              <img src={JavaScript} className="w-20 mx-auto" alt="javascript"/>
              <p className='pt-4 text-lg'>Javascript</p>
            </div>
            <div className='p-6 shadow-2xl flex flex-col items-center hover:scale-110 duration-300'>
              <img src={ReactImg} className="w-20 mx-auto" alt="react"/>
              <p className='pt-4 text-lg'>React JS</p>
            </div>
            <div className='p-6 shadow-2xl flex flex-col items-center hover:scale-110 duration-300'>
              <img src={Tailwind} alt="tailwind" className="w-20 mx-auto"/>
              <p className='pt-4 text-lg'>Tailwind CSS</p>
            </div>
            <div className='p-6 shadow-2xl flex flex-col items-center hover:scale-110 duration-300'>
              <img src={GitHub} alt="github" className="w-20 mx-auto"/>
              <p className='pt-4 text-lg'>Github</p>
            </div>
            <div className='p-6 shadow-2xl flex flex-col items-center hover:scale-110 duration-300'>
              <img src={Node} alt="node" className="w-20 mx-auto"/>
              <p className='pt-4 text-lg'>Node</p>
            </div>
            <div className='p-6 shadow-2xl flex flex-col items-center hover:scale-110 duration-300'>
              <img src={FireBase} alt="firebase" className="w-20 mx-auto"/>
              <p className='pt-4 text-lg'>Firebase</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Experience