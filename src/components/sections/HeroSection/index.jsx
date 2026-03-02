import Button from "../../ui/Button";
import HeadingSection from "../../ui/HeadingSection";

import "./hero-section.styles.css";

function HeroSection() {
  return (
    <section className="hero-section">
      <div className="hero-section-left">
        <h1>
          Olá, eu sou o <br />
          <span>João Emanuel</span>
        </h1>
        <p>Desenvolvedor Front-End | React.js | Node.js</p>
        <div className="hero-section-btns">
          <Button>Download CV</Button>
          <Button>Entrar em contato</Button>
        </div>
      </div>
      <div className="hero-section-right">
        <div className="hero-section-right__content">
          <HeadingSection>Teste</HeadingSection>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
