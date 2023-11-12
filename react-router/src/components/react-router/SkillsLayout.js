import React from "react";
import { Link, Outlet } from "react-router-dom";

const SkillsLayout = () => {
  return (
    <div className="flex flex-col">
      <Link to="/skills/1">Post1</Link>
      <Link to="/skills/2">Post2</Link>
      <Link to="/skills/3">Post3</Link>
      <Link to="/skills/About">About</Link>
      <Outlet />
    </div>
  );
};

export default SkillsLayout;
