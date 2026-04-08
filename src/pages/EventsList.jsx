import React, { useState, useMemo } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Filter, Calendar, MapPin, Tag, Search, Heart } from 'lucide-react';
import { MOCK_EVENTS } from '../data/events';
import styles from './EventsList.module.css';

const getCategoryTitle = (pathname) => {
  switch (pathname) {
    case '/konserler': return 'Konserler';
    case '/operalar': return 'Opera & Bale';
    case '/tiyatrolar': return 'Tiyatrolar';
    case '/sinemalar': return 'Sinemalar';
    case '/muzeler': return 'Müzeler & Sergiler';
    case '/soylesiler': return 'Söyleşiler & Paneller';
    default: return 'Tüm Etkinlikler';
  }
};

const FILTERS = ['Tümü', 'Ücretsiz', 'Bu Hafta Sonu', 'Açık Hava'];

const EventsList = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [activeSegment, setActiveSegment] = useState('current'); // 'current' or 'future'
  const [selectedChip, setSelectedChip] = useState('Tümü');
  const categoryTitle = getCategoryTitle(location.pathname);

  // Advanced Combined Filtering
  const filteredEvents = useMemo(() => {
    return MOCK_EVENTS.filter(event => {
      // 1. Category logic mapping
      const categoryMap = {
        '/konserler': ['Konser'],
        '/operalar': ['Opera', 'Bale'],
        '/tiyatrolar': ['Tiyatro'],
        '/sinemalar': ['Sinema'],
        '/muzeler': ['Müze'],
        '/soylesiler': ['Söyleşi']
      };

      const allowedTypes = categoryMap[location.pathname];
      const matchesCategory = !allowedTypes || allowedTypes.includes(event.type);

      if (!matchesCategory) return false;

      // 2. Segment Match (Current vs Future)
      const matchesSegment = activeSegment === 'current' ? !event.isFuture : event.isFuture;
      if (!matchesSegment) return false;

      // 3. Chip Filter Match
      if (selectedChip === 'Ücretsiz') return event.isFree;
      if (selectedChip === 'Bu Hafta Sonu') return event.isWeekend;
      if (selectedChip === 'Açık Hava') return event.isOutdoor;

      return true; // Tümü
    });
  }, [location.pathname, activeSegment, selectedChip]);

  const [favorites, setFavorites] = useState(() => JSON.parse(localStorage.getItem('favorites') || '[]'));

  const toggleFavorite = (id, e) => {
    e.stopPropagation();
    const newFavorites = favorites.includes(id)
      ? favorites.filter(fid => fid !== id)
      : [...favorites, id];

    setFavorites(newFavorites);
    localStorage.setItem('favorites', JSON.stringify(newFavorites));
    window.dispatchEvent(new Event('storage'));
  };

  return (
    <div className="page-container">
      <div className={styles.header}>
        <div>
          <h1 className={styles.pageTitle}>{categoryTitle}</h1>
          <p className={styles.pageSubtitle}>Öğrenci indirimli {filteredEvents.length} etkinliği keşfet.</p>
        </div>

        <div className={styles.headerActions}>
          <div className={styles.searchBar}>
            <Search size={16} />
            <input type="text" placeholder="Etkinlik ara..." />
          </div>
          <button className={`btn-outline ${styles.filterBtn}`}>
            <Filter size={18} />
            <span>Gelişmiş</span>
          </button>
        </div>
      </div>

      <div className={styles.topTabs}>
        <button
          className={`${styles.topTab} ${activeSegment === 'current' ? styles.activeTopTab : ''}`}
          onClick={() => {
            setActiveSegment('current');
            setSelectedChip('Tümü');
          }}
        >
          Yaklaşan Etkinlikler
        </button>
        <button
          className={`${styles.topTab} ${activeSegment === 'future' ? styles.activeTopTab : ''}`}
          onClick={() => {
            setActiveSegment('future');
            setSelectedChip('Tümü');
          }}
        >
          Gelecekte Olacak Etkinlikler
        </button>
      </div>

      <div className={styles.filtersBar}>
        <div className={styles.chips}>
          {FILTERS.map((f) => (
            <div
              key={f}
              className={`${styles.chip} ${selectedChip === f ? styles.activeChip : ''}`}
              onClick={() => setSelectedChip(f)}
            >
              {f}
            </div>
          ))}
        </div>
        <div className={styles.sortSelector}>
          <span>Sırala:</span>
          <select className={styles.select}>
            <option>Önerilen</option>
            <option>En Düşük Fiyat</option>
            <option>En Yakın Tarih</option>
          </select>
        </div>
      </div>

      <div className={styles.grid}>
        {filteredEvents.length > 0 ? (
          filteredEvents.map(event => (
            <div
              key={event.id}
              className={`glass-panel ${styles.listCard}`}
              onClick={() => navigate(`/etkinlik/${event.id}`)}
              style={{ cursor: 'pointer' }}
            >
              <div className={styles.cardVisual}>
                <img src={event.image} alt={event.title} className={styles.posterImage} />
                <button
                  className={`${styles.favoriteBtn} ${favorites.includes(event.id) ? styles.isFavorite : ''}`}
                  onClick={(e) => toggleFavorite(event.id, e)}
                >
                  <Heart size={20} fill={favorites.includes(event.id) ? 'var(--accent-primary)' : 'none'} />
                </button>
                {event.isFree && <div className={styles.freeBadge}>ÜCRETSİZ</div>}
                {event.isOutdoor && <div className={styles.outdoorBadge}>Açık Hava</div>}
                {event.promoTag && <div className={styles.promoBadge}>{event.promoTag}</div>}
              </div>
              <div className={styles.cardBody}>
                <div className={styles.cardHeader}>
                  <span className={styles.badge}>{event.type}</span>
                  {event.isFuture && <span className={styles.badgeWarning}>Ön Rezervasyon</span>}
                </div>
                <h3 className={styles.cardTitle}>{event.title}</h3>

                <div className={styles.cardDetails}>
                  <div className={styles.detailRow}>
                    <MapPin size={16} />
                    <span>{event.location}</span>
                  </div>
                  <div className={styles.detailRow}>
                    <Calendar size={16} />
                    <span>{event.date}</span>
                  </div>
                </div>

                <div className={styles.cardFooter}>
                  <div className={styles.pricing}>
                    {event.isFree ? (
                      <span className={styles.studentPrice} style={{ color: 'var(--success)' }}>
                        Ücretsiz Kayıt
                      </span>
                    ) : (
                      <>
                        <span className={styles.oldPrice}>{event.originalPrice}</span>
                        <div className={styles.studentPrice}>
                          <Tag size={16} color="var(--success)" />
                          <span>{event.studentPrice}</span>
                        </div>
                      </>
                    )}
                  </div>
                  <button className="btn-outline" style={{ fontSize: '0.85rem' }}>İncele</button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className={styles.emptyState}>
            <Tag size={48} style={{ opacity: 0.2, marginBottom: '1rem' }} />
            <p>Seçilen kriterlerde etkinlik bulunamadı.</p>
            <button className="btn-outline" onClick={() => setSelectedChip('Tümü')}>Filtreleri Temizle</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default EventsList;
