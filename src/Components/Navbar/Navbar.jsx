import React from 'react'
import './Navbar.css'
import logo from '../../assets/olx_logo_2025.svg'
import search from '../../assets/search1.svg'
import searchwt from '../../assets/search.svg'
import arrow from '../../assets/arrow-down.svg'
import arrow_white from '../../assets/arrow-white.png'

const Navbar = (props) => {
    const{toggleModal}=props
  return (
    <div>
      <nav className='fixed z-50 w-full overflow-auto p-2 pl-3 shadow-md gap-3
      pr-3 bg-slate-100 border-b-4 border-solid border-b-white flex items-center'>
        <img src={logo} className='w-12' alt="" />
        <div className='relative location-search ml-5 '>
            <img src={search} className='absolute top-1/2 -translate-y-1/2 left-[10px] w-5' alt="" />
            <input type="text" placeholder='Search city...' 
            className='w-[230px] sm:w-[200px] md:w-[250px] h-12 pl-10 pr-10 border-black border-solid border-2 placeholder:text-ellipsis rounded-md focus:outline-none focus:border-teal-300' />
            <img src={arrow} className='absolute top-1/2 -translate-y-1/2 right-[10px] w-5 cursor-pointer' alt=""/>
        </div>
        <div className='ml-5 mr-2 relative flex-1 main-search'>
            <input type="text" placeholder='Find Cars,Mobile Phones, and More...' className='w-full h-12 pl-4 pr-14 border-black border-solid border-2 rounded-md 
            placeholder:text-ellipsis focus:outline-none focus:border-teal-300' />
            <div style={{backgroundColor:'#002f34'}} className='flex justify-center items-center absolute top-0 right-0 h-full rounded-e-md w-12 cursor-pointer' >
                <img src={arrow_white} className='w-7 filter invert' alt=""/>
            </div>
        </div>
        <div className='mx-1 sm:ml-5 relative lang flex items-center cursor-pointer'>
            <p className='font-bold mr-2'>English</p>
            <img src={arrow} className='w-5' alt=""/>
        </div>
        <p onClick={toggleModal} className='ml-5 font-bold cursor-pointer hover:underline'>login</p>
      </nav>
    </div>
  )
}

export default Navbar