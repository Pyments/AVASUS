import "./ModuloDetalhe.scss";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";

import Users from "../../assets/feather/users.svg";
import Calendar from "../../assets/feather/calendar.svg";
import Clock from "../../assets/feather/clock.svg";
import Star from "../../assets/feather/star.svg";

function ModuloDetalhe() {
  const param = useParams();
  const moduloId = param.id;

  const fetchParceiros = async (moduloId: any) => {
    const response = await fetch(`http://0.0.0.0:3004/cursos?id=${moduloId}`);
    const data = await response.json();
    return data;
  };

  const { data } = useQuery({
    queryKey: ["queryParceirosBig"],
    queryFn: () => fetchParceiros(moduloId),
  });

  {
    return (
      <>
        {data?.map((data: any) => {
          return (
            <section className="moduloDetalhe">
              <div>
                <div className="moduloDetalhe-header">
                  <img
                    src={data.capa}
                    alt="Capa do módulo"
                    className="moduloDetalhe-header-imgCapa"
                  />
                  <div className="moduloDetalhe-header-tituloWrapper">
                    <h1 className="moduloDetalhe-header-tituloWrapper-titulo">
                      {data?.titulo}
                    </h1>
                    <span className="moduloDetalhe-header-tituloWrapper-parceiros">
                      {data?.parceiros}
                    </span>
                  </div>
                </div>
                <div className="moduloDetalhe-mainContent">
                  <h2 className="moduloDetalhe-mainContent-titulo">
                    Informações Gerais do Curso
                  </h2>
                  <div className="moduloDetalhe-mainContent-estatisticas">
                    <span className="moduloDetalhe-mainContent-estatisticas-item">
                      <img
                        src={Clock}
                        className="moduloDetalhe-mainContent-estatisticas-item-img"
                      />
                      <p className="moduloDetalhe-mainContent-estatisticas-item-texto">
                        {data?.duracao}
                      </p>
                    </span>
                    <span className="moduloDetalhe-mainContent-estatisticas-item">
                      <img
                        src={Calendar}
                        className="moduloDetalhe-mainContent-estatisticas-item-img"
                      />
                      <p className="moduloDetalhe-mainContent-estatisticas-item-texto">
                        Desde {data?.criado_em}
                      </p>
                    </span>
                    <span className="moduloDetalhe-mainContent-estatisticas-item">
                      <img
                        src={Users}
                        className="moduloDetalhe-mainContent-estatisticas-item-img"
                      />
                      <p className="moduloDetalhe-mainContent-estatisticas-item-texto">
                        {data?.matriculados} alunos matriculados
                      </p>
                    </span>
                    <span className="moduloDetalhe-mainContent-estatisticas-item">
                      <img
                        src={Star}
                        className="moduloDetalhe-mainContent-estatisticas-item-img"
                      />
                      <p className="moduloDetalhe-mainContent-estatisticas-item-texto">
                        {data?.avaliacao} ({data?.numero_avaliacoes} avaliações)
                      </p>
                    </span>
                  </div>
                  <div className="moduloDetalhe-mainContent-sobre">
                    <h2 className="moduloDetalhe-mainContent-titulo">
                      Sobre o curso{" "}
                    </h2>
                    <p className="moduloDetalhe-mainContent-texto">
                      {data?.sobre}
                    </p>
                  </div>
                  <div>
                    <h2 className="moduloDetalhe-mainContent-titulo">
                      Objetivos
                    </h2>
                    <h3 className="moduloDetalhe-mainContent-subtitulo">
                      Objetivo Geral
                    </h3>
                    <p className="moduloDetalhe-mainContent-texto">
                      {data?.objetivo_geral}
                    </p>
                    <h3 className="moduloDetalhe-mainContent-subtitulo">
                      Objetivos Específicos
                    </h3>
                    <ol className="moduloDetalhe-mainContent-objLista">
                      {data?.conteudo.map((data: any) => {
                        return (
                          <li className="moduloDetalhe-mainContent-objLista-item">
                            {data}
                          </li>
                        );
                      })}
                    </ol>
                  </div>
                  <div className="moduloDetalhe-mainContent-recursos">
                    <h2 className="moduloDetalhe-mainContent-titulo">
                      Recursos educacionais
                    </h2>
                    <p className="moduloDetalhe-mainContent-texto">
                      Serão utilizados textos no formato de PDF, vídeos,
                      ilustrações, infográficos, dentre outros recursos
                    </p>
                  </div>
                    <h2 className="moduloDetalhe-mainContent-titulo">
                      Créditos:
                    </h2>
                  <div className="moduloDetalhe-mainContent-creditos">
                    {data?.creditos.map((data: any) => {
                      return (
                        <img
                          src={data?.capa}
                          className="moduloDetalhe-mainContent-creditos-capas"
                        />
                      );
                    })}
                  </div>
                </div>
              </div>
            </section>
          );
        })}
      </>
    );
  }
}

export default ModuloDetalhe;
