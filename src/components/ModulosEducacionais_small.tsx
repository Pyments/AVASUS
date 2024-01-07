import { useQuery } from "@tanstack/react-query";
// import { useEffect, useState } from "react";
import "../style/components/ModulosEducacionais_small.scss";

import Timer from "../assets/feather//clock.svg";
import User from "../assets/feather/user.svg";
import axios from "axios";
//import { useState } from "react";

export default function ModulosEducacionais_small() {
  // let [sortModulosS, setSortModulosS] = useState("matriculados");

  // const changeSortingToMatriculados = () => {
  //   useEffect(() => {}, [sortModulosS]);
  //   setSortModulosS("matriculados");
  //   console.log(sortModulosS, setSortModulosS);
  //   ApiAvasus(sortModulosS)
  // };
  // const changeSortingToAvaliacao = () => {
  //   useEffect(() => {}, [sortModulosS]);
  //   setSortModulosS("avaliacao");
  //   console.log(sortModulosS, setSortModulosS);
  //   ApiAvasus(sortModulosS)
  // };
  // const changeSortingToCriadoEm = () => {
  //   useEffect(() => {}, [sortModulosS]);
  //   setSortModulosS("criado_em");
  //   console.log(sortModulosS, setSortModulosS);
  //   ApiAvasus(sortModulosS)
  // };

  function ApiAvasus(sortModulosS: string) {
    return axios
      .get(
        `http://0.0.0.0:3004/cursos?_sort=${sortModulosS}&_order=desc&_page=1&_limit=3`
      )
      .then((response) => response.data);
  }

  const { data, isLoading, isError, error, isFetching }: any = useQuery({
    queryKey: ["modulosSmall"],
    queryFn: () => ApiAvasus("matriculados"),
  });

  if (isLoading || isFetching) {
    return (
      <p style={{ color: "white", fontSize: "30px", marginTop: "20px" }}>
        Carregando Modulos....
      </p>
    );
  } else if (isError) {
    return (
      <p style={{ color: "white", fontSize: "30px", marginTop: "20px" }}>
        Error: {error.message}
      </p>
    );
  }

  return (
    <>
      <section>
        <h2>Modulos Educacionais</h2>
        <div>
          <div className="modulos-paginas">
            <ul>
              <li>
                <button 
                // onClick={changeSortingToMatriculados}
                >
                  Mais populares
                </button>
              </li>
              <li>
                <button 
                // onClick={changeSortingToAvaliacao}
                >
                  Mais bem avaliados
                </button>
              </li>
              <li>
                <button 
                // onClick={changeSortingToCriadoEm}
                >
                  Mais recentes
                </button>
              </li>
            </ul>
          </div>
          <ol className="modulos-lista">
            {data?.map((data: any) => {
              return (
                <li key={data.id}>
                  <div>
                    <div className="modulo-capa">
                      <img src={data.capa} alt="Capa do moódulo (imagem)" />
                    </div>
                    <div className="modulo-cabecalho">
                      <span className="modulo-titulo">{data.titulo}</span>
                      <span className="modulo-parceiros">{data.parceiros}</span>
                    </div>
                    <div className="modulo-matriculados">
                      <img src={User} />
                      <span>{data.matriculados}</span>
                    </div>
                    <div className="modulo-duracao">
                      <img src={Timer} />
                      <span>{data.duracao}</span>
                    </div>
                    <div className="modulo-avaliacao">
                      <img src="" />
                      <span>{data.avaliacao}</span>
                    </div>
                    <div className="modulo-verModulo">
                      <button>Ver módulo</button>
                    </div>
                  </div>
                </li>
              );
            })}
          </ol>
        </div>
        <div>
          <button className="modulo-verMais">Ver mais</button>
        </div>
      </section>
    </>
  );
}
