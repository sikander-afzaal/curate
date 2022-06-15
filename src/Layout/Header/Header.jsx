import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRightLong,
  faBars,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";

import "./Header.css";
import logo from "../../Assets/logo.png";

function Header() {
  const [header, setHeader] = useState(false);

  return (
    <div className="header">
      <img src={logo} alt="" className="logo" />
      <div className={`right-header ${header ? "header-open" : ""}`}>
        <a href="/" className="nav-link lato">
          How it works
        </a>
        <a href="/" className="nav-link lato">
          Our Experts
        </a>
        <button className="download-btn lato">
          Download App <FontAwesomeIcon icon={faArrowRightLong} />
        </button>
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
