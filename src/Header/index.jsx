import { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./styles.module.css";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <section className={styles.section_container}>
      <h3>Ednilson Araujo</h3>
      <button
        className={`${styles.menu_button} ${isMenuOpen ? styles.menu_open : ""}`}
        onClick={toggleMenu}
        aria-label="Toggle navigation"
      >
        <span className={styles.line}></span>
        <span className={styles.line}></span>
      </button>
      <div
        className={`${styles.menu_container} ${isMenuOpen ? styles.show_menu : ""}`}
        onClick={toggleMenu}
      >
        <ul className={styles.nav_links}>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/resume">Resume</Link></li>
          <li><Link to="/contact">Contacto</Link></li>
        </ul>
      </div>
    </section>
  );
}
