import React from 'react'
import {CgWebsite} from 'react-icons/cg'
import {TbBrandPagekit} from 'react-icons/tb'
import {RiCodeSSlashLine} from 'react-icons/ri'

const Services = () => {
  return (
    <div className='bg-white w-[100%] h-[100%] ' id='Services'>
        <div className='text-center text-[#8ad6fc] pt-[130px]'>    
          <h1>What we do</h1>
          <h2>Our Services</h2>
        </div>
        <div className='grid lg:grid-cols-3 py-8 sm:grid-cols-1 text-center px-8 md:grid-cols-2'>
            <div className='service m-4 p-4 text-center border-dashed border-2 border-[#d4f0fb] hover:border-[#02a9f7] '>
                <div className='icon pt-10' style={{ display: "flex", justifyContent: "center"}}><RiCodeSSlashLine size={70} /></div>
                <h2 className='pt-10 pb-4 font-bold'>Web Development</h2>
                <p className='pb-8'>Lorem ipsum dolor sit amet, consetetur sadi aliquyam erat, sed diam voluptua. At vero eos accusam et justo duo dolores</p>
            </div>
            <div className='service m-4 p-4 text-center border-dashed border-2 border-[#d4f0fb] hover:border-[#02a9f7]'>
                <div className='icon pt-10' style={{ display: "flex", justifyContent: "center" }}><CgWebsite size={70} /></div>
                <h2 className='pt-10 pb-4 font-bold'>Web Design</h2>
                <p className='pb-8'>Lorem ipsum dolor sit amet, consetetur sadi aliquyam erat, sed diam voluptua. At vero eos accusam et justo duo dolores</p>
            </div>
            <div className='service m-4 p-4 text-center border-dashed border-2 border-[#d4f0fb] hover:border-[#02a9f7]'>
                <div className='icon pt-10' style={{ display: "flex", justifyContent: "center" }}><TbBrandPagekit size={70} /></div>
                <h2 className='pt-10 pb-4 font-bold'>Landing Page</h2>
                <p className='pb-8'>Lorem ipsum dolor sit amet, consetetur sadi aliquyam erat, sed diam voluptua. At vero eos accusam et justo duo dolores</p>
            </div>
            
        </div>
    </div>
  )
}

export default Services