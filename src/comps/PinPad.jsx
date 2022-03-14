import React from "react";

const PinPad = ({ setSpend, arr, digitArr, setResultNum }) => {
  return (
    <div className="pinpad__container">
      <img src={require("../pics/pinpad-button-normal.png")} alt="pin" />
      <span onClick={() => digitArr(1)}>1</span>

      <img src={require("../pics/pinpad-button-normal.png")} alt="pin" />
      <span onClick={() => digitArr(2)}>2</span>

      <img src={require("../pics/pinpad-button-normal.png")} alt="pin" />
      <span onClick={() => digitArr(3)}>3</span>

      <img src={require("../pics/pinpad-button-normal.png")} alt="pin" />
      <span onClick={() => digitArr(4)}>4</span>

      <img src={require("../pics/pinpad-button-normal.png")} alt="pin" />
      <span onClick={() => digitArr(5)}>5</span>

      <img src={require("../pics/pinpad-button-normal.png")} alt="pin" />
      <span onClick={() => digitArr(6)}>6</span>

      <img src={require("../pics/pinpad-button-normal.png")} alt="pin" />
      <span onClick={() => digitArr(7)}>7</span>

      <img src={require("../pics/pinpad-button-normal.png")} alt="pin" />
      <span onClick={() => digitArr(8)}>8</span>

      <img src={require("../pics/pinpad-button-normal.png")} alt="pin" />
      <span onClick={() => digitArr(9)}>9</span>

      <img
        onClick={() => setSpend(0)}
        src={require("../pics/pinpad-button-normal.png")}
        alt="pin"
      />
      <span onClick={() => setSpend(0)}>C</span>

      <img src={require("../pics/pinpad-button-normal.png")} alt="pin" />
      <span onClick={() => digitArr(0)}>0</span>

      <img
        onClick={() => setResultNum(arr)}
        src={require("../pics/pinpad-button-normal.png")}
        alt="pin"
      />
      <span onClick={() => setResultNum(arr)}>Ok</span>
    </div>
  );
};

export default PinPad;
