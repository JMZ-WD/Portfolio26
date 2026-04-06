"use client";

import React, { useState } from "react";
import styles from "./Contact.module.css";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Message sent!");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className={styles.contactSection}>
      <h2 className={styles.contactHeader}>CONTACT ME</h2>
      <p className={styles.contactSub}>
        Reach out via email or social media links below.
      </p>

      <form onSubmit={handleSubmit} className={styles.contactForm}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={form.name}
          onChange={handleChange}
          className={styles.contactInput}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={form.email}
          onChange={handleChange}
          className={styles.contactInput}
          required
        />
        <textarea
          name="message"
          placeholder="Your Message"
          value={form.message}
          onChange={handleChange}
          className={styles.contactTextarea}
          rows={5}
          required
        />
        <button type="submit" className={styles.contactButton}>
          Send Message
        </button>
      </form>

      <div className={styles.socialLinks}>
        <a
          href="mailto:jmz-webdesigns@outlook.com"
          className={styles.socialLink}
          target="_blank"
          rel="noopener noreferrer"
        >
          Email
        </a>
        <a
          href="https://github.com/JMZ-WD"
          className={styles.socialLink}
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
        <a
          href="https://www.linkedin.com/in/james-kelly-530b5b202/"
          className={styles.socialLink}
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>
      </div>
    </section>
  );
}