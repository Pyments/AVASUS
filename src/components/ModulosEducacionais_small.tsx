import { useQuery } from "@tanstack/react-query";
import "../style/components/ModulosEducacionais_small.scss";

import Timer from "../assets/feather//clock.svg";
import User from "../assets/feather/user.svg";
import axios from "axios";
//import { useState } from "react";

export default function ModulosEducacionais_small() {
  function ApiAvasus(sort: string, order: string, page: number, limit: number) {
    return axios
      .get(
        `http://0.0.0.0:3004/cursos?_sort=${sort}&_order=${order}&_page=${page}&_limit=${limit}`
      )
      .then((response) => response.data);
  }

  //const [modulos, setModulos] = useState(1);

  const { data, isLoading, isError, error, isFetching }: any = useQuery({
    queryKey: ["modulosSmall", "matriculados", "desc", 1, 3],
    queryFn: () => ApiAvasus("matriculados", "desc", 1, 3),
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
                  onClick={() => {
                    ApiAvasus("matriculados", "desc", 1, 3);
                  }}
                >
                  Mais populares
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    ApiAvasus("avaliacao", "desc", 1, 3);
                  }}
                >
                  Mais bem avaliados
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    ApiAvasus("criado_em", "desc", 1, 3);
                  }}
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
