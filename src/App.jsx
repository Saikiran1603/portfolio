
import React, { createContext } from 'react'
import { BrowserRouter,  NavLink, Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import About from './Pages/About'
import Projects from './Pages/Projects'
import Gallery from './Pages/Gallery'
import Contact from './Pages/Contact'
import ProjectDetails from './Components/ProjectDetails'
 
export const data=createContext()
export default function App() {
  const details=[{
    id:1,
    image:"/frontend.png",
    title:"Portfolio",
    role:"frontend",
    data:"This project is a portfolio website"

  },
{
  id:2,
    image:"https://miro.medium.com/v2/resize:fit:1400/0*GJqID-iVs0NDF35M",
    title:"Wheather App",
    role:"Full Stack",
    data:"This project is a Wheather App"

},
{
  id:3,
    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHFuSPNTuh7f5OuLkA_5GUx11_aN_vgaw7LZ-KDs62BUAjcrlNMmA-hkA&s=10",
    title:"Cred clone",
    role:"frontend",
    data:"This project is a CRED website"

},
{
  id:4,
    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQj9y-iBVrVZ3thGGSt1EdR5UblPaATkY3KiN0rA5q-QPOuB4ii1WwKUZyF&s=10",
    title:"User Athentication System",
    role:"Full Stack",
    data:"This project is a User Athentication System website"

},
{
  id:5,
    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_-zmntRDsk7i0spW1FHsSgttLzl4gFLUqmh9ae046Cg&s=10",
    title:"Todo List",
    role:"Frontend",
    data:"This project is a Todo List website"

},
{
  id:6,
    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVVzEx2iLg1IIUxCSPofj0aIpFK-d5vyh6I9MNzVkh1iGCADvUUeonVFo&s=10",
    title:"QR Scanner",
    role:"Frontend",
    data:"This project is a QR Scanner website"

},
{
  id:7,
    image:"https://d112y698adiu2z.cloudfront.net/photos/production/software_photos/002/247/178/datas/gallery.jpg",
    title:"Playlist Generator",
    role:"Frontend",
    data:"This project is a Playlist Generator website"

},

]

  return (
    < div className='bg-black'>
       <BrowserRouter >
       <data.Provider value={{details}}>
       <div className='flex gap-7 md:gap-15 lg:gap-20 justify-center flex-wrap h-1/4 pt-5 pb-5 bg-black'>
         <NavLink to={"/"} className={({isActive})=>isActive?"text-lime-400":"text-white" }>Home</NavLink>
        <NavLink to={"/about"} className={({isActive})=>isActive?"text-lime-400":"text-white"}>About</NavLink>
        <NavLink to={"/projects"} className={({isActive})=>isActive?"text-lime-400":"text-white"}>Projects</NavLink>
        <NavLink to={"/gallery"} className={({isActive})=>isActive?"text-lime-400":"text-white"}>Gallery</NavLink>
        <NavLink to={"/contact"} className={({isActive})=>isActive?"text-lime-400":"text-white"}>Contact</NavLink>

       </div>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/projects' element={<Projects/>}/>
          <Route path='/gallery' element={<Gallery/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/details/:id' element={<ProjectDetails/>}/>
        </Routes>
        
       <footer className="py-10 text-center border-t bg-gray-800 flex flex-wrap gap-10 justify-around rounded-t">
       
<div className="font-black text-8xl text-lime-400">
  <span className="text-black">&lt;</span>
  SK
  <span className="text-black">/&gt;</span>
</div>

<div>
  <h2 className="text-9xl font-bold text-gray-500 font-morganite   ">Let's Build <br/> Something <span className='text-lime-400 text-9xl'> Amazing </span></h2>
  {/* <p className="mt-2">
    Passionate Frontend Developer creating responsive and user-friendly web applications.
  </p> */}

  

  <p className="mt-6 text-sm text-gray-500">
    © 2026 Sai Kiran | Designed & Developed with ❤️ using React.js
  </p>
  </div>
</footer>
</data.Provider>
       </BrowserRouter>
    </div>
  )
}
