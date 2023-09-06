import { useState } from "react";
import "./App.css";
import { OptionsList } from "./components/OptionsList";
import WheelOfFortune from "./components/WheelOfFortune";

function App() {
  const [options, setOptions] = useState<string[]>(["test1", "test2"]);

  return (
    <div className="grid grid-cols-2 gap-2">
      <div>
        <OptionsList options={options} setOptions={setOptions}></OptionsList>
      </div>
      <div className="centered-container">
        <WheelOfFortune options={options} />
      </div>
    </div>
  );
}

export default App;
