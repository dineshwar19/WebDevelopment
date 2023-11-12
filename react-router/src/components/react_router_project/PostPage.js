import React from "react";
import { useParams } from "react-router-dom";

const PostPage = ({ posts, handleDelete }) => {
  const { id } = useParams();
  const post = posts.find((post) => (post.id).toString() === id);
  return (
    <div className="text-xl text-center p-3 flex flex-col items-center gap-3">
      <h1 className="font-bold">{post.title}</h1>
      <p>{post.body}</p>
      <button onClick={() =>handleDelete(post.id)} className="text-md bg-red-600 text-white p-2 rounded-lg">delete</button>
    </div>
  );
};

export default PostPage;
