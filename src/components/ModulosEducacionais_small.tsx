import { useQuery } from "@tanstack/react-query";

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
          <ol id="modulos-lista"></ol>
          {data?.map((data: any) => {
            return (
              <li>
                <img src={data.capa} />
                {data.id}
              </li>
            );
          })}
        </div>
      </div>
      <span>Ver mais</span>
    </>
  );
}
