import React from 'react'

const Home = () => {
  return (
    <div className='font-imperial flex flex-col gap-7 text-center items-center p-10'>
      <span  className='text-redwood text-5xl font-400 font-[500]'>Hey! It's</span>
      <span className='text-redwood text-7xl'>Sanjila Gangaju</span>
      <p className='font-sans flex items-center gap-4 text-center font-[700]  mt-2 text-[0.8rem] text-redwood '>
      <span className='w-20'><hr></hr></span>
      <span>Frontend Developer in the Making</span>
      <span className='w-20'><hr></hr></span></p>
    </div>
  )
}

export default Home