import React from "react";
import Dinesh from "../assets/Dinesh.jpeg";
import about from "../assets/about.jpg";
const About = () => {
  return (
    <div id="about" className="bg-gradient-to-t from-gray-900 via-gray-900 to-gray-700">
     
      <div className="container text-white p-5 mx-auto flex flex-col items-center md:flex-row md:justify-evenly md:align-middle">
        <div className="mt-6 w-40 rounded-full overflow-hidden h-40 md:w-60 md:h-60">
          <img src={Dinesh} alt="" className="" />
        </div>
        <div className="md:w-1/2 px-4 font-name">
          <div className="flex flex-col items-center">
            <h2 className="text-3xl font-semibold mt-4 font-name text-center leading-loose">
              A Little bit About Me
            </h2>
            <hr className="bg-white mb-5 w-40 h-1 rounded-lg" />
          </div>
          <p className="text-lg font-bold text-center">
            Hi, I'm Dineshwar, a passionate 4th-year{" "}
            <span className="font-bold text-sky-500">
              Information Technology
            </span>{" "}
            student at{" "}
            <span className="font-bold text-sky-500 font-name">
              AVC College of Engineering.
            </span>{" "}
            My journey into the world of technology began with a curiosity for{" "}
            <span className="font-bold text-sky-500 font-name">
              problem-solving
            </span>{" "}
            and a love for creating captivating web experiences.
          </p>

          <p className="text-lg font-bold mt-4 text-center ">
            In addition to my web technology skills, I have a solid grasp of{" "}
            <span className="font-bold text-sky-500 font-name">Java</span> and
            enjoy diving into{" "}
            <span className="font-bold text-sky-500 font-name">
              complex problem-solving
            </span>
            . I'm continually expanding my knowledge and skills in the IT realm,
            and I'm excited to explore new challenges and opportunities.
          </p>

          <p className="bg-gradient-to-b from-white via-slate-500 to-slate-400 bg-clip-text text-transparent leading-loose mt-4 text-center ">
            Beyond my academic pursuits, you can find me, simply enjoying my
            time outdoors.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
