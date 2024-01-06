import "../style/components/Parceiros_small.scss";

function Parceiros_small() {
  return (
    <>
      <section className="parceirosS-section">
        <h2 className="parceirosS-titulo">Parceiros</h2>
        <div className="parceirosS-row">
          <div className="parceirosS-container">
            <h3 className="parceirosS-head">Governo do RN</h3>
            <p className="parceirosS-texto">
              Governo do Estado do Rio Grande o Norte
            </p>
          </div>
          <div className="parceirosS-container">
            <h3 className="parceirosS-head">SESAP</h3>
            <p className="parceirosS-texto">
              Secretaria de Saúde Pública do Estado do Rio Grande do norte
            </p>
          </div>
          <div className="parceirosS-container">
            <h3 className="parceirosS-head">UFRN</h3>
            <p className="parceirosS-texto">
              Universidade Federal do Rio Grande do Norte
            </p>
          </div>
          <div className="parceirosS-container">
            <h3 className="parceirosS-head">HUOL</h3>
            <p className="parceirosS-texto">
              Hospital Onofre Lopes: Hospital Universitário da UFRN Universidade
              Federal do Rio Grande do Norte
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default Parceiros_small;
