import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import happy from "../assets/happy.jpg";
import sad from "../assets/sad.jpg";
import love from "../assets/love.jpg";
import Navbar from "./Navbar";

function Emotions() {
  const navigate = useNavigate();
  const [emotion, setEmotion] = useState("");

  const handleImageClick = (emotion) => {
    console.log("Clicked emotion:", emotion);
    navigate(`/quotes?emotion=${emotion}`);
  };

  return (
    <div>
      <Navbar />
      <div className="flex items-center justify-center h-screen">
        <div className="bg-white p-2 rounded-lg mx-5">
          <img
            src={happy}
            alt="Image 1"
            className="cursor-pointer hover:opacity-75 hover:rounded-full"
            onClick={() => handleImageClick("happy")}
          />
        </div>
        <div className="bg-white p-2 rounded-lg mx-5">
          <img
            src={love}
            alt="Image 2"
            className="cursor-pointer hover:opacity-75 hover:rounded-full"
            onClick={() => handleImageClick("love")}
          />
        </div>
        <div className="bg-white p-2 rounded-lg mx-5">
          <img
            src={sad}
            alt="Image 3"
            className="cursor-pointer hover:opacity-75 hover:rounded-full"
            onClick={() => handleImageClick("sad")}
          />
        </div>
      </div>
    </div>
  );
}

export default Emotions;
