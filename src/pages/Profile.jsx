import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  User, Mail, School, Landmark, ChevronRight, 
  LogOut, Settings, Bell, Shield, CreditCard, 
  QrCode, CheckCircle, ExternalLink 
} from 'lucide-react';
import styles from './Profile.module.css';

const Profile = () => {
  const navigate = useNavigate();
  const [userData] = useState({
    name: 'Deniz Yılmaz',
    email: 'deniz.yilmaz@itu.edu.tr',
    university: 'İstanbul Teknik Üniversitesi',
    department: 'Bilgisayar Mühendisliği',
    studentId: '102190543',
    points: 420,
    avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&q=80&w=200'
  });

  const handleLogout = () => {
    // In a real app, clear tokens here
    navigate('/login');
  };

  return (
    <div className="page-container">
      <div className={styles.profileHeader}>
        <h1 className={styles.pageTitle}>Profilim</h1>
        <p className={styles.pageSubtitle}>Hesap bilgilerin ve öğrenci kimlik kartın burada yer alır.</p>
      </div>

      <div className={styles.contentGrid}>
        {/* Left Column: ID Card & Main Info */}
        <div className={styles.mainColumn}>
          {/* DIGITAL STUDENT ID CARD */}
          <div className={styles.idCardWrapper}>
            <div className={styles.idCard}>
              <div className={styles.idCardHeader}>
                <div className={styles.universityLogo}>
                  <Landmark size={24} />
                  <span>{userData.university}</span>
                </div>
                <div className={styles.idBadge}>ÖĞRENCİ</div>
              </div>
              
              <div className={styles.idCardBody}>
                <div className={styles.idPhoto}>
                  <img src={userData.avatar} alt={userData.name} />
                </div>
                <div className={styles.idInfo}>
                  <h2 className={styles.userName}>{userData.name}</h2>
                  <p className={styles.userDetail}>{userData.department}</p>
                  <div className={styles.studentNumber}>
                    <span className={styles.label}>Öğrenci No:</span>
                    <span className={styles.value}>{userData.studentId}</span>
                  </div>
                  <div className={styles.verifiedStatus}>
                    <CheckCircle size={16} color="var(--success)" />
                    <span>Aktif Öğrenci (e-Devlet Onaylı)</span>
                  </div>
                </div>
                <div className={styles.qrCode}>
                  <QrCode size={80} strokeWidth={1.5} />
                  <span>KİMLİK DOĞRULA</span>
                </div>
              </div>
              
              <div className={styles.idCardFooter}>
                <div className={styles.points}>
                  <span className={styles.label}>Sanat Puanı:</span>
                  <span className={styles.value}>{userData.points}</span>
                </div>
                <div className={styles.validity}>
                  2025 - 2026 Akademik Yılı
                </div>
              </div>
            </div>
          </div>

          {/* QUICK ACTIONS SECTION */}
          <div className={styles.section}>
            <h3>Hızlı Erişim</h3>
            <div className={styles.settingsGrid}>
              <button className={`glass-panel ${styles.settingItem}`}>
                <div className={styles.settingIcon}><Bell size={20} /></div>
                <span>Bildirim Ayarları</span>
                <ChevronRight size={18} />
              </button>
              <button className={`glass-panel ${styles.settingItem}`}>
                <div className={styles.settingIcon}><Shield size={20} /></div>
                <span>Gizlilik ve Güvenlik</span>
                <ChevronRight size={18} />
              </button>
              <button className={`glass-panel ${styles.settingItem}`}>
                <div className={styles.settingIcon}><CreditCard size={20} /></div>
                <span>Ödeme Yöntemleri</span>
                <ChevronRight size={18} />
              </button>
              <button className={`glass-panel ${styles.settingItem}`}>
                <div className={styles.settingIcon}><Settings size={20} /></div>
                <span>Uygulama Tercihleri</span>
                <ChevronRight size={18} />
              </button>
            </div>
          </div>
        </div>

        {/* Right Column: Account Details & Actions */}
        <div className={styles.sidebarColumn}>
          <div className={`glass-panel ${styles.detailsPanel}`}>
            <h3>Kişisel Bilgiler</h3>
            <div className={styles.infoList}>
              <div className={styles.infoItem}>
                <Mail size={18} />
                <div>
                  <label>E-posta Adresi</label>
                  <p>{userData.email}</p>
                </div>
              </div>
              <div className={styles.infoItem}>
                <School size={18} />
                <div>
                  <label>Üniversite</label>
                  <p>{userData.university}</p>
                </div>
              </div>
              <div className={styles.infoItem}>
                <User size={18} />
                <div>
                  <label>Hesap Tipi</label>
                  <p>Üniversite Öğrencisi</p>
                </div>
              </div>
            </div>
            
            <hr className={styles.divider} />
            
            <button className={`btn-outline ${styles.fullWidthBtn}`}>
              <span>Bilgilerimi Güncelle</span>
              <ExternalLink size={16} />
            </button>
            
            <button 
              className={`btn-primary ${styles.logoutBtn}`}
              onClick={handleLogout}
            >
              <LogOut size={18} />
              <span>Güvenli Çıkış Yap</span>
            </button>
          </div>

          <div className={`glass-panel ${styles.helpBox}`}>
            <h4>Yardıma mı ihtiyacın var?</h4>
            <p>Destek ekibimize ulaşmak için veya SSS sayfasına göz atmak için buraya dokun.</p>
            <button className="btn-outline" style={{ marginTop: '1rem', width: '100%' }}>Destek Talebi Aç</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
