import React, { useEffect } from 'react'
import {createClient} from '@supabase/supabase-js'
import Post from './Post'
import { useState } from 'react'


function Body() {
    const supabaseURL = 'https://kstbhpzxvjyfrtccomtm.supabase.co'
    const supabasekey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtzdGJocHp4dmp5ZnJ0Y2NvbXRtIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODE3MTI4ODIsImV4cCI6MTk5NzI4ODg4Mn0.Tk8PQTkbHHJIEbghy8mUCS42CM7sokJTwiBbLx8WxRo'

    const [data, setData]= useState([])

    const supabase = createClient(supabaseURL, supabasekey)

    const fetchData = async () => {
        const {data, error} = await supabase.from('Data').select('*')
        // console.log(data)
        setData(data)
    }

    useEffect(() => {
        fetchData()
    }, [])
    
    const test= data[0]
    console.log(test)
  return (
    <div className='px-40 py-12'>
        <Post data={test} />
    </div>
  )
}

export default Body