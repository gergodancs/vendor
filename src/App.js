import { useState } from "react";
import Coins from "./comps/Coins";
import Machine from "./comps/Machine";

function App() {
  const [spend, setSpend] = useState(0);

  return (
    <div className="App">
      <Machine spend={spend} setSpend={setSpend} />
      <Coins setSpend={setSpend} spend={spend} />
    </div>
  );
}

export default App;
