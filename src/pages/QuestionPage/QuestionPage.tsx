import React, { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/hook";
import styles from "./question-page.module.css";
import { Options } from "../../types/quiz.types";
import {
  reset,
  updateResult,
  updateScore,
} from "../../redux/reducers/quizSlice";
import { useNavigate } from "react-router-dom";

export const QuestionPage = () => {
  const { quiz } = useAppSelector((store) => store?.quiz);
  const dispatch = useAppDispatch();
  const [questionNumber, setQuestionNumber] = useState(0);

  useEffect(() => {
    dispatch(reset());
  }, []);

  const navigate = useNavigate();

  const clickHandler = (option: Options) => {
    dispatch(updateResult(option));
    if (option.isRight) {
      dispatch(updateScore());
    }
    const nextQuestion = questionNumber + 1;
    if (nextQuestion < quiz!.questions.length) {
      setQuestionNumber(nextQuestion);
    } else {
      navigate("/results");
    }
  };

  return (
    <>
      <main className="main">
        <div className={styles.questionContainer}>
          <h2>{quiz?.questions[questionNumber].question}</h2>
          <div className={styles.options}>
            {quiz?.questions[questionNumber].options.map((option) => {
              const { text } = option;
              return (
                <div
                  onClick={() => clickHandler(option)}
                  className={styles.option}
                >
                  {text}
                </div>
              );
            })}
          </div>
        </div>
      </main>
    </>
  );
};
