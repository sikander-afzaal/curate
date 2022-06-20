import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";

import "./Header.css";
import logo from "../../Assets/logo.png";
import btn from "../../Assets/apple-btn.svg";

function Header() {
  const [header, setHeader] = useState(false);

  return (
    <div className="header">
      <img src={logo} alt="" className="logo" />
      <div className={`right-header ${header ? "header-open" : ""}`}>
        <a
          onClick={() => setHeader(false)}
          href="#works"
          className="nav-link lato"
        >
          How it works
        </a>
        <a
          onClick={() => setHeader(false)}
          href="#experts"
          className="nav-link lato"
        >
          Health Analysis
        </a>
        <a
          onClick={() => setHeader(false)}
          href="#experts"
          className="nav-link lato"
        >
          Our Experts
        </a>
        <a
          onClick={() => setHeader(false)}
          href="#experts"
          className="nav-link lato"
        >
          Contact
        </a>
        <img className="download-btn" src={btn} alt="" />
      </div>
      <FontAwesomeIcon
        onClick={() =>
          setHeader((prev) => {
            return !prev;
          })
        }
        icon={header ? faXmark : faBars}
        className="mobile"
      />
      <div
        onClick={() => setHeader(false)}
        className={`overlay ${header ? "open-overlay" : ""}`}
      ></div>
    </div>
  );
}

export default Header;
