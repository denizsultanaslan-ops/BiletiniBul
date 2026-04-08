import React, { useState, useMemo } from 'react';
import { Ticket, Star, TrendingUp, History, MapPin, Calendar, ArrowRight, Award, X, QrCode, Download, Share2 } from 'lucide-react';
import { USER_DATA, getCategoryStats } from '../data/user';
import styles from './Dashboard.module.css';

const Dashboard = () => {
    const [activeSection, setActiveSection] = useState('tickets'); // 'tickets', 'points', 'categories'
    const [selectedTicket, setSelectedTicket] = useState(null);
    const categoryStats = useMemo(() => getCategoryStats(), []);

    const renderContent = () => {
        switch (activeSection) {
            case 'tickets':
                return (
                    <div className={`glass-panel ${styles.detailPanel}`}>
                        <div className="flex-between" style={{ marginBottom: '1.5rem' }}>
                            <h3 className={styles.panelTitle}>Aktif Biletlerim</h3>
                            <span className={styles.countBadge}>{USER_DATA.activeTickets.length} Bilet</span>
                        </div>
                        <div className={styles.ticketsList}>
                            {USER_DATA.activeTickets.map(ticket => (
                                <div key={ticket.id} className={styles.wideCard}>
                                    <img src={ticket.image} alt={ticket.title} className={styles.wideCardImage} />
                                    <div className={styles.wideCardInfo}>
                                        <h4>{ticket.title}</h4>
                                        <div className={styles.metaRow}>
                                            <span><Calendar size={14} /> {ticket.date}</span>
                                            <span><MapPin size={14} /> {ticket.location}</span>
                                        </div>
                                    </div>
                                    <button 
                                        className="btn-primary" 
                                        style={{ padding: '0.5rem 1rem', fontSize: '0.8rem' }}
                                        onClick={() => setSelectedTicket(ticket)}
                                    >
                                        Bileti Gör
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>
                );
            case 'points':
                return (
                    <div className={`glass-panel ${styles.detailPanel}`}>
                        <div className="flex-between" style={{ marginBottom: '1.5rem' }}>
                            <h3 className={styles.panelTitle}>Puan Geçmişi & Etkinlikler</h3>
                            <Award size={20} color="var(--accent-primary)" />
                        </div>
                        <div className={styles.pointsList}>
                            {USER_DATA.pastEvents.map(event => (
                                <div key={event.id} className={styles.pointItem}>
                                    <div className={styles.pointIcon}>
                                        {event.type === 'Tiyatro' ? '🎭' : event.type === 'Konser' ? '🎸' : event.type === 'Sinema' ? '🎬' : '🩰'}
                                    </div>
                                    <div className={styles.pointDetails}>
                                        <h4>{event.title}</h4>
                                        <p>{event.date} • {event.location}</p>
                                    </div>
                                    <div className={styles.pointValue}>
                                        +{event.points} Puan
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                );
            case 'categories':
                return (
                    <div className={`glass-panel ${styles.detailPanel}`}>
                        <div className="flex-between" style={{ marginBottom: '1.5rem' }}>
                            <h3 className={styles.panelTitle}>Kategori İstatistikleri</h3>
                            <TrendingUp size={20} color="var(--success)" />
                        </div>
                        
                        <div className={styles.statsSummary}>
                            {categoryStats.map(([cat, count]) => (
                                <div key={cat} className={styles.statBox}>
                                    <span className={styles.statBoxCount}>{count}</span>
                                    <span className={styles.statBoxLabel}>{cat}</span>
                                </div>
                            ))}
                        </div>

                        <h4 style={{ margin: '2rem 0 1rem', fontSize: '1rem', color: 'var(--text-secondary)' }}>Tüm Geçmiş</h4>
                        <div className={styles.fullHistory}>
                            {USER_DATA.pastEvents.map(event => (
                                <div key={event.id} className={styles.historyRow}>
                                    <span>{event.date}</span>
                                    <span style={{ fontWeight: 600 }}>{event.title}</span>
                                    <span className={styles.typeTag}>{event.type}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                );
            default:
                return null;
        }
    };

    return (
        <div className={`page-container ${styles.dashboardContainer}`}>
            <div className={styles.header}>
                <h1 className={styles.title}>Öğrenci Paneli</h1>
                <p className={styles.subtitle}>Biletlerini, puanlarını ve sanat istatistiklerini buradan takip et.</p>
            </div>

            {/* İstatistik Kartları */}
            <div className={styles.statsGrid}>
                <div 
                    className={`glass-panel ${styles.statCard} ${styles.primaryCard} ${activeSection === 'tickets' ? styles.activeCard : ''}`}
                    onClick={() => setActiveSection('tickets')}
                >
                    <div className={styles.statIcon}><Ticket size={24} /></div>
                    <div className={styles.statInfo}>
                        <h3>Aktif Bilet</h3>
                        <span className={styles.statValue}>{USER_DATA.activeTickets.length}</span>
                        <p className={styles.statDesc}>Yaklaşan {USER_DATA.activeTickets.length} etkinliğin var!</p>
                    </div>
                </div>

                <div 
                    className={`glass-panel ${styles.statCard} ${styles.accentCard} ${activeSection === 'points' ? styles.activeCard : ''}`}
                    onClick={() => setActiveSection('points')}
                >
                    <div className={styles.statIcon}><Star size={24} /></div>
                    <div className={styles.statInfo}>
                        <h3>Sanat Puanı</h3>
                        <span className={styles.statValue}>{USER_DATA.points}</span>
                        <p className={styles.statDesc}>Bugüne kadar {USER_DATA.points} puan topladın.</p>
                    </div>
                </div>

                <div 
                    className={`glass-panel ${styles.statCard} ${activeSection === 'categories' ? styles.activeCard : ''}`}
                    onClick={() => setActiveSection('categories')}
                >
                    <div className={styles.statIcon}><TrendingUp size={24} color="var(--success)" /></div>
                    <div className={styles.statInfo}>
                        <h3>Favori Kategori</h3>
                        <span className={styles.statValue}>{categoryStats[0]?.[0]}</span>
                        <p className={styles.statDesc}>En çok {categoryStats[0]?.[0]} kategorisine ilgi duydun.</p>
                    </div>
                </div>
            </div>

            <div className={styles.mainContentArea}>
                {renderContent()}
            </div>

            {/* Bilet Detay Modalı */}
            {selectedTicket && (
                <div className={styles.modalOverlay} onClick={() => setSelectedTicket(null)}>
                    <div className={styles.modalContent} onClick={e => e.stopPropagation()}>
                        <button className={styles.closeButton} onClick={() => setSelectedTicket(null)}>
                            <X size={24} />
                        </button>
                        
                        <div className={styles.ticketDetail}>
                            <div className={styles.ticketHeader}>
                                <img src={selectedTicket.image} alt={selectedTicket.title} className={styles.ticketModalImage} />
                                <div className={styles.ticketHeaderInfo}>
                                    <span className={styles.ticketTypeBadge}>{selectedTicket.type}</span>
                                    <h2>{selectedTicket.title}</h2>
                                    <p><MapPin size={16} /> {selectedTicket.location}</p>
                                </div>
                            </div>

                            <div className={styles.ticketBody}>
                                <div className={styles.infoGrid}>
                                    <div className={styles.infoItem}>
                                        <label>Etkinlik Tarihi</label>
                                        <p><Calendar size={18} /> {selectedTicket.date}</p>
                                    </div>
                                    <div className={styles.infoItem}>
                                        <label>Satın Alınma Tarihi</label>
                                        <p><History size={18} /> {selectedTicket.purchaseDate}</p>
                                    </div>
                                </div>

                                <div className={styles.qrSection}>
                                    <div className={styles.qrWrapper}>
                                        <QrCode size={120} strokeWidth={1} />
                                        <div className={styles.qrScanLine}></div>
                                    </div>
                                    <div className={styles.qrInfo}>
                                        <p className={styles.ticketId}>ID: {selectedTicket.id.toUpperCase()}-2026</p>
                                        <p className={styles.scanNotice}>Giriş sırasında bu kodu okutun.</p>
                                    </div>
                                </div>

                                <div className={styles.actionRow}>
                                    <button className={styles.actionBtn}>
                                        <Download size={18} /> İndir
                                    </button>
                                    <button className={styles.actionBtn}>
                                        <Share2 size={18} /> Paylaş
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Dashboard;
