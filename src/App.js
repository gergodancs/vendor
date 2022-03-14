import { useState } from "react";
import Coins from "./comps/Coins";
import Machine from "./comps/Machine";
import SettingsWrapper from "./context/SettingsWrapper";
// import { useContext } from "react";
// import { settingsContext } from "./context/settingsContext";

function App() {
  const [spend, setSpend] = useState(0);
  const [back, setBack] = useState(0);
  const [five, setFive] = useState(0);
  const [ten, setTen] = useState(0);
  const [twenty, setTwenty] = useState(0);

  const backFunc = (backM) => {
    console.log(backM);
    setBack(back + backM);
    console.log(back);
    if (back === 0) return;
    if (back > 0) {
      for (let i = 0; i <= back; i + 20) {
        setTwenty(twenty + 1);
        setBack(back - 20);
      }
      for (let i = 0; i <= back; i + 10) {
        setTen(ten + 1);
        setBack(back - 10);
      }
      for (let i = 0; i <= five; i + 5) {
        setFive(five + 1);
        setBack(back - 5);
      }
      return;
    }
  };

  return (
    <div className="App">
      <SettingsWrapper>
        <Machine
          spend={spend}
          setSpend={setSpend}
          back={back}
          setBack={setBack}
          backFunc={backFunc}
        />
        <Coins
          setSpend={setSpend}
          spend={spend}
          five={five}
          ten={ten}
          twenty={twenty}
        />
      </SettingsWrapper>
    </div>
  );
}

export default App;
