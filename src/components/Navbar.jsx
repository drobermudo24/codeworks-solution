import React, {useState} from 'react'
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai'

const Navbar = () => {
    const [nav, setNav] =useState(false)

    const handleNav = () =>{
        setNav(!nav)
    }
  return (
    <div className="bg-[#011016] sticky top-0 flex justify-between items-center h-24   px-4 text-white">
     <div className='m-2'>
        <span className='w-full text-3xl font-bold text-[#d4f0fb]'>Code</span>
        <span className='w-full text-3xl font-bold text-[#8ad6fc]'>Works</span>
       </div>
        <ul className='hidden md:flex'>
            <li className='p-4'><a href='#Home'>Home</a></li>
            <li className='p-4'><a href='#About'>About</a></li>
            <li className='p-4'><a href='#Services'>Services</a></li>
            <li className='p-4'>Projects</li>
            <li className='p-4'>Contact</li>
        </ul>
        <div onClick={handleNav} className='block md:hidden lg:hidden'>
            {!nav ? <AiOutlineClose size={20} /> :  <AiOutlineMenu size={20} />}
            
        </div>
        <div className={!nav ? 'md:hidden fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#02202b] ease-in-out duration-500' : 'fixed left-[-100%]'}>
        <div className='mt-[30px] ml-6 w-full text-3xl font-bold m-4 '>
        <span className=' text-[#d4f0fb]'> Code</span>
        <span className=' text-[#8ad6fc]'>Works</span>
       </div>
            <ul className='p-4 uppercase'>
            <li className='p-4 border-b border-white-900'><a href='#Home'>Home</a></li>
            <li className='p-4 border-b border-white-900'><a href='#About'>About</a></li>
            <li className='p-4 border-b border-white-900'><a href='#Services'>Services</a></li>
            <li className='p-4 border-b border-white-900'>Projects</li>
            <li className='p-4'>Contact</li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar