import React from "react";
import "./Bg.css";
import pill from "../../../Assets/Subtract.svg";
function Bg() {
  return (
    <div className="bg">
      <img src={pill} alt="" />
      <p className="roboto">
        <span>\</span> The world's most advanced health data and recommendation
        algorithm
      </p>
    </div>
  );
}

export default Bg;
