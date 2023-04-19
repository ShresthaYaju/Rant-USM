import React, { useState, useRef } from "react";
import { BiUpvote, BiDownvote } from "react-icons/bi";

function Post(props) {
  console.log("what I get", props)
  const Data = props.prop;
  const [vote, setVote] = useState(0);
  const [selectedOption, setSelectedOption] = useState("");

  let btnUpRef = useRef();
  let btnDownRef = useRef();

  const handleClickUp = () => {
    if (!selectedOption) {
      setSelectedOption("upvote");
      setVote(1);
    } else if (selectedOption === "downvote") {
      setSelectedOption("upvote");
      setVote(vote + 2);
      btnDownRef.current.removeAttribute("disabled");
    } else {
      setSelectedOption("");
      setVote(0);
    }
    btnUpRef.current.setAttribute("disabled", "disabled");
  };

  const handleClickDown = () => {
    if (!selectedOption) {
      setSelectedOption("downvote");
      setVote(-1);
    } else if (selectedOption === "upvote") {
      setSelectedOption("downvote");
      setVote(vote - 2);
      btnUpRef.current.removeAttribute("disabled");
    } else {
      setSelectedOption("");
      setVote(0);
    }
    btnDownRef.current.setAttribute("disabled", "disabled");
  };

  return (
    <div className="px-40 my-12">
      <div
        className={`border-2 border-gray-600  bg-gray-800 p-4  pr-5 group hover:border-gray-400 duration-300 rounded-xl flex flex-1 cursor-pointer `}
      >
        <div className="text-center w-11/12  m-auto border-r-2 border-gray-600 group-hover:border-gray-400 duration-300 select-none">
          {Data ? (
            <h1 className="text-3xl font-bold">{Data.Title}</h1>
          ) : (
            <h1>no data</h1>
          )}
          {Data ? (
            <h1 className="text-lg font-medium">{Data.Text}</h1>
          ) : (
            <h1>no data</h1>
          )}
        </div>
        <div className="text-center ml-3">
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
      </div>
    </div>
  );
}

export default Post;
