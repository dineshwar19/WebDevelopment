import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(true);

  const links = [
    {
      id: 0,
      link: "Home",
      to: "header",
    },
    {
      id: 1,
      link: "About",
      to: "about",
    },
    {
      id: 2,
      link: "What I Do",
      to : "what-i-do"
    },
    {
      id: 3,
      link: "Skills",
      to : "skills"
    },
    {
      id: 4,
      link: "Contact",
    },
  ];

  const closeMenu = () => {
    setIsOpen(!isOpen);
  };
  
  return (
    <div className="bg-black flex text-white h-14 items-center justify-between px-6 z-50 sticky top-0">
      <div className="font-signature text-xl font-semibold cursor-pointer">
        Dineshwar
      </div>

      <ul className={`hidden md:flex gap-4 uppercase font-light`}>
        {links.map((link) => (
          <li
            key={link.id}
            className="hover:scale-95 duration-100 cursor-pointer"
          >
            <Link to={link.to} spy={true} smooth={true} duration={500} >
              {link.link}
            </Link>
          </li>
        ))}
      </ul>
      <div
        className="cursor-pointer md:hidden hover:scale-110 duration-300"
        onClick={closeMenu}
      >
        {isOpen ? <FaBars size={25} /> : <FaTimes size={25} />}
      </div>
      <ul
        className={`md:hidden flex flex-col items-center justify-center absolute top-14 bg-gradient-to-b from-black via-slate-800 to-slate-700 w-screen left-0 gap-5 transition-all duration-500 ease-in-out z-50 ${
          isOpen ? "h-0 opacity-0" : "h-60 opacity-100"
        }`}
      >
        {links.map((link) => (
          <li
            key={link.id}
            className="text-xl font-light uppercase hover:scale-90 duration-300 cursor-pointer"
            
          >
            <Link to={link.to} offset={-50} spy={true} smooth={true} duration={500} onClick={closeMenu}>
              {link.link}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NavBar;
