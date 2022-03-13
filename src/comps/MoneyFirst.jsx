import React from "react";

const MoneyFirst = ({ setShowMadal }) => {
  return (
    <div className="money__first">
      <h4>1. First insert your coins</h4>
      <h4>2. Choose your fav product</h4>
      <h4>3. Enjoy :)</h4>

      <button onClick={() => setShowMadal(false)}>OK</button>
    </div>
  );
};

export default MoneyFirst;
