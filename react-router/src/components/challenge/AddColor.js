import React from "react";
import colorNames from "colornames"
function AddColor({ color, setColor, setHex }) {
  return (
    <div>
      <input
        type="text"
        placeholder="Add color name"
        className="border border-black outline-none my-5 rounded-lg p-2 shadow-xl w-40"
        value={color}
        onChange={(e) => {
            setColor(e.target.value)
            setHex(colorNames(e.target.value))
        }}
      />
    </div>
  );
}

export default AddColor;
