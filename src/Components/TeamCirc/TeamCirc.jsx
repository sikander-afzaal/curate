import React from "react";
import "./TeamCirc.css";
function TeamCirc({ img, name, title }) {
  return (
    <div className="team-circ">
      <img src={img} alt="" />
      <h1 className="roboto">{name}</h1>
      <p className="roboto">{title}</p>
    </div>
  );
}

export default TeamCirc;
