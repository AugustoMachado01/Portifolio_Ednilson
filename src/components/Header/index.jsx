import { Link, useLocation } from "react-router-dom";


import styles from "./styles.module.css";
import Ministery from "../../assets/ministerio-image.png";
import Evoluim from "../../assets/evolium-image.png";
import Feito from "../../assets/feitoemangola-image.png";
import Tradulo from "../../assets/tradulo-image.png";

import Image1 from "../../assets/Screenshot1.png";
import Image2 from "../../assets/Screenshot2.png";
import ImageEv1 from "../../assets/evolium1.png";
import ImageEv2 from "../../assets/evolium2.png";
import ImageFeito1 from "../../assets/feito1.png";
import ImageFeito2 from "../../assets/feito2.png";
import ImageTradulo1 from "../../assets/tradulo1.png";
import ImageTradulo2 from "../../assets/tradulo2.png";

export function Container({ papel, eq, vision, problem, process, solucion }) {
  const location = useLocation(); // Captura a URL atual
  const currentPath = location.pathname; // Pega apenas o pathname

  const trabalhos = [
    {
      slug: "/trabalho/ministerio-do-planeamento",
      titulo: "MINISTÉRIO DO PLANEAMENTO",
      link: "https://www.mep.gov.ao/",
      descricao: "Designer de UI/UX • Integrante do Projeto",
      imagens: [Ministery, Image1, Image2],
    },
    {
      slug: "/trabalho/evolium",
      titulo: "EVOLIUM",
      link: "https://evolium.ao/home/",
      descricao: "Projeto de Plataforma Digital",
      imagens: [Evoluim, ImageEv1, ImageEv2],
    },
    {
      slug: "/trabalho/feito-em-angola",
      titulo: "FEITO EM ANGOLA",
      link: "https://feitoemangola.gov.ao/",
      descricao: "Projeto Nacional",
      imagens: [Feito, ImageFeito1, ImageFeito2],
    },
    {
      slug: "/trabalho/tradu-lo",
      titulo: "Tradu-lo",
      link: "https://tradu-lo.com/",
      descricao: "Projeto Nacional",
      imagens: [Tradulo, ImageTradulo1, ImageTradulo2],
    },
  ];

  // Encontre o trabalho correspondente ao pathname
  const trabalhoAtual = trabalhos.find(
    (trabalho) => trabalho.slug === currentPath
  );

  // Filtra os outros trabalhos para a seção "Leia mais"
  const trabalhosRelacionados = trabalhos.filter(
    (trabalho) => trabalho.slug !== currentPath
  );

  // Caso não encontre o trabalho, exibe uma mensagem de erro
  if (!trabalhoAtual) {
    return <p>Trabalho não encontrado.</p>;
  }

  return (
    <section className={styles.work}>
      <section className={styles.work_Container}>
        <div className={styles.work_content}>
          <p className={styles.title}>{trabalhoAtual.titulo}</p>
          <p className={styles.paragraph}>{trabalhoAtual.descricao}</p>
        </div>
        <img src={trabalhoAtual.imagens[0]} alt={trabalhoAtual.titulo} />
      </section>

      <section className={styles.cards}>
        <div className={`${styles.card} ${styles.card1}`}>
          <h3>Papel</h3>
          <p>Designer de UI/UX</p>
          <p>{papel}</p>
        </div>
        <div className={styles.card}>
          <h3>Equipe</h3>
          <p>{eq}</p>
        </div>
      </section>

      <section className={styles.content}>
        <div className={styles.container}>
          <div className={styles.imageWrapper}>
            <img
              src={trabalhoAtual.imagens[1]}
              alt="Mensagem do Ministro"
              className={styles.imageLeft}
            />
          </div>
          <div className={styles.imageWrapper}>
            <img
              src={trabalhoAtual.imagens[2]}
              alt="Quem é Quem"
              className={styles.imageRight}
            />
          </div>
        </div>

        <div className={styles.texts}>
          <h1 className={styles.title}>Visão Geral</h1>
          <p>{vision}</p>
          <h1>Problema</h1>
          <p>{problem}</p>
          <h1>Processo de Design</h1>
          <p>{process}</p>
          <h1>Solução</h1>
          <p>{solucion}</p>

          <span>Ver o site</span>
          <a href={trabalhoAtual.link}>{trabalhoAtual.titulo}</a>
        </div>
      </section>

      <section className={styles.learn}>
        <p>Leia mais sobre meus estudos de caso</p>
        <div className={styles.relacionados}>
          {trabalhosRelacionados.map((trabalho) => (
            <Link to={trabalho.slug} key={trabalho.slug}>
              <img src={trabalho.imagens[0]} alt={trabalho.titulo} />
              <h3>{trabalho.titulo}</h3>
            </Link>
          ))}
        </div>
      </section>
    </section>
  );
}
