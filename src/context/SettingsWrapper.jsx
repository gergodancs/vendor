import React from "react";
import { useState } from "react";
import { settingsContext } from "./settingsContext";

const SettingsWrapper = ({ children }) => {
  const [spend, setSpend] = useState(0);

  return (
    <settingsContext.Provider value={{ spend, setSpend }}>
      {children}
    </settingsContext.Provider>
  );
};

export default SettingsWrapper;
