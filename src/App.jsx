import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import SectionOne from "./Components/SectionOne/SectionOne";
import About from "./Components/About/About";
import Skills from "./Components/Skills/Skills";
import Projects from "./Components/Projects/Projects";
import Contact from "./Components/Contact/Contact";

function App() {
  return (
    <>
      <Navbar />
      <SectionOne />
      <About/>
      <Skills/>
      <Projects/>
      <Contact/>
    </>
  );
}

export default App;
