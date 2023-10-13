import React, { useState } from 'react'
import search from "../assets/search.png";
function Search({searchLocation}) {
  const [location,setLocation] = useState("");
  function handleClick(e){
    e.preventDefault();
    searchLocation(location);
    setLocation("")

  }
  return (
    <div className="flex justify-center gap-5">
          <input
            type="text"
            placeholder="Search"
            className="p-4 rounded-xl text-xl font-semibold border-none outline-none"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
          <img
            src={search}
            alt="search"
            className="bg-white w-14 p-4 rounded-2xl cursor-pointer"
            onClick={handleClick}
          />
        </div>
  )
}

export default Search