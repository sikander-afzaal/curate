import React from "react";
import "./Home.css";
import Hero from "./Hero/Hero";
import BrandsBar from "../../Components/BrandsBar/BrandsBar";
import Works from "./Works/Works";
function Home() {
  return (
    <div className="home">
      <Hero />
      <BrandsBar />
      <Works />
    </div>
  );
}

export default Home;
