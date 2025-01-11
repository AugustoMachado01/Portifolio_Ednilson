import { Link } from "react-router-dom";
import styles from "./styles.module.css";

export function Header() {
  return (
    <section className={styles.section_container}>
      <h3>Ednilson Araujo</h3>
      <ul>
        <Link to="/">Home</Link>
        <Link to="/">Resumo</Link>
        <Link to="/">Contactar</Link>
      </ul>
    </section>
  );
}
