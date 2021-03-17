import React, { useState } from "react";

const TeamScoreCard = (props) => {
  const [score, setScore] = useState(0);

  function scoreAdjustment(adjustScore) {
    setScore(score + adjustScore);
  }
  const divideScore = () => {
    setScore(score / 2);
  };

  const resetScore = () => {
    setScore(score - score);
  };
  return (
    <div>
      <div>
        <p className={`counter counter--${props.team}`}>
          Team {props.team}: {score}
        </p>
      </div>
      <div className="button">
        <button onClick={() => scoreAdjustment(+1)}>+ 1</button>
        <button onClick={() => scoreAdjustment(-1)}>- 1</button>
        <button onClick={() => scoreAdjustment(+5)}>+ 5</button>
        <button onClick={() => scoreAdjustment(-5)}>- 5</button>
        <button onClick={divideScore}>half score</button>
        <button onClick={resetScore}>reset</button>
      </div>
    </div>
  );
};

export default TeamScoreCard;
