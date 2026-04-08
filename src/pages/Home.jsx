import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Calendar, MapPin, Tag, ArrowRight } from 'lucide-react';
import { MOCK_EVENTS } from '../data/events';
import styles from './Home.module.css';

const Home = () => {
  const navigate = useNavigate();
  const popularEvents = MOCK_EVENTS.slice(0, 4);

  const categories = [
    { name: 'Konserler', path: '/konserler' },
    { name: 'Tiyatrolar', path: '/tiyatrolar' },
    { name: 'Opera & Bale', path: '/operalar' },
    { name: 'Sinemalar', path: '/sinemalar' },
    { name: 'Müzeler', path: '/muzeler' },
    { name: 'Söyleşiler', path: '/soylesiler' }
  ];

  return (
    <div className="page-container">
      {/* Hero Section */}
      <section className={styles.heroSection}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>
            Öğrenci Bütçesiyle <br />
            <span className="text-gradient">Sanatı Keşfet</span>
          </h1>
          <p className={styles.heroSubtitle}>
            Tiyatro, konser ve sinema biletlerinde tüm sitelerdeki öğrenci komisyonlarını karşılaştır.
            BiletiniBul ile en ucuz bileti anında bul!
          </p>
          <div className={styles.heroActions}>
            <button className="btn-primary" onClick={() => navigate('/konserler')}>Hemen Keşfet</button>
            <button className="btn-outline" onClick={() => navigate('/muzeler')}>Ücretsiz Etkinlikler</button>
          </div>
        </div>
        <div className={styles.heroGraphics}>
          <div className={styles.glassCard}>
            <div className={styles.ticketMock}>
              <div className={styles.badge}>Haftanın Fırsatı</div>
              <h3>Bahar Festivali 2026</h3>
              <p>₺200'den başlayan fiyatlarla</p>
              <button className={styles.miniBtn} onClick={() => navigate('/etkinlik/101')}>İncele</button>
            </div>
          </div>
        </div>
      </section>

      {/* Haftanın Favorileri */}
      <section className={styles.section}>
        <div className={styles.sectionHeader}>
          <h2>Haftanın Öğrenci Favorileri</h2>
          <button className={styles.seeAllBtn} onClick={() => navigate('/konserler')}>
            Tümünü Gör <ArrowRight size={16} />
          </button>
        </div>
        <div className={styles.gridContainer}>
          {popularEvents.map((item) => (
            <div
              key={item.id}
              className={`glass-panel ${styles.eventCard}`}
              onClick={() => navigate(`/etkinlik/${item.id}`)}
              style={{ cursor: 'pointer' }}
            >
              <div className={styles.cardImageContainer}>
                <img src={item.image} alt={item.title} className={styles.posterImage} />
                <span className={styles.cardType}>{item.type}</span>
              </div>
              <div className={styles.cardContent}>
                <h3 className={styles.cardTitle}>{item.title}</h3>
                <div className={styles.cardInfo}>
                  <div className={styles.infoRow}>
                    <MapPin size={14} />
                    <span>{item.location}</span>
                  </div>
                  <div className={styles.infoRow}>
                    <Calendar size={14} />
                    <span>{item.date}</span>
                  </div>
                </div>
                <div className="flex-between" style={{ marginTop: '1rem' }}>
                  <div className={styles.priceContainer}>
                    <Tag size={16} color="var(--success)" />
                    <span className={styles.price}>{item.studentPrice}</span>
                  </div>
                  <button className="btn-outline" style={{ padding: '0.4rem 1rem', fontSize: '0.85rem' }}>
                    İncele
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Kategoriler */}
      <section className={styles.section}>
        <h2>Kategoriler</h2>
        <div className={styles.categoriesGrid}>
          {categories.map((cat, i) => (
            <div key={i} className={styles.categoryCard} onClick={() => navigate(cat.path)}>
              <div className={styles.categoryOverlay}></div>
              <span>{cat.name}</span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
