import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, MapPin, Navigation, Bus, Train, Route, Info } from 'lucide-react';
import styles from './Directions.module.css';

const MOCK_TRANSIT_DATA = [
  {
    id: 1,
    type: 'Otobüs',
    vessel: '32T -> Metrobüs',
    time: '45 Dk',
    arrival: '19:45',
    steps: [
      { mode: 'Yürüyüş', duration: '5 Dk', desc: 'Durak: Şişhane' },
      { mode: 'Otobüs', line: '32T', duration: '15 Dk', desc: 'Harbiye Yönü' },
      { mode: 'Metro', line: 'M2', duration: '10 Dk', desc: 'Osmanbey İstasyonu' },
      { mode: 'Yürüyüş', duration: '15 Dk', desc: 'Küçükçiftlik Park' }
    ]
  },
  {
    id: 2,
    type: 'Metro',
    vessel: 'M2 Yenikapı - Hacıosman',
    time: '30 Dk',
    arrival: '19:30',
    steps: [
      { mode: 'Yürüyüş', duration: '10 Dk', desc: 'Durak: Taksim' },
      { mode: 'Metro', line: 'M2', duration: '5 Dk', desc: 'Osmanbey İstasyonu' },
      { mode: 'Yürüyüş', duration: '15 Dk', desc: 'Küçükçiftlik Park' }
    ]
  },
  {
    id: 3,
    type: 'Vapur',
    vessel: 'Beşiktaş - Kadıköy',
    time: '55 Dk',
    arrival: '19:55',
    steps: [
      { mode: 'Vapur', line: 'Şehir Hatları', duration: '20 Dk', desc: 'Beşiktaş İskelesi' },
      { mode: 'Otobüs', line: '30A', duration: '15 Dk', desc: 'Maçka Yönü' },
      { mode: 'Yürüyüş', duration: '10 Dk', desc: 'Küçükçiftlik Park' }
    ]
  }
];

const Directions = () => {
  useParams();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('transit');
  const [startPoint, setStartPoint] = useState('Mevcut Konumum');

  return (
    <div className={`page-container ${styles.directionsContainer}`}>
      <button className={styles.backBtn} onClick={() => navigate(-1)}>
        <ArrowLeft size={20} />
        Geri Dön
      </button>

      <div className={styles.header}>
        <h1 className={styles.title}>Yol Tarifi</h1>
        <p className={styles.subtitle}>Etkinlik noktasına gitmek için alternatif rotaları incele.</p>
      </div>

      <div className={styles.splitLayout}>
        <div className={styles.routingPanel}>
          <div className={`glass-panel ${styles.inputsCard}`}>
            <div className={styles.routeTimeline}>
              <div className={styles.dotStart}></div>
              <div className={styles.line}></div>
              <div className={styles.dotEnd}></div>
            </div>
            <div className={styles.inputStack}>
              <div className={styles.inputGroup}>
                <input 
                  type="text" 
                  value={startPoint} 
                  onChange={(e) => setStartPoint(e.target.value)}
                  className={styles.routeInput} 
                  placeholder="Başlangıç Noktası"
                />
                <Navigation size={18} className={styles.inputIcon} />
              </div>
              <div className={styles.inputGroup}>
                <input 
                  type="text" 
                  value="Küçükçiftlik Park" 
                  readOnly 
                  className={`${styles.routeInput} ${styles.destinationInput}`} 
                />
                <MapPin size={18} className={styles.inputIcon} />
              </div>
            </div>
          </div>

          <div className={styles.tabsFlex}>
            <button 
              className={`${styles.transportTab} ${activeTab === 'transit' ? styles.activeTab : ''}`}
              onClick={() => setActiveTab('transit')}
            >
              <Bus size={20} />
              Toplu Taşıma
            </button>
            <button 
              className={`${styles.transportTab} ${activeTab === 'taxi' ? styles.activeTab : ''}`}
              onClick={() => setActiveTab('taxi')}
            >
              <Route size={20} />
              Taksi
            </button>
          </div>

          <div className={styles.routesList}>
            {activeTab === 'transit' ? (
              MOCK_TRANSIT_DATA.map((route) => (
                <div key={route.id} className={`glass-panel ${styles.routeCard}`}>
                  <div className={styles.routeHeader}>
                    <div className={styles.routeTypeInfo}>
                      <span className={styles.routeBadge}>{route.type}</span>
                      <span className={styles.routeVessel}>{route.vessel}</span>
                    </div>
                    <div className={styles.routeTimeInfo}>
                      <span className={styles.duration}>{route.time}</span>
                      <span className={styles.arrivalTime}>{route.arrival}'da varış</span>
                    </div>
                  </div>
                  
                  <div className={styles.stepsBreakdown}>
                    {route.steps.map((step, index) => (
                      <React.Fragment key={index}>
                        <div className={styles.stepBubble}>
                          {step.line ? <span className={styles.lineNumber}>{step.line}</span> : <Train size={14} />}
                        </div>
                        {index < route.steps.length - 1 && <div className={styles.stepConnector}></div>}
                      </React.Fragment>
                    ))}
                  </div>
                </div>
              ))
            ) : (
              <div className={`glass-panel ${styles.taxiCard}`}>
                <div className={styles.taxiHeader}>
                  <div className={styles.taxiBrand}>Sarı Taksi</div>
                  <div className={styles.taxiPrice}>~₺350 - ₺450</div>
                </div>
                <div className={styles.taxiDetail}>
                  <span>Tahmini Süre: 20 Dk</span>
                  <span>Trafik: Yoğun</span>
                </div>
                <div className={styles.taxiAlert}>
                  <Info size={16} />
                  Belirtilen tutar trafik durumuna göre değişiklik gösterebilir. Öğrenci dostu bir bütçe için toplu taşımayı öneririz!
                </div>
                <button className="btn-primary" style={{ width: '100%' }}>Taksi Çağır (Uber App)</button>
              </div>
            )}
          </div>
        </div>

        <div className={styles.mapPanel}>
          <div className={styles.staticRouteMap}>
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d12038.563968600029!2d28.97491325!3d41.033100349999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e3!4m5!1s0x14cab7650656bd63%3A0x8ca058b28c20b6c3!2zVGFrc2ltIE1leWRhbsSxLCBHw7xtw7zFn3N1eXUsIEJleW_En2x1L8Swc3RhbmJ1bA!3m2!1d41.0370014!2d28.9850917!4m5!1s0x14cab70add667d4f%3A0xc3d8a9ea8bc92b8d!2zS8O8w6fDvGvDp2lmdGxpayBQYXJrLCBIYXJiaXllLCBLaWxhcmdpIFNrLiBObzoyLCAzNDM2NyDFnmXFn2xpL8Swc3RhbmJ1bA!3m2!1d41.0429713!2d28.993781!5e0!3m2!1str!2str!4v1704642700000!5m2!1str!2str" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Yol Tarifi Haritası"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Directions;
