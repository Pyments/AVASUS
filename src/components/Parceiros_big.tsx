import { useQuery } from "@tanstack/react-query";
import "../style/components/Parceiros_big.scss";

import axios from "axios";

function Parceiros_big() {
  function ApiAvasus(page: number, limit: number) {
    return axios
      .get(`http://0.0.0.0:3004/parceiros?_page=${page}&_limit=${limit}`)
      .then((response) => response.data);
  }

  //const [modulos, setModulos] = useState(1);

  const { data, isLoading, isError, error, isFetching }: any = useQuery({
    queryKey: ["modulosSmall", 1, 9],
    queryFn: () => ApiAvasus(1, 9),
  });
  if (isLoading || isFetching) {
    return (
      <p style={{ color: "black", fontSize: "30px", marginTop: "20px" }}>
        Carregando Modulos....
      </p>
    );
  } else if (isError) {
    return (
      <p style={{ color: "black", fontSize: "30px", marginTop: "20px" }}>
        Error: {error.message}
      </p>
    );
  }

  return (
    <>
      <section className="parceiros">
        <h2 className="parceiros-cabecalho">Nossos parceiros</h2>
        <span className="parceiros-resultados"># de # resultados</span>
        <ol className="parceiros-lista">
          {data?.map((data: any) => {
            return (
              <li className="parceiros-item" key={data?.id}>
                <img
                  className="parceiros-item-imagem"
                  src={data?.capa}
                  alt="Capa parceiro"
                />
                <p className="parceiros-item-nome">{data.titulo}</p>
              </li>
            );
          })}
        </ol>
      </section>
    </>
  );
}

export default Parceiros_big;
