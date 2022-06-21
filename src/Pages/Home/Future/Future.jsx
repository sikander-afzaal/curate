import React from "react";
import "./Future.css";
import img from "../../../Assets/future.png";
import img2 from "../../../Assets/future-mob.png";
import hit from "../../../Assets/float/hit.svg";
import thunder from "../../../Assets/float/thunder.svg";
import sleep from "../../../Assets/float/sleep.svg";
import heart from "../../../Assets/float/heart.svg";
import barMob from "../../../Assets/float/activity3.svg";
import activity from "../../../Assets/float/activity.svg";
import under from "../../../Assets/under2.svg";
import appleBtn from "../../../Assets/apple-btn.svg";
function Future() {
  return (
    <div className="future-cont">
      <div className="future">
        <div className="future-left">
          <div className="float float1">
            <div className="left-float">
              <p className="bold-float roboto">HITT</p>
            </div>
            <div className="right-float">
              <img src={hit} alt="" />
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
          <img src={img} alt="" className="future-img future-desk" />
          <img src={img2} alt="" className="future-img future-mob" />
        </div>
        <div className="future-right">
          <div className="title-div">
            <h1 className="roboto title">
              The Future is <br />
              Personal
            </h1>
            <img src={under} className="under" alt="" />
          </div>
          <p className="roboto">
            Curate’s mission is to be the one-stop platform for long-term health
            mapping. It empowers individuals to obtain multiple biological
            measurements, identify and measure symptoms and determine how these
            change over time by utilising personalised recommendations. Curate
            utilises test data, big data assets such as community data, and
            smart wearable data to formulate its personalised recommendations.
            <br />
            <br />
            Consumers no longer need to visit multiple doctors or labs for
            evaluations, results in interpretation and recommendations.
          </p>
          <img src={appleBtn} alt="" className="future-mob" />
        </div>
      </div>
    </div>
  );
}

export default Future;
