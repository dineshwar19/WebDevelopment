import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";

const SocialLinks = () => {
  const socials = [
    {
      id: 0,
      child: (
        <>
          LinkedIn <FaLinkedin />
        </>
      ),
      link: "https://www.linkedin.com/in/dineshwar19/",
      style: "bg-blue-600",
      color: "text-white",
    },
    {
      id: 1,
      child: (
        <>
          GitHub <FaGithub />
        </>
      ),
      link: "https://github.com/dineshwar19",
      style: "bg-gray-500",
      color: "text-white",
    },
    {
      id: 2,
      child: (
        <>
          Mail <HiOutlineMail />
        </>
      ),
      link: "mailto:ncs.dineshwar19@gmail.com",
      style: "bg-red-600",
      color: "text-white",
    },
    {
      id: 3,
      child: (
        <>
          Resume <BsFillPersonLinesFill />
        </>
      ),
      link: "/Resume.pdf",
      download: true,
      style: "bg-white",
      color: "text-black",
    },
  ];
  return (
    <div className="z-0 flex-col top-[35%] left-0 fixed hidden lg:flex">
      <ul>
        {socials.map((social, index) => (
          <li
            key={index}
            className={`flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] duration-300 hover:rounded-xl ${social.style} `}
          >
            <a
              href={social.link}
              className={`flex justify-between items-center w-full ${social.color} font-semibold font-name`}
              download={social.download}
              target="_blank"
              rel="noreferrer"
            >
              <>{social.child}</>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SocialLinks;
