import React from "react";
import Navbar from "./Component/Navbar/Navbar";
import Hero from "./Component/Hero/Hero";
import Program from "./Component/Programs/Program";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <div className="container">
        <Program />
      </div>
    </div>
  );
}

export default App;
