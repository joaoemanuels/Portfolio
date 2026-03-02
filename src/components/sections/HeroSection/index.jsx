import "./hero-section.styles.css";

function HeroSection() {
  return (
    <section className="hero-section">
      <div className="hero-section-left">
        <h1>
          Olá, eu sou o <br />
          João Emanuel
        </h1>
        <p>Desenvolvedor Front-End | React.js | Node.js</p>
        <div className="hero-section-btns">
          <button type="button">Downalod CV</button>
          <button type="button">Entrar em contato</button>
        </div>
      </div>
      <div className="hero-section-right">
        <div className="hero-section-right__content">
          <h2>testse</h2>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
