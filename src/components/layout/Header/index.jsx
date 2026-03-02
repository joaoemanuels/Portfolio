import { Link } from "react-router-dom";

import "./header.styles.css";

function Header() {
  return (
    <header className="header">
      <Link to="/" className="btn-link">
        <h1>teste</h1>
      </Link>
      <div className="header-actions">
        <Link to="/" className="btn-link">
          Entrar
        </Link>

        <Link to="/" className="btn-primary">
          Agendar
        </Link>
      </div>
    </header>
  );
}

export default Header;
