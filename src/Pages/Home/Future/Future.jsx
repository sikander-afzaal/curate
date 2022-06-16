import React from "react";
import "./Future.css";
import img from "../../../Assets/future.png";
import patt from "../../../Assets/patterns/future-pattern.svg";
function Future() {
  return (
    <div className="future-cont">
      <img src={patt} alt="" className="fut-patt" />
      <div className="future">
        <div className="future-left">
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
