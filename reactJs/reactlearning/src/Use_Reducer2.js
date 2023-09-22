import React, { useReducer, useState } from "react";
import "./Use_Reducer2.css";
const initialState = [
  { id: Date.now(), name: "Dinesh", email: "dinesh@gmail.com" },
];
function reducer(state, action) {
  switch (action.type) {
    case "add":
      return [...state, action.payload];
    case "delete":
      return state.filter((item) => {
        return state.id !== action.payload.id;
      });
  }
}
function Use_Reducer2() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [state, dispatch] = useReducer(reducer, initialState);
  function addData(e) {
    e.preventDefault();
    setName("");
    setEmail("");
    const data = {
      id: Date.now(),
      name,
      email,
    };
    dispatch({ type: "add", payload: data });
  }
  return (
    <div className="container">
      <form onSubmit={addData}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>

      <ul>
        {state.map((item) => {
          return (
            <li key={item.id}>
              <h3>{item.name}</h3>
              <h3>{item.email}</h3>
              <button
                className="delete"
                onClick={() => {
                  dispatch({ type: "delete", payload: { id: item.id } });
                }}
              >
                Delete
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Use_Reducer2;
