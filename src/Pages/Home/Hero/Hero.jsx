import React from "react";
import "./Hero.css";
import apple from "../../../Assets/apple-btn.svg";
import hero from "../../../Assets/hero.png";
import running from "../../../Assets/float/running.svg";
import thunder from "../../../Assets/float/thunder.svg";
import sleep from "../../../Assets/float/sleep.svg";
import heart from "../../../Assets/float/heart.svg";
import barMob from "../../../Assets/float/bar-mob.svg";
import activity from "../../../Assets/float/activity.svg";
import graph from "../../../Assets/hero-graph.png";
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
            The worlds first and most personalised supplements curated using
            real-time health data. Curate analyses your health data to offer an
            accurate, personalised and bespoke vitamin solution for health
            optimisation.
          </p>
          <p className="roboto desktop-hero">
            We know that one size does not fit all and that not all deficiencies
            are visible. We're dedicated to taking the guesswork out of it.
          </p>
          <img src={apple} alt="" />
        </div>
        <div className="right-hero">
          <img src={graph} alt="" className="graph-hero" />
          <div className="float float1">
            <div className="left-float">
              <p className="bold-float roboto">Running</p>
            </div>
            <div className="right-float">
              <img src={running} alt="" />
            </div>
          </div>
          <div className="float float2">
            <div className="left-float">
              <p className="bold-float roboto">
                <span className="light roboto">avg</span> 861{" "}
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
                <span className="light roboto">avg</span> 7.2{" "}
                <span className="light roboto">hours</span>
              </p>
            </div>
          </div>
          <div className="float float4">
            <div className="left-float">
              <img src={activity} alt="" />
            </div>
            <div className="right-float">
              <p className="bold-float roboto">Activity</p>
              <img src={barMob} alt="" />
            </div>
          </div>
          <div className="float float5">
            <div className="left-float">
              <p className="bold-float roboto">
                <span className="light roboto">avg</span> 73{" "}
                <span className="light roboto">bpm</span>
              </p>
            </div>
            <div className="right-float">
              <img src={heart} alt="" />
            </div>
          </div>
          <img className="hero-img" src={hero} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Hero;
