import React from "react";

const NoMoney = ({ moneyLeft, setMoney }) => {
  return (
    <div className="money__first">
      <h4>Add {moneyLeft} more:)</h4>
      <button onClick={() => setMoney(false)}>OK</button>
    </div>
  );
};

export default NoMoney;
