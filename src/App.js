import React, { useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Card from "./components/Card/Card";

function App() {
  const [searchData, useSearchData] = useState("");
  return (
    <>
      <Navbar searchData={searchData} />
      <Hero />
      <Card />
    </>
  );
}

export default App;
