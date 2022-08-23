import React from "react";
import "./Gul.css";
import Strelka from "../../assest/strel.png";
import { gullar } from "../../datas/gul.js";
import Rasm from "../Rasm/Rasm";
function Gul() {
  return (
    <div className="gul">
      <div className="text">
        <h2>We have lots of plants collection for you and your family</h2>
        <div className="picon">
          <p>See all collection</p>
          <img src={Strelka} alt="" />
        </div>
      </div>
      <div className="map">
        {gullar.map((item, index) => (
          <Rasm key={index} item={item} />
        ))}
      </div>
    </div>
  );
}

export default Gul;
