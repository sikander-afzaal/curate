import React from "react";
import "./Footer.css";
function Footer() {
  return (
    <div className="footer">
      <div className="top-footer">
        <h2 className="lato">Curate</h2>
        <div className="right-foot">
          <a href="#works" className="foot-link lato">
            How it works
          </a>
          <a href="#experts" className="foot-link lato">
            Our Experts
          </a>
          <button className="foot-download lato">Download</button>
        </div>
      </div>
      <div className="bottom-footer">
        <p className="lato">© THECURATEGROUP LIMITED. All Rights Reserved</p>
        <p className="lato">
          Address: 109 Station Road the Annexe BEACONSFIELD United Kingdom
        </p>
      </div>
    </div>
  );
}

export default Footer;
