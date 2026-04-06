"use client";

import { useState, useEffect } from "react";
import FloatingDots from "./FloatingDots";
import styles from "./Hero.module.css";

export default function Hero() {
  const [greeting, setGreeting] = useState("Hey");
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    const now = new Date();
    const hour = now.getHours();

    if (hour < 12) setGreeting("Good Morning");
    else if (hour < 18) setGreeting("Good Afternoon");
    else setGreeting("Good Evening");

    const timeout = setTimeout(() => setFadeIn(true), 10);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <section className={styles.hero}>
      {/* Hero background */}
      <div
        className={styles.heroBackground}
        style={{ backgroundImage: "url('../images/hero.jpg')" }}
      />

      {/* Floating dots */}
      <FloatingDots />

      {/* Hero content */}
      <div className={styles.heroContent}>
        <p className={`${styles.greeting} ${fadeIn ? styles.fadeIn : styles.fadeOut}`}>
          {greeting}, I&apos;m
        </p>

        <h1 className={styles.heroName}>JAMES KELLY</h1>

        <div className={styles.heroTitle}>
          <h2 className={styles.heroTitleText}>Full Stack Developer</h2>
        </div>

        <p className={styles.heroDescription}>
          Creating sleek, responsive web experiences that combine creativity and
          functionality.
        </p>

        <div className={styles.heroButtons}>
          <a href="#projects" className={styles.primaryButton}>
            See My Work
          </a>
          <a href="#contact" className={styles.secondaryButton}>
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
}