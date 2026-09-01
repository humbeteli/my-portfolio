import React from 'react';
import { useLanguage } from '../hooks/useLanguage';
import styles from './LanguageSwitcher.module.css';

export const LanguageSwitcher: React.FC = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <div className={styles.switcher}>
      <button
        onClick={() => setLanguage('az')}
        className={`${styles.button} ${language === 'az' ? styles.active : ''}`}
        aria-label="Switch to Azerbaijani"
      >
        AZ
      </button> 
      
      <span className={styles.separator}>/</span>
      <button
        onClick={() => setLanguage('en')}
        className={`${styles.button} ${language === 'en' ? styles.active : ''}`}
        aria-label="Switch to English"
      >
        EN
      </button>
    </div>
  );
};
