import React from "react";
import { useLanguage } from "../hooks/useLanguage";
import layoutStyles from "../styles/layout.module.css";
import styles from "./Skills.module.css";

const skillsData = {
  frontend: ["HTML", "CSS", "JavaScript", "TypeScript", "React", "Next.js"],
  stateData: ["Redux", "Zustand", "React Query", "REST APIs"],
  tools: ["Git", "GitHub", "Vite", "Figma"],
};

export const Skills: React.FC = () => {
  const { language } = useLanguage();

  const categories = [
    {
      number: "01",
      title: language === "az" ? "Frontend" : "Frontend",
      skills: skillsData.frontend,
    },
    {
      number: "02",
      title: language === "az" ? "State & Data" : "State & Data",
      skills: skillsData.stateData,
    },
    {
      number: "03",
      title: language === "az" ? "Alətlər" : "Tools",
      skills: skillsData.tools,
    },
  ];

  return (
    <section id="skills" className={`${styles.skills} ${layoutStyles.section}`}>
      <div className={layoutStyles.container}>
        <div className={styles.headingRow}>
          <span className={styles.number}>02</span>

          <h2 className={styles.title}>
            {language === "az" ? "Nə ilə işləyirəm" : "What I work with"}
          </h2>
        </div>

        <div className={styles.list}>
          {categories.map((category) => (
            <div className={styles.category} key={category.number}>
              <span className={styles.categoryNumber}>
                {category.number}
              </span>

              <h3>{category.title}</h3>

              <div className={styles.skillsList}>
                {category.skills.map((skill) => (
                  <span key={skill}>{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};