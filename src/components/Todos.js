import React, { useEffect, useState } from "react";
import AddItem from "./AddItem";
import DisplayTasks from "./DisplayTasks";
import SearchTask from "../SearchTask";

function Todos({ setLen }) {
  const [tasks, setTasks] = useState("");
  const [list, setList] = useState(JSON.parse(localStorage.getItem("Tasks")));
  const [search, setSearch] = useState("");
  useEffect(() => {
    setLen(list.length);
    localStorage.setItem("Tasks", JSON.stringify(list));
  }, [list]);
  return (
    <div className="h-full p-3">
      <AddItem tasks={tasks} setTasks={setTasks} setList={setList} />
      <SearchTask search={search} setSearch={setSearch} />
      <DisplayTasks
        list={list.filter((item) =>
          item.task.toLowerCase().includes(search.toLowerCase())
        )}
        setList={setList}
      />
    </div>
  );
}

export default Todos;
