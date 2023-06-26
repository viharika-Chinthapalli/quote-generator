import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import happy from "../assets/happy.jpg";
import sad from "../assets/sad.jpg";
import love from "../assets/love.jpg";
import Navbar from "./Navbar";
import styles from "../styles/Aboutus.module.css";
import Contact from './ContactUs';

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
      <div className="flex">
        <div className="w-3/4 flex flex-col items-center justify-center h-screen">
          <h2 className="font-bold mb-4">
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
        <div
          className={`${styles.sidebar} w-1/4 bg-white p-4 rounded-lg flex flex-col justify-center `}
        >
          <h2 className="font-bold mb-4">About Us</h2>
          <p>
            In our quote generator, we aim to provide inspirational and
            thought-provoking quotes based on different emotions. Our goal is to
            uplift your spirits, bring positivity to your day, and help you
            navigate through life's challenges.
            <br />
          </p>
          <br />
          <p>
            Whether you're feeling happy, sad, or in love, our curated
            collection of quotes will resonate with your emotions and provide
            you with motivation and insight. Explore our website and discover
            quotes that touch your heart and inspire you to live your best life.
          </p>
        </div>
      </div>
      <Contact />
    </div>
  );
}

export default Emotions;
