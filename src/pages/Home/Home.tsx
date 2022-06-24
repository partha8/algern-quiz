import React, { useEffect } from "react";
import styles from "./home.module.css";
import png from "../../assets/header.png";

import { useAppDispatch, useAppSelector } from "../../redux/hook";
import { getCategories } from "../../redux/reducers/quizSlice";
import { Navbar } from "../../components";
import { Link } from "react-router-dom";

export const Home = () => {
  const { categories } = useAppSelector((store) => store?.quiz);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getCategories());
  }, []);

  return (
    <div>
      <header className={`${styles.homepageHeader} relative`}>
        <Navbar />

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
            const { categoryName } = category;
            return (
              <article className={styles.category}>
                <Link to="/category">
                  <div className={styles.desc}>
                    <h3 className={styles.cardTitle}>{categoryName}</h3>
                  </div>
                </Link>
              </article>
            );
          })}
        </section>
      </main>
    </div>
  );
};
