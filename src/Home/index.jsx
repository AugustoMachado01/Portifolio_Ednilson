import styles from "./styles.module.css";
import ImageHome from "../assets/Ednilson.png";
import ImageHi from "../assets/SVG.svg";
import ImageMinisterio from "../assets/ministerio-image.png";
import ImageEvolium from "../assets/evolium-image.png";
import ImageFeito from "../assets/feitoemangola-image.png";
import ImageTradulo from "../assets/tradulo-image.png";
import ImageVetor from "../assets/Vector.svg";

import Icon1 from "../assets/evolium-logo-svg.svg";
import Icon2 from "../assets/plantify.svg";
import Icon3 from "../assets/Ocaso.svg";
import Icon4 from "../assets/Field.png";
import { Link } from "react-router-dom";

export function Home() {
  const works = [
    {
      title: "MINISTÉRIO DO PLANEAMENTO",
      description:
        "Redesign do website do Ministério do Planeamento de Angola, com o objetivo de modernizar e otimizar a experiência dos usuários na plataforma digital do órgão.",
      image: ImageMinisterio,
      link: "/trabalho/ministerio-do-planeamento",
    },
    {
      title: "EVOLIUM",
      description:
        "Evolium Angola, uma plataforma inovadora voltada para a transformação digital de negócios angolanos.",
      image: ImageEvolium,
      link: "/trabalho/evolium",
    },
    {
      title: "FEITO EM ANGOLA",
      description:
        "Projeto Feito em Angola, uma iniciativa voltada para ajudar a certificar produtos nacionais e incentivar o consumo de produtos locais.",
      image: ImageFeito,
      link: "/trabalho/feito-em-angola",
    },
    {
      title: "TRADU-LO",
      description:
        "Um projeto que constrói a tradução de documentos corporativos e técnicos com precisão.",
      image: ImageTradulo,
      link: "/trabalho/tradu-lo",
    },
  ];

  const participations = [
    { name: "Evolum", icon: Icon1 },
    { name: "iPlanify", icon: Icon2 },
    { name: "OCASO", icon: Icon3 },
    { name: "Field", icon: Icon4 },
  ];

  return (
    <section>
      <div className={styles.section_container}>
        <div className={styles.logo}>
          <img src={ImageHome} alt="Ednilson" />
        </div>
        <section className={styles.content}>
          <div>
            <h1>
              Hi,
              <span>
                <img src={ImageHi} alt="hi" />
                <br />
              </span>
              I'm Ednilson Araújo
            </h1>
            <span>UX/UI Designer</span>
          </div>

          <div>
            <p>
              Com 2 anos de experiência, tenho conhecimentos em design de
              software, cobrindo regras de negócios. Destaco minha habilidade em
              entregar produtos eficientes, trabalhando de perto com colegas,
              engenheiros e partes interessadas para melhorar constantemente as
              experiências do usuário. Essas habilidades não só complementam meu
              trabalho em design, mas também fortalecem minha colaboração com
              desenvolvedores. Essa combinação de habilidades permite uma
              abordagem completa na criação de soluções inovadoras. Estou
              comprometido em contribuir ativamente para o sucesso de projetos
              desafiadores, sempre buscando a excelência na entrega de produtos
              e experiências que excedam as expectativas dos usuários.
            </p>
          </div>
        </section>
      </div>

      <div className={styles.article}>
        <section className={styles.participationsSection}>
          <div className={styles.textContainer}>
            <p className={styles.participationText}>Participação</p>
          </div>
          <div className={styles.iconsContainer}>
            {participations.map((item, index) => (
              <div key={index} className={styles.participationItem}>
                <img src={item.icon} alt={item.name} className={styles.icon} />
              </div>
            ))}
          </div>
        </section>

        <section className={styles.worksSection}>
          <h2 className={styles.sectionTitle}>Trabalhos</h2>
          <div className={styles.cardsContainer}>
            {works.map((work, index) => (
              <div key={index} className={styles.card}>
                <img
                  src={work.image}
                  alt={work.title}
                  className={styles.cardImage}
                />
                <h3 className={styles.cardTitle}>{work.title}</h3>
                <p className={styles.cardDescription}>{work.description}</p>
                <Link to={work.link} className={styles.cardLink}>
                  <p>Ver projeto</p>
                  <img src={ImageVetor} alt="" />
                </Link>
              </div>
            ))}
          </div>
        </section>
      </div>
    </section>
  );
}
