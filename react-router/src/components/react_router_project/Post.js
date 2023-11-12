import React from "react";
import {Link} from "react-router-dom"
const Post = ({ post }) => {
  return (
    <Link to= {`post/${post.id}`}>
      <div className="text-xl text-center p-3">
        <h1 className="font-bold">{post.title}</h1>
        <p>{post.body}</p>
        <hr />
      </div>
    </Link>
  );
};

export default Post;
