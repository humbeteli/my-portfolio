import React from "react";
import { useLanguage } from "../hooks/useLanguage";
import layoutStyles from "../styles/layout.module.css";
import styles from "./Experience.module.css";

interface ExperienceItem {
  year: string;
  company: string;
  titleEn: string;
  titleAz: string;
  descriptionEn: string;
  descriptionAz: string;
  certificateUrl: string;
}

const experienceData: ExperienceItem[] = [
  {
    year: "2025",
    company: "Software Village MMC",
    titleEn: "Frontend Development Bootcamp",
    titleAz: "Frontend Development Bootcamp",
    descriptionEn:
      "Completed a 6-month frontend development bootcamp focused on React, TypeScript, responsive design and component-based development.",
    descriptionAz:
      "React, TypeScript, responsive dizayn və komponent əsaslı development istiqamətlərini əhatə edən 6 aylıq frontend development bootcamp proqramını tamamladım.",
    certificateUrl:
      "/certificates/Honors-Certificate-Software-Village.pdf",
  },
  {
    year: "2026",
    company: "DevJoint",
    titleEn: "Frontend Development Internship",
    titleAz: "Frontend Development Internship",
    descriptionEn:
      "Completed a practical frontend development internship focused on React development, real-world tasks and professional workflows.",
    descriptionAz:
      "React development, real layihə tapşırıqları və professional development workflow üzərində fokuslanan frontend internship proqramını tamamladım.",
    certificateUrl: "/certificates/DevJoint_Certificate.pdf",
  },
];

export const Experience: React.FC = () => {
  const { language } = useLanguage();

  return (
    <section
      id="experience"
      className={`${styles.experience} ${layoutStyles.section}`}
    >
      <div className={layoutStyles.container}>
        <div className={styles.headingRow}>
          <span className={styles.number}>03</span>

          <h2 className={styles.title}>
            {language === "az" ? "Yolum" : "My path"}
          </h2>
        </div>

        <div className={styles.list}>
          {experienceData.map((item) => (
            <article className={styles.item} key={item.company}>
              <div className={styles.year}>{item.year}</div>

              <div className={styles.content}>
                <h3>{item.company}</h3>

                <p className={styles.role}>
                  {language === "en" ? item.titleEn : item.titleAz}
                </p>

                <p className={styles.description}>
                  {language === "en"
                    ? item.descriptionEn
                    : item.descriptionAz}
                </p>

                <a
                  href={item.certificateUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.certificate}
                >
                  {language === "az"
                    ? "Sertifikata bax"
                    : "View certificate"}{" "}
                  ↗
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};