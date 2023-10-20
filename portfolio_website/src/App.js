import React from "react";
import NavBar from "./components/NavBar";
import Header from "./components/Header";
import About from "./components/About";
import Skills from "./components/Skills";
import WhatIDo from "./components/WhatIDo";

function App() {
  return (
    <div>
      <NavBar />
      <Header />
      <About />
      <WhatIDo />
      <Skills />
    </div>
  );
}

export default App;
