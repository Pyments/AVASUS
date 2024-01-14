import { useState } from "react";
import { Link } from "react-router-dom";

import "./NavigationBar.scss";

import logoSmall from "../../assets/images/logo-small.png";

const NavigationBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav>
        <div className="Navbar">
          <span className="nav-logo">
            <Link to="/AVASUS/">
              <img src={logoSmall} />
            </Link>
          </span>
          <div className={`nav-items ${isOpen && "open"}`}>
            <Link to="/AVASUS/">Início</Link>
            <Link to="/AVASUS/sobre">Sobre</Link>
            <Link to="/AVASUS/cursos">Cursos</Link>
            <Link to="/AVASUS/parceiros">Parceiros</Link>
            <Link to="/AVASUS/transparencia">Transparência</Link>
            <Link to="/AVASUS/contato">Contato</Link>
            <input
              className="nav-items-pesquisar"
              type="text"
              name="Pesquisar"
              placeholder="Pesquisar"
            />
            <button className="nav-items-button button-growBox" type="button">
              Entrar
            </button>
            <button className="nav-items-button button-growBox" type="button">
              Cadastrar
            </button>
          </div>
          <div
            className={`nav-toggle ${isOpen && "open"}`}
            onClick={() => setIsOpen(!isOpen)}
          >
            <div className="bar"></div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavigationBar;
