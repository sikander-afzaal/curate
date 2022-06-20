import React from "react";
import "./Works.css";
import work1 from "../../../Assets/works/work1.svg";
import work2 from "../../../Assets/works/work2.png";
import work3 from "../../../Assets/works/work3.svg";
import under from "../../../Assets/under1.svg";
function Works() {
  return (
    <div id="works" className="works">
      <div className="title-div">
        <h1 className="roboto title">
          How It <span className="gradient-text">Works</span>
        </h1>
        <img src={under} alt="" className="underline" />
      </div>
      <p className="roboto sub-title">
        The future of health is in the palm of your hand. 3 simple steps to
        optimise your health & make more out of your every day.
      </p>
      <div className="work-row">
        <div className="work-box">
          <img src={work1} alt="" />
          <h2 className="roboto gradient-text">
            Download the <br /> Curate App
          </h2>
          <p className="roboto">
            Our app is free to download from the Apple store in one simple click
          </p>
        </div>
        <div className="work-box">
          <img src={work2} alt="" />
          <h2 className="roboto gradient-text">
            Analyse your health <br /> data for Free
          </h2>
          <p className="roboto">
            In less than 90 seconds we will analyse your biometric data through
            our streamlined process.
          </p>
        </div>
        <div className="work-box">
          <img src={work3} alt="" />
          <h2 className="roboto gradient-text">
            Receive your unique <br /> supplements{" "}
          </h2>
          <p className="roboto">
            Tailor-made vitamins to optimise your health. Delivered to you on a
            monthly basis. Cancel anytime.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Works;
