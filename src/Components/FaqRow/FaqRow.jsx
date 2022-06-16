import React from "react";
import "./FaqRow.css";
function FaqRow({ ques, answer }) {
  return (
    <div className="faq-row">
      <h2 className="roboto">{ques}</h2>
      <p className="yellow-p roboto">Ans</p>
      <p className="answer roboto">{answer}</p>
    </div>
  );
}

export default FaqRow;
