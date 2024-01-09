import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";

import "../style/components/ModulosEducacionais_big.scss";

import Timer from "../assets/feather/clock.svg";
import User from "../assets/feather/user.svg";
import Star from "../assets/feather/star.svg";


const ModulosEducacionais_big = () => {
  const [modulosBigPage, setModulosBigPage] = useState("");

  const fetchModulosB = async (sort = "", page = "") => {
    const response = await fetch(
      `http://0.0.0.0:3004/cursos?_sort=${sort}&_page=${page}&_limit=9`
    );
    const data = await response.json();
    return data;
  };

  const { isLoading, error, data, isFetching } = useQuery({
    queryKey: ["queryModulosSmall", modulosBigPage],
    queryFn: () => fetchModulosB(modulosBigPage),
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
          <span>Covid 19</span>
          <span>Sifilis e outras Ist's</span>
          <span>Preceptoria</span>
          <span>Doenças raras</span>
          <span>Web Palestras</span>
          <span>Sistemas prisionais</span>
          <span>OPAS</span>
        </div>
        <span className="modulosBig-resultados"># de # resultados</span>

        <ol className="modulosBig-container">
          {data?.map((data: any) => {
            return (
              <li className="modulosBig-items">
                <img src={data?.capa} className="modulosBig-items-img"></img>
                <h2 className="modulosBig-items-titulo">{data?.titulo}</h2>
                <span className="modulosBig-items-parceiros">
                  {data?.parceiros}
                </span>
                <div className="modulosBig-items-estatisticas">
                  <span className="modulosBig-items-matriculados">
                    <img src={User} alt="Imagem matriculados" />{data?.matriculados}
                  </span>
                  <span className="modulosBig-items-duracao">
                  <img src={Timer} alt="Imagem duração" />{data?.duracao}
                  </span>
                  <span className="modulosBig-items-avaliacao">
                  <img src={Star} alt="Imagem avaliação" />{data?.avaliacao}
                  </span>
                </div>
                <p className="modulosBig-items-objetivogeral">{data?.resumo}</p>
                <button className="modulosBig-verModulo">Ver módulo</button>
              </li>
            );
          })}
        </ol>
        <div className="modulosBig-paginacao">
          <button>paginação</button>
        </div>
      </section>
    </>
  );
};

export default ModulosEducacionais_big;
