import React from "react";
import { useLanguage } from "../hooks/useLanguage";
import layoutStyles from "../styles/layout.module.css";
import styles from "./About.module.css";

export const About: React.FC = () => {
  const { language } = useLanguage();

  return (
    <section id="about" className={`${styles.about} ${layoutStyles.section}`}>
      <div className={layoutStyles.container}>
        <div className={styles.top}>
          <span className={styles.number}>01</span>

          <h2 className={styles.heading}>
            {language === "az"
              ? "Kod yazmaqdan daha çox, problemləri həll etməyi sevirəm."
              : "I care about solving problems, not just writing code."}
          </h2>
        </div>

        <div className={styles.bottom}>
          <div />

          <p className={styles.description}>
            {language === "az"
              ? "Frontend development sahəsində React və TypeScript ilə müasir, responsive və istifadəsi rahat interfeyslər qururam. Öyrənmə prosesimi real layihələr üzərində praktika etməklə davam etdirirəm."
              : "I build modern, responsive and user-friendly interfaces with React and TypeScript. I continue improving my skills by learning through real projects and practical development."}
          </p>
        </div>
      </div>
    </section>
  );
};