import React, { useEffect, useState } from "react";
function App() {
  const initialCount = parseInt(localStorage.getItem("count")) || 0;
  const [count, setCount] = useState(initialCount);

  function increment() {
    setCount((prevCount) => prevCount + 1);
  }
  function decrement() {
    setCount((prevCount) => prevCount - 1);
  }
  function reset() {
    setCount(0);
  }
  useEffect(() => {
    if (count >= 0) {
      localStorage.setItem("count", count.toString());
    } else {
      localStorage.setItem("count", 0);
    }
  }, [count]);
  return (
    <div className="min-h-screen flex flex-col items-center place-content-center">
      <div className="border p-10 shadow-lg rounded-md">
        <p className="text-2xl font-semibold text-orange-500">COUNTER</p>
        <h1 className="text-center font-bold text-2xl my-10">{count}</h1>
        <div className="flex justify-between my-5">
          <button
            className="bg-green-600 p-2 text-white text-xl rounded-s-full"
            onClick={increment}
          >
            +
          </button>
          <button
            className="bg-red-600 p-2 text-white text-xl rounded-e-full"
            onClick={decrement}
          >
            -
          </button>
        </div>
        <button
          className="bg-blue-500 p-2 rounded-full text-white w-20 ml-4 "
          onClick={reset}
        >
          Reset
        </button>
      </div>
    </div>
  );
}

export default App;
