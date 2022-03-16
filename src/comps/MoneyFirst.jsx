import React from "react";

const MoneyFirst = ({ setShowMadal }) => {
  return (
    <div className="money__first">
      <h4> Choose a product</h4>

      <button onClick={() => setShowMadal(false)}>OK</button>
    </div>
  );
};

export default MoneyFirst;
