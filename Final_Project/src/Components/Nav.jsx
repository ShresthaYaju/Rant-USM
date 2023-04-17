import React from 'react'
import { Link, Outlet } from 'react-router-dom'

function Nav() {
    
  return (
  <>
    <nav className='w-full bg-[#1A1A1B] border-b-2 border-gray-600 text-base flex flex-1 px-10 py-3 justify-end gap-6 font-bold'>
         <button className='py-1 px-4 border-2 border-gray-700 rounded-3xl hover:bg-gray-500 duration-500'>Sign Up</button>
         <button className='py-1 px-4 border-2 border-gray-800 rounded-3xl bg-teal-700 hover:bg-teal-500 duration-500'>Login</button>
    </nav>
    
    <div>
    <Outlet/>
    </div>
 
    </>
  )
}

export default Nav