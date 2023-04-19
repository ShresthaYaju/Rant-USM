import React from "react";
import {BiUpvote, BiDownvote} from "react-icons/bi";
import { useState } from "react";

function Post(props) {
  const Data = props.data;
  console.log("new Data", props);
  const [vote, setVote] = useState(0);
  const [clickUp, setClickUp] = useState(false);
  const [clickDown, setClickDown] = useState(false);

  const handleClickUp = (e) => {

    e.currentTarget.disabled = true;
    if (clickUp) {
      setVote(vote - 1);
      clickUp = false;
    } else {
      setVote(vote + 1);
      clickUp = true;
    }
  }

  const handleClickDown = () => {
    if (clickDown) {
      setVote(vote + 1);
      clickDown = false;
    } else {
      setVote(vote - 1);
      clickDown = true;
    }
  }

  return (
    <div className="border-2 border-gray-600 bg-gray-800 p-9 pr-5 group hover:border-gray-400 duration-300 rounded-xl flex flex-1 cursor-pointer ">
      <div className="text-center w-11/12 border-r-2 border-gray-600 group-hover:border-gray-400 duration-300">
        {Data ? (
          <h1 className="text-3xl font-bold">{Data.Title}</h1>
        ) : (
          <h1>no data</h1>
        )}
        {Data ? <h1 className="text-lg font-medium">{Data.Text}</h1> : <h1>no data</h1>}
      </div>
      <div className="text-center ml-3">
        <BiUpvote className="text-4xl text-gray-600 hover:text-gray-400 duration-300 " onClick={handleClickUp}/>
        {<p className="text-base">{vote}</p>}
        <BiDownvote className="text-4xl text-gray-600 hover:text-gray-400 duration-300 " onClick={handleClickDown}/>
      </div>
    </div>
  );
}

export default Post;
