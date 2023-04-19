import React from 'react'
import { Link, Outlet } from 'react-router-dom'

function Nav() {
    
  return (
  <>
    <nav className='w-full bg-[#1A1A1B] border-b-2 border-gray-600 text-base flex flex-1 px-10 py-3 justify-end gap-4 font-bold'>
         <button className='py-1 px-4 border-2 bg-[#484f58] border-gray-500 rounded-3xl hover:bg-gray-700 hover:border-teal-500 duration-500'>Sign Up</button>
         <button className='py-1 px-4 border-2 border-gray-800 rounded-3xl bg-teal-500 hover:bg-teal-700 hover:border-gray-300 duration-500'>Login</button>
    </nav>
    
    <div>
    <Outlet/>
    </div>
 
    </>
  )
}

export default Nav