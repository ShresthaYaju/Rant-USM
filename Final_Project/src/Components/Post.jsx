import React from "react";

function Post(props) {
  const Data = props.data;
  console.log("new Data", props);

  return (
    <div className="border-2 border-gray-600 bg-gray-800 p-9 hover:scale-105 duration-500 rounded-xl flex flex-1 cursor-pointer ">
      <div className="text-center w-11/12 border-r-2 border-gray-600">
        {Data ? (
          <h1 className="text-3xl font-bold">{Data.Title}</h1>
        ) : (
          <h1>no data</h1>
        )}
        {Data ? <h1 className="text-lg font-medium">{Data.Text}</h1> : <h1>no data</h1>}
      </div>
    </div>
  );
}

export default Post;
