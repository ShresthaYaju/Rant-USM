import { useState } from "react";
import "./App.css";
import Nav from "./Components/Nav";
import { Route, Routes } from "react-router-dom";
import Body from "./Components/Body";
import MoreInfo from "./Components/MoreInfo";

function App() {
  return (
    <div className="">
      <Routes>
        <Route path="/" element={<Nav />}>
          <Route index={true} element={<Body />} />
          <Route path={"/:id"} element={<MoreInfo/>} />
        </Route>
      </Routes>
    </div>
  );
}


export default App;
