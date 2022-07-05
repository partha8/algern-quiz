import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useAppDispatch } from "../../redux/hook";
import { signup } from "../../redux/reducers/authSlice";
import styles from "./auth.module.css";

export const Signup = () => {

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setemail] = useState("");
  const [password, setPassword] = useState("");
  const [matchPassword, setMatchPassword] = useState("");
  const [validMatch, setValidMatch] = useState(false);
  const [errMsg, setErrMsg] = useState("");

  const dispatch = useAppDispatch();

  useEffect(() => {
    setValidMatch(password === matchPassword);
  }, [matchPassword]);

  useEffect(() => {
    setErrMsg("");
  }, [password, matchPassword, email]);

  const submitHandler = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    dispatch(signup({ email, password, firstName, lastName }));
  };

  return (
    <section className={styles.formBox}>
      <h2>Sign Up!</h2>{" "}
      <p
        className={errMsg ? styles.errmsg : styles.offscreen}
        aria-live="assertive"
      >
        {errMsg}
      </p>
      <form onSubmit={submitHandler}>
        {/* firstName */}
        <div className={styles.inputBox}>
          <input
            type="text"
            id="firstName"
            onChange={(e) => setFirstName(e.target.value)}
            autoComplete="off"
            value={firstName}
            required
          />
          <label htmlFor="firstName" className="flex-center">
            First Name
          </label>
        </div>

        <div className={styles.inputBox}>
          <input
            type="text"
            id="lastName"
            onChange={(e) => setLastName(e.target.value)}
            autoComplete="off"
            value={lastName}
            required
          />
          <label htmlFor="lastName" className="flex-center">
            Last Name
          </label>
        </div>

        {/* email */}
        <div className={styles.inputBox}>
          <input
            type="text"
            id="email"
            onChange={(e) => setemail(e.target.value)}
            autoComplete="off"
            value={email}
            required
          />
          <label htmlFor="email" className="flex-center">
            Email
          </label>
        </div>

        {/* Password */}
        <div className={styles.inputBox}>
          <input
            type="password"
            id="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            required
          />
          <label htmlFor="password" className="flex-center">
            Password
          </label>
        </div>

        {/* confirm password */}
        <p
          id="confirmnote"
          className={!validMatch ? styles.instructions : styles.offscreen}
        >
          Must match the first password input field.
        </p>
        <div className={styles.inputBox}>
          <input
            type="password"
            id="confirm_password"
            onChange={(e) => setMatchPassword(e.target.value)}
            value={matchPassword}
            required
          />
          <label htmlFor="confirm_password" className="flex-center">
            Confirm Password
          </label>
        </div>

        {/* submit button */}
        <button className="btn ">Login</button>
        <div className={styles.actionLinks}>
          <Link to="/login">Already have an account? Login!</Link>
        </div>
      </form>
    </section>
  );
};
