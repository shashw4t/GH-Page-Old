import React from 'react';
import styles from './styles.module.css';

const MyComponent = () => (
  <div className={styles.container}>
    <header className={styles.header}>
      <h1 className={styles.headerTitle}>My Website</h1>
      <div className={styles.contactInfo}>
        <p className={styles.contactInfoText}>Email: <a className={styles.contactInfoLink} href="mailto:shashwat.singh98@gmail.com">shashwat.singh98@gmail.com</a></p>
        <p className={styles.contactInfoText}>Phone: <a className={styles.contactInfoLink} href="tel:732-210-7862">732-210-7862</a></p>
        <p className={styles.contactInfoText}>LinkedIn: <a className={styles.contactInfoLink} href="https://linkedin.com/in/shashwat" target="_blank">linkedin.com/in/shashwat</a></p>
      </div>
    </header>
    <main className={styles.gridContainer}>
      <section id="summary" className={styles.section}>
        <h2 className={styles.sectionTitle}>Summary</h2>
        <p>With a Master’s degree in Data Science from NJIT and a solid Computer Science foundation from Rutgers University, I leverage extensive experience in Java, SQL, and full-stack development. Currently, at HTD Talent, I enhance client projects by delivering tailored software solutions, including a versatile reservation system. I am adept at translating complex technology into practical applications for diverse clients.</p>
      </section>
      {/* Add other sections similarly */}
    </main>
    <footer className={styles.footer}>
      <p className={styles.footerText}>© 2023 Shashwat Singh</p>
    </footer>
  </div>
);

export default MyComponent;