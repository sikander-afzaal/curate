import React from "react";
import "./Analysis.css";
import img from "../../../Assets/phone-ana.png";
import top from "../../../Assets/patterns/top-ana.png";
import topMob from "../../../Assets/patterns/top-ana-mob.svg";
import bottom from "../../../Assets/patterns/bottom-ana.png";
import bottomMob from "../../../Assets/patterns/bottom-ana-mob.svg";
import apple from "../../../Assets/apple.png";
function Analysis() {
  return (
    <div className="analysis">
      <div className="left-analysis">
        <img src={img} className="phone" alt="" />
        <img src={top} className="top desktop-ana" alt="" />
        <img src={topMob} className="top mobile-ana" alt="" />
        <img src={bottom} className="bottom desktop-ana" alt="" />
        <img src={bottomMob} className="bottom mobile-ana" alt="" />
      </div>
      <div className="right-analysis">
        <h1 className="roboto title">
          Unlock Your Free <br />
          <span className="gradient-text">Health Analysis</span>
        </h1>
        <p className="roboto sub-title">
          A one-stop platform for your long term health. Empowering individuals
          to understand their biometric data & best serve personalised
          recommendations. We have created a range of services that aim to serve
          stability in your day to day lives.
        </p>
        <ul className="list">
          <li>Personalised Vitamins</li>
          <li>Health Data Analysis</li>
          <li>At-Home Testing</li>
          <li>Mental Health Programmes</li>
          <li>Personalised Nutrition</li>
        </ul>
        <img src={apple} alt="" />
      </div>
    </div>
  );
}

export default Analysis;
