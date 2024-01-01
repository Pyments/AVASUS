import "../style/components/MainHeader.scss";
import { Link } from "react-router-dom";

const MainHeader = () => {
  return (
    <>
      <header className="navbar">
        <ul className="list-group">
          <Link to="/">
            <li className="list-group-item">
              <img src="./src/assets/logo-small.png" alt="Logo AVASUS" />
            </li>
          </Link>

          <Link to="/">
            <li className="list-group-item">Início</li>
          </Link>
          <Link to="/sobre">
            <li className="list-group-item">Sobre Nós</li>
          </Link>
          <Link to="/cursos">
            <li className="list-group-item">Cursos</li>
          </Link>
          <Link to="/parceiros">
            <li className="list-group-item">Parceiros</li>
          </Link>
          <Link to="/transparencia">
            <li className="list-group-item">Transparência</li>
          </Link>
          <Link to="/contato">
            <li className="list-group-item">Contato</li>
          </Link>
          <li className="list-group-item header-searchbar">===Searchbar===</li>
          <li className="list-group-item">Entrar</li>
          <li className="list-group-item">Cadastrar</li>
        </ul>
      </header>
    </>
  );
};

export default MainHeader;
