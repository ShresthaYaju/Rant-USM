import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { createClient } from "@supabase/supabase-js";
import Post from "./Post";
import PopularContent from "./PopularContent";
import CommentForm from "./CommentForm";

function MoreInfo() {
  const { id } = useParams();
  const supabaseURL = "https://kstbhpzxvjyfrtccomtm.supabase.co";
  const supabasekey =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtzdGJocHp4dmp5ZnJ0Y2NvbXRtIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODE3MTI4ODIsImV4cCI6MTk5NzI4ODg4Mn0.Tk8PQTkbHHJIEbghy8mUCS42CM7sokJTwiBbLx8WxRo";

  const supabase = createClient(supabaseURL, supabasekey);
  const [data, setData] = useState([]);
  const [commentData, setCommentData] = useState([]);

  const getData = async () => {
    const { data, error } = await supabase
      .from("Data")
      .select("*")
      .eq("id", id)
      .single();
    // console.log(data);
    setData(data);
  };

  useEffect(() => {
    getData();
    getComment();

  }, []);

  const getComment = async () => {
    const { data, error } = await supabase
      .from("Comment")
      .select("*")
      .eq("origin_id", id);
    console.log(data);
    setCommentData(data);
  };


  return (
    <div className="flex">
      <div className="content w-full">

          <Post prop={data} pic={true} />
          <div className="pl-40 w-4/6 my-8">
          <div className={`border-2 border-gray-600  bg-[#2F2F2F] p-4  pr-5 group hover:border-gray-400 duration-300 rounded-md  `}
          >
            <h1 className="text-xl text-[#ffd046] font-semibold">Comments</h1>
            {
              commentData.map((comment,key) => {
                return (
                    <p>{key+1}.{comment.comment_text}</p>
                )
            })
            }
          </div>
       

         </div>

      </div>
      <PopularContent />
    
    </div>
  );
}

export default MoreInfo;
