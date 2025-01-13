import styles from "./styles.module.css";

import Logo from "../assets/Ednilson.png";

export function Contact() {
  return (
    <section className={styles.container}>
      <div>
        <img src={Logo} alt="Ednilson" />
      </div>
      <div className={styles.message}>
        <label htmlFor="sms">Mensagem</label>
        <textarea name="sms" id="sms"></textarea>
        <label htmlFor="name">Nome</label>
        <textarea name="name" id="name" cols="30" rows="10"></textarea>
        <label htmlFor="email">Email</label>
        <textarea name="email" id="email" cols="30" rows="10"></textarea>
        <button>Enviar</button>
      </div>
    </section>
  );
}
