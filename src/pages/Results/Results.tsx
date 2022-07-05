import { useAppSelector } from "../../redux/hook";
import styles from "./results.module.css";

export const Results = () => {
  const { result, quiz, score } = useAppSelector((store) => store?.quiz);

  return (
    <>
      <main className="main">
        <h3 className="text-center">
          Score is: {score}/{result?.length}.{" "}
          {score / result.length >= 0.7 ? "You passed!" : "You failed."}
        </h3>
        {quiz?.questions.map((q, index) => {
          const { question, options } = q;
          return (
            <div className={styles.questionContainer}>
              <h2>{question}</h2>
              <div className={styles.options}>
                {options.map((option) => {
                  const { text } = option;
                  return (
                    <div
                      className={`${
                        result[index].text === text && result[index].isRight
                          ? `${styles.green}`
                          : result[index].text === text &&
                            !result[index].isRight
                          ? `${styles.red}`
                          : null
                      } ${styles.option} `}
                    >
                      {text}
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </main>
    </>
  );
};
