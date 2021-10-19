import './App.css';
import React from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Projects from "./components/Project";
import Skills from "./components/Skills";
import Home from "./components/Home"

const App=()=> {
  return (
    <main>
      <Navbar />
      <Home/>
      <About />
       <Skills />
      <Projects />
      <Contact /> 
    </main>
  );
}

export default App;
