import React, { useEffect, useState } from "react";
import DisplayData from "./DisplayData";

function Buttons() {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [term, setTerm] = useState("");
  const [data, setData] = useState([]);
  const API_KEY = "https://jsonplaceholder.typicode.com";
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${API_KEY}/${term}`);
        if (!response.ok) {
          throw new Error("data not found");
        }
        const data = await response.json();
        setData(data);
        setError(null);
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, [term]);

  return (
    <div>
      <div className="flex justify-between">
        <button
          className="text-xl w-full focus:bg-black focus:text-white p-2"
          onClick={() => setTerm("users")}
        >
          Users
        </button>
        <button
          className="text-xl w-full focus:bg-black focus:text-white p-2"
          onClick={() => setTerm("posts")}
        >
          Posts
        </button>
        <button
          className="text-xl w-full focus:bg-black focus:text-white p-2"
          onClick={() => setTerm("comments")}
        >
          Comments
        </button>
      </div>
      {isLoading ? (
        <p className="text-white text-2xl font-bold my-10">Loading...</p>
      ) : error ? (
        <p className="text-white text-2xl font-bold my-10">Error: {error}</p>
      ) : (
        <DisplayData data={data} />
      )}
    </div>
  );
}

export default Buttons;
