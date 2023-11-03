import React from "react";

function AddItem({ tasks, setTasks, setList }) {
  function handleClick(e) {
    e.preventDefault();
    if (tasks === "") return;
    setList((prevList) => [
      ...prevList,
      { id: prevList.length, task: tasks, checked: false },
    ]);
    setTasks("");
  }
  return (
    <div>
      <form onSubmit={handleClick} className="flex justify-center gap-3 ">
        <input
          type="text"
          placeholder="Tasks"
          value={tasks}
          onChange={(e) => setTasks(e.target.value)}
          className="border-b border-black p-2 text-xl font-semibold outline-none"
        />
        <button
          type="submit"
          className="bg-blue-400 p-2 rounded-lg text-white text-2xl hover:bg-blue-700"
        >
          +
        </button>
      </form>
    </div>
  );
}

export default AddItem;
