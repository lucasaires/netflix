import React from "react";
import "./style.css";
import SimpleAccordion from "../../blocosCustomizados/Accordeon";
export function PerguntasFrequentes() {
  const content = [
    {
      title: <h2>O que é a Netflix?</h2>,
      label: (
        <div>
          A Netflix é um serviço de transmissão online que oferece uma ampla
          variedade de séries, filmes e documentários premiados em milhares de
          aparelhos conectados à internet. <br />
          <br />
          Você pode assistir a quantos filmes e séries quiser, quando e onde
          quiser, sem comerciais – tudo por um preço mensal bem acessível. Aqui
          você sempre encontra novidades. A cada semana, adicionamos novas
          séries e filmes.
        </div>
      ),
    },
    {
      title: <h2>Quanto custa a Netflix?</h2>,
      label: (
        <div>
          Assista à Netflix no seu celular, tablet, Smart TV, notebook ou
          aparelho de streaming por uma taxa mensal única. Os planos variam de
          R$21,90 a R$45,90 por mês. Sem contrato nem taxas extras.
        </div>
      ),
    },
    {
      title: <h2>Onde posso assistir?</h2>,
      label: (
        <div>
          Assista onde quiser, o quanto quiser e em um número ilimitado de
          aparelhos. Faça login com sua conta Netflix em netflix.com para
          começar a assistir no computador ou em qualquer aparelho conectado à
          Internet compatível com o aplicativo Netflix, como Smart TVs,
          smartphones, tablets, aparelhos de streaming e videogames. <br />
          <br />
          Você também pode baixar a sua série favorita com o aplicativo Netflix
          para iOS, Android ou Windows 10. Use downloads para levar a Netflix
          para onde quiser sem precisar de conexão com a Internet. Leve a
          Netflix com você para qualquer lugar.
        </div>
      ),
    },
    {
      title: <h2>Como faço para cancelar?</h2>,
      label: (
        <div>
          A Netflix é flexível. Não há contratos nem compromissos. Você pode
          cancelar a sua conta na internet com apenas dois cliques. Não há taxa
          de cancelamento – você pode começar ou encerrar a sua assinatura a
          qualquer momento.
        </div>
      ),
    },

    {
      title: <h2>O que eu posso assistir na Netflix?</h2>,
      label: (
        <div>
          A Netflix tem um grande catálogo de filmes, documentários, séries,
          originais Netflix premiados e muito mais. Assista o quanto quiser,
          quando quiser.
        </div>
      ),
    },
  ];
  return (
    <>
      <div className="content-perguntas">
        <div className="box">
          <h1 className="title-perguntas">Perguntas Frequentes</h1>
          <div className="content-accordion">
            <SimpleAccordion content={content} />
          </div>
          <p style={{ textAlign: "center", marginTop: "80px" }}>
            Pronto para assistir? Informe seu email para criar ou reiniciar sua
            assinatura.
          </p>
          <div className="c2">
            <input
              type="email"
              name="email"
              id="email"
              placeholder="   Email"
            />
            <button className="button-enviar">Vamos lá {">"} </button>
          </div>
        </div>
      </div>
    </>
  );
}
