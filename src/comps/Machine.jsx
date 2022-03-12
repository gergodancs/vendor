import React from "react";
import Bomba from "./Bomba";
import Snickers from "./Snickers";
import Mars from "./Mars";
import Display from "./Display";
import PinPad from "./PinPad";
import { useState } from "react";
import { useEffect } from "react";

const Machine = ({ spend, setSpend }) => {
  const [animated, setAnimated] = useState("noAnimatedBomba");
  const [animatedMars, setAnimatedMars] = useState("noAnimatedMars");
  const [animatedSnick, setAnimatedSnick] = useState("noAnimatedSnick");
  const [digit, setDigit] = useState("");
  const arr = [];
  const animationStart = () => {
    if (digit === 1 && spend > 300) {
      console.log("digit:", digit);
      console.log("spend:", spend);
      setAnimated("animatedBomba");
      setSpend(spend - 330);
      setTimeout(() => setAnimated("noAnimatedBomba"), 3000);
      setTimeout(() => {
        setSpend(0);
        setDigit(0);
      }, 1500);
    }
  };

  useEffect(() => {
    animationStart();

    setTimeout(() => {
      // setAnimated("noAnimatedBomba");
      setAnimatedMars("noAnimatedMars");
      setAnimatedSnick("noAnimatedSnick");
    }, 3000);
  }, [spend, digit, arr]);

  return (
    <div className="machine__container">
      <Display spend={spend} digit={digit} />
      <img
        className="machine"
        src={require("../pics/vendor-machine.png")}
        alt="machine"
      />
      <PinPad
        setDigit={setDigit}
        setSpend={setSpend}
        setAnimated={setAnimated}
        setAnimatedMars={setAnimatedMars}
        setAnimatedSnick={setAnimatedSnick}
        arr={arr}
        animationStart={animationStart}
      />
      <Snickers animatedsnick={animatedSnick} />
      <Bomba animated={animated} />
      <Mars animatedmars={animatedMars} />
    </div>
  );
};

export default Machine;
