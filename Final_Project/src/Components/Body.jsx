import React, { useEffect } from "react";
import { createClient } from "@supabase/supabase-js";
import Post from "./Post";
import { useState } from "react";
import PopularContent from "./PopularContent";
import { useNavigate } from "react-router-dom";

function Body() {
  const supabaseURL = "https://kstbhpzxvjyfrtccomtm.supabase.co";
  const supabasekey =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtzdGJocHp4dmp5ZnJ0Y2NvbXRtIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODE3MTI4ODIsImV4cCI6MTk5NzI4ODg4Mn0.Tk8PQTkbHHJIEbghy8mUCS42CM7sokJTwiBbLx8WxRo";

  const [data, setData] = useState([]);
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const [url, setUrl] = useState("");
  const [extendPost, setExtendPost] = useState(false);
const [newestFlag, setNewestFlag] = useState(true);
const [popularFlag, setPopularFlag] = useState(false);

  const supabase = createClient(supabaseURL, supabasekey);

  const fetchData = async () => {
    const { data, error } = await supabase.from("Data").select("*");
    // console.log(data)
    setData(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (!(newestFlag||popularFlag)){
    useEffect(() => {
      fetchData();
   
   
      
     }, [data]);
  }
 



  const test = data[0];

  const handleClick = async (e) => {
    e.preventDefault();
    const { data, error } = await supabase
      .from("Data")
      .insert([{ Title: title, Text: text, image_url: url }]);
    // console.log(data);
    setTitle("");
    setText("");
    setUrl("");
    setExtendPost(false);
  };

  const newPost = async () => {
    const { data, error } = await supabase
      .from("Data")
      .select("*")
      .order("created_at", { ascending: false });
    setData(data);
    setNewestFlag(true);
  };

  const popularPost = async () => {
    const { data, error } = await supabase
      .from("Data")
      .select("*")
      .order("Vote", { ascending: false });
    setData(data);
    setPopularFlag(true);
  };

  return (
    <div className="flex">
      <div className="content w-full">
        <div className="pl-40 w-4/6 my-8">
          <div className="mb-3 flex gap-4">
            <button
              className="py-1 px-4  border-2 bg-[#484f58] border-gray-500 rounded-3xl hover:bg-gray-700 hover:border-[#ffd046] duration-500"
              onClick={popularPost}
            >
              Most Popular
            </button>
            <button
              className="py-1 px-4 border-2 border-gray-800 rounded-3xl bg-[#ffd046] text-black hover:border-white duration-500"
              onClick={newPost}
            >
               Newest
            </button>
          </div>
          <div className="border-2  border-gray-600  bg-[#2F2F2F] px-9 py-4 pr-5 group hover:border-[#ffd046] duration-300 rounded-md flex flex-1 cursor-pointer">
            <form action="" className="w-full">
              <label className="text-lg font-semibold">Title</label>
              <input
                type="text"
                value={title}
                className="w-full  border-2 text-center border-gray-500 focus:outline-none group-hover:border-[#ffd046] duration-300 focus:border-[#ffd046] rounded-xl px-3 py-1 mb-3"
                onChange={(e) => setTitle(e.target.value)}
                onClick={() => setExtendPost(true)}
              />
              {extendPost == true ? (
                <div>
                  <label className="text-lg font-semibold">Post</label>
                  <textarea
                    type="text"
                    value={text}
                    className="w-full border-2 border-gray-500 focus:outline-none group-hover:border-[#ffd046]  focus:border-[#ffd046] rounded-xl px-3 py-1 mb-3"
                    onChange={(e) => setText(e.target.value)}
                  />
                </div>
              ) : null}
              {extendPost == true ? (
                <div>
                  <label className="text-lg font-semibold">Image URL</label>
                  <textarea
                    type="text"
                    value={url}
                    className="w-full border-2 border-gray-500 focus:outline-none group-hover:border-[#ffd046]  focus:border-[#ffd046] rounded-xl px-3 py-1"
                    onChange={(e) => setUrl(e.target.value)}
                  />
                </div>
              ) : null}

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

      <PopularContent />
    </div>
  );
}

export default Body;
