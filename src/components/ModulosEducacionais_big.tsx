import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";

import "../style/components/ModulosEducacionais_big.scss";

const ModulosEducacionais_big = () => {
  const [modulosBigPage, setModulosBigPage] = useState("");

  const fetchModulosB = async (sort = "") => {
    const response = await fetch(
      `http://0.0.0.0:3004/cursos?_sort=${sort}&_order=desc&_page=1&_limit=3`
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
          <li className="modulosBig-items">
            <Link to={"#"}>
              <img
                className="modulosBig-items-img"
                style={{
                  border: "1px solid black",
                  minWidth: "7rem",
                  minHeight: "7rem",
                  backgroundColor: "lime",
                }}
              ></img>
              <h2 className="modulosBig-items-titulo">titulo</h2>
              <span className="modulosBig-items-parceiros">parceiros</span>
              <div className="modulosBig-items-estatisticas">
                <span className="modulosBig-items-matriculados">
                  matriculados
                </span>
                <span className="modulosBig-items-duracao">tempo</span>
                <span className="modulosBig-items-avaliacao">avaliacao</span>
              </div>
              <p className="modulosBig-items-objetivogeral">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem
                repudiandae consequuntur quasi nesciunt, incidunt excepturi eos
                eius error vitae ipsa provident, quaerat hic dolorem iusto alias
                dicta eaque modi!
              </p>
            </Link>
          </li>
        </ol>

        <div className="modulosBig-paginacao">
          <button>paginação</button>
        </div>
      </section>
    </>
  );
};

export default ModulosEducacionais_big;
