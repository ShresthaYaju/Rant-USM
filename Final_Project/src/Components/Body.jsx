import React, { useEffect } from "react";
import { createClient } from "@supabase/supabase-js";
import Post from "./Post";
import { useState } from "react";
import PopularContent from "./PopularContent";

function Body() {
  const supabaseURL = "https://kstbhpzxvjyfrtccomtm.supabase.co";
  const supabasekey =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtzdGJocHp4dmp5ZnJ0Y2NvbXRtIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODE3MTI4ODIsImV4cCI6MTk5NzI4ODg4Mn0.Tk8PQTkbHHJIEbghy8mUCS42CM7sokJTwiBbLx8WxRo";

  const [data, setData] = useState([]);
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const [extendPost, setExtendPost] = useState(false);

  const supabase = createClient(supabaseURL, supabasekey);

  const fetchData = async () => {
    const { data, error } = await supabase.from("Data").select("*");
    // console.log(data)
    setData(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    fetchData();
  }, [data]);

  const test = data[0];

  

  const handleClick = async (e) => {
    e.preventDefault();
    const { data, error } = await supabase
      .from("Data")
      .insert([{ Title: title, Text: text }]);
    // console.log(data);
    setTitle("");
    setText("");
    setExtendPost(false);
  };
  return (
    <div className="flex">
      <div className="content w-full">
        <div className="pl-40 w-4/6 my-8">
          <div className="border-2  border-gray-600  bg-[#2F2F2F] px-9 py-4 pr-5 group hover:border-[#ffd046] duration-300 rounded-md flex flex-1 cursor-pointer">
            <form action="" className="w-full">
              <label className="text-lg font-semibold">Title</label>
              <input
                type="text"
                value={title}
                className="w-full  border-2 text-center border-gray-500 focus:outline-none group-hover:border-[#ffd046] duration-300 focus:border-[#ffd046] rounded-xl px-3 py-1 mb-3"
                onChange={(e) => setTitle(e.target.value) }
                onClick={() => setExtendPost(true)}

              />
             {
              extendPost==true ?<div>
                 <label className="text-lg font-semibold">Post</label>
              <textarea
                type="text"
                value={text}
                className="w-full border-2 border-gray-500 focus:outline-none group-hover:border-[#ffd046]  focus:border-[#ffd046] rounded-xl px-3 py-1"
                onChange={(e) => setText(e.target.value)}
              />
              </div>: 
              null
             }
              <button
                className="bg-[#ffd046] border-2 border-[#2F2F2F] hover:border-white text-black font-bold py-1 px-6 rounded-full"
                onClick={handleClick}
              >
                Post
              </button>
            </form>
          </div>
        </div>
        {data.map((item, index) => {
          // console.log(item);
          return <Post key={index} prop={item} />;
        })}
      </div>

        <PopularContent/>
    </div>
  );
}

export default Body;
