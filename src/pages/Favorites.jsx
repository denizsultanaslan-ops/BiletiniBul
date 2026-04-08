import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Heart, Calendar, MapPin, Tag, ShoppingCart, Trash2 } from 'lucide-react';
import { MOCK_EVENTS } from '../data/events';
import styles from './Favorites.module.css';

const Favorites = () => {
  const navigate = useNavigate();
  const [favoriteEvents, setFavoriteEvents] = useState([]);

  useEffect(() => {
    const loadFavorites = () => {
      const storedFavorites = JSON.parse(localStorage.getItem('favorites') || '[]');
      const filtered = MOCK_EVENTS.filter(event => storedFavorites.includes(event.id));
      setFavoriteEvents(filtered);
    };

    loadFavorites();
    // Listen for changes (in case we favorited elsewhere)
    window.addEventListener('storage', loadFavorites);
    return () => window.removeEventListener('storage', loadFavorites);
  }, []);

  const removeFavorite = (id, e) => {
    e.stopPropagation();
    const storedFavorites = JSON.parse(localStorage.getItem('favorites') || '[]');
    const newFavorites = storedFavorites.filter(fid => fid !== id);
    localStorage.setItem('favorites', JSON.stringify(newFavorites));
    setFavoriteEvents(favoriteEvents.filter(event => event.id !== id));
    // Trigger storage event for other components
    window.dispatchEvent(new Event('storage'));
  };

  return (
    <div className="page-container">
      <div className={styles.header}>
        <h1 className={styles.pageTitle}>Favorilerim</h1>
        <p className={styles.pageSubtitle}>Henüz biletini almadığın ama beğendiğin tüm etkinlikler.</p>
      </div>

      {favoriteEvents.length > 0 ? (
        <div className={styles.grid}>
          {favoriteEvents.map((event) => (
            <div 
              key={event.id} 
              className={`glass-panel ${styles.favoriteCard}`}
              onClick={() => navigate(`/etkinlik/${event.id}`)}
              style={{ cursor: 'pointer' }}
            >
              <div className={styles.cardImageContainer}>
                <img src={event.image} alt={event.title} className={styles.posterImage} />
                <button 
                  className={styles.removeBtn}
                  onClick={(e) => removeFavorite(event.id, e)}
                  title="Favorilerden Kaldır"
                >
                  <Trash2 size={18} />
                </button>
                <span className={styles.cardType}>{event.type}</span>
              </div>
              
              <div className={styles.cardContent}>
                <h3 className={styles.cardTitle}>{event.title}</h3>
                
                <div className={styles.cardInfo}>
                  <div className={styles.infoRow}>
                    <MapPin size={14} />
                    <span>{event.location}</span>
                  </div>
                  <div className={styles.infoRow}>
                    <Calendar size={14} />
                    <span>{event.date}</span>
                  </div>
                </div>

                <div className="flex-between" style={{ marginTop: '1.5rem' }}>
                  <div className={styles.priceContainer}>
                    <Tag size={16} color="var(--success)" />
                    <span className={styles.price}>{event.studentPrice}</span>
                  </div>
                  <button 
                    className="btn-primary" 
                    style={{ padding: '0.4rem 1rem', fontSize: '0.85rem', display: 'flex', gap: '0.5rem', alignItems: 'center' }}
                  >
                    <ShoppingCart size={16} />
                    <span>Bilet Al</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className={styles.emptyState}>
          <Heart size={64} style={{ opacity: 0.1, marginBottom: '1.5rem', color: 'var(--accent-primary)' }} />
          <h3>Henüz hiçbir etkinliği favorilerine eklemedin.</h3>
          <p>Beğendiğin etkinliklerdeki kalp simgesine dokunarak sonradan kolayca bilet alabilirsin.</p>
          <button className="btn-outline" onClick={() => navigate('/konserler')} style={{ marginTop: '1rem' }}>
            Etkinlikleri Keşfet
          </button>
        </div>
      )}
    </div>
  );
};

export default Favorites;
