import React from "react";

const Display = ({ spend, digit }) => {
  return (
    <div className="display__container">
      <img src={require("../pics/display-bg.png")} alt="display" />
      <span className="display">
        {spend},{digit}
      </span>
    </div>
  );
};

export default Display;
