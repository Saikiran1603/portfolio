import React, { useContext } from 'react'
import { data } from '../App'
import { Link } from 'react-router-dom'
import { FaJs, FaReact, FaHtml5, FaCss3Alt,} from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";

export default function Projects() {
  const {details}=useContext(data)
  return (
    <div>
      <div className='h-20 bg-[#161B22] flex justify-center items-center rounded-lg'>
        <h1 className=' text-4xl  sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white '>Projects</h1>
      </div>
      <div className='flex flex-col items-center mb-5 md:grid grid-cols-3 place-items-center '>
        {
          details.map((project)=>(
           <div className="w-full sm:w-80 md:w-96 lg:w-96 bg-white rounded-xl shadow-lg overflow-hidden mt-5" key={project.id}>
                                      <div className='w-full h-48 bg-[#D5FF3F]  flex items-center justify-center'>
                                          <img
                                              src={project.image}
                                              alt="Project"
                                              className="w-64 h-32 object-cover"
                                          />
                                      </div>
          
                                      <div className="p-4">
                                          <h2 className="text-xl font-bold">{project.title}</h2>
                                          <p className="text-gray-600 mt-2">
                                              A modern portfolio built with React and Tailwind CSS.
                                          </p>
          
                                          <div className='flex gap-3 py-3'>
                                              <FaReact className='text-2xl text-cyan-400' />
                                              <FaJs className='text-2xl text-yellow-400' />
                                              <RiTailwindCssFill className='text-2xl text-sky-400' />
                                              <FaCss3Alt className='text-2xl text-blue-600' />
                                              <FaHtml5 className='text-2xl text-orange-600' />
                                          </div>
          
                                          <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg">
                                              <Link to={`/details/${project.id}`}> View Project</Link>
          
                                          </button>
                                      </div>
                                  </div>

            
          ))
        }
      </div>
    </div>
  )
}
