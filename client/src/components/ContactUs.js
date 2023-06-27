import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const validateForm = () => {
    const errors = {};

    // Validate name
    if (!name.trim()) {
      errors.name = "Name is required";
    }

    // Validate email
    if (!email.trim()) {
      errors.email = "Email is required";
    } else if (!isValidEmail(email)) {
      errors.email = "Please enter a valid email address";
    }

    // Validate message
    if (!message.trim()) {
      errors.message = "Message is required";
    }

    return errors;
  };

  const isValidEmail = (email) => {
    // Basic email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formErrors = validateForm();

    if (Object.keys(formErrors).length === 0) {
      try {
        const response = await fetch("https://formspree.io/f/xjvqbydo", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ name, email, message }),
        });

        if (response.ok) {
          // Form submission successful
          // Logout after successful form submission
          alert("successful submitted the form");
          userLogout();
        } else {
          // Handle form submission error
          console.error("Form submission failed");
        }
      } catch (error) {
        console.error("Form submission failed:", error);
      }
    } else {
      setErrors(formErrors);
    }
  };

  const userLogout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <div className="flex justify-center mt-8">
      <div className="w-1/2">
        <h3 className="font-bold mb-8 text-3xl text-center">
          If you have any doubts, please feel free to reach out to us.
        </h3>
        <h2 className="font-bold text-center mb-4 text-4xl">Contact Us</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <input
              type="text"
              id="name"
              className={`w-full px-4 py-3 border ${
                errors.name ? "border-red-500" : "border-gray-300"
              } rounded-lg mb-4 text-xl placeholder-gray-500`}
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Name"
              name="name"
            />
            {errors.name && (
              <p className="text-red-500 text-sm">{errors.name}</p>
            )}
          </div>
          <div className="mb-4">
            <input
              type="email"
              id="email"
              className={`w-full px-4 py-3 border ${
                errors.email ? "border-red-500" : "border-gray-300"
              } rounded-lg mb-4 text-xl placeholder-gray-500`}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              name="email"
            />
            {errors.email && (
              <p className="text-red-500 text-sm">{errors.email}</p>
            )}
          </div>
          <div className="mb-4">
            <textarea
              id="message"
              className={`w-full px-4 py-3 border ${
                errors.message ? "border-red-500" : "border-gray-300"
              } rounded-lg mb-4 text-xl placeholder-gray-500 resize-none`}
              rows="4"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Message"
              name="message"
            ></textarea>
            {errors.message && (
              <p className="text-red-500 text-sm">{errors.message}</p>
            )}
          </div>
          <div className="text-center">
            <button className="py-3 px-6 bg-blue-500 text-white rounded-lg hover:bg-blue-600 mb-10 text-xl">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Contact;
