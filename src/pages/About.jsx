import React from 'react'

const About = () => {
  return (
    <div className='p-10 flex flex-col gap-5'>
      <div className=' flex flex-col items-center gap-2 justify-center'>
        <h2 className='font-saint text-redwood text-4xl font-semibold'>intro</h2>
        <hr className='w-1/2 text-redwood'></hr>
        <p className='font-sans text-[0.9rem] text-justify'>Namaste! I’m Sanjila Gangaju, an aspiring Frontend Developer passionate about transforming ideas into engaging web experiences. I am excited to dive into real-world web development projects that challenge my creativity and help me grow my skills. Let’s build something amazing together!</p></div>
      <div className='flex flex-col items-center justify-center'>
        <h2 className='font-saint text-redwood text-4xl font-semibold'>skills</h2>
        <hr className='text-redwood w-1/2'></hr>
        <div className='grid grid-cols-3 gap-10 items-center p-10 justify-center'>
          <div><img src="src/assets/html-1.svg" className='w-full'></img></div>
         <div><img src="src/assets/css-3.svg" className='w-full'></img></div>
         <div><img src="src/assets/javascript-1.svg" className='w-full'></img></div>
        <div><img src="src/assets/react-2.svg" className='w-full'></img></div>
         <div><img src="src/assets/tailwind-css-2.svg" className='w-full'></img></div>
         <div><img src="src/assets/bootstrap-5-1.svg" className='w-full'></img></div>
        </div>
       
      </div>   
      <div className='flex flex-col items-center gap-5'>
        <h2 className='font-saint text-redwood text-4xl font-semibold'>education</h2>
        <hr className='w-1/2 text-redwood'></hr>
        <div className='relative w-full h-full  flex flex-col  gap-10 border-l-7 border-redwood'>
          
           <div className='bg-yellow-100 rounded flex items-center '>
            <div className='w-3 h-3 bg-redwood rounded-full absolute -left-[12px]'></div>
            <p className='ml-5 p-2 flex flex-col gap-2'>
              <p  className='font-serif font-semibold text-[0.9rem]'>Lumbini ICT Campus</p>
              <p className='font-sans text-[0.78rem]'>Bachelor of Science in Computer Science and Information Technology (BSc.CSIT)</p>
               <p className='font-sans text-[0.78rem]'>2021-2025</p>
              
            </p>
           </div>
          
           <div className='bg-yellow-100 rounded flex items-center '>
            <div className='w-3 h-3 bg-redwood rounded-full absolute -left-[12px]'></div>
            <p  className='ml-5 p-2 flex flex-col gap-2'>
               <p  className='font-serif font-semibold text-[0.9rem]'>Valmiki Shiksha Sadan </p>
              <p className='font-sans text-[0.78rem]'>Completed Higher Secondary Education (Plus 2) with focus on Science</p>
              
            </p>
           </div>
            
           <div className='bg-yellow-100 flex items-center '>
            <div className='w-3 h-3 bg-redwood rounded-full absolute -left-[12px]'></div>
            <p className='ml-5 p-2 flex flex-col gap-2'>
              <p className='font-serif font-semibold text-[0.9rem]'>St. Mary's School</p>
              <p className='font-sans text-[0.78rem]'>Completed Primary and Secondary Education</p>
            </p>
           </div>
        </div>

      
           
      </div>

    </div>

  )
}

export default About