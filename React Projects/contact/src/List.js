const List = ({ list, handleDelete }) => {
  return (
    <div>
      {list.length === 0 ? (
        <div className="my-5 text-2xl text-white font-bold">
          No items in the list.
        </div>
      ) : (
        <div className="bg-white my-10 p-5 rounded-xl shadow-2xl">
          <ul className="text-xl flex flex-col gap-6">
            {list.map((item) => (
              <li key={item.id} className="flex w-80 justify-between">
                <div>
                  <p className="font-bold ">{item.name}</p>
                  <p className="text-base font-semi-bold">{item.email}</p>
                </div>

                <button
                  className="bg-red-500 text-white p-3 rounded-xl cursor-pointer text-base font-bold"
                  onClick={() => {
                    handleDelete(item.id);
                  }}
                >
                  Delete
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};
export default List;
