import React, { useState } from "react";
import "./FaqRow.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

function FaqRow({ ques, answer }) {
  const [open, setOpen] = useState(false);
  return (
    <div className={`faq-row ${open ? "opacity-1" : ""}`}>
      <div className="left-row" onClick={() => setOpen((prev) => !prev)}>
        <FontAwesomeIcon
          icon={faChevronRight}
          className={`${open ? "rotate" : ""}`}
        />
        <h2 className="roboto">{ques}</h2>
      </div>
      <p className={`yellow-p roboto ${open ? "opacity-1" : ""}`}>Ans</p>
      <p className={`answer roboto ${open ? "opacity-1" : ""} `}>{answer}</p>
    </div>
  );
}

export default FaqRow;
