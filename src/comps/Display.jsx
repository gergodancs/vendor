import React from "react";

const Display = ({ spend }) => {
  return (
    <div className="display__container">
      <img src={require("../pics/display-bg.png")} alt="display" />
      <span className="display">{spend}</span>
    </div>
  );
};

export default Display;
