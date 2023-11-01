import React, { useState } from "react";
import { FaTelegramPlane } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import white from "../assets/background.jpg";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  return (
    <div className="p-10 relative" id="contact">
      <div className="hidden md:flex justify-left absolute h-full left-0 top-0">
        <div
          className="bg-fixed bg-cover bg-no-repeat w-40"
          style={{ backgroundImage: `url(${white})` }}
        ></div>
      </div>
      <div className="flex flex-col items-center justify-center">
        <FaTelegramPlane
          size={60}
          className="text-black hover:-translate-y-5 hover:translate-x-5 hover:rotate-45 transition-transform duration-300"
        />
      </div>
      <div className="flex flex-col items-center justify-center">
        <div className="mt-5 font-name flex flex-col items-center justify-center gap-5 bg-gray-300 p-4 rounded-xl">
          <h1 className="text-2xl font-bold ">Get In Touch</h1>
          <p className="my-3 text-center">
            Ready to chat? Feel free to fill out the form below and say hello.
          </p>
          <form
            action="https://getform.io/f/db2772bf-9608-409a-80cf-3d80244b926c"
            method="POST"
            className="flex flex-col gap-4 items-center justify-center"
          >
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              className="p-2 rounded"
              required
            />

            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
              className="p-2 rounded"
              pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}"
              required
            />

            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your Message"
              className="p-2 rounded"
              required
            />

            <button
              type="submit"
              className="cursor-pointer bg-blue-600 text-white p-2 px-4 rounded font-bold shadow-black border"
            >
              Say Hello
            </button>
          </form>
          <div className="flex flex-col items-center justify-center gap-2">
            <h1>or</h1>
            <a href="mailto:ncs.dineshwar19@gmail.com">
              {" "}
              <AiOutlineMail
                size={50}
                className="bg-white text-red-500 p-1 rounded-md"
              />{" "}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
