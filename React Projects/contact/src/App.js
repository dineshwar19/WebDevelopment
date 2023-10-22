import { useEffect, useState } from "react";
import List from "./List";

function App() {
  const [list, setList] = useState(() => {
    const existingList = localStorage.getItem("List");
    return existingList ? JSON.parse(existingList) : [];
  });
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    localStorage.setItem("List", JSON.stringify(list));
  }, [list]);

  function handleClick() {
    if (name.trim() === "" || email.trim() === "") {
      return;
    }
    setList((prevList) => [
      ...prevList,
      { id: prevList.length, name: name, email: email },
    ]);
    setName("");
    setEmail("");
  }
  function handleDelete(id) {
    const delList = list.filter((item) => item.id !== id);
    console.log(delList);
    setList(delList);
  }

  return (
    <div className="bg-gradient-to-r from-blue-700 via-blue-800 to-gray-900 min-h-screen flex flex-col items-center justify-center">
      <div className="bg-white flex flex-col gap-5 p-10 rounded-xl shadow-lg shadow-slate-700 items-center">
        <input
          type="text"
          placeholder="Name"
          className=" border-2 border-black p-5 rounded-xl text-xl font-semibold outline-none"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          placeholder="Email"
          className="border-2 border-black p-5 rounded-xl text-xl font-semibold outline-none"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <button
          className="bg-blue-500 w-20 rounded-lg  text-white font-bold text-xl p-2"
          onClick={handleClick}
        >
          add
        </button>
      </div>
      <List list={list} handleDelete={handleDelete} />
    </div>
  );
}

export default App;
