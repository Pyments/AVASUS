import { Link } from "react-router-dom";
import "../style/components/Footer.scss"

function Footer() {
  return (
    <>
      <footer className="main-footer">
        <div>
          <span className="footer-realizacao">Realização</span>
        </div>
        <div>
          <img src="" alt="Logo LAIS branca" />
          <p>Laboratório de Inovação Tecnológica em Saúde</p>
        </div>
        <div>
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
        <div>
          <span>Redes Sociais</span>
          <img src="" alt="LAIS Facebook" />
          <img src="" alt="LAIS Twitter" />
          <img src="" alt="LAIS Instagram" />
        </div>
        <div>2023 @ LAIS (HUOL). Todos os direitos reservados</div>
      </footer>
    </>
  );
}

export default Footer;
