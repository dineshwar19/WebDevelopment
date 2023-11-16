import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import DataContext from "../../contexts/DataContext";
const PostPage = () => {
  const { posts, handleDelete } = useContext(DataContext);
  const { id } = useParams();
  const post = posts.find((post) => post.id.toString() === id);
  return (
    <div className="text-xl text-center p-3 flex flex-col items-center gap-3">
      <h1 className="font-bold">{post.title}</h1>
      <p>{post.body}</p>
      <div className="">
        <Link to={`/edit/${id}`}>
          <button className="text-md bg-blue-600 text-white p-2 rounded-lg mr-10">
            Edit post
          </button>
        </Link>
        <button
          onClick={() => handleDelete(post.id)}
          className="text-md bg-red-600 text-white p-2 rounded-lg"
        >
          delete
        </button>
      </div>
    </div>
  );
};

export default PostPage;
