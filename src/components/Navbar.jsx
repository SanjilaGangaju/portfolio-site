import React from 'react'
import { Link } from 'react-router'
import { LiaToggleOffSolid } from "react-icons/lia";

const Navbar = () => {
  return (
    <>
    <div className='flex items-center justify-between px-9 py-4'>
         <nav className='font-saint grow text-redwood text-[2rem] font-semibold flex gap-10 items-center justify-center'>
        <Link to="/">home</Link>
        <Link to="/about">about me</Link>
        <Link to="/projects">projects</Link>
    </nav>
    <LiaToggleOffSolid className='text-[1.48rem] text-amber-800'></LiaToggleOffSolid>
    </div>
   
    </>
  )
}

export default Navbar