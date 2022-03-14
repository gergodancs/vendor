import React from "react";
import BigCoins from "./BigCoins";
import SmallCoins from "./SmallCoins";
import "./coin.css";

const Coins = ({ setSpend, spend, five, ten, twenty }) => {
  return (
    <div className="coin__container">
      <BigCoins setSpend={setSpend} spend={spend} />
      <SmallCoins five={five} ten={ten} twenty={twenty} />
    </div>
  );
};

export default Coins;
