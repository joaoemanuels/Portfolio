import { useState } from "react";
import whatsapp from "@/assets/icons/whatsapp.svg";
import "./header.styles.css";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header">
      <a href="#hero" className="logo">
        João.dev
      </a>

      <nav className={`nav ${menuOpen ? "active" : ""}`}>
        <a href="#hero" onClick={() => setMenuOpen(false)}>
          Início
        </a>
        <a href="#about" onClick={() => setMenuOpen(false)}>
          Sobre
        </a>
        <a href="#skills" onClick={() => setMenuOpen(false)}>
          Skills
        </a>
        <a href="#projects" onClick={() => setMenuOpen(false)}>
          Projetos
        </a>
        <a href="#contact" onClick={() => setMenuOpen(false)}>
          Contato
        </a>
      </nav>

      <div className="header-right">
        <a
          href="https://wa.me/5583999999999"
          target="_blank"
          rel="noopener noreferrer"
          className="whatsapp-btn"
        >
          <img src={whatsapp} alt="WhatsApp" />
        </a>

        <button
          className={`menu-toggle ${menuOpen ? "active" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  );
}

export default Header;
