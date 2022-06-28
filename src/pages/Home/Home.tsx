import React, { useEffect } from "react";
import styles from "./home.module.css";
import png from "../../assets/header.png";

import { useAppDispatch, useAppSelector } from "../../redux/hook";
import { getCategories, reset } from "../../redux/reducers/quizSlice";
import { Navbar } from "../../components";
import { Link } from "react-router-dom";

export const Home = () => {
  const { categories } = useAppSelector((store) => store?.quiz);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getCategories());
    dispatch(reset());
  }, []);

  return (
    <div>
      <header className="header relative">
        <section className={styles.hero}>
          <div className={styles.intro}>
            <h1 className="bold-text">Do you like trivia nights?</h1>
            <p className="lead">
              We've got all the quizzes you love to binge! Come on in and hunker
              down for the long haul.
            </p>
          </div>
          <div>
            <img className={styles.heroImg} src={png} alt="girl and boy" />
          </div>
        </section>
      </header>

      <main className={styles.categories}>
        <h3 className="text-center bold-text underline">Categories</h3>
        <section className={styles.categoriesContainer}>
          {categories.map((category) => {
            const { categoryName, id } = category;
            return (
              <Link
                key={id}
                className={styles.category}
                to={`/category/${categoryName}`}
              >
                <article>
                  <div className={styles.desc}>
                    <h3 className={styles.cardTitle}>{categoryName}</h3>
                  </div>
                </article>
              </Link>
            );
          })}
        </section>
      </main>
    </div>
  );
};
