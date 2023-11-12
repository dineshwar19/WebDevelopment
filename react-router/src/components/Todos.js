import React, { useEffect, useState } from "react";
import AddItem from "./AddItem";
import DisplayTasks from "./DisplayTasks";
import SearchTask from "./SearchTask";

function Todos({ setLen }) {
  const [tasks, setTasks] = useState("");
  const [list, setList] = useState([]);
  const [search, setSearch] = useState("");

  const API_URL = "http://localhost:3500/items";
  // console.log(process.env.REACT_APP_API_KEY)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(API_URL);
        if (!response.ok) {
          throw new Error("data not found");
        }
        const data = await response.json();
        setList(data);
      } catch (err) {
        console.log(err.message);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    setLen(list.length);
  }, [list, setLen]);

  return (
    <div className="h-screen p-3 ">
      <AddItem
        tasks={tasks}
        setTasks={setTasks}
        list={list}
        setList={setList}
        apiUrl={API_URL}
      />
      <SearchTask search={search} setSearch={setSearch} />
      <DisplayTasks
        list={list.filter((item) =>
          item.task.toLowerCase().includes(search.toLowerCase())
        )}
        setList={setList}
        apiUrl={API_URL}
      />
    </div>
  );
}

export default Todos;
