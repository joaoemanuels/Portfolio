import HeadingSection from "../../ui/HeadingSection";

import "./about-section.styles.css";

function AboutSection() {
  return (
    <section className="about-section">
      <div className="about-section-container">
        <HeadingSection>Teste</HeadingSection>
        <p>
          Desenvolvedor Front-End com foco na criação de interfaces modernas,
          responsivas e orientadas à performance. Possuo experiência no
          desenvolvimento de aplicações com React.js, JavaScript, HTML, CSS e
          integração com APIs<br />
          <br />
          Tenho forte atenção à organização de código, componentização, boas
          práticas de UX/UI e otimização para SEO. Gosto de transformar ideias
          em produtos digitais funcionais, com estrutura escalável e foco na
          experiência do usuário. Estou em constante evolução, buscando
          aprimorar arquitetura, performance e qualidade técnica em cada projeto
          desenvolvido.
        </p>
      </div>
    </section>
  );
}

export default AboutSection;
