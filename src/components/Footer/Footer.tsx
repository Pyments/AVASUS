import { Link } from "react-router-dom";
import "./Footer.scss";

import facebookIcon from "../../assets/feather/facebook.svg";
import intagramIcon from "../../assets/feather/instagram.svg";
import twitterIcon from "../../assets/feather/twitter.svg";
import logoLais from "../../assets/images/logo-lais.svg"
import logoUFRN from "../../assets/images/UFRN-logo.png"

function Footer() {
  return (
    <>
      <footer className="main-footer">
        <div className="footer-realizacao">
          <span className="footer-title">Realização</span>
          <img
            src={logoLais}
            alt=""
          />
          <img
            src={logoUFRN}
            alt=""
          />
        </div>
        <div className="footer-lower">
          <div className="footer-lais">
            <img src={logoLais} alt="Logo LAIS" />
            <p>Laboratório de Inovação Tecnológica em Saúde</p>
          </div>
          <div className="footer-links-uteis">
            <span className="footer-title">Links Úteis</span>
            <ul>
              <Link to="/AVASUS/">
                <li className="navbar-group-item">Início</li>
              </Link>
              <Link to="/AVASUS/sobre">
                <li className="navbar-group-item">Sobre Nós</li>
              </Link>
              <Link to="/AVASUS/cursos">
                <li className="navbar-group-item">Cursos</li>
              </Link>
              <Link to="/AVASUS/parceiros">
                <li className="navbar-group-item">Parceiros</li>
              </Link>
              <Link to="/AVASUS/transparencia">
                <li className="navbar-group-item">Transparência</li>
              </Link>
            </ul>
          </div>
          <div className="footer-redes">
            <span className="footer-title">Redes Sociais</span>
            <div>
              <a href="https://www.facebook.com/sgtes" target="_blank">
                <img src={facebookIcon} alt="Ícone Facebook" />
              </a>
              <a href="https://twitter.com/laishuol" target="_blank">
                <img src={twitterIcon} alt="Ícone Twitter" />
              </a>
              <a href="https://www.instagram.com/laishuol/" target="_blank">
                <img src={intagramIcon} alt="Ícone Instagram" />
              </a>
            </div>
          </div>
        </div>
          <div className="footer-direitos">
            2023 @ LAIS (HUOL). Todos os direitos reservados
          </div>
      </footer>
    </>
  );
}

export default Footer;
