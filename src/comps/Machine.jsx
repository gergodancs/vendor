import React from "react";
import Bomba from "./Bomba";
import Snickers from "./Snickers";
import Mars from "./Mars";
import Display from "./Display";
import PinPad from "./PinPad";
import MoneyFirst from "./MoneyFirst";
import { useState } from "react";
//import { useEffect, useCallback } from "react";

const Machine = ({ spend, setSpend }) => {
  const [animated, setAnimated] = useState("noAnimatedBomba");
  const [animatedMars, setAnimatedMars] = useState("noAnimatedMars");
  const [animatedSnick, setAnimatedSnick] = useState("noAnimatedSnick");
  const [isShowMadal, setShowMadal] = useState(false);
  //const [digit, setDigit] = useState(0);
  const arr = [];

  const digitArr = (num) => arr.push(num);

  const setResultNum = (arr) => {
    let res = 0;
    let arr2str = arr.map((num) => num.toString());
    let resultStr = arr2str.join("");
    res = Number(resultStr);
    console.log("res:", res);
    if (res === 0) animation(res);
    if (res === 1)
      animation(res, setAnimated, "animatedBomba", 330, "noAnimatedBomba");

    if (res === 2)
      animation(res, setAnimatedSnick, "animatedSnick", 190, "noAnimatedSnick");
    if (res === 4)
      animation(res, setAnimatedMars, "animatedMars", 250, "noAnimatedMars");
  };

  const animation = (res, setter, animstr, price, noanimstr) => {
    if (res === 0) setShowMadal(true);
    if (spend >= price) {
      res = 0;
      setter(animstr);
      setSpend(spend - price);
      setTimeout(() => setter(noanimstr), 3000);
      setTimeout(() => {
        setSpend(0);
      }, 1500);
    }
  };

  return (
    <div className="machine__container">
      {isShowMadal ? <MoneyFirst setShowMadal={setShowMadal} /> : null}
      <Display spend={spend} />

      <img
        className="cancel-btn"
        src={require("../pics/cancel-button.png")}
        alt="cancel"
      />
      <img
        className="machine"
        src={require("../pics/vendor-machine.png")}
        alt="machine"
      />
      <PinPad
        setSpend={setSpend}
        arr={arr}
        digitArr={digitArr}
        setResultNum={setResultNum}
      />
      <Snickers animatedsnick={animatedSnick} />
      <Bomba animated={animated} />
      <Mars animatedmars={animatedMars} />
    </div>
  );
};

export default Machine;
