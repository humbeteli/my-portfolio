import React from "react";
import { useLanguage } from "../hooks/useLanguage";
import { Button } from "../components/Button";
import styles from "./Hero.module.css";

export const Hero: React.FC = () => {
  const { language } = useLanguage();

  const handleProjectsClick = () => {
    document
      .getElementById("projects")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  const isAz = language === "az";

  return (
    <section id="hero" className={styles.hero}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.left}>
            <div className={styles.intro}>
              <span className={styles.dot} />
              <span>Frontend Developer</span>
            </div>

            <h1 className={styles.title}>
              {isAz
                ? "Sadə görünən, yaxşı düşünülmüş veb təcrübələr yaradıram."
                : "I build web experiences that feel simple and intentional."}
            </h1>
          </div>

          <div className={styles.right}>
            <p className={styles.description}>
              {isAz
                ? "Kodun arxasında məntiqi, interfeysin arxasında isə insanı görməyə çalışıram."
                : "I care about the logic behind the code and the person using the interface."}
            </p>

            <div className={styles.actions}>
              <Button onClick={handleProjectsClick}>
                {isAz ? "Layihələrə bax" : "View projects"}
              </Button>

              <Button
                variant="secondary"
                href="/Humbatali-Gurbanov_CV.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                {isAz ? "CV-ə bax" : "View CV"}
              </Button>
            </div>

            <a
              href="https://github.com/humbeteli"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.github}
              aria-label="GitHub profile"
            >
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path
                  fill="currentColor"
                  d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.57.1.78-.25.78-.55v-2.13c-3.2.7-3.87-1.36-3.87-1.36-.52-1.33-1.28-1.68-1.28-1.68-1.05-.72.08-.7.08-.7 1.16.08 1.77 1.2 1.77 1.2 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.55-.29-5.23-1.28-5.23-5.69 0-1.26.45-2.29 1.2-3.1-.12-.3-.52-1.47.11-3.06 0 0 .98-.31 3.2 1.18a11.1 11.1 0 0 1 5.82 0c2.22-1.5 3.2-1.18 3.2-1.18.63 1.59.23 2.76.11 3.06.75.81 1.2 1.84 1.2 3.1 0 4.42-2.69 5.4-5.25 5.68.41.36.78 1.07.78 2.16v3.2c0 .3.21.65.79.54A11.51 11.51 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z"
                />
              </svg>

              <span>GitHub</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};