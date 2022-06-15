import React from "react";
import "./BrandsBar.css";
import brand1 from "../../Assets/brands/brand (1).png";
import brand2 from "../../Assets/brands/brand (2).png";
import brand3 from "../../Assets/brands/brand (3).png";
import brand4 from "../../Assets/brands/brand (4).png";
import brand5 from "../../Assets/brands/brand (5).png";
import brand6 from "../../Assets/brands/brand (6).png";
import brand7 from "../../Assets/brands/brand (7).png";
import brand8 from "../../Assets/brands/brand (8).png";
function BrandsBar() {
  return (
    <div className="brands-bar">
      <img src={brand1} alt="" className="brands" />
      <img src={brand2} alt="" className="brands" />
      <img src={brand3} alt="" className="brands" />
      <img src={brand4} alt="" className="brands" />
      <img src={brand5} alt="" className="brands" />
      <img src={brand6} alt="" className="brands" />
      <img src={brand7} alt="" className="brands" />
      <img src={brand8} alt="" className="brands" />
    </div>
  );
}

export default BrandsBar;
