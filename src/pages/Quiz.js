import React, { useState, useEffect } from "react";
import Button from "../components/Button";
import QuizContent from "../components/QuizContent";
import QuizFooter from "../components/QuizFooter";
import QuizHeader from "../components/QuizHeader";
import ScoreCount from "../components/ScoreCount";
import data from "../json/data";
import { Link, useNavigate } from "react-router-dom";
import { secondsToMin } from "../utils";
import QuizTimer from "../components/QuizTimer";
import Progress from "../components/Progress";

let counter = 1;

const Quiz = () => {
  const [questionAnswered, setQuestionAnswered] = useState(null);
  const [activeRadio, setActiveRadio] = useState(null);
  const [showResult, setShowResult] = useState(false);
  const navigate = useNavigate();
  const [buttonDisabled, setButtonDisabled] = useState(false)

  const [questionCounter, setQuestionCounter] = useState(0);

  var c = 0;
  async function endAndStartTimer() {
    window.timer = await setInterval(() => {
      c += 1;
      setQuestionCounter(c);
      if (c > 29) {
        nextQuestion();
        clearTimeout(window.timer);
      }
    }, 1000);
  }

  const [currectAnswer, setCurrectAnswer] = useState(0);
  const checkAnswer = (a, b) => {
    setActiveRadio(b);
    if (a === b) {
      setCurrectAnswer(currectAnswer + 1);
    }
  };

  const finalSubmit = () => {
    setShowResult(true);
    setButtonDisabled(true)
  };

  function barProgress() {
    return parseInt(questionCounter * 3.33);
  }

  const quizTimer = setInterval(() => {}, 1000 * data.length);

  function nextQuestion() {
    c = 0;
    clearTimeout(window.timer);
    setActiveRadio(null);
    if (counter < data.length) {
      setQuestionCounter(0);
      endAndStartTimer();
      counter += 1;

      setQuestionAnswered({
        question: data[counter - 1].question,
        answers: [
          data[counter - 1].answers[0],
          data[counter - 1].answers[1],
          data[counter - 1].answers[2],
          data[counter - 1].answers[3],
        ],
        correct: data[counter - 1].correct,
        counter: counter,
      });
    }
  }



  useEffect(() => {
    endAndStartTimer();
    setQuestionAnswered({
      question: data[counter - 1].question,
      answers: [
        data[counter - 1].answers[0],
        data[counter - 1].answers[1],
        data[counter - 1].answers[2],
        data[counter - 1].answers[3],
      ],
      correct: data[counter - 1].correct,
      counter: counter,
    });
  
    return(()=>{
      setShowResult(false)
      setQuestionCounter(0)
      setButtonDisabled(false)
      counter =1
      secondsToMin()
      
    })
  }, []);

  return (
    <>
      <QuizHeader>
        <QuizTimer
          quizTimer={secondsToMin(quizTimer)}
          length={data.length}
          counter={counter}
        />
      </QuizHeader>

      {!showResult ? (
        <QuizContent>
          <div className="question-title">
            <div style={{ display: "flex" }}>
              <h3>Q.</h3>
              <h5>{questionAnswered?.question}</h5>
            </div>
            <h3>{questionCounter}</h3>
          </div>
          {questionAnswered?.answers.map((answer, index) => (
            <div key={index} className="answer">
              <label className="radio">
                <input
                  onChange={() =>
                    checkAnswer(questionAnswered.correct, index + 1)
                  }
                  checked={activeRadio && activeRadio === index + 1}
                  type="radio"
                  name="answer"
                  value={index + 1}
                />
                <span>{answer}</span>
              </label>
            </div>
          ))}
        </QuizContent>
      ) : (
        <ScoreCount score={currectAnswer} />
      )}

      <QuizFooter>
        <Link to="/">
        <Button label={`Back To Home`} />
        </Link>
       
        {!showResult && <Progress barProgress={barProgress()} />}
        {counter !== data.length ? (
          <Button onClick={() => nextQuestion("next")} label={`Next`} />
        ) : (
          <Button onClick={finalSubmit} disabled={buttonDisabled} label={`Submit`}  />
        )}
      </QuizFooter>
    </>
  );
};

export default Quiz;
