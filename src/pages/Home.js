import React from "react";
import Button from "../components/Button";
import QuizBasicInfo from "../components/QuizBasicInfo";
import QuizContent from "../components/QuizContent";
import QuizFooter from "../components/QuizFooter";
import QuizHeader from "../components/QuizHeader";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <QuizHeader>Online Quiz</QuizHeader>
      <QuizContent>
        <QuizBasicInfo />
      </QuizContent>
      <QuizFooter>
        <Link to="/quiz">
          <Button label="Start Quiz" />
        </Link>
      </QuizFooter>
    </>
  );
};

export default Home;
