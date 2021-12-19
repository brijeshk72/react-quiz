import React from "react";

const ScoreCount = (props) => {
  const { score } = props;
  console.log("score->", score);
  return <div className="quiz-content">Your Score : {score} out of 10 </div>;
};

export default ScoreCount;
