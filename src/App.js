import { useState } from "react";
import Coins from "./comps/Coins";
import Machine from "./comps/Machine";
import SettingsWrapper from "./context/SettingsWrapper";
// import { useContext } from "react";
// import { settingsContext } from "./context/settingsContext";

function App() {
  const [spend, setSpend] = useState(0);

  return (
    <div className="App">
      <SettingsWrapper>
        <Machine spend={spend} setSpend={setSpend} />
        <Coins setSpend={setSpend} spend={spend} />
      </SettingsWrapper>
    </div>
  );
}

export default App;
