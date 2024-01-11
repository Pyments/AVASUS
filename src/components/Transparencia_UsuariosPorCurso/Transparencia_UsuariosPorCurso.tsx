import { PieChart } from "@mui/x-charts";

import "./Transparencia_UsuariosPorCurso.scss";

function Transparencia_UsuariosPorCurso() {
  return (
    <section className="usuariosPorCurso">
      <h2 className="usuariosPorCurso-titulo">Usuários por curso</h2>
      <div className="usuariosPorCurso-pieChart">
        <PieChart
          slotProps={{
            legend: {
              direction: 'column',
              position: { vertical: 'bottom', horizontal: 'left' },
              padding: 0,
            },
          }}
          colors={["#d2202c", "#f7313f", "#707070", "#424146"]}
          
          series={[
            {
              
              data: [
                {
                  id: 0,
                  value: 43412,
                  label: "Curso de prevenção ao suicídio",
                },
                { id: 1, value: 120000, label: "A Covid 19 e seus sintomas" },
                {
                  id: 2,
                  value: 105301,
                  label: "Pai presente: Cuidado e Compromisso",
                },
                { id: 3, value: 1669402, label: "Outros" },
              ],
              highlightScope: { faded: "global", highlighted: "item" },
              faded: {
                innerRadius: 40,
                additionalRadius: -40,
                color: "#808181",
              },
              innerRadius: 0,
              paddingAngle: 1,
              cornerRadius: 5,
              startAngle: 0,
              
            },
            
            
          ]}
          width={300}
          height={500}
          margin={{
            left: 0,
            right: 0,
            top: 0,
            bottom: 100,
          }}
        />
      </div>
      <div className="usuariosPorCurso-legenda"></div>
    </section>
  );
}

export default Transparencia_UsuariosPorCurso;
