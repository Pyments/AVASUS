import MainHeader from "../../components/MainHeader/MainHeader";

import Tranparencia_DadosGerais from "../../components/Tranparencia_DadosGerais/Tranparencia_DadosGerais";
import Transparencia_UsuariosPorCurso from "../../components/Transparencia_UsuariosPorCurso/Transparencia_UsuariosPorCurso";
import Transparencia_UsuarisoPorEstado from "../../components/Transparencia_UsuarisoPorEstado/Transparencia_UsuarisoPorEstado";

import Footer from "../../components/Footer/Footer";

const Transparencia = () => {
  return (
    <main>
      <MainHeader />
      <Tranparencia_DadosGerais />
      <Transparencia_UsuariosPorCurso />
      <Transparencia_UsuarisoPorEstado />
      <Footer />
    </main>
  );
};

export default Transparencia;
