import React, { useContext } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { data } from '../App';
import { FaJs, FaReact, FaHtml5, FaCss3Alt, FaGithub, FaLaptop } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
export default function ProjectDetails() {
    const back = useNavigate()
    const { details } = useContext(data)
    const { id } = useParams();
    const project = details.find((item) =>
        item.id === Number(id)
    );
    return (
        <div>
            <button className='bg-yellow-300 p-1 rounded-lg ml-5  md:ml-25 lg:ml-25 mt-5 mb-5 cursor-pointer' onClick={() => back("/projects")} >Back</button>
            <div className='md:flex lg:flex justify-around'>
                <div className='w-96 rounded-lg'>
                    <img src={project.image} alt="" className=' rounded-lg' />
                </div>
                <div>
                    <h2 className='text-white'>{project.title}</h2>
                    <p className='text-yellow-300'>{project.role}</p>
                    <p className='text-white'>{project.data}</p>
                    <p className='text-yellow-300'>Tech Stack</p>
                    <div className='flex gap-3 py-3'>
                        <FaReact className='text-2xl text-cyan-400'/>
                        <FaJs className='text-2xl text-yellow-400'/>
                        <RiTailwindCssFill className='text-2xl text-sky-400'/>
                        <FaCss3Alt className='text-2xl text-blue-600'/>
                        <FaHtml5 className='text-2xl text-orange-600'/>
                       </div>
                    <div className='flex gap-3'>
                        <button className='bg-yellow-300 w-32 flex justify-center items-center p-1 rounded-lg'><FaLaptop />Demo</button>
                        <button className='bg-yellow-300 w-32 flex justify-center items-center p-1 rounded-lg'><FaGithub className='' />GitHub</button>
                    </div>
                </div>
            </div>
            <div className='p-3 bg-gray-800 mt-5 mb-5 rounded-lg border-white shadow-lg'>
                <h1 className='text-yellow-300 text-3xl'>Main Features</h1>
                <ol >
                    <li className='text-white'><h2 className='font-bold'>Responsive Design:</h2></li>
                    <p className='text-white'>The website is designed to be responsive, ensuring a seamless experience across various devices and screen size.</p>

                    <li className='text-white'><h2 className='font-bold'>Moderen UI/UX:</h2></li>
                    <p className='text-white'>The website features a mordren and clean user interface, providind a pleasent user experience. It uses consistent color scheme and typography throughout the site.</p>

                </ol>
            </div>
        </div>
    )
}
