import { useState } from "react";
import { useQuery, keepPreviousData } from "@tanstack/react-query";
// import { Link } from "react-router-dom";

import ArrowLeft from "../assets/feather/arrow-left.svg";
import ArrowRight from "../assets/feather/arrow-right.svg";

import "../style/components/ModulosEducacionais_big.scss";

import Timer from "../assets/feather/clock.svg";
import User from "../assets/feather/user.svg";
import Star from "../assets/feather/star.svg";

const ModulosEducacionais_big = () => {
  // const [modulosBigCategoria, setmodulosBigCategoria] = useState("")
  const [modulosBigPage, setModulosBigPage] = useState(1);
  const [modulosBigCategoria, setModulosBigCategoria] =
    useState("Módulo de extensão");

  const fetchModulosBig = async (
    modulosBigPage: number,
    modulosBigCategoria: string
  ) => {
    const response = await fetch(
      `http://0.0.0.0:3004/cursos?cateroria=${modulosBigCategoria}&_page=${modulosBigPage}&_limit=9`
    );
    const data = await response.json();
    return data;
  };

  const { isLoading, error, data, isFetching } = useQuery({
    queryKey: ["queryModulosBig", modulosBigPage, modulosBigCategoria],
    queryFn: () => fetchModulosBig(modulosBigPage, modulosBigCategoria),
    placeholderData: keepPreviousData,
  });

  if (isLoading || isFetching) {
    return (
      <p style={{ color: "#000000", fontSize: "30px", marginTop: "20px" }}>
        Carregando Modulos....
      </p>
    );
  } else if (error) {
    return (
      <p style={{ color: "#000000", fontSize: "30px", marginTop: "20px" }}>
        Error: {error.message}
      </p>
    );
  }

  return (
    <>
      <section className="modulosBig">
        <h3>Módulos Educacionais</h3>
        <div className="modulosBig-categorias">
          <button onClick={() => {setModulosBigCategoria("Covid 19");}}>Covid 19</button>
          <button onClick={() => {setModulosBigCategoria("Síflis e outras ist");}}>Síflis e outras ist</button>
          <button onClick={() => {setModulosBigCategoria("Especialização");}}>Especialização</button>
          <button onClick={() => {setModulosBigCategoria("Preceptoria");}}>Preceptoria</button>
          <button onClick={() => {setModulosBigCategoria("Doenças raras");}}>Doenças raras</button>
          <button onClick={() => {setModulosBigCategoria("WebPalestras");}}>WebPalestras</button>
          <button onClick={() => {setModulosBigCategoria("Sistema prisional");}}>Sistema prisional</button>
          <button onClick={() => {setModulosBigCategoria("OPAS");}}>OPAS</button>
          <button onClick={() => {setModulosBigCategoria("Módulo de extensão");}}>Módulo de extensão</button>
          <button onClick={() => {setModulosBigCategoria("Acessibilidade");}}>Acessibilidade</button>
        </div>
        {/* <span className="modulosBig-resultados">9 de {data.lenght} resultados</span> */}
        <ol className="modulosBig-container">
          {data?.map((data: any) => {
            return (
              <li key={data.id} className="modulosBig-items">
                <img src={data?.capa} className="modulosBig-items-img"></img>
                <h2 className="modulosBig-items-titulo">{data?.titulo}</h2>
                <span className="modulosBig-items-parceiros">
                  {data?.parceiros}
                </span>
                <div className="modulosBig-items-estatisticas">
                  <span className="modulosBig-items-matriculados">
                    <img src={User} alt="Imagem matriculados" />
                    {data?.matriculados}
                  </span>
                  <span className="modulosBig-items-duracao">
                    <img src={Timer} alt="Imagem duração" />
                    {data?.duracao}
                  </span>
                  <span className="modulosBig-items-avaliacao">
                    <img src={Star} alt="Imagem avaliação" />
                    {data?.avaliacao}
                  </span>
                </div>
                <p className="modulosBig-items-objetivogeral">{data?.resumo}</p>
                <button className="modulosBig-verModulo">Ver módulo</button>
              </li>
            );
          })}
        </ol>
        <div className="modulosBig-paginacao">
          <button
            onClick={() => setModulosBigPage((old) => Math.max(old - 1, 1))}
            disabled={modulosBigPage === 1}
          >
            <img src={ArrowLeft} />
          </button>
          <span>{modulosBigPage}</span>
          <button
            onClick={() => {
              setModulosBigPage((old) => old + 1);
            }}
          >
            <img src={ArrowRight} />
          </button>
        </div>
      </section>
    </>
  );
};

export default ModulosEducacionais_big;
