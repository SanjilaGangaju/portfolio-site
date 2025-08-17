import React from 'react'
import { Link } from 'react-router'
import Button from '../components/Button'

const Projects = ({darkMode}) => {
  return (
    <div className={`text-center flex flex-col items-center justify-center p-8 ${darkMode?"darkmode": "lightmode"}`}>
      <div className='flex items-center gap-4 w-full mb-8'>
          <h2 className='font-saint  text-4xl font-semibold '>my projects</h2>
          <hr className='w-1/2 border-2 '></hr>

      </div>
        

       <div className='grid grid-cols-1 gap-8'>
        <div className='grid grid-cols-2 items-center justify-center'>
          <div>
            <p className='text-3xl   font-semibold font-saint'>airesvue ai-powered resume reviewer</p>
           <div className='flex gap-2 items-center justify-center mt-3'>
            <div className="flex gap-5">
                <Button text='source code'  link="https://github.com/SanjilaGangaju/AI-Resume-Reviewer"></Button>
     
           <Button text='demo' link="https://ai-resume-reviewer-six.vercel.app/"></Button>
            </div>
           
           </div>
          

          

          </div>
          
           <div className='outline-none shadow-lg w-[90%] rounded'>              
                <img src='./assets/resvuephoto.png' className='w-full object-cover rounded'></img>

          </div>
        </div>
        <div className='grid grid-cols-2 items-center justify-center'>
          <div>
            <p className='text-3xl   font-semibold font-saint'>nomyumm-food recipe app</p>
           <div className='flex gap-2 items-center justify-center mt-3'>
            <div className='flex gap-4'>
                <Button text='source code' link="https://github.com/SanjilaGangaju/NomYm"></Button>
     
                <Button text='demo' link="https://nom-ym.vercel.app/"></Button>
            </div>
           
           </div>
          

          

          </div>
          
           <div className='outline-none shadow-lg w-[90%] rounded'>              
                <img src='./assets/nomyumm.png' className='w-full object-cover rounded'></img>

          </div>
        </div>
        <div className='grid grid-cols-2 items-center justify-center'>
          <div>
            <p className='text-3xl   font-semibold font-saint'>oshune - skincare ecommerce website</p>
           <div className='flex gap-2 items-center justify-center mt-3'>
            <div className='flex gap-4'>
                 <Button text='source code' link="https://github.com/SanjilaGangaju/Oshune"></Button>
     
           <Button text='demo' link="https://oshune.vercel.app/"></Button>
            </div>
          
           </div>
          

          

          </div>
          
           <div className='outline-none shadow-lg w-[90%] rounded'>              
                <img src='./assets/oshune.png' className='w-full object-cover rounded'></img>

          </div>
        </div>
       </div>
      </div>
  )
}

export default Projects