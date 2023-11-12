import React from "react";

function Button({ textColor, setTextColor }) {
  function changeText(e) {
    e.preventDefault();
    if (textColor === "black") {
      setTextColor("white");
    } else {
      setTextColor("black");
    }
  }
  return (
    <div>
      <button
        className="border border-black p-2 rounded-lg shadow-xl w-40"
        onClick={(e) => changeText(e)}
      >
        Toggle Text Color
      </button>
    </div>
  );
}

export default Button;
