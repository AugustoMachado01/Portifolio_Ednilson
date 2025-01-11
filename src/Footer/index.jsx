import styles from "./styles.module.css";
import ImageLink from "../assets/Link.svg";

export function Footer() {
  return (
    <section className={styles.section_container}>
      <div>
        <p>CONTACTO: +244 934187530</p>
        <p>Email: araujoednilson9@gmail.com</p>
      </div>
      <div className={styles.content}>
        <img src={ImageLink} alt="linkedin" />
        <a href="">LinkedIn</a>
      </div>
    </section>
  );
}
