import React from "react";

const OtherPls = ({ setOther }) => {
  return (
    <div className="other">
      <h1>Please choose an existing product.</h1>
      <button onClick={() => setOther(false)}>OK</button>
    </div>
  );
};

export default OtherPls;
