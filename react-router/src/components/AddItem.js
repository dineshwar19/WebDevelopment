import React, { useRef } from "react";
import apiRequest from "./apiRequest";

function AddItem({ tasks, setTasks, list, setList, apiUrl }) {
  const inputRef = useRef();

  async function handleClick(e) {
    e.preventDefault();
    const newList = { id: list.length, task: tasks, checked: false };
    if (tasks === "") return;
    setList((prevList) => [...prevList, newList]);
    setTasks("");

    const postOption = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newList),
    };
    const result = await apiRequest(apiUrl, postOption);
    console.log(result);
  }

  return (
    <div>
      <form onSubmit={handleClick} className="flex justify-center gap-3 ">
        <input
          type="text"
          autoFocus
          ref={inputRef}
          placeholder="Tasks"
          value={tasks}
          onChange={(e) => setTasks(e.target.value)}
          className="border-b border-black p-2 text-xl font-semibold outline-none"
        />
        <button
          type="submit"
          className="bg-blue-400 p-2 rounded-lg text-white text-2xl hover:bg-blue-700"
          onClick={() => inputRef.current.focus()}
        >
          +
        </button>
      </form>
    </div>
  );
}

export default AddItem;
