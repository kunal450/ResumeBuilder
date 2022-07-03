import React, { useState } from 'react'
import '../App.css'
import logo from "./images/logo.svg"
function Header() {
  const [flag,setFlag]=useState(false);
  
  return (
    <>
    <div className='container mx-auto'>
    <div className="flex justify-between md:p-[1rem] md:p-[1.05rem]">
        <div className=" flex text-white font-semibold text-base md:text-2xl " id='logo'>
        <img src={logo} alt="logo" className='ml-1'  />
        <div className="logoText ml-1">Resume Builder</div>
        </div>
        <div className="menu inline-block sm:hidden" onClick={()=>setFlag(!flag)}>Menu</div>
        <div className="hidden sm:flex justify-evenly w-56 md:w-60">
            <button className='rounded-md w-16 sm:w-20 md:w-24' id='import'>Import</button>
            <button className='rounded-md w-16 sm:w-20 md:w-24 text-white' id='export'>Export</button>
        </div>
    </div>
    {
          flag? <>
            <div className='sm:hidden'>
            <div className='block flex justify-center my-2 '><button className='rounded-md w-16' id='import'>Import</button></div>
            <div className='block flex justify-center my-2'><button className='rounded-md text-white w-16' id='export'>Export</button></div>
            </div>
          </>:null
        }
    </div>
    </>
  )
}

export default Header