import React from "react";
import PageFooter from "../../container/PageFooter";
import LoginForm from "../../components/LoginForm";
import styles from "./style.module.css";
import loginHeroImage from "../../assets/login-hero-image.svg";
import { Link } from "react-router-dom";

// TODO: Add Sign up and Reset password links

function Login() {
  return (
    <>
      <section className={styles.loginContainer}>
        <div className={styles.leftSideContainer}>
          <div className={styles.loginTitle}>Log In</div>
          <LoginForm />
          <div className={styles.loginReroute}>
            <Link to="/" className={styles.link}>
              Reset password
            </Link>
            <Link to="/" className={styles.link}>
              Request a professional account
            </Link>
          </div>
        </div>
        <div className={styles.rightSideContainer}>
          <img src={loginHeroImage} alt="Girl helping old lady hero" />
        </div>
      </section>
      <div style={{ marginTop: 30 }}>
        <PageFooter />
      </div>
    </>
  );
}

export default Login;
