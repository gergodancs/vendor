import React from "react";
import "./products.css";

const Mars = (props) => {
  return (
    <div className="mars">
      <img
        className="elso"
        src={require("../pics/product-mars.png")}
        alt="csoki"
      />

      <img
        className={props.animatedmars}
        src={require("../pics/product-mars.png")}
        alt="csoki"
      />
    </div>
  );
};

export default Mars;
