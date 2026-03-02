import HeadingSection from "../../ui/HeadingSection";

import "./footer-section.styles.css";

function FooterSection() {
  return (
    <section className="footer-section">
      <div className="footer-section-container">
        <HeadingSection>Teste</HeadingSection>

        <div className="footer-grid">
          <div className="footer-item">
            <div className="footer-icon">
              <img src="" alt="" />
            </div>
            <h3>E-mail</h3>
            <p>ertjhertj@gmail.com</p>
          </div>

          <div className="footer-item">
            <div className="footer-icon">
              <img src="" alt="" />
            </div>
            <h3>Telefone</h3>
            <p>(12) 91234-1234</p>
          </div>

          <div className="footer-item">
            <div className="footer-icon">
              <img src="" alt="" />
            </div>
            <h3>Linkedin</h3>
            <p>@gwwgeg</p>
          </div>

          <div className="footer-item">
            <div className="footer-icon">
              <img src="" alt="" />
            </div>
            <h3>Github</h3>
            <p>@ewgwegtg</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FooterSection;
