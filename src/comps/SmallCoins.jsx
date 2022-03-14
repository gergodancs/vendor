import React from "react";

const SmallCoins = ({ five, ten, twenty }) => {
  return (
    <div className="small__coins">
      <div className="back__container">
        <span>{five}</span>
        <span>{ten}</span>
        <span>{twenty}</span>
      </div>
      <div className="coins">
        <img src={require("../pics/coin-5.png")} alt="small" />
        <img src={require("../pics/coin-10.png")} alt="small" />
        <img src={require("../pics/coin-20.png")} alt="small" />
      </div>
    </div>
  );
};

export default SmallCoins;
