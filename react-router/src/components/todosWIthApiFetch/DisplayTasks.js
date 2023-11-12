import { AiFillDelete } from "react-icons/ai";
import apiRequest from "./apiRequest";

function DisplayTasks({ list, setList, apiUrl }) {
  async function handleChange(id) {
    const updatedList = list.map((item) =>
      id === item.id ? { ...item, checked: !item.checked } : item
    );
    setList(updatedList);
    const myItem = updatedList.filter((item) => item.id === id);
    const updateOption = {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ checked: myItem[0].checked }),
    };
    const reqUrl = `${apiUrl}/${id}`;
    const result = await apiRequest(reqUrl, updateOption);
    console.log(result);
  }
  async function handleDelete(id) {
    const deleteList = list.filter((item) => id !== item.id);
    setList(deleteList);

    const deleteOption = { method: "DELETE" };
    const reqUrl = `${apiUrl}/${id}`;
    const result = await apiRequest(reqUrl, deleteOption);
    console.log(result);
  }
  return (
    <div>
      <ul className="mt-5 flex flex-col items-center gap-5">
        {list.map((list) => (
          <li
            key={list.id}
            className="flex w-full justify-between text-xl font-semibold"
          >
            {list.checked ? (
              <input
                type="checkbox"
                name="check"
                id="check"
                className=" appearance-none w-8 h-8 rounded-full bg-blue-500 cursor-pointer "
                onClick={() => handleChange(list.id)}
              />
            ) : (
              <input
                type="checkbox"
                name="check"
                id="check"
                className=" appearance-none w-8 h-8 bg-slate-300 rounded-full cursor-pointer "
                onClick={() => handleChange(list.id)}
              />
            )}
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
