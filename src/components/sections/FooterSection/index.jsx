import HeadingSection from "../../ui/HeadingSection";

import email from "@/assets/icons/email.svg";
import phone from "@/assets/icons/phone.svg";
import linkedin from "@/assets/icons/linkedin.svg";
import github from "@/assets/icons/github.svg";

import "./footer-section.styles.css";

function FooterSection() {
  return (
    <section id="contact" className="footer-section">
      <div className="footer-section-container">
        <HeadingSection>Contato</HeadingSection>

        <div className="footer-grid">
          <a href="mailto:Jemanuel.pi@gmail.com" className="footer-item">
            <div className="footer-icon">
              <img src={email} alt="" />
            </div>
            <h3>E-mail</h3>
            <p>Jemanuel.pi@gmail.com</p>
          </a>

          <a
            href="https://wa.me/5583993650322"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-item"
          >
            <div className="footer-icon">
              <img src={phone} alt="" />
            </div>
            <h3>whatsapp</h3>
            <p>(83) 99365-0322</p>
          </a>

          <a
            href="https://www.linkedin.com/in/jo%C3%A3o-emanuel-b4573221b/"
            className="footer-item"
          >
            <div className="footer-icon">
              <img src={linkedin} alt="" />
            </div>
            <h3>Linkedin</h3>
            <p>@joão-emanuel-b4573221b</p>
          </a>

          <a href="https://github.com/joaoemanuels" className="footer-item">
            <div className="footer-icon">
              <img src={github} alt="" />
            </div>
            <h3>Github</h3>
            <p>@joaoemanuels</p>
          </a>
        </div>
      </div>
    </section>
  );
}

export default FooterSection;
