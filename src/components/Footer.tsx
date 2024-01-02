import { Link } from "react-router-dom";
import "../style/components/Footer.scss"

function Footer() {
  return (
    <>
      <footer className="main-footer">
        <div  className="footer-realizacao">
          <span>Realização</span>
          <img src="/src/assets/logo-avasus-footer-v.png" alt="" />
          <img src="/src/assets/logo-avasus-footer-v.png" alt="" />          
        </div>
        <div className="footer-lais">
          <div>IMG LAIS esquerda</div>
          <p>Laboratório de Inovação Tecnológica em Saúde</p>
        </div>
        <div className="footer-links-uteis">
          <h2>Links Úteis</h2>
          <ul>
            <Link to="/">
              <li className="navbar-group-item">Início</li>
            </Link>
            <Link to="/sobre">
              <li className="navbar-group-item">Sobre Nós</li>
            </Link>
            <Link to="/cursos">
              <li className="navbar-group-item">Cursos</li>
            </Link>
            <Link to="/parceiros">
              <li className="navbar-group-item">Parceiros</li>
            </Link>
            <Link to="/transparencia">
              <li className="navbar-group-item">Transparência</li>
            </Link>
          </ul>
        </div>
        <div className="footer-redes">
          <span>Redes Sociais</span>
          <div>icone facbook</div>
          <div>icone twitter</div>
          <div>icone instagram</div>
        </div>
        <div className="footer-direitos">2023 @ LAIS (HUOL). Todos os direitos reservados</div>
      </footer>
    </>
  );
}

export default Footer;
