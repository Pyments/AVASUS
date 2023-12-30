import "../style/MainHeader.scss";

const MainHeader = () => {
  return (
    <>
      <header className="main-header">
        <ul className="list-group">
          <li className="list-group-item">
            <img src="#" alt="Logo AVASUS" />
          </li>
          <li className="list-group-item">Início</li>
          <li className="list-group-item">Sobre Nós</li>
          <li className="list-group-item">Cursos</li>
          <li className="list-group-item">Parceiros</li>
          <li className="list-group-item">Transparência</li>
          <li className="list-group-item">Contato</li>
          <li className="list-group-item header-searchbar">===Searchbar===</li>
          <li className="list-group-item">Entrar</li>
          <li className="list-group-item">Cadastrar</li>
        </ul>
      </header>
    </>
  );
};

export default MainHeader;
