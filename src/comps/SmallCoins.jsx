import React from "react";

const SmallCoins = () => {
  return (
    <div className="small__coins">
      <img src={require("../pics/coin-5.png")} alt="small" />
      <img src={require("../pics/coin-10.png")} alt="small" />
      <img src={require("../pics/coin-20.png")} alt="small" />
    </div>
  );
};

export default SmallCoins;
