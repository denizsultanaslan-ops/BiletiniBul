import React, { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import Topbar from './Topbar';
import SplashScreen from '../common/SplashScreen';
import styles from './Layout.module.css';

const Layout = () => {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 3000); // 3 seconds total (2.2s delay + 0.8s fade)
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={styles.layoutWrapper}>
      {showSplash && <SplashScreen />}
      <Sidebar />
      <div className={styles.mainContent}>
        <Topbar />
        <main className={styles.pageContent}>
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Layout;
