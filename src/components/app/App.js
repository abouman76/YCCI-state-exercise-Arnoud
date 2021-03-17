import React, { useState } from "react";
// import logo from "./logo.svg";

import "../app/App.css";
import TeamScoreCard from "../teamScore/TeamScoreCard";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>ScoreBoard</h1>
        <TeamScoreCard team="blue" />

        <TeamScoreCard team="red" />

        <TeamScoreCard team="pink" />
      </header>
    </div>
  );
}

export default App;
