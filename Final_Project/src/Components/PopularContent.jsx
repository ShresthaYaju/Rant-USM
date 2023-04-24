import React from 'react'

function PopularContent() {
  return (
    <div className='w-3/12 p-4 my-8 mr-8 ml-[-350px] border-2  border-gray-600  bg-[#2F2F2F] h-3/5 rounded-md select-none'>
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


        
      
    </div>
  )
}

export default PopularContent