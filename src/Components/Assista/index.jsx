import React from "react";
import { Apresentacao } from "../../blocosCustomizados/index";
import image from "../../assets/images/assista-quando-quiser.png";

export function Assista() {
  return (
    <Apresentacao
      title="Assista quando quiser."
      subtitle="Assista no celular, tablet, Smart TV ou notebook sem pagar a mais por isso.
  "
      image={image}
    />
  );
}
