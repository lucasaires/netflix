import React from "react";

import image from "../../assets/images/tv-apresentacao.jpg";

import { Apresentacao } from "../../blocosCustomizados/index";

export function AproveiteTv() {
  return (
    <Apresentacao
      title="Aproveite na TV."
      subtitle="Assista em Smart TVs, PlayStation, Xbox, Chromecast, Apple TV, aparelhos de Blu-ray e outros dispositivos."
      image={image}
    />
  );
}
