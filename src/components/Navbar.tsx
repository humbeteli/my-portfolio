import React, { useState } from "react";
import { useLanguage } from "../hooks/useLanguage";
import { useTheme } from "../hooks/useTheme";
import { ThemeToggle } from "./ThemeToggle";
import { LanguageSwitcher } from "./LanguageSwitcher";
import styles from "./Navbar.module.css";
import loqo from "/images/logo-navbar.png";
import loqoLight from "/images/logo-navbar-light.png";

interface NavbarProps {
  onNavClick: (sectionId: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onNavClick }) => {
  const { t } = useLanguage();
  const { theme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { id: "about", label: t.navbar.about },
    { id: "skills", label: t.navbar.skills },
    { id: "experience", label: t.navbar.experience },
    { id: "projects", label: t.navbar.projects },
    { id: "contact", label: t.navbar.contact },
  ];

  const handleNavClick = (sectionId: string) => {
    onNavClick(sectionId);
    setIsMenuOpen(false);
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <img src={theme === "light" ? loqoLight : loqo} alt="Logo" />
        </div>

        <button
          className={styles.hamburger}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
          aria-expanded={isMenuOpen}
        >
          <span className={styles.line} />
          <span className={styles.line} />
          <span className={styles.line} />
        </button>

        <div className={`${styles.navLinks} ${isMenuOpen ? styles.open : ""}`}>
          {navItems.map((item) => (
            <button
              key={item.id}
              className={styles.navLink}
              onClick={() => handleNavClick(item.id)}
            >
              {item.label}
            </button>
          ))}
        </div>

        <div className={styles.controls}>
          <LanguageSwitcher />
          <div className={styles.divider} />
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
};
