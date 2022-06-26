import React, { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { Footer, Navbar } from "../../components";
import { useAppDispatch, useAppSelector } from "../../redux/hook";
import { getQuizzesByCategory, getQuiz } from "../../redux/reducers/quizSlice";
import styles from "./quiz-category.module.css";

type CategoryName = {
  categoryName: string;
};

export const QuizCategory = () => {
  const { categoryName } = useParams<CategoryName>();
  const dispatch = useAppDispatch();
  const { quizzes } = useAppSelector((store) => store?.quiz);

  useEffect(() => {
    dispatch(getQuizzesByCategory(categoryName));
  }, []);

  return (
    <>
      <main className="main">
        <h3 className="text-center bold-text underline margin-top-1">
          {categoryName}
        </h3>
        <section className={styles.cardContainer}>
          {quizzes.map((quiz) => {
            const { id, quizName, image } = quiz;
            return (
              <div className={styles.quizCard} key={id}>
                <div className={styles.imageContainer}>
                  <Link to={`/quiz/${id}`}>
                    <img
                      onClick={() => dispatch(getQuiz(id))}
                      className={styles.image}
                      src={image}
                      alt={quizName}
                    />
                  </Link>
                </div>
                <div className={styles.textContainer}>
                  <p className={styles.quizName}>{quizName}</p>
                  <Link to={`/quiz/${id}`}>
                    <button
                      onClick={() => dispatch(getQuiz(id))}
                      className="btn"
                    >
                      Play Now
                    </button>
                  </Link>
                </div>
              </div>
            );
          })}
        </section>
      </main>
    </>
  );
};
