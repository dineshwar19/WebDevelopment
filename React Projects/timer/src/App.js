import TimeFormat from "./TimeFormat";
import React, { useState, useEffect } from "react";
function App() {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let interval;

    if (isRunning) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);
    }

    return () => {
      clearInterval(interval);
    };
  }, [isRunning]);

  function startTimer() {
    setIsRunning(true);
  }
  function stopTimer() {
    setIsRunning(false);
  }
  function reset() {
    setIsRunning(false);
    setTime(0);
  }

  return (
    <div className="bg-slate-800 min-h-screen text-white flex flex-col items-center justify-center ">
      <div className="flex flex-col bg-white text-black p-7 rounded-lg shadow-lg shadow-black gap-5 items-center">
        <div className="text-xl font-semibold text-slate-800">
          <TimeFormat seconds={time} />
        </div>

        <div className="flex justify-between gap-3">
          <button
            className={`bg-green-600 text-white p-1 rounded-lg w-14 ${
              isRunning ? "bg-gray-400 text-gray-600 cursor-not-allowed" : ""
            }`}
            onClick={startTimer}
            disabled={isRunning}
          >
            Start
          </button>
          <button
            className={`bg-green-600 text-white p-1 rounded-lg w-14 ${
              !isRunning ? "bg-gray-400 text-gray-600 cursor-not-allowed" : ""
            }`}
            onClick={stopTimer}
            disabled={!isRunning}
          >
            Stop
          </button>
          <button
            className="bg-green-600 text-white p-1 rounded-lg w-14"
            onClick={reset}
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
