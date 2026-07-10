import HeadingSection from "../../ui/HeadingSection";

import "./about-section.styles.css";

function AboutSection() {
  return (
    <section id="about" className="about-section">
      <div className="about-section-container">
        <HeadingSection>Sobre mim</HeadingSection>
        <p>
          Desenvolvedor em transição para Back-End, com experiência prática em
          modelagem de dados, segurança e automação usando Node.js, PostgreSQL e
          Supabase (RLS, JSONB, pg_cron). Venho de uma base sólida em React.js e
          JavaScript, o que me dá visão completa do fluxo de dados entre API e
          interface.
          <br />
          <br />
          Já entreguei projetos full stack do zero ao deploy, com foco em
          integridade de dados, autenticação e arquitetura escalável. Tenho
          forte atenção à organização de código, boas práticas de API e
          modelagem de banco de dados. Estou em constante evolução, buscando
          aprofundar arquitetura backend, performance e qualidade técnica em
          cada projeto desenvolvido.
        </p>
      </div>
    </section>
  );
}

export default AboutSection;
