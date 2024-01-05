import { useQuery } from "@tanstack/react-query";
import "../style/components/ModulosEducacionais_small.scss";

import Timer from "../assets/feather//clock.svg"
import User from "../assets/feather/user.svg"

import ApiAvasus from "../services/ApiAvasus";

export default function ModulosEducacionais_small() {
  let page = 1;
  let limit = 3;
  const { data, isLoading }: any = useQuery({
    queryFn: () =>
      ApiAvasus(`http://0.0.0.0:3004/cursos?_page=${page}&_limit=${limit}`),
    queryKey: ["modulosSmall"],
  });

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  return (
    <>
      <h2>ModulosEducacionais_small</h2>
      <div>
        <div>Mais populares</div>
        {/* Conteúdo paginado */}
        <div>
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
                      <button >Ver módulo</button>
                    </div>
                  </div>
                </li>
              );
            })}
          </ol>
        </div>
      </div>
      <span>
        <button>Ver mais</button>
      </span>
    </>
  );
}
