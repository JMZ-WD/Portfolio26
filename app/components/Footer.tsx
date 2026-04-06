"use client";

import React from "react";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      {/* Overlay */}
      <div className={styles.footerOverlay}></div>

      <div className={styles.footerContent}>
        {/* Main copyright */}
        <div className={styles.footerCopyright}>
          &copy; 2026 JMZ-WD Designs. All rights reserved.
        </div>

        {/* Made with */}
        <div className={styles.footerMadeWith}>
          Made using React & Next.js 
        </div>
      </div>
    </footer>
  );
}