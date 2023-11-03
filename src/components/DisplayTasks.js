import React, { useState } from "react";
import { AiFillDelete } from "react-icons/ai";
function DisplayTasks({ list, setList }) {
  function handleChange(id) {
    const updatedList = list.map((item) =>
      id === item.id ? { ...item, checked: !item.checked } : item
    );
    setList(updatedList);
  }
  function handleDelete(id) {
    const deleteList = list.filter((item) => id !== item.id);
    setList(deleteList);
  }
  return (
    <div>
      <ul className="mt-5 flex flex-col items-center gap-5">
        {list.map((list) => (
          <li
            key={list.id}
            className="flex w-full justify-between text-xl font-semibold"
          >
            <input
              type="checkbox"
              name="check"
              id="check"
              className=" appearance-none w-8 h-8 bg-slate-300 rounded-full checked:bg-blue-500 cursor-pointer "
              onClick={() => handleChange(list.id)}
            />
            {list.checked ? (
              <p className=" w-2/3 text-center line-through">{list.task}</p>
            ) : (
              <p className=" w-2/3 text-center">{list.task}</p>
            )}
            <button
              className="text-red-600"
              onClick={() => handleDelete(list.id)}
            >
              <AiFillDelete size={25} />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default DisplayTasks;
