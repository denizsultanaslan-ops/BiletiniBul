import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ShoppingBag, ArrowRight, ShieldCheck, Trash2, ArrowLeft, Ticket } from 'lucide-react';
import styles from './Cart.module.css';

const Cart = () => {
  const navigate = useNavigate();
  const [cartItems, setCartItems] = useState(() => JSON.parse(localStorage.getItem('cart') || '[]'));
  const [isProcessing, setIsProcessing] = useState(false);

  useEffect(() => {
    const handleStorage = () => {
      setCartItems(JSON.parse(localStorage.getItem('cart') || '[]'));
    };
    window.addEventListener('storage', handleStorage);
    return () => window.removeEventListener('storage', handleStorage);
  }, []);

  const removeItem = (id) => {
    const updated = cartItems.filter(item => item.id !== id);
    setCartItems(updated);
    localStorage.setItem('cart', JSON.stringify(updated));
    window.dispatchEvent(new Event('storage'));
  };

  const subtotal = cartItems.reduce((acc, item) => acc + (item.price || 0), 0);
  const serviceFee = cartItems.length > 0 ? 25.00 : 0;
  const total = subtotal + serviceFee;

  const handleCheckout = () => {
    setIsProcessing(true);
    setTimeout(() => {
      // Simulation of successful checkout
      localStorage.setItem('cart', '[]');
      window.dispatchEvent(new Event('storage'));
      navigate('/checkout-success');
    }, 2000);
  };

  if (cartItems.length === 0) {
    return (
      <div className={`page-container ${styles.cartContainer} flex-center`} style={{ flexDirection: 'column', minHeight: '60vh' }}>
        <ShoppingBag size={80} style={{ opacity: 0.1, marginBottom: '2rem' }} />
        <h2 style={{ marginBottom: '1rem' }}>Sepetiniz Boş</h2>
        <p style={{ color: 'var(--text-muted)', marginBottom: '2rem' }}>Keşfetmeye başlayın ve biletlerinizi ekleyin.</p>
        <button className="btn-primary" onClick={() => navigate('/')}>Keşfete Git</button>
      </div>
    );
  }

  return (
    <div className={`page-container ${styles.cartContainer}`}>
      <div className={styles.header}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
           <button onClick={() => navigate(-1)} className={styles.backBtn}><ArrowLeft size={20} /></button>
           <h1 className={styles.title} style={{ margin: 0 }}>Sepetim</h1>
        </div>
        <p className={styles.subtitle}>Biletlerini alım işlemini tamamla ve eğlenceye hazırlan.</p>
      </div>

      <div className={styles.contentGrid}>
        <div className={styles.itemsList}>
          {cartItems.map((item) => (
            <div key={item.id} className={`glass-panel ${styles.cartItem}`}>
              <div className={styles.itemImage}>
                <img src={item.image} alt={item.title} />
              </div>
              <div className={styles.itemDetails}>
                <span className={styles.itemType}>{item.type}</span>
                <h3>{item.title}</h3>
                <p className={styles.itemMeta}>{item.date}</p>
                <p className={styles.itemMeta}>{item.location}</p>
              </div>
              <div className={styles.itemPricing}>
                <div className={styles.singlePrice}>
                  <span>Sağlayıcı: {item.provider}</span>
                  <span className={styles.amount}>₺{item.price}</span>
                </div>
                <button 
                   className={styles.removeBtn}
                   onClick={() => removeItem(item.id)}
                   title="Ürünü Sil"
                >
                  <Trash2 size={18} />
                </button>
              </div>
            </div>
          ))}
          
          <div className={styles.securityBanner}>
            <ShieldCheck size={20} className={styles.securityIcon} />
            <p>Ödemeniz 256-bit SSL sertifikası ile korunmaktadır. Öğrenci avantajı uygulandı.</p>
          </div>
        </div>

        <div className={styles.summarySidebar}>
          <div className={`glass-panel ${styles.summaryPanel}`}>
            <h3 className={styles.summaryTitle}>Sipariş Özeti</h3>
            
            <div className={styles.summaryRows}>
              <div className={styles.summaryRow}>
                <span>Bilet Tutarı ({cartItems.length} adet)</span>
                <span>₺{subtotal.toFixed(2)}</span>
              </div>
              <div className={styles.summaryRow}>
                <span>Hizmet Bedeli</span>
                <span>₺{serviceFee.toFixed(2)}</span>
              </div>
            </div>

            <div className={styles.totalRow}>
              <span>Toplam</span>
              <span className={styles.totalAmount}>₺{total.toFixed(2)}</span>
            </div>

            <button 
              className={`btn-primary ${styles.checkoutBtn} ${isProcessing ? styles.loading : ''}`}
              onClick={handleCheckout}
              disabled={isProcessing}
            >
              {isProcessing ? 'Ödemeniz Yapılıyor...' : 'Sepeti Onayla & Öde'}
              {!isProcessing && <ArrowRight size={18} />}
            </button>
            <p className={styles.termsText}>
              Ödemeye geçerek Alıcı Sözleşmesi'ni kabul etmiş sayılırsınız.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
