import React from "react";
import "./Health.css";
import img from "../../../Assets/hands-img.png";
import pattern from "../../../Assets/patterns/unique-sec-pattern.svg";
import patternMob from "../../../Assets/patterns/unique-sec-pattern-mob.png";
function Health() {
  return (
    <div className="health-cont">
      <img src={pattern} className="health-patt desktop-patt" alt="" />
      <img src={patternMob} className="health-patt mobile-patt" alt="" />
      <div className="health">
        <div className="left-health">
          <h1 className="roboto title">
            Your <span className="gradient-text">Unique</span> Health Offering
          </h1>
          <p className="roboto sub-title">
            Personalised vitamins? We hear about them all the time. We've taken
            5 steps forward and developed a platform that allows us to analyse
            your unique health data and pinpoint where we can add a personalised
            recommendation that is unique to you and your body.
          </p>
          <ul className="list">
            <li className="roboto">Non-GMO</li>
            <li className="roboto">
              Free from artificial colours and sweeteners
            </li>
            <li className="roboto">BRC Certified</li>
            <li className="roboto">Tailor-made for you and your body</li>
            <li className="roboto">GMP Approved</li>

            <li className="roboto">UK Made</li>
          </ul>
        </div>
        <div className="right-health">
          <img src={img} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Health;
