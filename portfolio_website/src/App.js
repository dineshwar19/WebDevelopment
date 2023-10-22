import React from "react";
import NavBar from "./components/NavBar";
import Header from "./components/Header";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Passion from "./components/Passion";
import SocialLinks from "./components/SocialLinks";
import Contact from "./components/Contact";
import SocialFooter from "./components/SocialFooter";

function App() {
  return (
    <div>
      <NavBar />
      <Header />
      <About />
      <SocialLinks />
      <Passion />
      <Skills />
      <Experience />
      <Contact />
      <SocialFooter />
    </div>
  );
}

export default App;
