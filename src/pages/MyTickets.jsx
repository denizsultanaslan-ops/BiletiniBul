import React, { useState, useEffect } from 'react';
import { QrCode, Clock, MapPin, Calendar, Ticket as TicketIcon, XCircle, LogOut } from 'lucide-react';
import styles from './MyTickets.module.css';

const MOCK_TICKETS = [
  { id: 1, title: 'Duman - Açık Hava Konseri', type: 'Konser', venue: 'Harbiye Cemil Topuzlu', date: '18 Mayıs 2026, 21:00', seat: 'Blok B, Sıra 12, Koltuk 4', status: 'active', provider: 'Passo', isFree: false },
  { id: 2, title: 'TEDx Istanbul', type: 'Söyleşi', venue: 'Zorlu PSM', date: '10 Haziran 2026, 13:00', seat: 'Serbest Oturum', status: 'active', provider: 'Biletiniz', isFree: true },
  { id: 3, title: 'Fındıkkıran Balesi', type: 'Bale', venue: 'AKM', date: '28 Şubat 2026, 20:00', seat: 'Ön Kısım, Sıra 3, Koltuk 15', status: 'past', provider: 'Biletix', isFree: false }
];

const MyTickets = () => {
  const [timeLeft, setTimeLeft] = useState('02:14:35');
  const [tickets, setTickets] = useState(MOCK_TICKETS);
  const [activeTab, setActiveTab] = useState('active');
  
  // Fake countdown logic
  useEffect(() => {
    const timer = setInterval(() => {
      // Just visually updating seconds for demo purposes
      setTimeLeft(prev => {
        let [h, m, s] = prev.split(':').map(Number);
        if (s > 0) s--;
        else {
          s = 59;
          if (m > 0) m--;
          else {
            m = 59;
            h--;
          }
        }
        return `${h.toString().padStart(2, '0')}:${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const handleCancelTicket = (id) => {
    // In a real app, API call exists. Here we just update state.
    if(window.confirm("Bu bilet/rezervasyonu iptal etmek istediğinize emin misiniz?")) {
      setTickets(prev => prev.filter(t => t.id !== id));
    }
  };

  const filteredTickets = tickets.filter(t => t.status === activeTab);

  return (
    <div className="page-container">
      <h1 className={styles.pageTitle}>Biletlerim</h1>
      
      <div className={styles.tabs}>
        <button 
          className={`${styles.tab} ${activeTab === 'active' ? styles.active : ''}`}
          onClick={() => setActiveTab('active')}
        >
          Aktif Biletler
        </button>
        <button 
          className={`${styles.tab} ${activeTab === 'past' ? styles.active : ''}`}
          onClick={() => setActiveTab('past')}
        >
          Geçmiş
        </button>
      </div>

      <div className={styles.ticketGrid}>
        {filteredTickets.length > 0 ? (
          filteredTickets.map(ticket => (
            <div key={ticket.id} className={`glass-panel ${styles.ticketCard}`}>
              <div className={styles.ticketHeader}>
                <div className={styles.eventInfo}>
                  <span className={styles.badge}>{ticket.type}</span>
                  <h2 className={styles.eventTitle}>{ticket.title}</h2>
                </div>
                {ticket.status === 'active' && (
                  <div className={styles.countdownContainer}>
                    <Clock size={16} color="var(--accent-primary)" />
                    <span className={styles.countdown}>{timeLeft}</span>
                    <span className={styles.countdownLabel}>Kaldı</span>
                  </div>
                )}
              </div>
              
              <div className={styles.ticketBody}>
                <div className={styles.ticketDetails}>
                  <div className={styles.detailItem}>
                    <MapPin size={18} />
                    <div>
                      <p className={styles.detailLabel}>Mekan</p>
                      <p className={styles.detailValue}>{ticket.venue}</p>
                    </div>
                  </div>
                  <div className={styles.detailItem}>
                    <Calendar size={18} />
                    <div>
                      <p className={styles.detailLabel}>Tarih & Saat</p>
                      <p className={styles.detailValue}>{ticket.date}</p>
                    </div>
                  </div>
                  <div className={styles.detailItem}>
                    <TicketIcon size={18} />
                    <div>
                      <p className={styles.detailLabel}>Koltuk</p>
                      <p className={styles.detailValue}>{ticket.seat}</p>
                    </div>
                  </div>
                  
                  {ticket.status === 'active' && (
                    <button 
                      className={styles.cancelBtn} 
                      onClick={() => handleCancelTicket(ticket.id)}
                    >
                      <XCircle size={16} />
                      İptal Et
                    </button>
                  )}
                </div>
                
                <div className={styles.qrSection}>
                  <div className={styles.qrPlaceholder}>
                    <QrCode size={120} strokeWidth={1} style={{ opacity: ticket.status === 'past' ? 0.3 : 1 }}/>
                    {ticket.status === 'active' && <div className={styles.qrScanLine}></div>}
                  </div>
                  <p className={styles.qrText}>
                    {ticket.status === 'active' ? 'Girişte bu kodu okutun' : 'Bu bilet kullanıldı'}
                  </p>
                </div>
              </div>
              
              <div className={styles.ticketFooter}>
                <span>Bilet Satıcısı: <strong>{ticket.provider}</strong></span>
                <span>{ticket.isFree ? 'Ücretsiz Rezervasyon' : 'Öğrenci İndirimi Uygulandı'}</span>
              </div>
            </div>
          ))
        ) : (
          <div style={{ textAlign: 'center', color: 'var(--text-muted)', padding: '3rem 0', gridColumn: '1 / -1' }}>
            <p>Bu kategoride biletiniz bulunmuyor.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default MyTickets;
