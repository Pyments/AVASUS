import { useQuery } from "@tanstack/react-query";
import "../style/components/Parceiros_big.scss";

const Parceiros_big =() => {
  const fetchParceiros = async () => {
    const response = await fetch(
      `http://0.0.0.0:3004/parceiros?_page=1&_limit=9`
    );
    const data = await response.json();
    return data;
  };

  const { isLoading, error, data, isFetching } = useQuery({
    queryKey: ["queryParceirosBig"],
    queryFn: () => fetchParceiros()
  });
  

  if (isLoading || isFetching) {
    return (
      <p style={{ color: "black", fontSize: "30px", marginTop: "20px" }}>
        Carregando Modulos....
      </p>
    );
  } else if (error) {
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
        <span className="parceiros-resultados">6 de # resultados</span>
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
  )}


export default Parceiros_big;
