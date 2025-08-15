import React from 'react'
import { Link } from 'react-router'
import Button from '../components/Button'

const Projects = ({darkMode}) => {
  return (
    <div className={`text-center flex flex-col items-center justify-center p-8 ${darkMode?"darkmode": "lightmode"}`}>
        <h2 className='font-imperial  text-4xl font-semibold mb-8'>My projects</h2>

       <div className='grid grid-cols-1 gap-8'>
        <div className='grid grid-cols-2 items-center justify-center'>
          <div>
            <p className='text-3xl   font-semibold font-saint'>AiResvue-Ai powered Resume Reviewer</p>
           <div className='flex gap-2 items-center justify-center mt-3'>
             <Button text='source code' link="https://github.com/SanjilaGangaju/AI-Resume-Reviewer"></Button>
     
           <Button text='demo' link="https://ai-resume-reviewer-six.vercel.app/"></Button>
           </div>
          

          

          </div>
          
           <div className='outline-none shadow-lg w-[90%] rounded'>              
                <img src='./assets/resvuephoto.png' className='w-full object-cover rounded'></img>

          </div>
        </div>
        <div className='grid grid-cols-2 items-center justify-center'>
          <div>
            <p className='text-3xl   font-semibold font-saint'>AiResvue-Ai powered Resume Reviewer</p>
           <div className='flex gap-2 items-center justify-center mt-3'>
             <Button text='source code' link="https://github.com/SanjilaGangaju/NomYm"></Button>
     
           <Button text='demo' link="hhttps://nom-ym.vercel.app/"></Button>
           </div>
          

          

          </div>
          
           <div className='outline-none shadow-lg w-[90%] rounded'>              
                <img src='./assets/nomyumm.png' className='w-full object-cover rounded'></img>

          </div>
        </div>
        <div className='grid grid-cols-2 items-center justify-center'>
          <div>
            <p className='text-3xl   font-semibold font-saint'>AiResvue-Ai powered Resume Reviewer</p>
           <div className='flex gap-2 items-center justify-center mt-3'>
             <Button text='source code' link="https://github.com/SanjilaGangaju/AI-Resume-Reviewer"></Button>
     
           <Button text='demo' link="https://ai-resume-reviewer-six.vercel.app/"></Button>
           </div>
          

          

          </div>
          
           <div className='outline-none shadow-lg w-[90%] rounded'>              
                <img src='./assets/resvuephoto.png' className='w-full object-cover rounded'></img>

          </div>
        </div>
       </div>
      </div>
  )
}

export default Projects