import "../style/MainHeader.scss";
import { Link } from "react-router-dom";

const MainHeader = () => {
  return (
    <>
      <header className="main-header">
        <ul className="list-group">
          <Link to="/">
            <li className="list-group-item">
              <img src="#" alt="Logo AVASUS" />
            </li>
          </Link>
          <Link to="/"><li className="list-group-item">Início</li></Link>
          <li className="list-group-item">Sobre Nós</li>
          <li className="list-group-item">Cursos</li>
          <li className="list-group-item">Parceiros</li>
          <li className="list-group-item">Transparência</li>
          <Link to="/contact"><li className="list-group-item">Contato</li></Link>
          <li className="list-group-item header-searchbar">===Searchbar===</li>
          <li className="list-group-item">Entrar</li>
          <li className="list-group-item">Cadastrar</li>
        </ul>
      </header>
    </>
  );
};

export default MainHeader;
