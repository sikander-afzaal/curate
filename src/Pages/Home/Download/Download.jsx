import React from "react";
import "./Download.css";
import phone from "../../../Assets/download/mobile.png";
import btn from "../../../Assets/download/btn.svg";
function Download() {
  return (
    <div className="download">
      <div className="left-download">
        <h1 className="roboto">
          Download Curate <br /> <span>Today!</span>
        </h1>
        <p className="roboto">
          Download our latest version and please don’t <br /> forget to rate :)
        </p>
        <img src={btn} alt="" />
      </div>
      <div className="right-download">
        <img src={phone} alt="" />
      </div>
    </div>
  );
}

export default Download;
