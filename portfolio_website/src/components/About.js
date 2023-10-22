import React from "react";
import Dinesh from "../assets/Dinesh.jpeg";

const About = () => {
  return (
    <div
      id="about"
      className="bg-gradient-to-t from-slate-900 to-black p-8 text-white "
    >
      <div className="container text-white p-5 mx-auto flex flex-col items-center md:flex-row md:justify-evenly md:align-middle">
        <div className="mt-6 w-40 rounded-full overflow-hidden h-40 md:w-60 md:h-60">
          <img src={Dinesh} alt="Dineshwar's portrait" className="" />
        </div>
        <div className="md:w-1/2 px-4 font-name">
          <div className="flex flex-col ">
            <h2 className="text-3xl font-extrabold mt-4 uppercase leading-loose">
              About
            </h2>
            <hr className="bg-white mb-5 w-16 h-1 rounded-lg" />
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

          <p className="bg-gradient-to-b from-white to-slate-300 bg-clip-text text-transparent text-lg font-bold mt-4 text-center ">
            In addition to my web technology skills, I have a solid grasp of{" "}
            <span className="font-bold text-sky-500 font-name">Java</span> and
            enjoy diving into{" "}
            <span className="font-bold text-sky-500 font-name">
              complex problem-solving
            </span>
            . I'm continually expanding my knowledge and skills in the IT realm,
            and I'm excited to explore new challenges and opportunities.
          </p>

          <p className="bg-gradient-to-b from-slate-300 via-slate-200 to-slate-100 bg-clip-text text-transparent leading-loose mt-4 text-center ">
            Beyond my academic pursuits, you can find me, simply enjoying my
            time outdoors.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
