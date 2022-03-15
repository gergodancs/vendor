import { useState } from "react";
import Coins from "./comps/Coins";
import Machine from "./comps/Machine";
import SettingsWrapper from "./context/SettingsWrapper";
// import { useContext } from "react";
// import { settingsContext } from "./context/settingsContext";

function App() {
  const [spend, setSpend] = useState(0);

  const [five, setFive] = useState(0);
  const [ten, setTen] = useState(0);
  const [twenty, setTwenty] = useState(0);
  const [hidden, setHidden] = useState("hidden");

  const backCounter = (bAmount) => {
    console.log(bAmount, "bamount");
    let res20 = Math.floor(bAmount / 20); //ennyi 20as

    let base10 = bAmount - res20 * 20; //a husszasokat kivonom az egeszbol
    let resTen = Math.floor(base10 / 10); // ennyi 10es
    let base5 = base10 + resTen * 10;
    let resBase5 = bAmount - base5;
    let resFive = resBase5 / 5;
    setTwenty(twenty + res20);
    setTen(ten + resTen);
    setFive(five + resFive);
    setHidden("back__container");

    setTimeout(() => {
      setTwenty(0);
      setTen(0);
      setFive(0);
      setHidden("hidden");
    }, 6000);
    return;
  };

  return (
    <div className="App">
      <SettingsWrapper>
        <Machine spend={spend} setSpend={setSpend} backCounter={backCounter} />
        <Coins
          setSpend={setSpend}
          spend={spend}
          five={five}
          ten={ten}
          twenty={twenty}
          hidden={hidden}
        />
      </SettingsWrapper>
    </div>
  );
}

export default App;
