import React from "react";
import "./Future.css";
import img from "../../../Assets/future.png";
import patt from "../../../Assets/patterns/future-pattern.svg";
import running from "../../../Assets/float/running.svg";
import thunder from "../../../Assets/float/thunder.svg";
import sleep from "../../../Assets/float/sleep.svg";
import heart from "../../../Assets/float/heart.svg";
import bar from "../../../Assets/float/bar.svg";
import barMob from "../../../Assets/float/bar-mob.svg";
import yoga from "../../../Assets/float/yoga.svg";
function Future() {
  return (
    <div className="future-cont">
      <img src={patt} alt="" className="fut-patt" />
      <div className="future">
        <div className="future-left">
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
          <img src={img} alt="" />
        </div>
        <div className="future-right">
          <h1 className="roboto title">
            The Future is <br /> <span className="gradient-text">Personal</span>
          </h1>
          <p className="roboto">
            Curate’s mission is to be the one-stop platform for long-term health
            mapping. It empowers individuals to obtain multiple biological
            measurements, identify and measure symptoms and determine how these
            change over time by utilising personalised recommendations. Curate
            utilises test data, big data assets such as community data, and
            smart wearable data to formulate its personalised recommendations.
          </p>
          <p className="roboto">
            Consumers no longer need to visit multiple doctors or labs for
            evaluations, results in interpretation and recommendations.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Future;
