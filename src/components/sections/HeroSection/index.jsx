import Button from "../../ui/Button";

import "./hero-section.styles.css";

function HeroSection() {
  return (
    <section id="hero" className="hero-section">
      <div className="hero-section-left">
        <h1>
          Olá, eu sou o <br />
          <span>João Emanuel</span>
        </h1>
        <p>Desenvolvedor Front-End | React.js | Node.js</p>
        <div className="hero-section-btns">
          <Button>Download CV</Button>
          <a
            href="https://wa.me/5583993650322"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button>Entrar em contato</Button>
          </a>
        </div>
      </div>
      <div className="hero-section-right">
        <div className="hero-section-right__content">
          <div className="container-image">
            <img src="" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
