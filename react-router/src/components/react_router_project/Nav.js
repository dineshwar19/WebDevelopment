import React, { useContext } from "react";
import { Link } from "react-router-dom";
import DataContext from "../../contexts/DataContext";
const Nav = () => {
  const {search , setSearch} = useContext(DataContext);
  return (
    <nav className="bg-blue-600 text-white p-3 text-center flex flex-col gap-4">
      <h1 className="text-2xl font-semibold">My Social Media</h1>
      <form onSubmit={(e) => e.preventDefault()}>
        <input
          type="text"
          placeholder="search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="p-2 rounded-lg shadow-lg text-xl font-semibold text-black outline-none px-5 "
        />
      </form>
      <ul className="flex justify-around">
      <Link to="/"><li className="hover:bg-white hover:text-blue-600 p-2 rounded-lg">Home</li></Link>
      <Link to="post"><li className="hover:bg-white hover:text-blue-600 p-2 rounded-lg">Post</li></Link>
      <Link to="about"><li className="hover:bg-white hover:text-blue-600 p-2 rounded-lg">About</li></Link>
        
      </ul>
    </nav>
  );
};

export default Nav;
