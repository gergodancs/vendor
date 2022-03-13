import React from "react";

const PinPad = ({ setSpend, arr, digitArr, setResultNum }) => {
  return (
    <div className="pinpad__container">
      <div>
        <img src={require("../pics/pinpad-button-normal.png")} alt="pin" />
        <span onClick={() => digitArr(1)}>1</span>
      </div>
      <div>
        <img src={require("../pics/pinpad-button-normal.png")} alt="pin" />
        <span onClick={() => digitArr(2)}>2</span>
      </div>
      <div>
        <img src={require("../pics/pinpad-button-normal.png")} alt="pin" />
        <span onClick={() => digitArr(3)}>3</span>
      </div>
      <div>
        <img src={require("../pics/pinpad-button-normal.png")} alt="pin" />
        <span onClick={() => digitArr(4)}>4</span>
      </div>
      <div>
        <img src={require("../pics/pinpad-button-normal.png")} alt="pin" />
        <span onClick={() => digitArr(5)}>5</span>
      </div>
      <div>
        <img src={require("../pics/pinpad-button-normal.png")} alt="pin" />
        <span onClick={() => digitArr(6)}>6</span>
      </div>
      <div>
        <img src={require("../pics/pinpad-button-normal.png")} alt="pin" />
        <span onClick={() => digitArr(7)}>7</span>
      </div>
      <div>
        <img src={require("../pics/pinpad-button-normal.png")} alt="pin" />
        <span onClick={() => digitArr(8)}>8</span>
      </div>
      <div>
        <img src={require("../pics/pinpad-button-normal.png")} alt="pin" />
        <span onClick={() => digitArr(9)}>9</span>
      </div>
      <div>
        <img
          onClick={() => setSpend(0)}
          src={require("../pics/pinpad-button-normal.png")}
          alt="pin"
        />
        <span onClick={() => setSpend(0)}>C</span>
      </div>
      <div>
        <img src={require("../pics/pinpad-button-normal.png")} alt="pin" />
        <span onClick={() => digitArr(0)}>0</span>
      </div>
      <div>
        <img
          onClick={() => setResultNum(arr)}
          src={require("../pics/pinpad-button-normal.png")}
          alt="pin"
        />
        <span onClick={() => setResultNum(arr)}>OK</span>
      </div>
    </div>
  );
};

export default PinPad;
