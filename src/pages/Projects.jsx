import React from 'react'

const Projects = () => {
  return (
    <div className='text-center flex flex-col items-center justify-center p-8'>
        <h2 className='font-imperial text-redwood text-4xl font-semibold mb-8'>My projects</h2>

       <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
        <div className='grid grid-cols-2 items-center justify-center gap-2'>
          <p>AiResvue-Ai powered Resume Reviewer</p>
           <div className=' border border-redwood shadow-lg rounded'>              
                <img src='./src/assets/react-2.svg' className='w-full'></img>

          </div>
        </div>
          <div className='grid grid-cols-2  items-center justify-center gap-2'>
            <p>NomYmm-Food Recipe App with Api Integration</p>
             <div className='border border-redwood shadow-lg rounded'>
              
                <img src='./src/assets/react-2.svg' className='w-full'></img>

          </div>
        </div>
          <div>
          <p></p>
        </div>
          <div className='grid grid-cols-2 items-center justify-center gap-2'>
          <p>Oshune - Skincare Ecommerce Website wth Js</p>
             <div className='border border-redwood shadow-lg rounded'>
              
                <img src='./src/assets/react-2.svg' className='w-full'></img>

          </div>
        </div>
       </div>
      </div>
  )
}

export default Projects