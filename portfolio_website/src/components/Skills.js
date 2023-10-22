import React from "react";
import html from "../assets/html.png.png";
import css from "../assets/css.png.png";
import js from "../assets/js.png.png";
import java from "../assets/java.png.png";
import react from "../assets/react.png.png";
import tailwind from "../assets/tailwind.png.png";
import git from "../assets/git.png.png";
import { FaTools } from "react-icons/fa";
import { FaDiscourse } from "react-icons/fa";
import { DiCode } from "react-icons/di";

const Skills = () => {
  const techs = [
    {
      id: 0,
      src: html,
      title: "HTML",
      style: "shadow-orange-500",
    },
    {
      id: 1,
      src: css,
      title: "CSS",
      style: "shadow-blue-500",
    },
    {
      id: 2,
      src: js,
      title: "JavaScript",
      style: "shadow-yellow-500",
    },
    {
      id: 3,
      src: java,
      title: "Java",
      style: "shadow-white",
    },
    {
      id: 4,
      src: react,
      title: "React",
      style: "shadow-blue-400",
    },
    {
      id: 5,
      src: tailwind,
      title: "TailwindCss",
      style: "shadow-blue-300",
    },
    {
      id: 6,
      src: git,
      title: "Git & GitHub",
      style: "shadow-gray-500",
    },
  ];

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
  const courses = [
    {
      id: 0,
      course: "Object Oriented Programming",
    },
    {
      id: 1,
      course: "Data Structures",
    },
    {
      id: 2,
      course: "Design and Analysis of Algorith",
    },
    {
      id: 3,
      course: "Database Management Systems (DBMS)",
    },
  ];

  return (
    <div id="skills" className="bg-black text-white p-8">
      <h1 className="text-3xl font-bold mb-5 uppercase">Skills</h1>
      <hr className="border border-white mb-5 w-20 h-1 rounded-lg bg-white" />
      <div className="md:flex md:justify-around mb-10">
        <div className="">
          <div className="flex items-center gap-1">
            <div className="text-xl font-bold uppercase my-5">Development</div>
            <DiCode size={50} />
          </div>
          <ul className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-4 md:px-12 px-0">
            {techs.map((tech, index) => (
              <li
                key={index}
                className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${tech.style}`}
              >
                <img
                  src={tech.src}
                  alt={tech.title}
                  className="w-20 md:w-28 mx-auto"
                />
                <p className="mt-3 font-semibold">{tech.title}</p>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex flex-col px-5 ">
          <div className="flex gap-5 my-8 ">
            <div className="text-xl font-bold uppercase">Tools</div>
            <div className="">
              <FaTools size={25} />
            </div>
          </div>

          <ul className="flex flex-col gap-2">
            {tools.map((tool, index) => (
              <li
                className="uppercase font-name font-semibold list-disc"
                key={index}
              >
                {tool.tool}
              </li>
            ))}
          </ul>
          <div className="flex gap-5 my-8 ">
            <div className="text-xl font-bold uppercase">CourseWorks</div>
            <div className="">
              <FaDiscourse size={25} />
            </div>
          </div>
          <ul className="flex flex-col gap-2">
            {courses.map((course, index) => (
              <li
                className="uppercase font-name font-semibold list-disc"
                key={index}
              >
                {course.course}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Skills;
