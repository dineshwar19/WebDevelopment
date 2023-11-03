import React from "react";

function SearchTask({ search , setSearch }) {
  return (
    <div>
      <form className="flex justify-center gap-3">
        <input
          type="text"
          placeholder="Search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border bg-gray-200 p-2 text-xl font-semibold outline-none rounded-lg mt-5"
        />
      </form>
    </div>
  );
}

export default SearchTask;
