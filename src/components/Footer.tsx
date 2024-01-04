import { Link } from "react-router-dom";
import "../style/components/Footer.scss";

import facebookIcon from "/AVASUS/src/assets/feather/facebook.svg";
import intagramIcon from "/AVASUS/src/assets/feather/instagram.svg";
import twitterIcon from "/AVASUS/src/assets/feather/twitter.svg";

function Footer() {
  return (
    <>
      <footer className="main-footer">
        <div className="footer-realizacao">
          <span className="footer-title">Realização</span>
          <img
            src="/AVASUS/src/assets/images/logo-avasus-footer-v.png"
            alt=""
          />
          <img
            src="/AVASUS/src/assets/images/logo-avasus-footer-v.png"
            alt=""
          />
        </div>
        <div className="footer-lower">
          <div className="footer-lais">
            <div>IMG LAIS esquerda</div>
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
                <img src={twitterIcon} alt="Ícone Facebook" />
              </a>
              <a href="https://www.instagram.com/laishuol/" target="_blank">
                <img src={intagramIcon} alt="Ícone Facebook" />
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
