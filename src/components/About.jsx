import React from 'react'
import AboutImage from '../assets/about.svg'
import {IoMdCheckmarkCircleOutline} from 'react-icons/io'

const About = () => {
  return (
    <div className='bg-white w-[100%] h-[100%] ' id='About'>
        <div className='text-center text-[#8ad6fc] pt-[130px]'>
            <h1 className=''>About</h1>
        </div>
            <div className='grid lg:grid-cols-2 py-4 grid-cols-1 md:shrink-0'>
            <div className='w-full' >I
            <img className='w-85 md:w-70' src={AboutImage} alt='About Image' />
            </div>
            <div className='px-4 my-12 w-full md:'>
            <h1 className='' >Why Choose Us</h1>
            <h2 className='pt-2'>We Create Your Idea Into Reality</h2>
            <p className='pt-2 pr-2'>Nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat sed diam voluptua. At vero eos et accusam et justo duo dolores et rebum. Stet clita kasd gubergren, no sea takimata sanctus.</p>
        
            <div className='flex pt-8 items-center'>
                {<IoMdCheckmarkCircleOutline size={30}  />}
                <p className='pl-4 h-full'> Vero eos et accusam et justo duo dolores et rebum. Stet clita kasd gubergrenv </p>
            </div>
            <div className='flex pt-8 items-center'>
                {<IoMdCheckmarkCircleOutline size={30}  />}
                <p className='pl-4 h-full'> Vero eos et accusam et justo duo dolores et rebum. Stet clita kasd gubergrenv </p>
            </div>
            <div className='flex pt-8 items-center'>
                {<IoMdCheckmarkCircleOutline size={30}  />}
                <p className='pl-4 h-full'> Vero eos et accusam et justo duo dolores et rebum. Stet clita kasd gubergrenv </p>
            </div>
          
         </div>
        </div>
    </div>

  )
}

export default About