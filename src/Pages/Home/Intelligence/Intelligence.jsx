import React from "react";
import "./Intelligence.css";
import img from "../../../Assets/intelli.png";
import imgMob from "../../../Assets/intelli-mob.png";
import graph from "../../../Assets/intelli-graph.png";
import under from "../../../Assets/under2.svg";
import patt from "../../../Assets/patterns/intelli-patt.svg";
import pattMob from "../../../Assets/patterns/intelli-patt-mob.svg";
import thunder from "../../../Assets/float/thunder.svg";
import heart from "../../../Assets/float/heart.svg";
function Intelligence() {
  return (
    <div className="intelli-cont">
      <img src={patt} alt="" className="intelli-patt desk-img" />
      <img src={pattMob} alt="" className="intelli-patt mob-img" />
      <div className="inteli">
        <div className="left-intelli">
          <div className="title-div">
            <h1 className="roboto title">
              Pioneering Health <br /> Intelligence
            </h1>
            <img src={under} alt="" />
          </div>
          <p className="roboto">
            They say you can find a study to prove just about anything. And
            while that may be true, what about when you have 50 studies, 100
            studies or 350 studies proving the same thing? That's a different
            story, right?
            <br />
            <br />
            Well, our team has done a lot of that research, linking over 350
            studies within our platform we have vast experience across multiple
            fields including immunity, performance, diabetes, weight management,
            consumer healthcare and female health.
          </p>
        </div>
        <div className="right-intelli">
          <img src={graph} alt="" className="intelli-graph" />
          <img src={img} className="intelli-img desk-img" alt="" />
          <img src={imgMob} className="intelli-img mob-img" alt="" />
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
        </div>
      </div>
    </div>
  );
}

export default Intelligence;
