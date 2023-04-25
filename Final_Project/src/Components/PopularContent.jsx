import React from 'react'
import { useNavigate} from "react-router-dom";

function PopularContent() {

    const navigate = useNavigate();

    const backHome=()=>{
        navigate('/')
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth",
          })
      }
  return (
    <div className='w-3/12 p-4 my-8 mr-8 ml-[-350px] border-2  border-gray-600  bg-[#2F2F2F] h-3/5 rounded-md select-none sticky top-28 z-50'>
        <h1 className='text-lg text-[#ffd046]'>Popular Communities</h1>
        <ul className='flex flex-1 gap-2 flex-wrap justify-center'>
            <li>
                <a href="#" className='hover:underline'>f/USM</a>
            </li>
            <li>
                <a href="#"className='hover:underline'>f/USM_CS</a>
            </li>
            <li>
                <a href="#" className='hover:underline'>f/RANT</a>
            </li>
            <li>
                <a href="#" className='hover:underline'>f/NoStupidQuestions</a>
            </li>
            <li>
                <a href="#" className='hover:underline'>f/BobyChain</a>
            </li>
            <li>
                <a href="#" className='hover:underline'>f/leagueoflegends</a>
            </li>
            <li>
                <a href="#" className='hover:underline'>f/Minecraft</a>
            </li>
        </ul>


        <button
                className="bg-[#ffd046] mt-2 border-2 border-[#2F2F2F] hover:border-white text-black font-bold py-1 px-6 rounded-full"
                onClick={backHome}
              >
                Home
              </button>
      
    </div>
  )
}

export default PopularContent