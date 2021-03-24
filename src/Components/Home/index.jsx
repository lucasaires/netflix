import React from "react";
import "./style.css";

import { Header } from "./Header";
import { Assista } from "../Assista";
import { BaixeSeries } from "../BaixeSeries";
import { AproveiteTv } from "../AproveiteTv";
import { PerguntasFrequentes } from "../PerguntasFrequentes";
export function Home() {
  return (
    <>
      <div className="bc">
        <Header />
        <div className="Container">
          <div className="content">
            <h1 className="title">Filmes, séries e muito mais. Sem limites.</h1>
            <h3 className="subtitle">
              Assista onde quiser. Cancele quando quiser.
            </h3>
            <div className="content-input">
              <p className="p-content">
                Pronto para assistir? Informe seu email para criar ou reiniciar
                sua assinatura.
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
        </div>
      </div>
      <Assista />
      <BaixeSeries />
      <AproveiteTv />
      <PerguntasFrequentes />
    </>
  );
}
