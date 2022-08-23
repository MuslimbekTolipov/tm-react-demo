import React from "react";
import "./Says.css";
import Odam from "../../assest/odam.png";
import Qiz from "../../assest/qiz.png"
function Says() {
  return (
    <div className="says">
      <div className="yozuv">
        <h2>What Our Customers Says</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu, tempor,
          accumsan sit amet nunc cursus. Nec tristique at in erat lectus mas sa
          diam. Lectus elit, nulla elementum fringilla at.
        </p>
        <div className="yashil">
          <img src={Odam} alt="" />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu, tempor,
            accumsan sit amet nunc cursus. Nec tristique at in erat lectus mas
            sa diam. Lectus elit, nulla elementum fringilla at.
          </p>
        </div>
      </div>
      <div className="surat">
        <img src={Qiz} alt="" />
      </div>
    </div>
  );
}

export default Says;
