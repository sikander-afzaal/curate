import React from "react";
import "./Home.css";
import Hero from "./Hero/Hero";
import BrandsBar from "../../Components/BrandsBar/BrandsBar";
import Works from "./Works/Works";
import Unique from "./Unique/Unique";
import Health from "./Health/Health";
function Home() {
  return (
    <div className="home">
      <Hero />
      <BrandsBar />
      <Works />
      <Unique />
      <Health />
    </div>
  );
}

export default Home;
