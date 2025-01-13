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
        className={styles.menu_button}
        onClick={toggleMenu}
        aria-label="Toggle navigation"
      >
        ☰
      </button>
      <ul
        className={`${styles.nav_links} ${isMenuOpen ? styles.show_menu : ""}`}
      >
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/">Resumo</Link>
        </li>
        <li>
          <Link to="/contacto">Contactar</Link>
        </li>
      </ul>
    </section>
  );
}
