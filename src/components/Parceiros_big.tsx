import { useQuery, keepPreviousData } from "@tanstack/react-query";
import { useState } from "react";

import ArrowLeft from "../assets/feather/arrow-left.svg";
import ArrowRight from "../assets/feather/arrow-right.svg";

import "../style/components/Parceiros_big.scss";

const Parceiros_big = () => {
  const [page, setPage] = useState(1);

  const fetchParceiros = async (page = 1) => {
    const response = await fetch(
      `http://0.0.0.0:3004/parceiros?_page=${page}&_limit=9`
    );
    const data = await response.json();
    return data;
  };

  const { isLoading, error, data, isFetching } = useQuery({
    queryKey: ["queryParceirosBig", page],
    queryFn: () => fetchParceiros(page),
    placeholderData: keepPreviousData,
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
        <span className="parceiros-resultados">9 de # resultados</span>
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
        <span className="parceiros-page-selector">
          <button
            onClick={() => setPage((old) => Math.max(old - 1, 1))}
            disabled={page === 1}
          >
            <img src={ArrowLeft} />
          </button>
          {page}
          <button
            onClick={() => {
              setPage((old) => old + 1);
            }}
          >
            <img src={ArrowRight} />
          </button>
        </span>
      </section>
    </>
  );
};

export default Parceiros_big;
