import "../style/components/MainHeader.scss";
import { Link } from "react-router-dom";

const MainHeader = () => {
  return (
    <>
      <nav className="navbar">
        <ul className="navbar-group">
          <Link to="/AVASUS/">
            <li className="navbar-group-item">
              <img src="/AVASUS/src/assets/images/logo-small.png" alt="Logo AVASUS" />
            </li>
          </Link>

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
          <Link to="/AVASUS/contato">
            <li className="navbar-group-item">Contato</li>
          </Link>
          <li className="navbar-group-item"><input type="text" id="nav-searchbar" placeholder="Pesquisar..."/></li>
          <li className="navbar-group-item"><button className="nav-button nav-button-entrar">Entrar</button></li>
          <li className="navbar-group-item"><button className="nav-button nav-button-cadastrar">Cadastrar</button></li>
        </ul>
      </nav>
    </>
  );
};

export default MainHeader;
