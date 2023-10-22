import React, { useEffect, useState } from "react";
import large from "../assets/lander1.jpg";
import small from "../assets/smallLander.jpg";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";

const Header = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const imageSrc = windowWidth >= 768 ? large : small;

  return (
    <div className="bg-black relative" id="header">
      <div
        class="bg-fixed min-h-screen bg-cover bg-no-repeat w-screen opacity-30 "
        style={{ backgroundImage: `url(${imageSrc})` }}
      ></div>
      <div className="text-white flex flex-col items-center justify-center absolute inset-0 mb-28 gap-7">
        <div className="text-3xl uppercase font-name md:text-6xl">
          Hi , I'm Dineshwar
        </div>
        <div className="font-name uppercase md:text-2xl">
          Aspiring Web Developer
        </div>

        <Link
          to="about"
          spy={true}
          smooth={true}
          duration={700}
          className="absolute bottom-14 transition-all duration-500 hover:rotate-90 hover:bg-white hover:bg-opacity-25 rounded-full"
        >
          <span className="sr-only">Scroll to About Section</span>
          <MdOutlineKeyboardArrowRight size={50} />
        </Link>
      </div>
    </div>
  );
};

export default Header;
