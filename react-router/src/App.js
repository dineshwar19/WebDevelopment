import { useEffect, useState } from "react";
// import Footer from "./components/Footer";
// import Header from "./components/Header";
// import Todos from "./components/Todos";
// import Buttons from "./components/JsonPlaceholder.js/Buttons";
// import Challenge from "./components/challenge/Challenge";

import Nav from "./components/react_router_project/Nav";

import { Route, Routes, Link } from "react-router-dom";
import Home from "./components/react_router_project/Home";
import NewPost from "./components/react_router_project/NewPost";
import PostPage from "./components/react_router_project/PostPage";
import About from "./components/react_router_project/About";
import Footer from "./components/react_router_project/Footer";
import Missing from "./components/react_router_project/Missing";
import {useNavigate} from "react-router-dom"
// import Home from "./components/react-router/Home";
// import About from "./components/react-router/About";
// import Skills from "./components/react-router/Skills";
// import SkillPage from "./components/react-router/SkillPage";
// import Missing from "./components/react-router/Missing";
// import SkillsLayout from "./components/react-router/SkillsLayout";

function App() {
  // const [len, setLen] = useState(0);
  const [search, setSearch] = useState("");
  const [postTitle, setPostTitle] = useState("");
  const [postBody, setPostBody] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const navigation = useNavigate();
  const [posts, setPosts] = useState([
    
  ]);
  useEffect(() => {
    const filteredPost = posts.filter(
      (post) =>
        post.title.toLowerCase().includes(search.toLowerCase()) ||
        post.body.toLowerCase().includes(search.toLowerCase())
    );
    setSearchResult(filteredPost.reverse());
  }, [search, posts]);
  const handleSubmit = (e) => {
    e.preventDefault();
    const id = posts.length ? posts.length + 1 : 1;
    if (postTitle === "" || postBody === "") return;
    setPosts((prevPost) => [
      ...prevPost,
      { id: id, title: postTitle, body: postBody },
    ]);
    setPostTitle("");
    setPostBody("");
    navigation("/")
  };

  const handleDelete = (id) =>{
    const deletedPost = posts.filter(post =>(
      post.id !== id
    ))
    setPosts(deletedPost)
    navigation("/")
  }
  return (
    // <div className="flex flex-col h-screen ">
    //   <Header />
    //   <Todos setLen={setLen} />
    //   <Footer len={len} />
    // </div>
    // <div>
    //   <Challenge />
    // </div>
    // <div>
    //   <Buttons />
    // </div>
    // <div>
    //   <nav>
    //     <ul className="flex bg-blue-500 text-white justify-evenly">
    //       <li><Link to="/">Home</Link></li>
    //       <li><Link to="/about">About</Link></li>
    //       <li><Link to="/skills">Skills</Link></li>

    //     </ul>
    //   </nav>
    //   <Routes>
    //     <Route path="/" element={<Home />} />
    //     <Route path="/about" element={<About />} />
    //     {/* for nested routing  */}
    //     <Route path="/skills" element={<SkillsLayout />}>
    //       <Route index element={<Skills />}  />
    //       <Route path= ":id" element={<SkillPage />} />
    //       <Route path="about" element={<About />} />
    //     </Route>
    //     <Route path="*" element={<Missing />} />
    //   </Routes>
    // </div>
    <div>
      <Nav search={search} setSearch={setSearch} />

      <Routes>
        <Route path="/" element={<Home posts={searchResult} />} />
        <Route path="/post">
          <Route index element={
            <NewPost
              postTitle={postTitle}
              postBody={postBody}
              setPostTitle={setPostTitle}
              setPostBody={setPostBody}
              handleSubmit={handleSubmit}
            />
          } />
          <Route path=":id" element={<PostPage posts={posts} handleDelete={handleDelete} />} />
        </Route>
        <Route path="/about" element={<About />} />
        <Route path="*" element={<Missing />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
