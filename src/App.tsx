import { useState } from "react";
import "./App.css";
import { OptionsList } from "./components/OptionsList";
import { WheelOfFortune } from "./components/WheelOfFortune";

function App() {
  const [options, setOptions] = useState<string[]>(["test1", "test2", "test3", "test4", "test5"]);

  const onFinished = (winner: string) => {
    console.log(winner);
  };

  const segColors = ["#EE4040", "#F0CF50", "#815CD1", "#3DA5E0", "#34A24F", "#F9AA1F", "#EC3F3F", "#FF9000"];

  return (
    <div className="grid grid-cols-2 gap-2">
      <div>
        <OptionsList options={options} setOptions={setOptions}></OptionsList>
      </div>
      <div className="centered-container">
        <WheelOfFortune
          segments={options}
          segColors={segColors}
          onFinished={(winner) => onFinished(winner)}
          primaryColor="black"
          contrastColor="white"
          buttonText="Spin"
          isOnlyOnce={false}
          size={290}
          upDuration={100}
          downDuration={1000}
        />
      </div>
    </div>
  );
}

export default App;
