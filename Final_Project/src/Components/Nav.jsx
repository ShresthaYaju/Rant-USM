import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { useState } from 'react';
import { createClient } from "@supabase/supabase-js";
import { useNavigate } from 'react-router-dom';


function Nav() {

  const [search, setSearch] = useState('')
  const supabaseURL = "https://kstbhpzxvjyfrtccomtm.supabase.co";
  const supabasekey =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtzdGJocHp4dmp5ZnJ0Y2NvbXRtIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODE3MTI4ODIsImV4cCI6MTk5NzI4ODg4Mn0.Tk8PQTkbHHJIEbghy8mUCS42CM7sokJTwiBbLx8WxRo";

   const navigate= useNavigate()
  const supabase = createClient(supabaseURL, supabasekey);

  const searchClick = async (e) => {
    e.preventDefault();
    const { data, error } = await supabase
      .from("Data")
      .select("*")
      .eq("Title", search);
    console.log(data[0].id);
    navigate(`/${data[0].id}`)
    setSearch('')
  
  }
    
  return (
    <>
    <div className=' flex border-b-2 border-gray-600 items-center  sticky top-0 z-50'>
    <p className='ml-10 text-2xl'><span className='text-[#ffd046]'>Rant</span>USM</p>
    <form>
    <input className='w-1/2 h-10 ml-10 rounded-3xl border-2 border-gray-600 px-4'value={search} type='text' placeholder='Search' onChange={(e)=>setSearch(e.target.value)
    
    }/>
    <button className='bg-[#ffd046] ml-4 border-2 border-[#2F2F2F] hover:border-white text-black font-bold py-1 px-6 rounded-full' onClick={searchClick}>Search</button>
    </form>
    <nav className='w-full bg-[#1A1A1B]  text-base flex flex-1 px-10 py-3 justify-end gap-4 font-bold'>
         <button className='py-1 px-4 border-2 bg-[#484f58] border-gray-500 rounded-3xl hover:bg-gray-700 hover:border-[#ffd046] duration-500'>Sign Up</button>
         <button className='py-1 px-4 border-2 border-gray-800 rounded-3xl bg-[#ffd046] text-black hover:border-white duration-500'>Login</button>
    </nav>
    
    
    </div>

    <div>
    <Outlet/>
    </div>
 
    </>
  
  );
}

export default Nav;
