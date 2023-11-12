import React, { useState } from "react";
import AddColor from "./AddColor";
import Button from "../Button";

function Challenge() {
  const [color, setColor] = useState("");
  const [hex , setHex] = useState('');
  const [textColor, setTextColor] = useState("black");
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <div
        className=" border border-black rounded-lg p-5 h-40 w-40 flex flex-col 
        items-center justify-center shadow-lg"
        style={{
          backgroundColor: color,
          fontSize: "20px",
          fontWeight: "600",
        }}
      >
        {color === "" ? (
          <h1>Empty value</h1>
        ) : (
          <h1 style={{ color: textColor}}>{color}</h1>
        )}
        {hex && <h1 style={{ color: textColor}}>{hex}</h1>}
      </div>
      <AddColor color={color} setColor={setColor} setHex={setHex} />
      <Button textColor={textColor} setTextColor={setTextColor} />
    </div>
  );
}

export default Challenge;
