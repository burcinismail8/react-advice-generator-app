import PatternDividerDesktop from "./images/pattern-divider-desktop.svg";
import DiceButton from "./images/icon-dice.svg";
import { useState } from "react";
function App() {
  const [adviceNum, setAdviceNum] = useState(128);
  const [adviceText, setAdviceText] = useState(
    "It's unlucky to be superstitious."
  );

  const handleClick = async () => {
    const response = await fetch("https://api.adviceslip.com/advice");
    const json = await response.json();
    setAdviceNum(json.slip.id);
    setAdviceText(json.slip.advice);
  };
  return (
    <div className="App font-sans bg-gray w-full h-screen flex items-center justify-center">
      <div className="card flex flex-col justify-center space-y-10 items-center bg-card-gray w-1/2 h-1/2 rounded-2xl px-5 pt-8 pb-10">
        <h4 className="advice-num text-card-num text-xl tracking-widest">
          ADVICE #{adviceNum}
        </h4>
        <p className="advice-content text-card-content text-3xl text-center">
          "{adviceText}"
        </p>
        <img src={PatternDividerDesktop} alt="divider"></img>
        <div
          onClick={handleClick}
          className="button-div p-6 bg-card-num rounded-full cursor-pointer hover:shadow-3xl"
        >
          <img src={DiceButton} alt="dice button"></img>
        </div>
      </div>
    </div>
  );
}

export default App;
