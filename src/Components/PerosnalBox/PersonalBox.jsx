import React from "react";
import "./PersonalBox.css";
function PersonalBox({ img, text, head }) {
  return (
    <div className="p-box">
      <img src={img} alt="" />
      <div className="bottom-card">
        <h1 className="robotic">{head}</h1>
        <ul>
          {text.map((elem, key) => {
            return (
              <li className="roboto" key={"p-box" + key}>
                {elem}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default PersonalBox;
