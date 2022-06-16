import React from "react";
import "./Hero.css";
import apple from "../../../Assets/apple.png";
import hero from "../../../Assets/hero.png";
import running from "../../../Assets/float/running.svg";
import thunder from "../../../Assets/float/thunder.svg";
import sleep from "../../../Assets/float/sleep.svg";
import heart from "../../../Assets/float/heart.svg";
import bar from "../../../Assets/float/bar.svg";
import barMob from "../../../Assets/float/bar-mob.svg";
import yoga from "../../../Assets/float/yoga.svg";
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
          <div className="float float1">
            <div className="left-float">
              <p className="bold-float roboto">Yoga</p>
            </div>
            <div className="right-float">
              <img src={yoga} alt="" />
            </div>
          </div>
          <div className="float float2">
            <div className="left-float">
              <p className="bold-float roboto">
                <span className="light roboto">avg</span> 1843{" "}
                <span className="light roboto">cal</span>
              </p>
            </div>
            <div className="right-float">
              <img src={thunder} alt="" />
            </div>
          </div>
          <div className="float float3">
            <div className="left-float">
              <img src={sleep} alt="" />
            </div>
            <div className="right-float">
              <p className="bold-float roboto">
                <span className="light roboto">avg</span> 6.2{" "}
                <span className="light roboto">hours</span>
              </p>
            </div>
          </div>
          <div className="float float4">
            <div className="left-float">
              <img src={running} alt="" />
            </div>
            <div className="right-float">
              <p className="bold-float desk roboto">Activity Frequency</p>
              <p className="bold-float mob roboto">Activity</p>
              <p className="light roboto">Avg 3 days a week</p>
              <img src={bar} alt="" className="desk" />
              <img src={barMob} className="mob" alt="" />
            </div>
          </div>
          <div className="float float5">
            <div className="left-float">
              <p className="bold-float roboto">
                <span className="light roboto">avg</span> 64{" "}
                <span className="light roboto">bpm</span>
              </p>
            </div>
            <div className="right-float">
              <img src={heart} alt="" />
            </div>
          </div>
          <img src={hero} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Hero;
