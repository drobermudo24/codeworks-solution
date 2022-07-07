import React from 'react'
import Typed from 'react-typed'
const Hero = () => {
  return (
    <div className='text-white' id='Home'>
        <div className='max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
            <p className='text-[#8ad6fc] font-bold p-2'>MAKE YOUR IDEA INTO REALITY TODAY!</p>
            
            <h1 className='md:text-7xl sm:text-6xl text-4xl font-bold md:py-6'>CodeWorks Solution</h1>
            <div className='flex justify-center items=center pt-2'>
                <p className='text-[white] md:text-[32px] sm:text-[30px] sm:pt-2 text-xl font-bold'>We offer services like</p>
                <Typed 
                className='md:text-[32px] sm:text-[30px] sm:pt-2 text-xl font-bold md:pl-4 pl-2'
                strings={['Web Development', 'Web Design', 'Landing Pages']} 
                typeSpeed={90} 
                backSpeed={90} 
                loop

                />
 </div>

    <button className='btn bg-[#02a9f7] w-[200px] rounded-[9999px] font-medium my-12 mx-auto py-4  text-[#011016]]'>Get Started</button>
        </div>
    </div>
  )
}

export default Hero