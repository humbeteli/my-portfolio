import React from "react";
import { useLanguage } from "../hooks/useLanguage";
import styles from "./Footer.module.css";

export const Footer: React.FC = () => {
  const { language } = useLanguage();

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.top}>
          <div>
            <p className={styles.name}>HÜMBƏTƏLİ QURBANOV</p>
            <p className={styles.role}>Frontend Developer</p>
          </div>

          <div className={styles.links}>
            <a
              href="https://github.com/humbeteli"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub ↗
            </a>

            <a
              href="https://www.linkedin.com/in/humbeteli-qurbanov-805999361/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn ↗
            </a>

            <a href="mailto:humbeteliqurbanov@gmail.com">
              Email ↗
            </a>
          </div>
        </div>

        <div className={styles.bottom}>
          <p>
            © {new Date().getFullYear()} Hümbətəli Qurbanov
          </p>

          <p>
            {language === "az"
              ? "React & TypeScript ilə hazırlanıb."
              : "Built with React & TypeScript."}
          </p>
        </div>
      </div>
    </footer>
  );
};