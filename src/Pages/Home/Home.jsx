import React from "react";
import "./Home.css";
import Hero from "./Hero/Hero";
import Works from "./Works/Works";
import Unique from "./Unique/Unique";
import Health from "./Health/Health";
import Analysis from "./Analysis/Analysis";
import Intelligence from "./Intelligence/Intelligence";
import Team from "./Team/Team";
import Future from "./Future/Future";
import Perosnal from "./Personal/Perosnal";
import Phones from "./Phones/Phones";
import Faq from "./Faq/Faq";
import Download from "./Download/Download";
import Bg from "./Bg/Bg";
function Home() {
  return (
    <div className="home">
      <Hero />
      <Works />
      <Bg />
      <Unique />
      <Health />
      <Analysis />
      <Intelligence />
      <Team />
      <Future />
      <Perosnal />
      <Phones />
      <Faq />
      <Download />
    </div>
  );
}

export default Home;
