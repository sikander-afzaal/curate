import React from "react";
import "./Team.css";
import TeamCirc from "../../../Components/TeamCirc/TeamCirc";
import team1 from "../../../Assets/team/team (1).png";
import team2 from "../../../Assets/team/team (2).png";
import team3 from "../../../Assets/team/team (3).png";
import team4 from "../../../Assets/team/team (4).png";
import team5 from "../../../Assets/team/team (5).png";
import team6 from "../../../Assets/team/team (6).png";
import team7 from "../../../Assets/team/team (7).png";
import team8 from "../../../Assets/team/team (8).png";
import team9 from "../../../Assets/team/team (9).png";
import under from "../../../Assets/under2.svg";
function Team() {
  return (
    <div id="experts" className="team-cont">
      <div className="team">
        <div className="text-team">
          <div className="title-div">
            <h1 className="roboto title">
              The Experts <br /> behind Curate
            </h1>
            <img src={under} alt="" className="under" />
          </div>

          <p className="roboto sub-title">
            Our team of market leading doctors, scientists, nutritionists and
            healthcare professionals with vast experience and a deep passion on
            what it takes to lead a healthy lifestyle.
          </p>
          <p className="roboto sub-title">
            We share a common vision in improving the longevity and vitality of
            our customers. Helping people embrace a happier and healthier
            journey step by step, the world becomes a better place.
          </p>
        </div>
        <div className="team-grid">
          <TeamCirc
            img={team7}
            name="Dr James Morehen"
            title="Performance Nutritionist"
          />
          <TeamCirc img={team1} name="Lucy Web" title="Nutritionist" />
          <TeamCirc
            img={team8}
            name="Dr Brian McGirr"
            title="Dr Now & The Beaconsfield Clinic"
          />
          <TeamCirc
            img={team2}
            name="Dr Warren Bradley"
            title="Performance Nutritionist"
          />
          <TeamCirc img={team6} name="Dr Nura Alwan" title="Medical Advisor" />
          <TeamCirc img={team3} name="Kevin Heath" title="Advisor" />
          <TeamCirc img={team4} name="John Sayers" title="Advisor" />
          <TeamCirc img={team9} name="Gary Robinson" title="Medical Advisor" />
          <TeamCirc img={team5} name="Jonathan Talbutt" title="Advisor" />
        </div>
      </div>
    </div>
  );
}

export default Team;
