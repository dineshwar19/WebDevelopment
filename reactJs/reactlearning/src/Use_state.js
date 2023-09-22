import React, { useState } from "react";

function Use_State() {
  const [name, setName] = useState("");
  const [names, setNames] = useState([]);
  function addNames(e) {
    e.preventDefault();
    setNames([...names, name]);
    setName(" ");
  }
  return (
    <>
      <form onSubmit={addNames}>
        <input
          type="text"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />

        <button type="submit">Submit</button>
      </form>
      <ul>
        {names.map((item, index) => {
          return(
          <li key={index}>{item}</li>
          )
        })}
      </ul>
    </>
  );
}

export default Use_State;
