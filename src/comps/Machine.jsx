import React from "react";
import Bomba from "./Bomba";
import Snickers from "./Snickers";
import Mars from "./Mars";
import Display from "./Display";
import PinPad from "./PinPad";
import MoneyFirst from "./MoneyFirst";
import { useState } from "react";
import NoMoney from "./NoMoney";
import BombaTwo from "./BombaTwo";
import OtherPls from "./OtherPls";

import Labels from "./Labels";
import LabelNumber from "./LabelNumber";
//import { useEffect, useCallback } from "react";

const Machine = ({ spend, setSpend, backCounter }) => {
  const [animated, setAnimated] = useState("noAnimatedBomba");
  const [animated2, setAnimated2] = useState("noAnimatedBomba2");
  //const [back, setBack] = useState(0);
  const [other, setOther] = useState(false);
  const [animatedMars, setAnimatedMars] = useState("noAnimatedMars");
  const [animatedSnick, setAnimatedSnick] = useState("noAnimatedSnick");
  const [isShowMadal, setShowMadal] = useState(false);
  const [isEnoughMoney, setMoney] = useState(false);
  const [moneyLeft, setMoneyLeft] = useState(0);
  //const [digit, setDigit] = useState(0);
  const [arr, setArr] = useState([]);

  let digitArr = (num) => arr.push(num);

  const setResultNum = (arr) => {
    let res = 0;
    let arr2str = arr.map((num) => num.toString());
    setArr([]);
    let resultStr = arr2str.join("");
    res = Number(resultStr);
    if (res === 0) setShowMadal(true);

    if (res === 6) {
      animation(res, setAnimated, "animatedBomba", 315, "noAnimatedBomba");
      return;
    }
    if (res === 22) {
      animation(res, setAnimated2, "animatedBomba2", 315, "noAnimatedBomba2");
      return;
    }

    if (res === 9) {
      animation(res, setAnimatedSnick, "animatedSnick", 220, "noAnimatedSnick");
      return;
    }
    if (res === 3) {
      animation(res, setAnimatedMars, "animatedMars", 190, "noAnimatedMars");
      return;
    } else {
      return setOther(true);
    }
  };

  const animation = (res, setter, animstr, price, noanimstr) => {
    if (spend < price) {
      setMoneyLeft(moneyLeft + (price - spend));
      setMoney(true);
    }
    if (spend >= price) {
      let maradek = 0;
      maradek = spend - price;
      setter(animstr);
      setMoneyLeft(0);
      setTimeout(() => setter(noanimstr), 5000);
      setTimeout(() => {
        setSpend(0);
      }, 1500);
      backCounter(maradek);
    }
  };
  const cancel = () => {
    setArr([]);
    setSpend(0);
    setMoneyLeft(0);
  };

  return (
    <div className="machine__container">
      {isShowMadal ? <MoneyFirst setShowMadal={setShowMadal} /> : null}
      {isEnoughMoney ? (
        <NoMoney moneyLeft={moneyLeft} setMoney={setMoney} />
      ) : null}
      {other ? <OtherPls setOther={setOther} /> : null}
      <div className="labels">
        <Labels />
        <LabelNumber />
      </div>
      <Display spend={spend} />

      <img
        onClick={() => cancel()}
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
      <BombaTwo animated2={animated2} />
      <Bomba animated={animated} />
      <Mars animatedmars={animatedMars} />
    </div>
  );
};

export default Machine;
