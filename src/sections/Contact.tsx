import React from "react";
import { useLanguage } from "../hooks/useLanguage";
import layoutStyles from "../styles/layout.module.css";
import styles from "./Contact.module.css";

export const Contact: React.FC = () => {
  const { language } = useLanguage();

  const whatsappNumber = "994558341378";

  return (
    <section
      id="contact"
      className={`${styles.contact} ${layoutStyles.section}`}
    >
      <div className={layoutStyles.container}>
        <div className={styles.heading}>
          <span className={styles.number}>05</span>

          <div>
            <p className={styles.eyebrow}>
              {language === "az" ? "Əlaqə" : "Contact"}
            </p>

            <h2>
              {language === "az"
                ? "Bir layihə üzərində işləyirsiniz?"
                : "Have a project in mind?"}
            </h2>

            <p className={styles.description}>
              {language === "az"
                ? "Yeni layihələr, əməkdaşlıq və frontend development imkanları haqqında danışmaqdan məmnun olaram."
                : "I’m open to discussing new projects, collaborations and frontend development opportunities."}
            </p>
          </div>
        </div>

        <div className={styles.links}>
          <a href="mailto:humbeteliqurbanov@gmail.com">
            <span>Email</span>
            <strong>humbeteliqurbanov@gmail.com</strong>
            <span>↗</span>
          </a>

          <a
            href={`https://wa.me/${whatsappNumber}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>WhatsApp</span>
            <strong>Message me</strong>
            <span>↗</span>
          </a>

          <a
            href="https://github.com/humbeteli"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>GitHub</span>
            <strong>github.com/humbeteli</strong>
            <span>↗</span>
          </a>

          <a
            href="https://www.linkedin.com/in/humbeteli-qurbanov-805999361/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>LinkedIn</span>
            <strong>Humbeteli Qurbanov</strong>
            <span>↗</span>
          </a>
        </div>
      </div>
    </section>
  );
};