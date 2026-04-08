import React, { useState, useMemo, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { MapPin, Calendar, Clock, ShoppingCart, Info, Map as MapIcon, ChevronRight, Star, Heart } from 'lucide-react';
import { MOCK_EVENTS } from '../data/events';
import styles from './EventDetail.module.css';

const EventDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  
  const MOCK_EVENT = useMemo(() => {
    return MOCK_EVENTS.find(e => e.id === parseInt(id)) || MOCK_EVENTS[0];
  }, [id]);

  const [selectedProvider, setSelectedProvider] = useState('t1');
  const [isAddingToCart, setIsAddingToCart] = useState(false);
  const [favorites, setFavorites] = useState(() => JSON.parse(localStorage.getItem('favorites') || '[]'));

  const isFavorite = favorites.includes(MOCK_EVENT.id);

  const toggleFavorite = () => {
    const newFavorites = isFavorite
      ? favorites.filter(fid => fid !== MOCK_EVENT.id)
      : [...favorites, MOCK_EVENT.id];
    
    setFavorites(newFavorites);
    localStorage.setItem('favorites', JSON.stringify(newFavorites));
    window.dispatchEvent(new Event('storage'));
  };

  const TICKET_PROVIDERS = useMemo(() => [
    { id: 't1', name: 'Passo', originalPrice: 400, commision: 25, studentPrice: MOCK_EVENT.studentPriceNum, total: MOCK_EVENT.studentPriceNum + 25, tag: 'En Popüler' },
    { id: 't2', name: 'Biletix', originalPrice: 400, commision: 45, studentPrice: MOCK_EVENT.studentPriceNum + 50, total: MOCK_EVENT.studentPriceNum + 95, tag: '' }
  ], [MOCK_EVENT]);

  const isReservationOnly = MOCK_EVENT.isFree || MOCK_EVENT.isFuture;

  const handleAddToCart = () => {
    setIsAddingToCart(true);
    
    // Add to cart logic
    const currentCart = JSON.parse(localStorage.getItem('cart') || '[]');
    const isAlreadyInCart = currentCart.find(item => item.id === MOCK_EVENT.id);
    
    if (!isAlreadyInCart) {
      const newItem = {
        id: MOCK_EVENT.id,
        title: MOCK_EVENT.title,
        type: MOCK_EVENT.type,
        price: MOCK_EVENT.studentPriceNum,
        image: MOCK_EVENT.image,
        date: MOCK_EVENT.date,
        location: MOCK_EVENT.location,
        provider: TICKET_PROVIDERS.find(p => p.id === selectedProvider)?.name || 'Passo'
      };
      const updatedCart = [...currentCart, newItem];
      localStorage.setItem('cart', JSON.stringify(updatedCart));
      window.dispatchEvent(new Event('storage'));
    }

    setTimeout(() => {
      if (isReservationOnly) {
        navigate('/biletlerim');
      } else {
        navigate('/sepet');
      }
    }, 800);
  };

  return (
    <div className={`page-container ${styles.detailContainer}`}>
      {/* Breadcrumbs */}
      <div className={styles.breadcrumbs}>
        <span onClick={() => navigate('/')} style={{ cursor: 'pointer' }}>Keşfet</span> 
        <ChevronRight size={14} /> 
        <span onClick={() => navigate(`/${MOCK_EVENT.type.toLowerCase()}ler`)} style={{ cursor: 'pointer' }}>{MOCK_EVENT.type}</span> 
        <ChevronRight size={14} /> 
        <span className={styles.activeCrumb}>{MOCK_EVENT.title}</span>
      </div>

      <div className={styles.heroSection}>
        <div className={styles.posterWrapper}>
          <img src={MOCK_EVENT.image} alt={MOCK_EVENT.title} className={styles.poster} />
          <div className={styles.posterOverlay}></div>
          <div className={styles.badgeGroup}>
            <span className={styles.badge}>{MOCK_EVENT.type}</span>
            {MOCK_EVENT.isOutdoor && <span className={styles.outdoorBadge}>Açık Hava</span>}
          </div>
        </div>
      </div>

      <div className={styles.contentGrid}>
        {/* Left Column: Details & Map */}
        <div className={styles.infoColumn}>
          <div className="flex-between">
            <h1 className={styles.title}>{MOCK_EVENT.title}</h1>
            <div className={styles.rating}>
              <Star size={18} fill="var(--accent-primary)" color="var(--accent-primary)" />
              <span>4.9 (120+ Değerlendirme)</span>
            </div>
          </div>
          
          <div className={styles.metaRow}>
            <div className={styles.metaItem}>
              <Calendar size={18} className={styles.metaIcon} />
              <span>{MOCK_EVENT.date}</span>
            </div>
            <div className={styles.metaItem}>
              <Clock size={18} className={styles.metaIcon} />
              <span>{MOCK_EVENT.time}</span>
            </div>
            <div className={styles.metaItem}>
              <MapPin size={18} className={styles.metaIcon} />
              <span>{MOCK_EVENT.location}</span>
            </div>
          </div>

          <div className={styles.descriptionSection}>
            <h3>Etkinlik Hakkında</h3>
            <p>{MOCK_EVENT.description}</p>
          </div>

          {/* FESTIVAL TIMELINE / LINEUP */}
          {MOCK_EVENT.isFestival && MOCK_EVENT.lineup && (
            <div className={styles.timelineSection}>
              <h3>Etkinlik Programı (Timeline)</h3>
              <div className={styles.timeline}>
                {MOCK_EVENT.lineup.map((item, index) => (
                  <div key={index} className={styles.timelineItem}>
                    <div className={styles.timelineTime}>{item.time}</div>
                    <div className={styles.timelineDot}></div>
                    <div className={styles.timelineContent}>
                      <h4>{item.act}</h4>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          <div className={styles.locationSection}>
            <div className="flex-between" style={{ marginBottom: '1rem' }}>
              <h3>Konum & Harita</h3>
              <button 
                className={`btn-outline ${styles.directionBtn}`}
                onClick={() => navigate(`/yol-tarifi/${MOCK_EVENT.id}`)}
              >
                Yol Tarifi Al
              </button>
            </div>
            <div className={styles.mapIframeContainer}>
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3009.6898863615964!2d28.99120617590824!3d41.042971271343794!2m3!1f0!2f0!3f0!3m2!i1024!2i768!4f13.1!3m3!1m2!1s0x14cab70add667d4f%3A0xc3d8a9ea8bc92b8d!2zS8O8w6fDvGvDp2lmdGxpayBQYXJr!5e0!3m2!1str!2str!4v1704642598583!5m2!1str!2str" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title={`${MOCK_EVENT.title} Konumu`}
              ></iframe>
            </div>
            <div className={styles.locationDetails}>
              <h4>{MOCK_EVENT.location}</h4>
              <p>{MOCK_EVENT.address}</p>
            </div>
          </div>
        </div>

        {/* Right Column: Pricing & Cart */}
        <div className={styles.sidebarColumn}>
          <div className={`glass-panel ${styles.pricingPanel}`}>
            <h3 className={styles.panelTitle}>Bilet Karşılaştırma</h3>
            <p className={styles.panelSubtitle}>Farklı sağlayıcılardaki öğrenci indirimlerini kıyasla.</p>

            {isReservationOnly ? (
              <div className={styles.reservationPanel}>
                <div className={styles.infoAlert}>
                  <Info size={16} />
                  <span>{MOCK_EVENT.isFree ? 'Bu etkinlik öğrenciler için tamamen ücretsizdir. Rezervasyon yaparak yerinizi ayırtın.' : 'Ön satış aşamasındadır. Rezervasyonunuzu kesinleştirebilirsiniz.'}</span>
                </div>
                <div className={styles.actionRow}>
                  <button 
                    className={`btn-primary ${styles.addToCartBtn} ${isAddingToCart ? styles.loading : ''}`}
                    onClick={handleAddToCart}
                    disabled={isAddingToCart}
                    style={{ flex: 1 }}
                  >
                    {isAddingToCart ? 'İşleminiz Yapılıyor...' : (MOCK_EVENT.isFree ? 'Ücretsiz Kayıt Ol' : 'Hemen Yerini Ayırt')}
                  </button>
                  <button 
                    className={`${styles.favoriteActionBtn} ${isFavorite ? styles.isFavorite : ''}`}
                    onClick={toggleFavorite}
                    title={isFavorite ? 'Favorilerden Kaldır' : 'Favorilere Ekle'}
                  >
                    <Heart size={20} fill={isFavorite ? 'white' : 'none'} />
                  </button>
                </div>
              </div>
            ) : (
              <>
                <div className={styles.providersList}>
                  {TICKET_PROVIDERS.map((provider) => (
                    <div 
                      key={provider.id} 
                      className={`${styles.providerCard} ${selectedProvider === provider.id ? styles.selected : ''}`}
                      onClick={() => setSelectedProvider(provider.id)}
                    >
                      <div className={styles.providerHeader}>
                        <div className={styles.providerBrand}>
                          <div className={styles.radio}>
                            {selectedProvider === provider.id && <div className={styles.radioDot}></div>}
                          </div>
                          <span className={styles.providerName}>{provider.name}</span>
                        </div>
                        {provider.tag && <span className={styles.providerTag}>{provider.tag}</span>}
                      </div>
                      
                      <div className={styles.providerPricing}>
                        <div className={styles.priceBreakdown}>
                          <span>Öğrenci Fiyatı: ₺{provider.studentPrice}</span>
                          <span>+ Hizmet Bedeli: ₺{provider.commision}</span>
                        </div>
                        <div className={styles.totalPrice}>
                          ₺{provider.total}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className={styles.actionSection}>
                  <div className={styles.infoAlert}>
                    <Info size={16} />
                    <span>Öğrenci kimliği doğrulaması kapıda gerekebilir.</span>
                  </div>
                  <div className={styles.actionRow}>
                    <button 
                      className={`btn-primary ${styles.addToCartBtn} ${isAddingToCart ? styles.loading : ''}`}
                      onClick={handleAddToCart}
                      disabled={isAddingToCart}
                      style={{ flex: 1 }}
                    >
                      {isAddingToCart ? 'Sepete Ekleniyor...' : (
                        <>
                          <ShoppingCart size={18} />
                          <span>Seçili Bileti Sepete Ekle</span>
                        </>
                      )}
                    </button>
                    <button 
                      className={`${styles.favoriteActionBtn} ${isFavorite ? styles.isFavorite : ''}`}
                      onClick={toggleFavorite}
                      title={isFavorite ? 'Favorilerden Kaldır' : 'Favorilere Ekle'}
                    >
                      <Heart size={20} fill={isFavorite ? 'white' : 'none'} />
                    </button>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventDetail;
