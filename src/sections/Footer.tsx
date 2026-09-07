import React from "react";
import { useLanguage } from "../hooks/useLanguage";
import { useTheme } from "../hooks/useTheme";
import styles from "./Footer.module.css";

export const Footer: React.FC = () => {
  const { language } = useLanguage();
  const { theme } = useTheme();

  const logo =
    theme === "dark"
      ? "/images/logo-navbar.png"
      : "/images/logo-navbar-light.png";

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.top}>
          <div className={styles.brand}>
            <img src={logo} alt="Hümbətəli Qurbanov" className={styles.logo} />

            <div>
              <p className={styles.name}>Hümbətəli Qurbanov</p>
              <p className={styles.role}>Frontend Developer</p>
            </div>
          </div>

          <div className={styles.links}>
            <a
              href="https://github.com/humbeteli"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.85 10.91.57.1.78-.25.78-.55v-2.01c-3.19.69-3.86-1.35-3.86-1.35-.52-1.33-1.28-1.69-1.28-1.69-1.04-.71.08-.7.08-.7 1.15.08 1.75 1.18 1.75 1.18 1.02 1.75 2.68 1.25 3.33.96.1-.74.4-1.25.73-1.54-2.55-.29-5.23-1.28-5.23-5.69 0-1.26.45-2.29 1.18-3.1-.12-.29-.51-1.47.11-3.06 0 0 .96-.31 3.15 1.18a10.9 10.9 0 0 1 5.74 0c2.19-1.49 3.15-1.18 3.15-1.18.62 1.59.23 2.77.11 3.06.74.81 1.18 1.84 1.18 3.1 0 4.42-2.69 5.4-5.25 5.68.41.36.78 1.08.78 2.18v3.23c0 .3.2.66.79.55A11.51 11.51 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z" />
              </svg>
            </a>

            <a
              href="https://www.linkedin.com/in/humbeteli-qurbanov-805999361/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M5.2 3.5a2.2 2.2 0 1 1-4.4 0 2.2 2.2 0 0 1 4.4 0ZM1.1 8h4.2v13H1.1V8Zm6.8 0h4v1.78h.06c.56-1.06 1.92-2.18 3.95-2.18 4.22 0 5 2.78 5 6.4V21h-4.2v-6.22c0-1.48-.03-3.38-2.06-3.38-2.06 0-2.38 1.61-2.38 3.27V21H7.9V8Z" />
              </svg>
            </a>

            <a
              href="mailto:humbeteliqurbanov@gmail.com"
              aria-label="Email"
            >
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M2.5 4h19A1.5 1.5 0 0 1 23 5.5v13a1.5 1.5 0 0 1-1.5 1.5h-19A1.5 1.5 0 0 1 1 18.5v-13A1.5 1.5 0 0 1 2.5 4Zm.5 3v11h18V7l-9 6-9-6Zm1.8-1L12 11.2 19.2 6H4.8Z" />
              </svg>
            </a>
          </div>
        </div>

        <div className={styles.bottom}>
          <p>© {new Date().getFullYear()} Hümbətəli Qurbanov</p>
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