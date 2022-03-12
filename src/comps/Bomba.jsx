import React from "react";
import "./products.css";

const Bomba = ({ animated }) => {
  // const animated = "animated";

  return (
    <div className="bomba">
      <img
        className={animated}
        src={require("../pics/product-bomba.png")}
        alt="csoki"
      />
      <img
        className="masodik"
        src={require("../pics/product-bomba.png")}
        alt="csoki"
      />
    </div>
  );
};

export default Bomba;
