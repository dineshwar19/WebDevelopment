import React from "react";
import { BsFillRocketFill } from "react-icons/bs";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { AiOutlineInstagram, AiFillFacebook } from "react-icons/ai";
import { Link } from "react-scroll";
const SocialFooter = () => {
  const socials = [
    {
      id: 0,
      child: (
        <>
          <FaLinkedin size={30} />
        </>
      ),
      link: "https://www.linkedin.com/in/dineshwar19/",
      style: "bg-blue-800",
      color: "text-white",
    },
    {
      id: 1,
      child: (
        <>
          <FaGithub size={30} />
        </>
      ),
      link: "https://github.com/dineshwar19",
      style: "bg-black",
      color: "text-white",
    },
    {
      id: 2,
      child: (
        <>
          <HiOutlineMail size={30} />
        </>
      ),
      link: "mailto:ncs.dineshwar19@gmail.com",
      style: "bg-white",
      color: "text-red-600",
    },
    {
      id: 3,
      child: (
        <>
          <AiFillFacebook size={30} />
        </>
      ),
      link: "https://www.facebook.com/dineshwar.dineshwar.140",
      style: "bg-blue-700",
      color: "text-white",
    },
    {
      id: 4,
      child: (
        <>
          <AiOutlineInstagram size={30} />
        </>
      ),
      link: "https://www.instagram.com/_.dinesh_.__/",
      style: "bg-gradient-to-b from-fuchsia-500 via-pink-700 to-yellow-400",
      color: "text-white",
    },
  ];
  return (
    <div className="bg-gray-800 text-white p-10">
      <div className="mb-7 ">
        <ul className=" flex justify-center gap-3">
          {socials.map((social, index) => (
            <li
              className={`${social.style} rounded-lg p-1 hover:scale-110 duration-200`}
              key={index}
            >
              <a
                target="_blank"
                className={`${social.color}`}
                href={social.link}
                rel="noreferrer"
              >
                {social.child}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className="flex flex-col items-center">
        <Link to="about" smooth duration={500}>
          <BsFillRocketFill
            size={40}
            className="cursor-pointer hover:scale-125 hover:-translate-y-3 duration-300 "
          />
        </Link>
        <p className="font-name mt-4 ">&copy; Dineshwar 2023</p>
      </div>
    </div>
  );
};

export default SocialFooter;
