import React from "react";
const Proposito = () => {
  return (
    <section id="proposito" className="propsito">
      <div className="proposito_container">
        <div className="proposito_header">
          <h1 style={{ display: "flex", justifyContent: "center" }}>
            {" "}
            Propósito{" "}
          </h1>
          <p style={{ display: "flex", justifyContent: "center" }}>
            {" "}
            Propositos do site
          </p>
        </div>
        <div className="proposito_conteudo">
          <div className="propositoC">
            <h3 style={{ display: "flex", justifyContent: "center" }}>
              Pessoal
            </h3>
            <p>
              Este site faz parte do meu processo terapeutico, para refletir na
              minha vida, seja passado presente ou futuro
            </p>
          </div>
          <div className="propositoC">
            <h3 style={{ display: "flex", justifyContent: "center" }}>
              {" "}
              Profissional
            </h3>
            <p>
              Este site é para servir como meu portfolio para recrutadores
              verem, não só quem eu sou, mas também, as minhas habilidades
              técnicas
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Proposito;
