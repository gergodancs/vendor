import { useState } from "react";
import Coins from "./comps/Coins";
import Machine from "./comps/Machine";

function App() {
  const [spend, setSpend] = useState(0);

  const [five, setFive] = useState(0);
  const [ten, setTen] = useState(0);
  const [twenty, setTwenty] = useState(0);
  const [hidden, setHidden] = useState("hidden");

  const backCounter = (bAmount) => {
    console.log(bAmount, "bamount");
    let res20 = Math.floor(bAmount / 20);
    let base10 = bAmount - res20 * 20;
    let resTen = Math.floor(base10 / 10);
    let base5 = base10 - resTen * 10;
    let resFive = base5 / 5;
    setTen(ten + resTen);
    setTwenty(twenty + res20);
    setFive(five + resFive);
    endFunc();

    return;
  };

  const endFunc = () => {
    setHidden("back__container");

    setTimeout(() => {
      setTwenty(0);
      setTen(0);
      setFive(0);
      setHidden("hidden");
    }, 6000);
  };

  return (
    <div className="App">
      <Machine spend={spend} setSpend={setSpend} backCounter={backCounter} />
      <Coins
        setSpend={setSpend}
        spend={spend}
        five={five}
        ten={ten}
        twenty={twenty}
        hidden={hidden}
      />
    </div>
  );
}

export default App;
