import React from "react";
import { FaLaptopCode, FaPaintBrush, FaCodeBranch } from "react-icons/fa";

const WhatIDo = () => {
  return (
    <section id="what-i-do" className="bg-gradient-to-b from-slate-900 to-black p-8 text-white ">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-5 uppercase">What I Do</h2>
        <hr className="mb-5 w-20 h-1 bg-white" />

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 leading-loose">
          <div className="text-center">
            <div className="flex justify-center gap-5">
                <div className="text-3xl text-white mb-3 ">
                  <FaLaptopCode />
                </div>
                <h3 className="text-xl font-bold mb-2">Web Development</h3>
            </div>
            <p className="bg-gradient-to-b from-slate-100 via-slate-200 to-slate-300 bg-clip-text text-transparent">
              I'm passionate about web development. I create interactive and
              responsive websites using HTML, CSS, and JavaScript. I'm also
              skilled in popular frameworks like React and have experience with
              backend technologies.
            </p>
          </div>

          <div className="text-center ">
            <div className="flex justify-center gap-5">
                <div className="text-3xl text-white mb-3">
                  <FaPaintBrush />
                </div>
                <h3 className="text-xl font-bold mb-2">UI/UX Design</h3>
            </div>
            <p className="bg-gradient-to-b from-gray-400 via-slate-300 to-slate-200 bg-clip-text text-transparent">
              I pay great attention to the user experience. I create clean and
              user-friendly interfaces. My design skills complement my
              development work, resulting in seamless and visually appealing
              websites.
            </p>
          </div>

          <div className="text-center">
            <div className="flex justify-center gap-5">
                <div className="text-3xl text-white mb-3 ">
                  <FaCodeBranch />
                </div>
                <h3 className="text-xl font-bold mb-2">Version Control</h3>
            </div>
            <p className="bg-gradient-to-b from-gray-300 via-slate-200 to-slate-100 bg-clip-text text-transparent">
              I use Git and GitHub for version control. This helps me manage
              code efficiently, collaborate with teams, and keep track of
              changes. I'm experienced with branching, merging, and resolving
              conflicts.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatIDo;
