import React from 'react';
import { useNavigate } from 'react-router-dom';
import { CheckCircle, Calendar, MapPin, Ticket, ArrowRight, Share2 } from 'lucide-react';
import styles from './CheckoutSuccess.module.css';

const CheckoutSuccess = () => {
   const navigate = useNavigate();

   return (
      <div className={`page-container ${styles.successContainer}`}>
         <div className={styles.card}>
            <div className={styles.iconWrapper}>
               <CheckCircle size={64} color="var(--success)" />
            </div>

            <h1 className={styles.title}>Ödemeniz Başarıyla Şahıslandı!</h1>
            <p className={styles.subtitle}>Biletiniz hazır ve "Biletlerim" sayfasına eklendi. Keyifli seyirler dileriz!</p>

            <div className={styles.ticketPreview}>
               <div className={styles.ticketHeader}>
                  <div className={styles.ticketBrand}>
                     <Ticket size={20} color="var(--accent-primary)" />
                     <span>BiletiniBul Dijital Bilet</span>
                  </div>
                  <div className={styles.validTag}>GEÇERLİ BİLET</div>
               </div>

               <div className={styles.ticketBody}>
                  <div className={styles.qrSide}>
                     <div className={styles.qrCode}>
                        {/* Simulated QR placeholder */}
                        <div className={styles.qrPattern}></div>
                     </div>
                     <span className={styles.qrLabel}>Girişte Okutun</span>
                  </div>

                  <div className={styles.infoSide}>
                     <h2 className={styles.eventTitle}>Epic Rock Fest 2026</h2>
                     <div className={styles.infoRow}>
                        <Calendar size={16} />
                        <span>24 Mayıs 2026, 19:00</span>
                     </div>
                     <div className={styles.infoRow}>
                        <MapPin size={16} />
                        <span>Küçükçiftlik Park, İstanbul</span>
                     </div>
                     <div className={styles.priceRow}>
                        <span className={styles.priceLabel}>Ödenen Tutar:</span>
                        <span className={styles.priceValue}>₺225.00</span>
                     </div>
                  </div>
               </div>
            </div>

            <div className={styles.actions}>
               <button
                  className="btn-primary"
                  style={{ flex: 1 }}
                  onClick={() => navigate('/biletlerim')}
               >
                  Biletlerimi Görüntüle
                  <ArrowRight size={18} />
               </button>
               <button className="btn-outline">
                  <Share2 size={18} />
                  Paylaş
               </button>
            </div>

            <button className={styles.homeLink} onClick={() => navigate('/')}>
               Ana Sayfaya Dön
            </button>
         </div>
      </div>
   );
};

export default CheckoutSuccess;
