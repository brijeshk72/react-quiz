import React from "react";

const QuizTimer = ({ quizTimer, length, counter }) => {
  return (
    <div className="mcq">
      <h4>MCQ Quiz</h4>
      <h4>
        Time Left: <span> {quizTimer} </span>/ {length} M
      </h4>
      <span>
        ({counter} of {length})
      </span>
    </div>
  );
};

export default QuizTimer;
