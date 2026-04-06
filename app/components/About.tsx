"use client";

import styles from "./About.module.css";

export default function AboutSection() {
  return (
    <section className={styles.aboutSection}>
      <div className={styles.container}>
        {/* Centered Heading */}
        <h2 className={styles.heading}>ABOUT ME</h2>

        {/* Secondary Heading */}
        <h3 className={styles.subHeading}>Beyond the Code</h3>

        {/* Main Text */}
        <div className={styles.textContainer}>
          <p>
            Hi, I’m James — a web developer passionate about creating modern,
            responsive, and user-friendly websites. I combine creativity with
            problem-solving skills to build experiences that people enjoy using.
          </p>

          <p>
            I started with a degree in Sports Science, but web development opened
            a world of possibilities. After completing a two-year HND in Web
            Development, I’m excited to continue growing and creating projects
            that matter.
          </p>

          <p>
            Problem-solving, design, and seeing ideas come to life on screen are
            what drive me. I aim to make experiences that are both functional
            and enjoyable for everyone.
          </p>
        </div>
      </div>
    </section>
  );
}