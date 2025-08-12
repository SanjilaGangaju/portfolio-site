import React from 'react'
import { Link } from 'react-router'
import Button from '../components/Button'

const Projects = () => {
  return (
    <div className='text-center flex flex-col items-center justify-center p-8'>
        <h2 className='font-imperial text-redwood text-4xl font-semibold mb-8'>My projects</h2>

       <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
        <div className='grid grid-cols-2 items-center justify-center gap-2'>
          <div>
            <p>AiResvue-Ai powered Resume Reviewer</p>

           <Button text='source code' link="https://github.com/SanjilaGangaju/AI-Resume-Reviewer"></Button>

          </div>
          
           <div className=' border border-redwood shadow-lg rounded'>              
                <img src='./src/assets/react-2.svg' className='w-full'></img>

          </div>
        </div>
          <div className='grid grid-cols-2  items-center justify-center gap-2'>
            <div>
              <p>NomYmm-Food Recipe App with Api Integration</p>
               <Button text='source code' link="https://github.com/SanjilaGangaju/NomYm"></Button>



            </div>
            
             <div className='border border-redwood shadow-lg rounded'>
              
                <img src='./src/assets/react-2.svg' className='w-full'></img>

          </div>
        </div>
          <div>
          <p></p>
        </div>
          <div className='grid grid-cols-2 items-center justify-center gap-2'>

            <div>
              <p>Oshune - Skincare Ecommerce Website wth Js</p>
                <Button text='source code' link="https://github.com/SanjilaGangaju/Oshune"></Button>

            </div>
          
             <div className='border border-redwood shadow-lg rounded'>
              
                <img src='./src/assets/react-2.svg' className='w-full'></img>

          </div>
        </div>
       </div>
      </div>
  )
}

export default Projects