import React from "react";
import "./Hero.css";
import apple from "../../../Assets/apple.png";
import hero from "../../../Assets/hero.png";
function Hero() {
  return (
    <div className="hero-cont">
      <div className="hero">
        <div className="left-hero">
          <h1 className="inter">
            Your Health Starts
            <br /> With What's <span className="gradient-text">Inside</span>
          </h1>
          <p className="roboto desktop-hero">
            The world's first and most personalised supplements, curated using
            real-time health data. Curate analyses of your unique health data to
            offer accurate, personalised vitamin solutions for health
            optimisation.
          </p>
          <p className="roboto hero-mobile">
            The world's first and most personalised supplements, curated using
            real-time health data.
          </p>
          <p className="roboto desktop-hero">
            We know that one size does not fit all and that not all deficiencies
            are visible. We're dedicated to taking the guesswork out of it.
          </p>
          <p className="gradient-text inter desktop-hero">DOWNLOAD FROM</p>
          <img src={apple} alt="" />
        </div>
        <div className="right-hero">
          <img src={hero} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Hero;
