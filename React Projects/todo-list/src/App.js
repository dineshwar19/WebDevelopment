import React, { useState, useEffect } from "react";
import './App.css';
function App() {
  const [item, setItem] = useState("");
  const [list, setList] = useState(() => {
    const storedList = localStorage.getItem('task');
    console.log(storedList)
    return storedList ? JSON.parse(storedList) : [];
    
  });

  useEffect(() => {
    localStorage.setItem("task", JSON.stringify(list));
  }, [list]);

  function handleItem(e) {
    e.preventDefault();
    setList((prevList) => [...prevList, { id: prevList.length, item }]);
    setItem("");
  }

  function deleteItem(id) {
    const deleteList = list.filter((item) => item.id !== id);
    setList(deleteList);
  }

  function handleCheck(id) {
    const checks = list.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );
    setList(checks);
  }

  return (
    <div className="container">
      <h1 className="Header">ToDo list</h1>

      <form onSubmit={handleItem}>
        <input
          type="text"
          value={item}
          onChange={(e) => {
            setItem(e.target.value);
          }}
        />
        <button type="submit" >Add</button>
      </form>

      <ul>
        {list.map((item) => (
          <li key={item.id} className="list">
            <input
              type="checkbox"
              name="task"
              id="task"
              checked={item.checked}
              onChange={() => handleCheck(item.id)}
            />
            <label
              onDoubleClick={()=>handleCheck(item.id)}
              style={item.checked ? { textDecoration: "line-through" } : null}
            >
              {item.item}
            </label>
            <button onClick={() => deleteItem(item.id)} className="delete-button">Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
