import React from "react";

function About() {
  return (
    <div className="min-w-[200px] h-screen bg-white p-4 rounded-lg flex flex-col justify-center text-center">
      <div>
        <h2 className="font-bold text-5xl mb-4">About Us</h2>
        <p className=" text-xl text-gray-700">
          In our quote generator, we aim to provide inspirational and thought-provoking quotes based on different emotions. Our goal is to uplift your spirits, bring positivity to your day, and help you navigate through life's challenges.
        </p>
        <br />
        <p className="text-xl text-gray-700">
          Whether you're feeling happy, sad, or in love, our curated collection of quotes will resonate with your emotions and provide you with motivation and insight. Explore our website and discover quotes that touch your heart and inspire you to live your best life.
        </p>
      </div>
    </div>
  );
}

export default About;
