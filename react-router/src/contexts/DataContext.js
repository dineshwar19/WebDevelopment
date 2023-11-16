import React, { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import api from "../api/posts";
const DataContext = createContext({});

export const DataProvider = ({ children }) => {
  const [search, setSearch] = useState("");
  const [postTitle, setPostTitle] = useState("");
  const [postBody, setPostBody] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const navigation = useNavigate();
  const [posts, setPosts] = useState([]);
  const [editTitle, setEditTitle] = useState("");
  const [editBody, setEditBody] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await api.get("/posts");
        setPosts(response.data);
      } catch (err) {
        if (err.response) {
          console.log(err.response.data);
        }
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    const filteredPost = posts.filter(
      (post) =>
        post.title.toLowerCase().includes(search.toLowerCase()) ||
        post.body.toLowerCase().includes(search.toLowerCase())
    );
    setSearchResult(filteredPost.reverse());
  }, [search, posts]);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const id = posts.length ? posts.length + 1 : 1;
    if (postTitle === "" || postBody === "") return;
    const updatedPost = { id: id, title: postTitle, body: postBody };

    try {
      const response = await api.post("/posts", updatedPost);
      const updatedPosts = [...posts, response.data];
      setPosts(updatedPosts);
      setPostTitle("");
      setPostBody("");
      navigation("/");
    } catch (err) {
      if (err.response) {
        console.log(err.response.data);
      }
    }
  };

  const handleEdit = async (e, id) => {
    e.preventDefault();
    if (editBody === "" || editTitle === "") return;
    const editedPost = { id, title: editTitle, body: editBody };
    try {
      const response = await api.put(`/posts/${id}`, editedPost);
      setPosts(
        posts.map((post) => (post.id === id ? { ...response.data } : post))
      );
      setPostTitle("");
      setPostBody("");
      navigation("/");
    } catch (err) {
      if (err.response) {
        console.log(err.response.data);
      }
    }
  };

  const handleDelete = async (id) => {
    const deletedPost = posts.filter((post) => post.id !== id);
    try {
      const response = await api.delete(`/posts/${id}`);
    } catch (err) {
      if (err.response) {
        console.log(err.response.data);
      }
    }
    setPosts(deletedPost);
    navigation("/");
  };
  return (
    <DataContext.Provider
      value={{
        search,
        setSearch,
        postTitle,
        setPostTitle,
        postBody,
        setPostBody,
        searchResult,
        setSearchResult,
        posts,
        setPosts,
        editBody,
        setEditBody,
        editTitle,
        setEditTitle,
        handleDelete,
        handleEdit,
        handleSubmit,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default DataContext;
