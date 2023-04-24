import React, { useState, useRef, useEffect } from "react";
import { BiUpvote, BiDownvote } from "react-icons/bi";
import { AiTwotoneEdit, AiOutlineDelete } from "react-icons/ai";
import { createClient } from "@supabase/supabase-js";
import { useNavigate} from "react-router-dom";
import MoreInfo from "./MoreInfo";


function Post(props) {
  const Data = props.prop;
  const [vote, setVote] = useState(Data.Vote);
  const [selectedOption, setSelectedOption] = useState("");
  const [edit, setEdit] = useState("");
  const [editTitle, setEditTitle] = useState("");
  const [editText, setEditText] = useState("");

  let btnUpRef = useRef();
  let btnDownRef = useRef();

 
  const supabaseURL = "https://kstbhpzxvjyfrtccomtm.supabase.co";
  const supabasekey =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtzdGJocHp4dmp5ZnJ0Y2NvbXRtIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODE3MTI4ODIsImV4cCI6MTk5NzI4ODg4Mn0.Tk8PQTkbHHJIEbghy8mUCS42CM7sokJTwiBbLx8WxRo";

  const supabase = createClient(supabaseURL, supabasekey);

  const supabaseVote = async () => {
    const { data, error } = await supabase
      .from("Data") 
      .update({ Vote: vote })
      .match({ id: Data.id });
  };

  const handleClickUp = () => {
    if (!selectedOption) {
      setSelectedOption("upvote");
      setVote(vote => vote + 1);
      supabaseVote();
    } else if (selectedOption === "downvote") {
      setSelectedOption("upvote");
      setVote(vote=>vote + 2);
      supabaseVote();
      btnDownRef.current.removeAttribute("disabled");
    } else {
      setSelectedOption("");
      setVote(vote=>vote - 1);
      supabaseVote();
    }


    btnUpRef.current.setAttribute("disabled", "disabled");
  };

  const handleClickDown = () => {
    if (!selectedOption) {
      setSelectedOption("downvote");
      setVote(vote=>vote-1);
      supabaseVote();
    } else if (selectedOption === "upvote") {
      setSelectedOption("downvote");
      setVote(vote=>vote - 2);
      supabaseVote();
      btnUpRef.current.removeAttribute("disabled");
    } else {
      setSelectedOption("");
      setVote(vote=>vote + 1);
      supabaseVote();
    }

    supabaseVote();
    btnDownRef.current.setAttribute("disabled", "disabled");
  };

  const handleClickUpdate= async (e) => {

    console.log(editTitle, editText)
    const { data, error } = await supabase
      .from("Data")
      .update({ Title: editTitle, Text: editText })
      .match({ id: Data.id });
  };

  const handleDelete = async () => {
    const { data, error } = await supabase
      .from("Data")
      .delete()
      .match({ id: Data.id });
    setEdit("Delete");
  };

  const handleEdit = async () => {
    
    setEdit("Edit");
    setEditTitle(Data.Title);
    setEditText(Data.Text);
  };

  const navigate= useNavigate();

  const moreInfo = () => {
    navigate(`/${Data.id}`)
  }
  return (
    <>
      {edit !== "Edit" ? (
       
        <div className="pl-40 w-4/6 my-8" >
          <div
            className={`border-2 border-gray-600  bg-[#2F2F2F] p-4  pr-5 group hover:border-gray-400 duration-300 rounded-md flex flex-1 cursor-pointer `}
          >
            <div className="text-center mr-3">
              <BiUpvote
                ref={btnUpRef}
                className={`text-4xl text-gray-600 hover:text-gray-400 duration-300 ${
                  selectedOption === "upvote"
                    ? "text-teal-500 hover:text-teal-700"
                    : ""
                }`}
                onClick={handleClickUp}
              />
              <p className="text-base select-none">{vote}</p>
              <BiDownvote
                ref={btnDownRef}
                className={`text-4xl text-gray-600 hover:text-gray-400 duration-300 ${
                  selectedOption === "downvote"
                    ? "text-red-600 hover:text-red-700"
                    : ""
                }`}
                onClick={handleClickDown}
              />
            </div>

            <div className="text-center w-11/12  m-auto border-x-2 border-gray-600 group-hover:border-gray-400 duration-300 select-none" onClick={moreInfo}>
              {Data ? (
                <h1 className="text-3xl ">{Data.Title}</h1>
              ) : (
                <h1>no data</h1>
              )}
              {Data ? (
                <h1 className="text-lg font-medium">{Data.Text}</h1>
              ) : (
                <h1>no data</h1>
              )}
            </div>

            <div className="text-center ml-3 my-auto">
              <AiTwotoneEdit
                ref={btnUpRef}
                className={`text-2xl  mb-4 text-gray-600 hover:text-gray-400 duration-300 ${
                  edit === "Edit" ? "text-teal-500 hover:text-teal-700" : ""
                }`}
                onClick={handleEdit}
              />

              <AiOutlineDelete
                className={`text-2xl text-gray-600 hover:text-gray-400 duration-300 ${
                  edit === "Delete" ? "text-red-600 hover:text-red-700" : ""
                }`}
                onClick={handleDelete}
              />
            </div>
          </div>
        </div>
      
      ) : (
        <div className="pl-40 w-4/6 my-8">
          <div
            className={`border-2 border-gray-600  bg-[#2F2F2F] p-4  pr-5 group hover:border-gray-400 duration-300 rounded-md flex flex-1 cursor-pointer `}
          >
            <div className="text-center mr-3">
              <BiUpvote
                ref={btnUpRef}
                className={`text-4xl text-gray-600 hover:text-gray-400 duration-300 ${
                  selectedOption === "upvote"
                    ? "text-teal-500 hover:text-teal-700"
                    : ""
                }`}
                onClick={handleClickUp}
              />
              <p className="text-base select-none">{vote}</p>
              <BiDownvote
                ref={btnDownRef}
                className={`text-4xl text-gray-600 hover:text-gray-400 duration-300 ${
                  selectedOption === "downvote"
                    ? "text-red-600 hover:text-red-700"
                    : ""
                }`}
                onClick={handleClickDown}
              />
            </div>

            <div className="text-center w-11/12  m-auto border-x-2 border-gray-600 group-hover:border-gray-400 duration-300 select-none">
              <form action="">
                {Data ? (
                  <input
                    value={editTitle}
                    type="text"
                    className=" border-2 text-center text-3xl border-gray-500 focus:outline-none group-hover:border-[#ffd046] duration-300 focus:border-[#ffd046] rounded-xl px-3 py-1 mb-3 "
                    onChange={(e) => setEditTitle(e.target.value)}
                  />
                ) : (
                  <h1>no data</h1>
                )}
                {Data ? (
                  <textarea
                    value={editText}
                    type="text"
                    className=" w-11/12 border-2 text-center text-lg border-gray-500 focus:outline-none group-hover:border-[#ffd046] duration-300 focus:border-[#ffd046] rounded-xl px-3 py-1 mb-3"
                    onChange={(e) => setEditText(e.target.value)}
                  />
                ) : (
                  <h1>no data</h1>
                )}
                 <button
                className="bg-[#ffd046] border-2 border-[#2F2F2F] hover:border-white text-black font-bold py-1 px-6 rounded-full"
                onClick={handleClickUpdate}
              >
                Edit
              </button>
              </form>
            </div>
            <div className="text-center ml-3 my-auto">
              <AiTwotoneEdit
                ref={btnUpRef}
                className={`text-2xl  mb-4 text-gray-600 hover:text-gray-400 duration-300 ${
                  edit === "Edit" ? "text-teal-500 hover:text-teal-700" : ""
                }`}
                onClick={handleEdit}
              />

              <AiOutlineDelete
                className={`text-2xl text-gray-600 hover:text-gray-400 duration-300 ${
                  edit === "Delete" ? "text-red-600 hover:text-red-700" : ""
                }`}
                onClick={handleDelete}
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Post;
