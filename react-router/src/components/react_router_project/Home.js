import React, { useContext } from "react";
import Post from "./Post";
import DataContext from "../../contexts/DataContext";

const Home = () => {
  const { searchResult } = useContext(DataContext);
  return (
    <div>
      {searchResult.length ? (
        searchResult.map((post) => <Post id={post.id} post={post} />)
      ) : (
        <p className="text-center font-bold text-3xl uppercase mt-5">
          there are no posts
        </p>
      )}
    </div>
  );
};

export default Home;
