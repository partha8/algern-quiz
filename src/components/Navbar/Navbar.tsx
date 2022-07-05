import React from "react";
import styles from "./navbar.module.css";
import { FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <div>
      <nav className="navbar">
        <Link to="/">
          <h2 className={styles.logo}>Algern Quiz</h2>
        </Link>
        <Link to="/profile">
          <FaUser className={styles.icon} />
        </Link>
      </nav>
    </div>
  );
};
