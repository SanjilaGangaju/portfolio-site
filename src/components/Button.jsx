import React from 'react'
import { Link } from 'react-router'
const Button = ({text, link}) => {
  return (
   <button className='bg-redwood rounded px-3 hover:bg-red-900 text-center' ><Link to={link} className='text-2xl text-white font-saint '>{text}</Link></button>

  )
}

export default Button