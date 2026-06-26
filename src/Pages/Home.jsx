import React, { useContext } from 'react'
import { FaGithub, FaLinkedin, FaArrowRight, FaJs, FaReact, FaHtml5, FaCss3Alt, FaInstagram, FaYoutube, FaTelegramPlane } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { Link, useNavigate } from 'react-router-dom';
import { data } from '../App';

export default function Home() {
    const navigate = useNavigate();
    const { details } = useContext(data);
    const projects=details.filter((project)=>project.id<=3)
    return (
        <div className='bg-black'>
            <div className='myName '>
                <div className='text-lime-400 text-center '>
                    <p className=' '>Hey There I'm</p>
                    <h1 className='text-6xl md:text-9xl lg:text-9xl font-black  font-morganite'>SAIKIRAN</h1>
                    <p>Currently working in a Stackly Company as a <br /> Frontend Developer</p>
                    <div className='flex justify-center mt-5 gap-5'>
                        <FaGithub className='text-4xl cursor-pointer' />
                        <FaLinkedin className='text-4xl cursor-pointer' />
                    </div>
                </div>
            </div>

            <div className='bg-lime-400 p-10 rounded'>
                <h1 className='text-7xl font-black text-center pb-5 font-morganite'>About</h1>
                <p >
                    My name is Sai Kiran, and I am a Frontend Developer with a strong interest in building responsive,
                    user-friendly, and modern web applications.

                    I have experience working with HTML, CSS, JavaScript, React.js, Bootstrap, and Tailwind CSS.
                    I enjoy creating clean and interactive user interfaces while ensuring a smooth user experience
                    across different devices.

                    Throughout my learning journey, I have worked on several projects such as portfolio websites,
                    CRUD applications with API integration, e-commerce features like shopping carts, and responsive web pages.
                    These projects helped me strengthen my understanding of React concepts, including components, hooks,
                    state management, routing, and API handling.
                </p>
                <button className='bg-black text-lime-400 pr-3 pl-3 px-1 py-1 rounded cursor-pointer mt-5'
                    onClick={() => navigate("/about")} >More...</button>
            </div>

            <div className='flex justify-between pl-10 pr-10 bg-gray-800 rounded mt-3 mb-3 px-5 py-5'>
                <h1 className='text-white font-black text-7xl font-morganite'>Recent Projects</h1>
                <button className='text-white cursor-pointer' onClick={() => navigate("/projects")}>see all <FaArrowRight className='inline ' /></button>
            </div>

            <div className='p-5  gap-5 md:flex justify-around lg:flex justify-around '>
                {
                    projects.map((project) => (
                        <div className="w-80 bg-white rounded-xl shadow-lg overflow-hidden mt-5" key={project.id}>
                            <div className='w-full h-48 bg-lime-400 flex items-center justify-center'>
                                <img
                                    src={project.image}
                                    alt="Project"
                                    className="w-64 h-32 object-cover"
                                />
                            </div>

                            <div className="p-4">
                                <h2 className="text-xl font-bold">{project.title}</h2>
                                <p className='text-lime-400'>{project.role}</p>
                                <p className="text-gray-600 mt-2">
                                    {project.data}
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

            <div className='bg-lime-400  md:flex justify-between p-5 rounded-lg mt-5 mb-5'>
                <div>
                    <h1 className='text-5xl font-bold'>Get In Touch</h1>
                    <p className='py-2'>if you are interested in my work or want <br />
                        to provide feedback about this website, I <br />
                        am open to exchanding ideas.

                    </p>
                </div>
                <div>
                    <p className='font-bold'>follow me on </p>
                    <div className='flex mt-2 gap-3'>
                        <FaInstagram />
                        <FaYoutube />
                        <FaGithub />
                        <FaLinkedin />
                    </div>
                    <button onClick={() => navigate("/contact")} className='border-1 border-black w-32 flex items-center justify-center rounded-lg mt-10 cursor-pointer'>
                        Contact Me<FaTelegramPlane /></button>
                </div>
            </div>
        </div>
    )
}
