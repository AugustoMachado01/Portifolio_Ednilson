 
 import AOS from 'aos';
import 'aos/dist/aos.css';

import Logo from "../assets/Ednilson.png";
 
import emailjs from "emailjs-com";
import styles from "./styles.module.css";
import { useEffect, useState } from "react";

export function Contact() {
  const [formData, setFormData] = useState({
    sms: "",
    name: "",
    email: "",
  });


      useEffect(() => {
      AOS.init({ duration: 1000 });
  }, []);

  const handleChange = (e ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e ) => {
    e.preventDefault();

    // Substitua pelos seus IDs do EmailJS
    const SERVICE_ID = "seu_service_id";
    const TEMPLATE_ID = "seu_template_id";
    const USER_ID = "seu_user_id";

    emailjs
      .send(SERVICE_ID, TEMPLATE_ID, formData, USER_ID)
      .then((response) => {
        console.log("E-mail enviado com sucesso!", response.status, response.text);
        alert("Mensagem enviada com sucesso!");
        setFormData({ sms: "", name: "", email: "" }); // Limpa o formulário
      })
      .catch((error) => {
        console.error("Erro ao enviar o e-mail:", error);
        alert("Ocorreu um erro ao enviar a mensagem. Tente novamente.");
      });
  };

  return (
    <section  className={styles.container}  data-aos="fade-up">
       <div>
         <img src={Logo} alt="Ednilson" />
      </div>
      <form className={styles.message} onSubmit={handleSubmit}>
        <label htmlFor="sms">Mensagem</label>
        <textarea name="sms" id="sms" value={formData.sms} onChange={handleChange}></textarea>
        
        <label htmlFor="name">Nome</label>
        <textarea name="name" id="name" value={formData.name} onChange={handleChange}></textarea>
        
        <label htmlFor="email">Email</label>
        <textarea name="email" id="email" value={formData.email} onChange={handleChange}></textarea>
        
        <button type="submit">Enviar</button>
      </form>
    </section>
  );
}
