import { useState } from "react";
// import logo from "./logo.svg";
import "./App.css";

function App() {
  const [score, setScore] = useState(0);

  function scoreAdjustment(adjustScore) {
    setScore(score + adjustScore);
  }

  // function plusOne() {
  //   setScore(score + 1);
  // }
  // const minusOne = () => {
  //   setScore(score - 1);
  // };

  // const plusFive = () => {
  //   setScore(score + 5);
  // };

  // const minusFive = () => {
  //   setScore(score - 5);
  // };

  const divideScore = () => {
    setScore(score / 2);
  };

  const resetScore = () => {
    setScore(score - score);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>ScoreBoard</h1>
        <div>
          <div>
            <p class="counter counter--blue">Team blue: {score}</p>
          </div>
          <div class="buttons">
            <button onClick={() => scoreAdjustment(+1)}>+ 1</button>
            <button onClick={() => scoreAdjustment(-1)}>- 1</button>
            <button onClick={() => scoreAdjustment(+5)}>+ 5</button>
            <button onClick={() => scoreAdjustment(-5)}>- 5</button>
            <button onClick={divideScore}>half score</button>
            <button onClick={resetScore}>reset</button>
          </div>
        </div>
        <div>
          <div>
            <p class="counter counter--red">Team red: 0</p>
          </div>
          <div class="buttons">
            <button>+ 1</button>
            <button>- 1</button>
            <button>+ 5</button>
            <button>- 5</button>
            <button>half score</button>
            <button>reset</button>
          </div>
        </div>
        <div>
          <div>
            <p class="counter counter--pink">Team pink: 0</p>
          </div>
          <div class="buttons">
            <button>+ 1</button>
            <button>- 1</button>
            <button>+ 5</button>
            <button>- 5</button>
            <button>half score</button>
            <button>reset</button>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
