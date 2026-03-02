import HeadingSection from "../../ui/HeadingSection";

import "./about-section.styles.css";

function AboutSection() {
  return (
    <section className="about-section">
      <div className="about-section-container">
        <HeadingSection>Teste</HeadingSection>
        <p>
          Desenvolvedor Front-end especializado em criar experiências digitais
          rápidas, escaláveis e com foco em performance. Tenho sólida
          experiência em grandes projetos, utilizando tecnologias modernas como
          React.js, Next.js, TypeScript, Redux, Styled Components, Material UI e
          Tailwind CSS. Sou apaixonado pelo desenvolvimento de componentes
          reutilizáveis, Design Systems, animações fluidas e por evoluir
          continuamente a performance e a acessibilidade das aplicações.
        </p>
      </div>
    </section>
  );
}

export default AboutSection;
