import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import happy from "../assets/happy.jpg";
import sad from "../assets/sad.jpg";
import love from "../assets/love.jpg";
import Navbar from "./Navbar";
import About from "./AboutUs";
import Contact from "./ContactUs";
import styles from "../styles/Emotions.module.css";

function App() {
  const navigate = useNavigate();
  const [emotion, setEmotion] = useState("");
  const handleImageClick = (emotion) => {
    console.log("Clicked emotion:", emotion);
    navigate(`/quotes?emotion=${emotion}`);
  };
  
  return (
    <div className={`${styles.gridContainer} min-h-screen`}>
      <div className={`${styles.navbar}`}>
        <Navbar />
      </div>
      <div className={`${styles.sidebar} bg-gray-100`}>
        <About /> 
      </div>
      <div className={`${styles.main} flex flex-col items-center justify-center mt-20`}>
        <h2 className="font-bold mb-4 text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-center">
          Hey there! How's your mood today? 😄✨
        </h2>
        <h2 className="font-bold mb-4 text-xl md:text-2xl lg:text-3xl xl:text-4xl text-center">
          If you're interested, I have some inspirational quotes to share with you. Quotes have a way of uplifting our spirits and providing a fresh perspective.
        </h2>
        <h2 className="font-bold mb-4 text-xl md:text-2xl lg:text-3xl xl:text-4xl text-center">
          Here's one for you: "Believe you can and you're halfway there." - Theodore Roosevelt 🌟
        </h2>
        <br />
        <br />
        <h2 className="font-bold mb-4 text-xl md:text-2xl lg:text-3xl xl:text-4xl text-center">
          Choose an emoji based on your interest:
        </h2>

        <div className="flex flex-wrap justify-center">
          <div className="bg-white p-2 rounded-lg m-5">
            <img
              src={happy}
              alt="Happy Emoji"
              className="cursor-pointer hover:opacity-75 hover:rounded-full"
              onClick={() => handleImageClick("happy")}
            />
          </div>
          <div className="bg-white p-2 rounded-lg m-5">
            <img
              src={love}
              alt="Love Emoji"
              className="cursor-pointer hover:opacity-75 hover:rounded-full"
              onClick={() => handleImageClick("love")}
            />
          </div>
          <div className="bg-white p-2 rounded-lg m-5">
            <img
              src={sad}
              alt="Sad Emoji"
              className="cursor-pointer hover:opacity-75 hover:rounded-full"
              onClick={() => handleImageClick("sad")}
            />
          </div>
        </div>
      </div>
      <div className={`${styles.contact} bg-gray-100`}>
        <Contact />
      </div>
    </div>
  );
}

export default App;
