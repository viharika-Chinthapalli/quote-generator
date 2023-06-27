import React, { useState, useEffect } from "react";
import styles from "../styles/Quotes.module.css";
import Navbar from "./Navbar";
import backgroundImage from "../assets/bg.jpg";

function RandomQuotes() {
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");

  const fetchQuotes = async (emotion) => {
    try {
      const response = await fetch(
        `${process.env.REACT_APP_SERVER_DOMAIN}api/get-quotes?emotion=${emotion}`
      );
      const data = await response.json();
      const randomIndex = Math.floor(Math.random() * data.length);
      const selectedQuote = data[randomIndex];
      setQuote(selectedQuote.text);
      setAuthor(selectedQuote.author);
    } catch (error) {
      console.error("Error retrieving quotes:", error);
    }
  };

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const emotion = urlParams.get("emotion");
    fetchQuotes(emotion);
  }, []);

  let fetchNewQuote = () => {
    const urlParams = new URLSearchParams(window.location.search);
    const emotion = urlParams.get("emotion");
    fetchQuotes(emotion);
  };

  return (
    <div style={{ backgroundImage: `url(${backgroundImage})` }}>
      <Navbar />
      <div className={`${styles.App} h-10`}>
        <div className={`${styles.quote}`}>
          <h2 className={`${styles.quoteText}`}>{quote}</h2>
          <small>-{author}-</small>
        </div>
        <br />
        <button className={`${styles.btn}`} onClick={fetchNewQuote}>
          Generate New Quote
        </button>
      </div>
    </div>
  );
}

export default RandomQuotes;
