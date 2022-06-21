import React from "react";
import "./Phones.css";
import phone1 from "../../../Assets/phones/phone (1).png";
import phone2 from "../../../Assets/phones/phone (2).png";
import phone3 from "../../../Assets/phones/phone (3).png";
import apple from "../../../Assets/apple-btn.svg";
function Phones() {
  return (
    <div className="phone-cont">
      <div className="phone-div">
        <div className="row-phone">
          <img src={phone1} alt="" className="phone-img" />
          <img src={phone2} alt="" className="phone-img" />
          <img src={phone3} alt="" className="phone-img" />
        </div>
        <img src={apple} alt="" />
      </div>
    </div>
  );
}

export default Phones;
