import PatternDividerDesktop from "./images/pattern-divider-desktop.svg";
import DiceButton from "./images/icon-dice.svg";
function App() {
  return (
    <div className="App font-sans bg-gray w-full h-screen flex items-center justify-center">
      <div className="card flex flex-col justify-center space-y-10 items-center bg-card-gray w-1/2 h-1/2 rounded-2xl px-5 pt-8 pb-10">
        <h4 className="advice-num text-card-num text-xl tracking-widest">
          ADVICE #177
        </h4>
        <p className="advice-content text-card-content text-3xl text-center">
          "It is easy to sit up and take notice, what's difficult is getting up
          and taking action."
        </p>
        <img src={PatternDividerDesktop} alt="divider"></img>
        <div className="button-div p-6 bg-card-num rounded-full cursor-pointer hover:shadow-3xl">
          <img src={DiceButton} alt="dice button"></img>
        </div>
      </div>
    </div>
  );
}

export default App;
