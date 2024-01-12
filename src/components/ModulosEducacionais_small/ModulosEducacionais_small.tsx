import { useQuery } from "@tanstack/react-query";
import { useState } from "react";

import "./ModulosEducacionais_small.scss";

import Timer from "../../assets/feather/clock.svg";
import User from "../../assets/feather/user.svg";
import Star from "../../assets/feather/star.svg";
import { Link } from "react-router-dom";

const ModulosEducacionais_small = () => {
  const [sort, setSort] = useState("matriculados");

  const fetchModulosS = async (sort = "") => {
    const response = await fetch(
      `http://0.0.0.0:3004/cursos?_sort=${sort}&_order=desc&_page=1&_limit=3`
    );
    const data = await response.json();
    return data;
  };

  const { isLoading, error, data, isFetching } = useQuery({
    queryKey: ["queryModulosSmall", sort],
    queryFn: () => fetchModulosS(sort),
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
      <section>
        <h2>Modulos Educacionais</h2>
        <div>
          <div className="modulos-paginas">
            <ul>
              <li>
                <button onClick={() => setSort("matriculados")}>
                  Mais populares
                </button>
              </li>
              <li>
                <button onClick={() => setSort("avaliacao")}>
                  Mais bem avaliados
                </button>
              </li>
              <li>
                <button onClick={() => setSort("criado_em")}>
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
                      <img src={Star} />
                      <span>{data.avaliacao}</span>
                    </div>
                    <div className="modulo-verModulo">
                      <Link to={`/AVASUS/cursos/${data?.id}`}>
                        <button>Ver módulo</button>
                      </Link>
                    </div>
                  </div>
                </li>
              );
            })}
          </ol>
        </div>
        <div>
          <Link to={`/AVASUS/cursos`}>
            <button className="modulo-verMais">Ver mais</button>
          </Link>
        </div>
      </section>
    </>
  );
};

export default ModulosEducacionais_small;
