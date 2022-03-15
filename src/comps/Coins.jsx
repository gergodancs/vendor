import React from "react";
import BigCoins from "./BigCoins";
import SmallCoins from "./SmallCoins";
import "./coin.css";

const Coins = ({ setSpend, spend, five, ten, twenty, hidden }) => {
  return (
    <div className="coin__container">
      <BigCoins setSpend={setSpend} spend={spend} />
      <SmallCoins five={five} ten={ten} twenty={twenty} hidden={hidden} />
    </div>
  );
};

export default Coins;
