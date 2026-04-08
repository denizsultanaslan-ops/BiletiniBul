import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, Bell, ShoppingCart, User, X, Trash2, CreditCard, Gift, Timer } from 'lucide-react';
import styles from './Topbar.module.css';

const Topbar = () => {
  const navigate = useNavigate();
  const [isNotificationsOpen, setIsNotificationsOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  
  const [cartItems, setCartItems] = useState(() => JSON.parse(localStorage.getItem('cart') || '[]'));
  const [notifications] = useState([
    { id: 1, title: '50 Sanat Puanı Kazandın!', desc: 'Profil sayfasını ilk kez doldurduğun için puan kazandın.', icon: Gift, time: '2 saat önce' },
    { id: 2, title: 'Yakın Etkinlik: Duman', desc: 'Favorilerine eklediğin Duman konseri 2 gün sonra başlıyor!', icon: Timer, time: '5 saat önce' },
    { id: 3, title: 'Yeni İndirim Fırsatı!', desc: 'Sinema biletlerinde 2. bilet %25 indirimli.', icon: Bell, time: '1 gün önce' }
  ]);

  useEffect(() => {
    const handleStorageChange = () => {
      setCartItems(JSON.parse(localStorage.getItem('cart') || '[]'));
    };
    window.addEventListener('storage', handleStorageChange);
    return () => window.removeEventListener('storage', handleStorageChange);
  }, []);

  const removeFromCart = (id, e) => {
    e.stopPropagation();
    const newCart = cartItems.filter(item => item.id !== id);
    setCartItems(newCart);
    localStorage.setItem('cart', JSON.stringify(newCart));
    window.dispatchEvent(new Event('storage'));
  };

  const cartTotal = cartItems.reduce((acc, item) => acc + (item.price || 0), 0);

  return (
    <header className={`glass-panel ${styles.topbar}`}>
      <div className={styles.searchContainer}>
        <Search size={20} className={styles.searchIcon} />
        <input 
          type="text" 
          placeholder="Etkinlik, sanatçı veya mekan ara..." 
          className={styles.searchInput}
        />
      </div>

      <div className={styles.actions}>
        {/* Notifications */}
        <div style={{ position: 'relative' }}>
          <button 
            className={`${styles.actionBtn} ${isNotificationsOpen ? styles.active : ''}`}
            onClick={() => {
              setIsNotificationsOpen(!isNotificationsOpen);
              setIsCartOpen(false);
            }}
          >
            <Bell size={20} />
            <span className={styles.badge}>{notifications.length}</span>
          </button>
          
          {isNotificationsOpen && (
            <div className={styles.dropdown}>
              <div className={styles.dropdownHeader}>
                <h3>Bildirimler</h3>
                <span className={styles.clearBtn} onClick={() => setIsNotificationsOpen(false)}>Kapat</span>
              </div>
              <div className={styles.dropdownList}>
                {notifications.map(n => (
                  <div key={n.id} className={styles.notificationItem}>
                    <div className={styles.notifIcon}><n.icon size={16} /></div>
                    <div className={styles.notifContent}>
                      <p className={styles.notifTitle}>{n.title}</p>
                      <p className={styles.notifDesc}>{n.desc}</p>
                      <span className={styles.notifTime} style={{fontSize: '0.65rem', opacity: 0.5}}>{n.time}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Cart */}
        <div style={{ position: 'relative' }}>
          <button 
            className={`${styles.actionBtn} ${isCartOpen ? styles.active : ''}`}
            onClick={() => {
              setIsCartOpen(!isCartOpen);
              setIsNotificationsOpen(false);
            }}
          >
            <ShoppingCart size={20} />
            {cartItems.length > 0 && <span className={styles.badge}>{cartItems.length}</span>}
          </button>

          {isCartOpen && (
            <div className={styles.dropdown}>
              <div className={styles.dropdownHeader}>
                <h3>Sepetim ({cartItems.length})</h3>
                <span className={styles.clearBtn} onClick={() => setIsCartOpen(false)}>Kapat</span>
              </div>
              <div className={styles.dropdownList}>
                {cartItems.length > 0 ? (
                  cartItems.map(item => (
                    <div key={item.id} className={styles.cartItem}>
                      <img src={item.image} className={styles.itemImage} alt="" />
                      <div className={styles.itemInfo}>
                        <p className={styles.itemName}>{item.title}</p>
                        <p className={styles.itemPrice}>₺{item.price}</p>
                      </div>
                      <Trash2 
                        size={16} 
                        className={styles.removeItem} 
                        onClick={(e) => removeFromCart(item.id, e)}
                      />
                    </div>
                  ))
                ) : (
                  <div className={styles.emptyState}>Sepetiniz şu an boş.</div>
                )}
              </div>
              {cartItems.length > 0 && (
                <div className={styles.dropdownFooter}>
                  <div className={styles.totalBox}>
                    <span>Toplam:</span>
                    <span style={{fontWeight: 800, color: 'var(--accent-primary)'}}>₺{cartTotal}</span>
                  </div>
                  <button 
                    className="btn-primary" 
                    style={{width: '100%', fontSize: '0.85rem'}}
                    onClick={() => {
                      setIsCartOpen(false);
                      navigate('/sepet');
                    }}
                  >
                    Sepeti Onayla & Öde
                  </button>
                </div>
              )}
            </div>
          )}
        </div>
        
        <button 
          className={styles.userProfile}
          onClick={() => navigate('/profil')}
        >
          <div className={styles.avatar}>
            <img src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&q=80&w=200" alt="Profil" />
          </div>
          <span>Profilim</span>
        </button>
      </div>
    </header>
  );
};

export default Topbar;
