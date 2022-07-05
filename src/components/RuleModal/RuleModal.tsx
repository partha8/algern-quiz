import { useDocTitle } from "../../hooks/useDocTitle";
import { Link } from "react-router-dom";
import styles from "./rule-modal.module.css";
import { useAppSelector } from "../../redux/hook";

type Props = {
  showRules: boolean;
  setShowRules: React.Dispatch<React.SetStateAction<boolean>>;
};

export const RuleModal = ({ showRules, setShowRules }: Props) => {
  const { quiz } = useAppSelector((store) => store?.quiz);

  return (
    <main className="main">
      <section className={styles.rulesContainer}>
        <h3 className="bold-text">Rules</h3>
        <article className={styles.rules}>
          <h3 className="margin-0">{quiz?.quizName}</h3>
          <p className={styles.desc}>{quiz?.description}</p>
          <ul className={styles.listRules}>
            <li>Each question carries one mark.</li>
            <li>There won't be any negative markings.</li>
            <li>To win, you need to score more than 70%.</li>
          </ul>
          <button
            onClick={() => setShowRules((prev: boolean) => !prev)}
            className="btn"
          >
            Start Quiz
          </button>
        </article>
      </section>
    </main>
  );
};
