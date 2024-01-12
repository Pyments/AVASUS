import NavigationBar from "../../components/MainHeader/NavigationBar";
import Tranparencia_DadosGerais from "../../components/Tranparencia_DadosGerais/Tranparencia_DadosGerais";
import Transparencia_UsuariosPorCurso from "../../components/Transparencia_UsuariosPorCurso/Transparencia_UsuariosPorCurso";
import Transparencia_UsuariosPorEstado from "../../components/Transparencia_UsuariosPorEstado/Transparencia_UsuariosPorEstado";
import Footer from "../../components/Footer/Footer";

import "./Transparencia.scss";

const Transparencia = () => {
  return (
    <main>
      <NavigationBar />
      <Tranparencia_DadosGerais />
      <div className="graphs">
        <Transparencia_UsuariosPorCurso />
        <Transparencia_UsuariosPorEstado />
      </div>
      <Footer />
    </main>
  );
};

export default Transparencia;
