import React, { useState } from 'react'
import { CiSearch } from "react-icons/ci";
function Search({searchLocation}) {
  const [location,setLocation] = useState("");
  function handleClick(e){
    e.preventDefault();
    searchLocation(location);
    setLocation("")

  }
  return (
    <div className="flex items-center gap-5">
          <input
            type="text"
            placeholder="Search"
            className="p-4 rounded-xl text-xl font-semibold border-none outline-none"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
          <div className='bg-white p-3 rounded-full cursor-pointer' onClick={handleClick}>
            <CiSearch size={30} />
          </div>
        </div>
  )
}

export default Search