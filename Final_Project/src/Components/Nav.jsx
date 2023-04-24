import React from 'react'
import { Link, Outlet } from 'react-router-dom'

function Nav() {
    
  return (
    <>
    <div className=' flex border-b-2 border-gray-600 items-center'>
    <p className='ml-10 text-2xl'><span className='text-[#ffd046]'>Rant</span>USM</p>
    <nav className='w-full bg-[#1A1A1B]  text-base flex flex-1 px-10 py-3 justify-end gap-4 font-bold'>
         <button className='py-1 px-4 border-2 bg-[#484f58] border-gray-500 rounded-3xl hover:bg-gray-700 hover:border-[#ffd046] duration-500'>Sign Up</button>
         <button className='py-1 px-4 border-2 border-gray-800 rounded-3xl bg-[#ffd046] text-black hover:border-white duration-500'>Login</button>
    </nav>
    
    
    </div>
    <div>
    <Outlet/>
    </div>
 
    </>
  
  )
}

export default Nav