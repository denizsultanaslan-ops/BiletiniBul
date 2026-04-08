import React from 'react';
import { NavLink } from 'react-router-dom';
import { 
  Home, 
  Mic2, 
  Drama, 
  Ticket, 
  Film, 
  Map, 
  Heart,
  LayoutDashboard,
  MonitorPlay,
  Landmark,
  Users
} from 'lucide-react';
import styles from './Sidebar.module.css';

const Sidebar = () => {
  const menuItems = [
    { path: '/', name: 'Keşfet', icon: Home },
    { path: '/dashboard', name: 'Panelim', icon: LayoutDashboard },
    { path: '/konserler', name: 'Konserler', icon: Mic2 },
    { path: '/operalar', name: 'Operalar', icon: Drama },
    { path: '/tiyatrolar', name: 'Tiyatrolar', icon: Drama },
    { path: '/sinemalar', name: 'Sinemalar', icon: Film },
    { path: '/muzeler', name: 'Müzeler', icon: Landmark },
    { path: '/soylesiler', name: 'Söyleşiler', icon: Users },
  ];

  const bottomItems = [
    { path: '/biletlerim', name: 'Biletlerim', icon: Ticket },
    { path: '/favorilerim', name: 'Favorilerim', icon: Heart },
  ];

  return (
    <aside className={`glass-panel ${styles.sidebar}`}>
      <div className={styles.logo}>
        <div className={styles.logoIcon}>
          <Ticket size={24} color="var(--accent-primary)" />
        </div>
        <span className="text-gradient">BiletiniBul</span>
      </div>

      <nav className={styles.nav}>
        <div className={styles.navSection}>
          <span className={styles.sectionTitle}>Ana Menü</span>
          {menuItems.map((item) => (
            <NavLink 
              key={item.path} 
              to={item.path}
              className={({ isActive }) => 
                `${styles.navItem} ${isActive ? styles.active : ''}`
              }
            >
              <item.icon size={20} className={styles.icon} />
              <span>{item.name}</span>
            </NavLink>
          ))}
        </div>

        <div className={styles.navSection}>
          <span className={styles.sectionTitle}>Bana Özel</span>
          {bottomItems.map((item) => (
            <NavLink 
              key={item.path} 
              to={item.path}
              className={({ isActive }) => 
                `${styles.navItem} ${isActive ? styles.active : ''}`
              }
            >
              <item.icon size={20} className={styles.icon} />
              <span>{item.name}</span>
            </NavLink>
          ))}
        </div>
      </nav>
      
      <div className={styles.userCard}>
        <div className={styles.avatar}></div>
        <div className={styles.userInfo}>
          <p className={styles.userName}>Öğrenci</p>
          <p className={styles.userPoints}>420 Puan</p>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
