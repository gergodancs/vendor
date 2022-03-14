import React from "react";
import "./products.css";

const BombaTwo = ({ animated2 }) => {
  // const animated = "animated";

  return (
    <div className="bomba2">
      <img
        className="masodik2"
        src={require("../pics/product-bomba.png")}
        alt="csoki"
      />
      <img
        className={animated2}
        src={require("../pics/product-bomba.png")}
        alt="csoki"
      />
    </div>
  );
};

export default BombaTwo;
