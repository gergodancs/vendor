import React from "react";
import Bomba from "./Bomba";
import Snickers from "./Snickers";
import Mars from "./Mars";
import Display from "./Display";
import PinPad from "./PinPad";
import { useState } from "react";
//import { useEffect, useCallback } from "react";

const Machine = ({ spend, setSpend }) => {
  const [animated, setAnimated] = useState("noAnimatedBomba");
  const [animatedMars, setAnimatedMars] = useState("noAnimatedMars");
  const [animatedSnick, setAnimatedSnick] = useState("noAnimatedSnick");
  //const [digit, setDigit] = useState(0);
  const arr = [];

  const digitArr = (num) => arr.push(num);

  const setResultNum = (arr) => {
    let res = 0;
    let arr2str = arr.map((num) => num.toString());
    let resultStr = arr2str.join("");
    res = Number(resultStr);
    console.log("res:", res);
    if (res === 0) animationStart(res);
    if (res === 1) animationStart(res);
    if (res === 2) animationStartSnick(res);
    if (res === 4) animationStartMars(res);
  };

  const animationStart = (res) => {
    if (res === 0) alert("MONEY FIRTS");
    if (res === 1 && spend > 300) {
      res = 0;
      setAnimated("animatedBomba");
      setSpend(spend - 330);
      setTimeout(() => setAnimated("noAnimatedBomba"), 3000);
      setTimeout(() => {
        setSpend(0);
      }, 1500);
    }
  };
  const animationStartSnick = (res) => {
    if (res === 0) alert("MONEY FIRTS");
    if (res === 2 && spend > 190) {
      res = 0;
      setAnimatedSnick("animatedSnick");
      setSpend(spend - 330);
      setTimeout(() => setAnimatedSnick("noAnimatedSnick"), 3000);
      setTimeout(() => {
        setSpend(0);
      }, 1500);
    }
  };
  const animationStartMars = (res) => {
    if (res === 0) alert("MONEY FIRTS");
    if (res === 4 && spend > 500) {
      res = 0;
      setAnimatedMars("animatedMars");
      setSpend(spend - 330);
      setTimeout(() => setAnimatedMars("noAnimatedMars"), 3000);
      setTimeout(() => {
        setSpend(0);
      }, 1500);
    }
  };

  return (
    <div className="machine__container">
      <Display spend={spend} />
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
