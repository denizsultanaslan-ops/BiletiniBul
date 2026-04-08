import React from 'react';
import { Ticket } from 'lucide-react';
import styles from './SplashScreen.module.css';

const SplashScreen = () => {
  return (
    <div className={styles.overlay}>
      <div className={styles.container}>
        <div className={styles.logoWrapper}>
          <div className={styles.iconBox}>
            <Ticket size={80} color="var(--accent-primary)" strokeWidth={2.5} />
          </div>
          <h1 className={styles.brandName}>
            Biletini<span className={styles.accentText}>Bul</span>
          </h1>
        </div>
        <div className={styles.glow}></div>
      </div>
    </div>
  );
};

export default SplashScreen;
