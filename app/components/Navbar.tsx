"use client";

import { useState } from "react";
import styles from "./Navbar.module.css";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const menuItems = ["Home", "Projects", "Contact"];

  return (
    <nav className={styles.navbar}>
      {/* Logo */}
      <div className={styles.logo}>JMZ-WD</div>

      {/* Desktop Menu */}
      <ul className={styles.menu}>
        {menuItems.map((item) => (
          <li key={item} className={styles.menuItem}>
            {item}
          </li>
        ))}
      </ul>

      {/* Hamburger Icon */}
      <button
        className={styles.hamburger}
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle menu"
      >
        <span
          className={styles.bar}
          style={{
            transform: isOpen ? "rotate(45deg) translateY(0.5rem)" : "none",
          }}
        />
        <span
          className={styles.bar}
          style={{
            opacity: isOpen ? 0 : 1,
          }}
        />
        <span
          className={styles.bar}
          style={{
            transform: isOpen ? "rotate(-45deg) translateY(-0.5rem)" : "none",
          }}
        />
      </button>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className={styles.mobileMenu}>
          {menuItems.map((item) => (
            <div
              key={item}
              className={styles.mobileMenuItem}
              onClick={() => setIsOpen(false)}
            >
              {item}
            </div>
          ))}
        </div>
      )}
    </nav>
  );
}