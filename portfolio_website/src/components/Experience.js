import React, { useState } from "react";
import experience from "../assets/experience.jpg";
import snake from "../assets/works/snakeGame.png";
import WeatherIndia from "../assets/works/WeatherIndia.png";
import imageGallery from "../assets/works/ImageGallery.png";
import todoList from "../assets/works/TodoList.png";
import { AiOutlineZoomIn } from "react-icons/ai";
import { BiCodeAlt } from "react-icons/bi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { AiOutlineArrowRight } from "react-icons/ai";
import DisplayWork from "./DisplayWork";

const Experience = () => {
  const [selectedWork, setSelectedWork] = useState(null);

  const works = [
    {
      id: 0,
      title: "Snake Game",
      work: "Programmed a classic Snake game using JavaScript. Highlighted problem-solving and game development abilities",
      doneIn: "2022",
      image: snake,
      url: "https://github.com/dineshwar19/WebDevelopment/tree/main/Snake%20game",
    },
    {
      id: 1,
      title: "Weather Application",
      work: "Developed a weather application using React.js and integrated weather data APIs. Demonstrated proficiency in React.js and API integration.",
      doneIn: "2023 - June",
      image: WeatherIndia,
      url: "https://github.com/dineshwar19/WebDevelopment/tree/main/React%20Projects/weatherapi",
    },
    {
      id: 2,
      title: "Image Gallery",
      work: "Created an image gallery application using the Pexels API and React.js. Demonstrated API integration, dynamic content rendering, and responsive design.",
      doneIn: "2023 - August",
      image: imageGallery,
      url: "https://github.com/dineshwar19/WebDevelopment/tree/main/React%20Projects/image-gallery",
    },
    {
      id: 3,
      title: "Todo List",
      work: "Designed and implemented a todo list application with LocalStorage using React.js. Showcased skills in state management and user interface development.",
      doneIn: "2023 - October",
      image: todoList,
      url: "https://github.com/dineshwar19/WebDevelopment/tree/main/React%20Projects/todo-list",
    },
  ];

  return (
    <div id="experience" className="text-white bg-black relative">
      <div
        className="bg-fixed bg-no-repeat bg-cover w-screen min-h-screen backdrop:blur-2xl"
        style={{ backgroundImage: `url(${experience})` }}
      >
        <div className="p-10">
          <div>
            <h1 className="text-3xl font-bold mb-5 uppercase">Experience</h1>
            <hr className="mb-5 w-20 h-1 rounded-lg bg-black" />
          </div>
          <p className="text-center md:px-10 font-name">
            Welcome to the "Experience" section of my portfolio! As a passionate
            and self-motivated developer, I've had the opportunity to work on a
            variety of exciting projects and challenges that have helped me grow
            and develop my skills. While I may not have formal work experience,
            I've dedicated myself to coding and have completed numerous projects
            that demonstrate my proficiency in web development and
            problem-solving. I've worked with different technologies, including
            JavaScript, React.js, and various APIs, to bring my ideas to life.
          </p>
          <div className="mt-10 ">
            {selectedWork && (
              <div className="absolute p-4 text-center transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 z-30 ">
                <DisplayWork
                  work={selectedWork}
                  onClose={() => setSelectedWork(null)}
                />
              </div>
            )}
            <ul className="grid sm:grid-cols-2 md:grid-cols-2 gap-8 px-6 sm:px-0">
              {works.map((work, index) => (
                <li
                  key={index}
                  className="shadow-mg shadow-gray-600 rounded-lg overflow-hidden group"
                >
                  <img src={work.image} alt={work.title} />
                  <div className="flex justify-around py-5 bg-white opacity-0 w-0 group-hover:opacity-100 group-hover:w-full transition-w duration-500">
                    <button
                      className="text-black"
                      onClick={() => {
                        setSelectedWork(work);
                      }}
                    >
                      <AiOutlineZoomIn size={30} />
                    </button>
                    <a href={work.url} className="text-black">
                      <BiCodeAlt size={30} />
                    </a>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <a
        href="/Resume.pdf"
        download={true}
        className="p-2 group bg-white text-black flex flex-col items-center cursor-pointer hover:bg-sky-500 transition-p duration-500 hover:p-6 hover:text-white"
      >
        <BsFillPersonLinesFill size={40} className="" />
        <div className="flex items-center gap-4">
          <AiOutlineArrowRight size={25} />
          <p className="font-bold text-2xl font-name">Resume</p>
        </div>
      </a>
    </div>
  );
};

export default Experience;
