import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import DataContext from "../../contexts/DataContext";

const EditPage = () => {
  const { posts, editTitle, editBody, setEditTitle, setEditBody, handleEdit } =
    useContext(DataContext);
  const { id } = useParams();
  const post = posts.find((post) => post.id.toString() === id);
  useEffect(() => {
    if (post) {
      setEditTitle(post.title);
      setEditBody(post.body);
    }
  }, []);
  return (
    <div>
      <form
        action=""
        className="flex flex-col w-fit p-3 gap-3 items-center"
        onSubmit={(e) => handleEdit(e, id)}
      >
        <div className="flex flex-col w-full">
          <label htmlFor="title">Post Title : </label>
          <input
            type="text"
            name="title"
            id="title"
            required
            value={editTitle}
            onChange={(e) => setEditTitle(e.target.value)}
            className="border border-black p-2 text-lg rounded outline-none"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="body">Post body : </label>
          <textarea
            name=""
            id="body"
            cols="30"
            rows="5"
            required
            value={editBody}
            onChange={(e) => setEditBody(e.target.value)}
            className="border border-black rounded p-2 text-lg outline-none"
          ></textarea>
        </div>
        <button
          type="submit"
          className="bg-blue-600 text-white text-lg font-semibold w-fit p-2 rounded"
        >
          Edit
        </button>
      </form>
    </div>
  );
};

export default EditPage;
