import React, { createContext, useContext, useState } from "react";
const Usercontext = createContext();
function Use_Context() {
  const [name, setName] = useState("");
  return (
    <>
      <Usercontext.Provider value={name}>
        <ChildFunc />
      </Usercontext.Provider>

      <input
        type="text"
        value={name}
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
    </>
  );
}
const ChildFunc = () => {
  const value = useContext(Usercontext);
  return (
    <>
      <p>{`the name is : ${value}`}</p>
      <ChildFunc2 />
    </>
  );
};
const ChildFunc2 = () => {
  const value = useContext(Usercontext);
  return <p>{`the child2 name is : ${value}`} </p>;
};
export default Use_Context;
