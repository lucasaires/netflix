import React from "react";

import { Apresentacao } from "../../blocosCustomizados/index";
import image from "../../assets/images/baixe-series.jpg";

export function BaixeSeries() {
  return (
    <Apresentacao
      title="Baixe séries para assistir offline."
      subtitle="Salve seus títulos favoritos e sempre tenha algo para assistir."
      image={image}
      right
    />
  );
}
