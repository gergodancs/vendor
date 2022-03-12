import React from "react";

const BigCoins = ({ setSpend, spend }) => {
  return (
    <div className="big__coins">
      <img
        onClick={() => setSpend(spend + 50)}
        src={require("../pics/coin-50.png")}
        alt="50"
      />
      <img
        onClick={() => setSpend(spend + 100)}
        src={require("../pics/coin-100.png")}
        alt="100"
      />
      <img
        onClick={() => setSpend(spend + 200)}
        src={require("../pics/coin-200.png")}
        alt="200"
      />
    </div>
  );
};

export default BigCoins;
