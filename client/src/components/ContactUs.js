import React, { useState } from "react";
import styles from "../styles/Aboutus.module.css";
import toast, { Toaster } from "react-hot-toast";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState({});

  const isValidEmail = (email) => {
    // Basic email validation regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  return (
    <div className="flex justify-center mt-8">
      <div className="w-1/2">
        <h3 className="font-bold mb-4 text-xl">
          ....................................................If you have any
          doubts, please feel free to reach out to us by emailing us at
          <span className="text-blue-500 underline"> viharika@gmail.com</span>.
          We are here to assist you and provide any necessary clarification.We
          value your feedback and are committed to providing the best experience
          for our users. Your satisfaction is our top priority, and we look
          forward to hearing from
          you.............................................................
        </h3>
        <Toaster position="top-center" reverseOrder={false} />

        <h2 className="font-bold text-center mb-4">Contact Us</h2>
        <form action="https://formspree.io/f/xjvqbydo" method="POST">
          <div className="mb-4">
            <input
              type="text"
              id="name"
              className={`w-full px-3 py-2 border rounded-lg font-bold mb-4 h-20 text-xl ${
                errors.name ? "border-red-500" : ""
              }`}
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Name"
              name="name"
            />
           
          </div>
          <div className="mb-4">
            <input
              type="email"
              id="email"
              className={`w-full px-3 py-2 border rounded-lg font-bold mb-4 h-20 text-xl ${
                errors.email ? "border-red-500" : ""
              }`}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              name="email"
            />
            
          </div>
          <div className="mb-4">
            <textarea
              id="message"
              className={`w-full px-3 py-2 border rounded-lg font-bold mb-4 text-xl ${
                errors.message ? "border-red-500" : ""
              }`}
              rows="4"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Message"
              name="message"
            ></textarea>
        
          </div>
          <div className="text-center">
            <button
              className="py-2 px-4 bg-blue-500 text-white rounded-lg hover:bg-blue-600 mb-10 text-2xl"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Contact;
