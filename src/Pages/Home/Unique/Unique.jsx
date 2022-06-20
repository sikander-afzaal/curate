import React from "react";
import "./Unique.css";
import img from "../../../Assets/unique/unique.png";
import imgMob from "../../../Assets/unique/uniqueMob.png";
import bottomImg1 from "../../../Assets/unique/bottom-uni (1).svg";
import bottomImg2 from "../../../Assets/unique/bottom-uni (2).svg";
import bottomImg3 from "../../../Assets/unique/bottom-uni (3).svg";
import bottomImg4 from "../../../Assets/unique/bottom-uni (4).svg";
import bottomImg5 from "../../../Assets/unique/bottom-uni (5).svg";
import bottomImg6 from "../../../Assets/unique/bottom-uni (6).svg";
import bottomImg7 from "../../../Assets/unique/bottom-uni (7).svg";
import bottomImg8 from "../../../Assets/unique/bottom-uni (8).svg";
import bottomImg9 from "../../../Assets/unique/bottom-uni (9).svg";
import bottomImg10 from "../../../Assets/unique/bottom-uni (10).svg";
import bottomImg11 from "../../../Assets/unique/bottom-uni (11).svg";
import bottomImg12 from "../../../Assets/unique/bottom-uni (12).svg";
import bottomMobile1 from "../../../Assets/unique/bottom-mobile (1).svg";
import bottomMobile2 from "../../../Assets/unique/bottom-mobile (2).svg";
import bottomMobile3 from "../../../Assets/unique/bottom-mobile (3).svg";
import bottomMobile4 from "../../../Assets/unique/bottom-mobile (4).svg";
import bottomMobile5 from "../../../Assets/unique/bottom-mobile (5).svg";
import bottomMobile6 from "../../../Assets/unique/bottom-mobile (6).svg";
import bottomMobile7 from "../../../Assets/unique/bottom-mobile (7).svg";
import bottomMobile8 from "../../../Assets/unique/bottom-mobile (8).svg";
import bottomMobile9 from "../../../Assets/unique/bottom-mobile (9).svg";
import bottomMobile10 from "../../../Assets/unique/bottom-mobile (10).svg";
import bottomMobile11 from "../../../Assets/unique/bottom-mobile (11).svg";
import bottomMobile12 from "../../../Assets/unique/bottom-mobile (12).svg";
import icon1 from "../../../Assets/unique/icon1.svg";
import icon2 from "../../../Assets/unique/icon2.svg";
import icon3 from "../../../Assets/unique/icon3.svg";
import icon4 from "../../../Assets/unique/icon4.svg";
import yoga from "../../../Assets/float/yoga.svg";
import thunder from "../../../Assets/float/thunder.svg";
import sleep from "../../../Assets/float/sleep.svg";
import heart from "../../../Assets/float/heart.svg";
import barMob from "../../../Assets/float/activity2.svg";
import activity from "../../../Assets/float/activity.svg";
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
            <img src={img} alt="" className="desk-un" />
            <img src={imgMob} alt="" className="mob-un" />
            <div className="float float1">
              <div className="left-float">
                <p className="bold-float roboto">Yoga</p>
              </div>
              <div className="right-float">
                <img src={yoga} alt="" />
              </div>
            </div>
            <div className="float float2">
              <div className="left-float">
                <p className="bold-float roboto">
                  <span className="light roboto">avg</span> 652{" "}
                  <span className="light roboto">cal</span>
                </p>
              </div>
              <div className="right-float">
                <img src={thunder} alt="" />
              </div>
            </div>
            <div className="float float3">
              <div className="left-float">
                <img src={sleep} alt="" />
              </div>
              <div className="right-float">
                <p className="bold-float roboto">
                  <span className="light roboto">avg</span> 5.3{" "}
                  <span className="light roboto">hours</span>
                </p>
              </div>
            </div>
            <div className="float float4">
              <div className="left-float">
                <img src={activity} alt="" />
              </div>
              <div className="right-float">
                <p className="bold-float roboto">Activity</p>
                <img src={barMob} alt="" />
              </div>
            </div>
            <div className="float float5">
              <div className="left-float">
                <p className="bold-float roboto">
                  <span className="light roboto">avg</span> 62{" "}
                  <span className="light roboto">bpm</span>
                </p>
              </div>
              <div className="right-float">
                <img src={heart} alt="" />
              </div>
            </div>
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
                <p className="roboto">
                  <span>The Energy</span> - B12 for energy
                </p>
              </div>
              <div className="row">
                <img src={icon2} alt="" />
                <p className="roboto">
                  <span>The Zen One </span> - Ashwagandha for stress
                </p>
              </div>
              <div className="row">
                <img src={icon3} alt="" />
                <p className="roboto">
                  <span>Sunshine Ready</span> - Vitamin D for immunity
                </p>
              </div>
              <div className="row">
                <img src={icon4} alt="" />
                <p className="roboto">
                  <span>Botanical Beauty</span> - Biotin for Hair, Skin & Nails
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="bottom-uni">
          <img src={bottomImg5} className="bottom-img desk-uni" alt="" />
          <img src={bottomImg1} className="bottom-img desk-uni" alt="" />
          <img src={bottomImg2} className="bottom-img desk-uni" alt="" />
          <img src={bottomImg3} className="bottom-img desk-uni" alt="" />
          <img src={bottomImg4} className="bottom-img desk-uni" alt="" />
          <img src={bottomImg11} className="bottom-img desk-uni" alt="" />
          <img src={bottomImg6} className="bottom-img desk-uni" alt="" />
          <img src={bottomImg9} className="bottom-img desk-uni" alt="" />
          <img src={bottomImg7} className="bottom-img desk-uni" alt="" />
          <img src={bottomImg8} className="bottom-img desk-uni" alt="" />
          <img src={bottomImg10} className="bottom-img desk-uni" alt="" />
          <img src={bottomImg12} className="bottom-img desk-uni" alt="" />
          <img src={bottomMobile1} className="bottom-img mobile-uni" alt="" />
          <img src={bottomMobile2} className="bottom-img mobile-uni" alt="" />
          <img src={bottomMobile3} className="bottom-img mobile-uni" alt="" />
          <img src={bottomMobile4} className="bottom-img mobile-uni" alt="" />
          <img src={bottomMobile5} className="bottom-img mobile-uni" alt="" />
          <img src={bottomMobile6} className="bottom-img mobile-uni" alt="" />
          <img src={bottomMobile7} className="bottom-img mobile-uni" alt="" />
          <img src={bottomMobile8} className="bottom-img mobile-uni" alt="" />
          <img src={bottomMobile9} className="bottom-img mobile-uni" alt="" />
          <img src={bottomMobile10} className="bottom-img mobile-uni" alt="" />
          <img src={bottomMobile11} className="bottom-img mobile-uni" alt="" />
          <img src={bottomMobile12} className="bottom-img mobile-uni" alt="" />
        </div>
      </div>
    </div>
  );
}

export default Unique;
