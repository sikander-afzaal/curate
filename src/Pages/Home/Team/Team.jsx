import React from "react";
import "./Team.css";
import TeamCirc from "../../../Components/TeamCirc/TeamCirc";
import team1 from "../../../Assets/team/team (1).png";
import team2 from "../../../Assets/team/team (2).png";
import team3 from "../../../Assets/team/team (3).png";
import team4 from "../../../Assets/team/team (4).png";
import team5 from "../../../Assets/team/team (5).png";
import patt from "../../../Assets/patterns/team-pattern.svg";
function Team() {
  return (
    <div id="experts" className="team-cont">
      <img src={patt} alt="" className="team-patt" />
      <div className="team">
        <div className="text-team">
          <h1 className="roboto title">
            The <span className="gradient-text">Experts</span> <br /> behind
            Curate
          </h1>
          <p className="roboto sub-title">
            Our team of market-leading Doctors, Scientists, Nutritionists &
            Healthcare Professionals - We've got a deep passion for health and
            experience in what it takes to lead a healthy lifestyle. We share a
            common vision of improving the longevity and vitality of our
            customers. As we help people embrace a healthier lifestyle, the
            world becomes a better place.
          </p>
        </div>
        <TeamCirc
          img={team5}
          name="Dr James Morehen"
          title="Performance Nutritionist"
        />
        <TeamCirc img={team3} name="Lucy Web" title="Nutritionist" />
        <TeamCirc
          img={team1}
          name="Dr Brian McGirr"
          title="Dr Now & The Beaconsfield Clinic"
        />
        <TeamCirc
          img={team4}
          name="Dr Warren Bradley"
          title="Performance Nutritionist"
        />
        <TeamCirc img={team2} name="Dr Divya Veluvolu" title="Physician" />
      </div>
    </div>
  );
}

export default Team;
