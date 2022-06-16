import React from "react";
import "./Personal.css";
import p1 from "../../../Assets/personal1.png";
import p2 from "../../../Assets/personal2.png";
import PersonalBox from "../../../Components/PerosnalBox/PersonalBox";
function Perosnal() {
  return (
    <div className="personal-cont">
      <div className="personal">
        <div className="left-pern">
          <h1 className="roboto title">
            <span className="gradient-text">Personalised</span> <br /> Precision
            Wellness
          </h1>
          <p className="roboto sub-title">
            We experience a truly outdated healthcare system today. Curate's
            mission is to bring preventative healthcare to the comfort of your
            home. Customers no longer need to visit multiple doctors for results
            or evaluations.
          </p>
        </div>
        <div className="right-pern">
          <PersonalBox
            img={p1}
            text={[
              "Complement your natural gut flora",
              "Includes fibres to increase your natural gut bacteria",
            ]}
            head="Probiotic"
          />
          <PersonalBox
            img={p2}
            text={[
              "Formulated to support both men and women providing 100% of your recommended daily intake.",
              "Supports overall health and wellbeing.",
            ]}
            head="Multivitamin"
          />
        </div>
      </div>
    </div>
  );
}

export default Perosnal;
