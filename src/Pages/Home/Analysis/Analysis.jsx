import React from "react";
import "./Analysis.css";
import img from "../../../Assets/phone-ana.png";
import apple from "../../../Assets/apple-btn.svg";
import under from "../../../Assets/under2.svg";
function Analysis() {
  return (
    <div id="analysis" className="analysis">
      <div className="left-analysis">
        <img src={img} className="phone" alt="" />
      </div>
      <div className="right-analysis">
        <div className="title-div">
          <h1 className="roboto title">
            Unlock Your Free <br />
            <span className="gradient-text">Health Analysis</span>
          </h1>
          <img src={under} alt="" className="under" />
        </div>
        <p className="roboto sub-title">
          A one-stop platform for your long term health. Empowering individuals
          to understand their biometric data & best serve personalised
          recommendations. We have created a range of services that aim to serve
          stability in your day to day lives.
        </p>
        <ul className="list">
          <li className="roboto">Personalised Vitamins</li>
          <li className="roboto">Health Data Analysis</li>
          <li className="roboto">At-Home Testing</li>
          <li className="roboto">Mental Health Programmes</li>
          <li className="roboto">Nutrition Guidance</li>
        </ul>
        <img className="apple-btn" src={apple} alt="" />
      </div>
    </div>
  );
}

export default Analysis;
