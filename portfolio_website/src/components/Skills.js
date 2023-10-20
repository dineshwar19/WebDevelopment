import React from "react";
import html from "../assets/html.png.png";
import css from "../assets/css.png.png";
import js from "../assets/js.png.png";
import java from "../assets/java.png.png";
import react from "../assets/react.png.png";
import tailwind from "../assets/tailwind.png.png";
import git from "../assets/git.png.png";
import { FaTools } from "react-icons/fa";

const Skills = () => {
  const tools = [
    {
      id: 0,
      tool: "Git & GitHub",
    },
    {
      id: 1,
      tool: "Command Line",
    },
    {
      id: 2,
      tool: "Chrome dev tools",
    },
  ];
  return (
    <div id="skills" className="bg-black text-white p-10">
      <h1 className="text-3xl font-bold mb-5 uppercase">Skills</h1>
      <hr className="border border-white mb-5 w-20 h-1 rounded-lg bg-white" />
      <div className="md:flex md:justify-around">
        <div className=" md:self-end">
          <div className="text-xl font-bold uppercase my-8">Development</div>
          <div className="grid grid-cols-3 gap-5 h-80 w-80 md:w-80 md:h-80">
            <div className="bg-white rounded-full w-30 h-30">
              <img src={html} alt="HTML" className="p-3 " />
            </div>
            <div className="bg-white rounded-full w-30 h-30">
              <img src={css} alt="HTML" className="p-3 " />
            </div>
            <div className="bg-white rounded-full w-30 h-30">
              <img src={js} alt="HTML" className="p-3 " />
            </div>
            <div className="bg-white rounded-full w-30 h-30">
              <img src={java} alt="Java" className="p-3" />
            </div>
            <div className="bg-white rounded-full w-30 h-30">
              <img src={react} alt="React" className="p-5" />
            </div>
            <div className="bg-white rounded-full w-30 h-30">
              <img src={tailwind} alt="Tailwind CSS" className="p-5" />
            </div>
            <div className="bg-white rounded-full w-30 h-30">
              <img src={git} alt="Git" className="p-3" />
            </div>
          </div>
        </div>
        <div className=" my-5 mt-10">
          <div>
            <div className="flex gap-5 mb-4 mt-8">
              <div className="text-xl font-bold uppercase  ">Tools</div>
              <div className="">
                <FaTools size={25} />
              </div>
            </div>
            
            
            <ul className="flex flex-col gap-2">
              {tools.map((tool, index) => (
                <li
                  className="uppercase font-name font-semibold list-disc "
                  key={index}
                >
                  {tool.tool}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
