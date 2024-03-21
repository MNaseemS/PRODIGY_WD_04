import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Experience from "./components/Experience";


const App = () => {
  return (
    <>
      <main>
        <Navbar/>
        <Home />
        <About/>
        <Portfolio/>
        <Experience/>
      </main>
    </>
  );
}

export default App
