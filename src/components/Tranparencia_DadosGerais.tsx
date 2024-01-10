// import React from 'react'";
import { useQuery } from "@tanstack/react-query";

import Users from "../assets/feather/clock.svg";
import CheckSquare from "../assets/feather/check-square.svg";
import Play from "../assets/feather/play.svg";
import Award from "../assets/feather/award.svg";
import DollarSign from "../assets/feather/dollar-sign.svg";
import UserCheck from "../assets/feather/user-check.svg";

function Tranparencia_DadosGerais() {
  const fetchTransparencia = async () => {
    const response = await fetch(`http://0.0.0.0:3004/transparecia`);
    const data = await response.json();
    return data;
  };
  // isLoading isFetching error
  const { data } = useQuery({
    queryKey: ["queryTransparencia"],
    queryFn: () => fetchTransparencia(),
  });

  return (
    <section className="dados-gerais">
      <h2>Dados Gerais</h2>
      <div>
        <span>
          <img src={Users} />
          <p>Total de usuários registrados</p>
        </span>
        <span>{data?.dados_gerais.usuarios_registrados}</span>
      </div>
      <div>
        <span>
          <img src={CheckSquare} />
          <p>Inscrições realizadas</p>
        </span>
        <span>{data?.dados_gerais.incricoes_realizadas}</span>
      </div>
      <div>
        <span>
          <img src={Play} />
          <p>Cursos ativos</p>
        </span>
        <span>{data?.dados_gerais.cursos_ativos}</span>
      </div>
      <div>
        <span>
          <img src={Award} />
          <p>Direito á Certificação</p>
        </span>
        <span>{data?.dados_gerais.direito_certificacao}</span>
      </div>
      <div>
        <span>
          <img src={DollarSign} />
          <p>Investimento médio por curso</p>
        </span>
        <span>{data?.dados_gerais.investimento_medio_curso}</span>
      </div>
      <div>
        <span>
          <img src={UserCheck} />
          <p>Investimento médio por aluno</p>
        </span>
        <span>{data?.dados_gerais.investimento_medio_aluno}</span>
      </div>
    </section>
  );
}

export default Tranparencia_DadosGerais;
