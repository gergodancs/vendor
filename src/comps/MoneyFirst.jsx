import React from "react";

const MoneyFirst = ({ setShowMadal }) => {
  return (
    <div className="money__first">
      <h4>Please first puts some coin here</h4>
      <h4>Then choose your product here</h4>
      <h4>Enjoy!</h4>
      <button onClick={() => setShowMadal(false)}>OK</button>
    </div>
  );
};

export default MoneyFirst;
