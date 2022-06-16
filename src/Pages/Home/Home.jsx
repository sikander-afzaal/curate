import React from "react";
import "./Home.css";
import Hero from "./Hero/Hero";
import BrandsBar from "../../Components/BrandsBar/BrandsBar";
import Works from "./Works/Works";
import Unique from "./Unique/Unique";
import Health from "./Health/Health";
import Analysis from "./Analysis/Analysis";
import Intelligence from "./Intelligence/Intelligence";
import Team from "./Team/Team";
import Future from "./Future/Future";
import Perosnal from "./Personal/Perosnal";
function Home() {
  return (
    <div className="home">
      <Hero />
      <BrandsBar />
      <Works />
      <Unique />
      <Health />
      <Analysis />
      <Intelligence />
      <Team />
      <Future />
      <Perosnal />
    </div>
  );
}

export default Home;
