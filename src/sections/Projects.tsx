import React from "react";
import { useLanguage } from "../hooks/useLanguage";
import { projects } from "../data/projects";
import layoutStyles from "../styles/layout.module.css";
import styles from "./Projects.module.css";

export const Projects: React.FC = () => {
  const { language } = useLanguage();

  return (
    <section
      id="projects"
      className={`${styles.projects} ${layoutStyles.section}`}
    >
      <div className={layoutStyles.container}>
        <div className={styles.headingRow}>
          <span className={styles.number}>04</span>

          <div>
            <p className={styles.eyebrow}>
              {language === "az" ? "Seçilmiş işlər" : "Selected work"}
            </p>

            <h2 className={styles.title}>
              {language === "az"
                ? "Qurduğum layihələr"
                : "Things I’ve built"}
            </h2>
          </div>
        </div>

        <div className={styles.projectsList}>
          {projects.map((project) => (
            <article className={styles.project} key={project.id}>
              <div className={styles.projectTop}>
                <span className={styles.projectNumber}>
                  {project.number}
                </span>

                <h3 className={styles.projectTitle}>
                  {language === "en"
                    ? project.titleEn
                    : project.titleAz}
                </h3>

                <span className={styles.projectArrow}>↗</span>
              </div>

              <div className={styles.projectBody}>
                <p className={styles.description}>
                  {language === "en"
                    ? project.descriptionEn
                    : project.descriptionAz}
                </p>

                <div className={styles.bottom}>
                  <div className={styles.technologies}>
                    {project.technologies.map((tech) => (
                      <span key={tech}>{tech}</span>
                    ))}
                  </div>

                  <div className={styles.links}>
                    {project.githubUrl !== "#" && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        GitHub ↗
                      </a>
                    )}

                    {project.liveUrl !== "#" && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Live Demo ↗
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};