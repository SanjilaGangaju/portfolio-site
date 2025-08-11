import React from 'react'
import { Link } from 'react-router'
import { LiaToggleOffSolid } from "react-icons/lia";

const Navbar = () => {
  return (
    <>
    <div className='flex items-center justify-start gap-10 px-9 pt-5'>
        <nav className='font-saint  text-redwood text-[2rem] font-semibold flex gap-10 items-center justify-start'>
        <Link to="/" className='relative after:absolute after:h-[2px] after:bottom-0 after:left-0 after:w-0 hover:after:w-full after:transition-all after:duration-300 after:bg-redwood'>home</Link>
        <Link to="/about" className='relative after:absolute after:h-[2px] after:bottom-0 after:left-0 after:w-0 hover:after:w-full after:transition-all after:duration-300 after:bg-redwood'>about me</Link>
        <Link to="/projects" className='relative after:absolute after:h-[2px] after:bottom-0 after:left-0 after:w-0 hover:after:w-full after:transition-all after:duration-300 after:bg-redwood'>projects</Link>
    </nav>
    <LiaToggleOffSolid className='text-[1.48rem] text-amber-800'></LiaToggleOffSolid>
    </div>
   
    </>
  )
}

export default Navbar