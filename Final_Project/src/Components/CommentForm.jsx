import React from 'react'
import { useState } from 'react'
import { createClient } from '@supabase/supabase-js';
import { useParams } from 'react-router-dom';

function CommentForm(props) {
    const [comment, setComment] = useState('')

    const id= props.id


    const supabaseURL = "https://kstbhpzxvjyfrtccomtm.supabase.co";
    const supabasekey =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtzdGJocHp4dmp5ZnJ0Y2NvbXRtIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODE3MTI4ODIsImV4cCI6MTk5NzI4ODg4Mn0.Tk8PQTkbHHJIEbghy8mUCS42CM7sokJTwiBbLx8WxRo";
    
    const supabase = createClient(supabaseURL, supabasekey);
    const { post_id } = useParams();

  

    const addComment = async (e) => {
        console.log(id)
        e.preventDefault()
        const { data, error } = await supabase
        .from('Comment')
        .insert([
            { comment_text: comment, origin_id: id },
        ])
        setComment('')
    }

  return (
    <div className='mt-2'>
        <form action="">
            <textarea
            className={` px-2 border-2 ${comment===true? 'border-teal-500':' border-gray-600'} focus:outline-none focus:border-[#ffd046]  bg-[#2F2F2F]   hover:border-[#ffd046] duration-300 rounded-md flex flex-1 cursor-pointer`}
            type="text" name="comment" value={comment} id="comment" placeholder="Comment..."
            onChange={(e) => setComment(e.target.value)}
            />
            <button
                className="bg-[#ffd046] border-2 border-[#2F2F2F] hover:border-white text-black font-bold py-1 px-6 rounded-full"
                onClick={addComment}
              >
                Post
              </button>
        </form>
        
    </div>
  )
}

export default CommentForm