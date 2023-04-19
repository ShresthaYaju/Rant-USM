import React, { useEffect } from "react";
import { createClient } from "@supabase/supabase-js";
import Post from "./Post";
import { useState } from "react";

function Body() {
  const supabaseURL = "https://kstbhpzxvjyfrtccomtm.supabase.co";
  const supabasekey =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtzdGJocHp4dmp5ZnJ0Y2NvbXRtIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODE3MTI4ODIsImV4cCI6MTk5NzI4ODg4Mn0.Tk8PQTkbHHJIEbghy8mUCS42CM7sokJTwiBbLx8WxRo";

  const [data, setData] = useState([]);
  const[title, setTitle] = useState('')
    const[text, setText] = useState('')

  const supabase = createClient(supabaseURL, supabasekey);

  const fetchData = async () => {
    const { data, error } = await supabase.from("Data").select("*");
    // console.log(data)
    setData(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const test = data[0];
  console.log(test);

  const handleClick = async (e) => {
    e.preventDefault()
    const { data, error } = await supabase
      .from("Data")
      .insert([{ Title: title, Text: text }]);
    console.log(data);
    setTitle('')
    setText('')
  }
  return (
    <>
        <div className="px-40 pt-12">
            <div className="border-2 border-teal-700 bg-gray-800 px-9 py-4 pr-5 group hover:border-gray-400 duration-300 rounded-xl flex flex-1 cursor-pointer">
            <form action="" className="w-full">
                <label className="text-lg font-semibold">Title</label>
                <input type="text" value={title} className="w-full border-2 text-center border-gray-500 focus:outline-none focus:border-teal-500 rounded-xl px-3 py-1 mb-3" onChange={(e) => setTitle(e.target.value)}/>
                <label className="text-lg font-semibold">Post</label>
                <textarea type="text" value={text} className="w-full border-2 border-gray-500 focus:outline-none focus:border-teal-500 rounded-xl px-3 py-1"   onChange={(e) => setText(e.target.value)}/>
                <button className="bg-teal-500 hover:bg-teal-700 text-white font-bold py-2 px-6 rounded-full" onClick={handleClick}>Post</button>
            </form>
            </div>
        </div>
      {
        data.map((item, index) => {
          console.log(item);
          return <Post key={index} prop={item} />;
        }
      )}
    </>
  );
}

export default Body;
