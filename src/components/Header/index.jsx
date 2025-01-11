import styles from "./styles.module.css";

import Ministery from "../../assets/ministerio-image.png";
import Evoluim from "../../assets/evolium-image.png";
import Feito from "../../assets/feitoemangola-image.png";
import Tradulo from "../../assets/tradulo-image.png";

import Image1 from "../../assets/Screenshot1.png";
import Image2 from "../../assets/Screenshot2.png";

export function Container({ id }) {
  const trabalhos = [
    {
      id: 1,
      titulo: "MINISTÉRIO DO PLANEAMENTO",
      descricao: "Designer de UI/UX • Integrante do Projeto",
      imagens: [Ministery, Image1, Image2],
      link: "/trabalhos/ministerio-do-planeamento",
    },
    {
      id: 2,
      titulo: "EVOLIUM",
      descricao: "Projeto de Plataforma Digital",
      imagens: [Evoluim],
      link: "/trabalhos/evolium",
    },
    {
      id: 3,
      titulo: "FEITO EM ANGOLA",
      descricao: "Projeto Nacional",
      imagens: [Feito],
      link: "/trabalhos/feito-em-angola",
    },
    {
      id: 4,
      titulo: "Tradu-lo",
      descricao: "Projeto Nacional",
      imagens: [Tradulo],
      link: "/trabalhos/feito-em-angola",
    },
  ];

  const trabalhoAtual = trabalhos.filter(
    (trabalho) => trabalho.id !== parseInt(id)
  );

  return (
    <section className={styles.work}>
      <section className={styles.work_Container}>
        <div>
          <h1>MINISTÉRIO DO PLANEAMENTO</h1>
          <p>Designer de UI/UX • Integrante do Projeto</p>
        </div>
        <img src={Ministery} alt="sd" />
      </section>

      <section className={styles.cards}>
        <div className={`${styles.card} ${styles.card1}`}>
          <h3>Papel</h3>
          <p>Designer de UI/UX</p>
          <p>integrante do Projeto</p>
        </div>
        <div className={styles.card}>
          <h3>Equipe</h3>
          <p>Evolium(Angola)</p>
        </div>
      </section>
      <section className={styles.content}>
        <div className={styles.container}>
          <div className={styles.imageWrapper}>
            <img
              src={Image1}
              alt="Mensagem do Ministro"
              className={styles.imageLeft}
            />
          </div>
          <div className={styles.imageWrapper}>
            <img src={Image2} alt="Quem é Quem" className={styles.imageRight} />
          </div>
        </div>

        <div className={styles.texts}>
          <h1 className={styles.title}>Visão Geral</h1>
          <p>
            O projeto visou modernizar a experiência digital do Ministério do
            Planeamento de Angola, promovendo maior eficiência na comunicação
            institucional e acessibilidade para cidadãos e colaboradores.
          </p>
          <h1>Problema</h1>
          <p>
            A plataforma anterior apresentava navegação confusa, design
            desatualizado e falta de funcionalidades que atendiam às
            necessidades específicas dos usuários, prejudicando o acesso às
            informações e serviços.
          </p>
          <h1>Processo de Design</h1>
          <p>
            Iniciamos com uma pesquisa detalhada para compreender as
            necessidades dos usuários e objetivos do Ministério. Foram
            realizados workshops de co-criação, testes de usabilidade e análises
            heurísticas. O design foi iterado em ciclos, garantindo soluções
            centradas no usuário e alinhadas aos valores institucionais.
          </p>
          <h1>Solução</h1>
          <p>
            Implementamos um redesign completo da interface, priorizando um
            layout responsivo, navegação intuitiva e integração de
            funcionalidades essenciais, como busca otimizada e painéis
            interativos para acesso rápido a dados e relatórios.
          </p>

          <span>Ver o site</span>
          <a href="">Ministério do planeamento</a>
        </div>
      </section>

      <section className={styles.learn}>
        <p>Leia mais sobre meus estudos de caso</p>
        <div className={styles.relacionados}>
          {trabalhoAtual.map((trabalho) => (
            <div key={trabalho.id}>
              <img src={trabalho.imagens[0]} alt={trabalho.titulo} />
              <h3>{trabalho.titulo}</h3>
            </div>
          ))}
        </div>
      </section>
    </section>
  );
}
