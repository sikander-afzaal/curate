import React from "react";
import "./Unique.css";
import img from "../../../Assets/unique/unique.png";
import bottomImg1 from "../../../Assets/unique/unique-bottom (1).png";
import bottomImg2 from "../../../Assets/unique/unique-bottom (2).png";
import bottomImg3 from "../../../Assets/unique/unique-bottom (3).png";
import bottomImg4 from "../../../Assets/unique/unique-bottom (4).png";
import bottomImg5 from "../../../Assets/unique/unique-bottom (5).png";
import icon1 from "../../../Assets/unique/icon1.svg";
import icon2 from "../../../Assets/unique/icon2.svg";
import icon3 from "../../../Assets/unique/icon3.svg";
function Unique() {
  return (
    <div className="unique">
      <h2 className="title-top roboto">Our Ethos</h2>
      <h1 className="roboto title">
        Everyone's Biology Is <span className="gradient-text">Unique</span>
      </h1>
      <p className="roboto sub-title">
        To get the best out of you, you've got to put the best into you. That's
        why we go the extra mile to source the most bioavailable form of each
        base nutrient to ensure your body is absorbing the levels it needs to
        have you feeling happier & healthier at every stage of life.
      </p>
      <div className="wrapper-uni">
        <div className="center-uni">
          <div className="left-uni">
            <img src={img} alt="" />
          </div>
          <div className="right-uni">
            <div>
              <h3 className="roboto">Anne’s Plan</h3>
              <h4 className="roboto">Nurse</h4>
            </div>

            <p className="roboto">
              Anne is up early most mornings working long hours, does yoga to
              decompress and wants help with her energy and dry skin
            </p>
            <div className="row-div">
              <div className="row">
                <img src={icon1} alt="" />
                <p className="roboto">THE ENERGY - B12 for energy</p>
              </div>
              <div className="row">
                <img src={icon2} alt="" />
                <p className="roboto">THE ZEN ONE - Ashwagandha for stress</p>
              </div>
              <div className="row">
                <img src={icon3} alt="" />
                <p className="roboto">
                  SUNSHINE READY - Vitamin D for immunity
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="bottom-uni">
          <img src={bottomImg5} className="bottom-img" alt="" />
          <img src={bottomImg1} className="bottom-img" alt="" />
          <img src={bottomImg2} className="bottom-img" alt="" />
          <img src={bottomImg4} className="bottom-img" alt="" />
          <img src={bottomImg3} className="bottom-img" alt="" />
        </div>
      </div>
    </div>
  );
}

export default Unique;
