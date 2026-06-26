import React from 'react'
import { FaGithub, FaLinkedin, FaFileAlt, FaJs, FaReact, FaHtml5, FaCss3Alt, FaInstagram, FaYoutube,  FaBehance} from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
export default function About() {
  return (
    <div>
      <div className='h-32 bg-gray-800 flex justify-center items-center rounded-lg mt-5 mb-5' >

        <h1 className='text-white text-7xl font-black font-morganite'>ABOUT</h1>
      </div>

      <div className='md:flex lg:flex justify-center items-center bg-gray-800 rounded-lg mt-5 mb-5' >
        <div className='flex justify-center'>
          <img src="/photo.png" alt="" className='w-80 md:w-96 h-96 h-80' />
        </div>

        <div className='p-5 md:w-1/2'>
          <p className='text-white'>
            My name is Sai Kiran, and I am a <span className='text-lime-400'>Frontend Developer</span> with a strong interest in building responsive, user-friendly, and modern web applications.

            I have experience working with <span className='text-lime-400'> HTML, CSS, JavaScript, React.js, Bootstrap, and Tailwind CSS</span>. I enjoy creating clean and <span className='text-lime-400'>interactive user interfaces </span>while ensuring a smooth user experience across different devices.

            Throughout my learning journey, <span className='text-lime-400'>I have worked on several projects such as portfolio websites</span>, CRUD applications with <span className='text-lime-400'>API integration, e-commerce features </span>like shopping carts, and responsive web pages. These projects helped me strengthen my understanding of React concepts, including components, hooks, state management, routing, and API handling.

            I am passionate about continuously improving my skills and keeping up with the <span className='text-lime-400'>latest frontend technologies</span>. I enjoy solving problems, learning new concepts, and <span className='text-lime-400'>working collaboratively with teams to deliver quality products</span>.

            I am excited about the opportunity to work at Stackly as a Frontend Developer, where I can contribute my technical skills, learn from experienced professionals, and grow as a developer.
          </p>
          <a href="/resume.jpeg" download className='text-lime-400 border-2 border-lime-400 w-40 flex justify-center items-center rounded-lg py-1 px-1 m-3'>
            <FaFileAlt />download resume</a>
        </div>
      </div>
      <div className=' md:flex justify-around mb-5'>
        <div className='w-96 h-20 rounded-lg flex flex-col justify-center gap-2 bg-gray-800 mb-5 md:mb-0' >
          <h2 className='text-white font-bold pl-7'>Skills</h2>
        <div className='flex justify-evenly'>
          <img src="/c.jpg" alt="" className='w-8 h-8' />
          <FaReact className='text-3xl text-cyan-400' />
          <FaJs className='text-3xl text-yellow-400' />
          <RiTailwindCssFill className='text-3xl text-sky-400' />
          <FaCss3Alt className='text-3xl text-blue-600' />
          <FaHtml5 className='text-3xl text-orange-600' />
        </div>
        </div>
        <div className='flex text-lime-400 h-20 w-64 rounded-lg gap-3 text-2xl justify-center items-center bg-gray-800'>
         <FaInstagram/>
         <FaYoutube/>
         <FaBehance/>
         <FaLinkedin/>
         <FaGithub/>
        </div>
      </div>
    </div>
  )
}
