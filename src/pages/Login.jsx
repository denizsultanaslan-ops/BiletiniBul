import React, { useState } from 'react';
import { Mail, Lock, ShieldCheck, Ticket } from 'lucide-react';
import styles from './Login.module.css';

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className={styles.container}>
      <div className={`glass-panel ${styles.authCard}`}>
        <div className={styles.brand}>
          <div className={styles.logo}>
            <Ticket size={28} color="var(--accent-primary)" />
          </div>
          <h1 className="text-gradient">BiletiniBul</h1>
        </div>

        <h2 className={styles.title}>
          {isLogin ? 'Tekrar Hoş Geldin!' : 'Öğrenci Hesabını Oluştur'}
        </h2>
        <p className={styles.subtitle}>
          {isLogin
            ? 'Öğrenci avantajlarından yararlanmaya devam et.'
            : '.edu.tr uzantılı e-postan ile doğrulanmış öğrenci ayrıcalıklarına katıl!'}
        </p>

        <form className={styles.form} onClick={(e) => e.preventDefault()}>
          {!isLogin && (
            <div className={styles.inputGroup}>
              <div className={styles.inputIcon}>
                <ShieldCheck size={18} />
              </div>
              <input type="text" placeholder="Ad Soyad" className={styles.input} />
            </div>
          )}

          <div className={styles.inputGroup}>
            <div className={styles.inputIcon}>
              <Mail size={18} />
            </div>
            <input
              type="email"
              placeholder={isLogin ? 'E-posta' : 'Öğrenci E-postası (.edu.tr)'}
              className={styles.input}
            />
          </div>

          <div className={styles.inputGroup}>
            <div className={styles.inputIcon}>
              <Lock size={18} />
            </div>
            <input type="password" placeholder="Şifre" className={styles.input} />
          </div>

          {isLogin && (
            <div className={styles.forgotPassword}>
              <a href="#">Şifremi Unuttum</a>
            </div>
          )}

          <button className={`btn-primary ${styles.submitBtn}`}>
            {isLogin ? 'Giriş Yap' : 'Kayıt Ol'}
          </button>
        </form>

        <div className={styles.toggleText}>
          {isLogin ? 'Hesabın yok mu?' : 'Zaten bir hesabın var mı?'}
          <button className={styles.toggleBtn} onClick={() => setIsLogin(!isLogin)}>
            {isLogin ? 'Kayıt Ol' : 'Giriş Yap'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
