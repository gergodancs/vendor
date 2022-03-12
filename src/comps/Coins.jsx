import React from "react";
import BigCoins from "./BigCoins";
import SmallCoins from "./SmallCoins";
import "./coin.css";

const Coins = ({ setSpend, spend }) => {
  return (
    <div className="coin__container">
      <BigCoins setSpend={setSpend} spend={spend} />
      <SmallCoins />
    </div>
  );
};

export default Coins;
