import styles from "./styles.module.css";
import ImageLink from "../assets/Link.svg";

export function Footer() {
  return (
    <section className={styles.section_container}>
      <div className={styles.footer}>
        <p>CONTACTO: <span> +244 934187530</span></p>
        <p>Email: <span>araujoednilson9@gmail.com</span></p>
      </div>
      <div className={styles.line}></div>
      <div className={styles.content}>
        <img src={ImageLink} alt="linkedin" />
        <a href="https://www.linkedin.com/in/ednilsonaraujo/">LinkedIn</a>
      </div>
    </section>
  );
}
