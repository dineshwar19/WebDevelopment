import React from "react";

const NewPost = ({ postTitle, postBody, setPostTitle, setPostBody, handleSubmit }) => {
  return (
    <div>
      <form action="" className="flex flex-col w-fit p-3 gap-3 items-center" onSubmit={handleSubmit}>
        <div className="flex flex-col w-full">
          <label htmlFor="title">Post Title : </label>
          <input
            type="text"
            name="title"
            id="title"
            value={postTitle}
            onChange={(e) => setPostTitle(e.target.value)}
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
            value={postBody}
            onChange={(e) => setPostBody(e.target.value)}
            className="border border-black rounded p-2 text-lg outline-none"
          ></textarea>
        </div>
        <button
          type="submit"
          className="bg-blue-600 text-white text-lg font-semibold w-fit p-2 rounded"
        >
          post
        </button>
      </form>
    </div>
  );
};

export default NewPost;
