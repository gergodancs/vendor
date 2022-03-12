import React from "react";
import "./products.css";

const Snickers = (props) => {
  return (
    <div className="snickers">
      <img
        className="elso"
        src={require("../pics/product-snickers.png")}
        alt="csoki"
      />
      <img
        className={props.animatedsnick}
        src={require("../pics/product-snickers.png")}
        alt="csoki"
      />
      <img
        className="harmadik"
        src={require("../pics/product-snickers.png")}
        alt="csoki"
      />
    </div>
  );
};

export default Snickers;
