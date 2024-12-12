import React from "react";
import { StyledImage } from "./styled"; // Importação corrigida

// Corrigido para aceitar props corretamente
function BotImage({ width, height }) {
  return <StyledImage width={width} height={height} alt="Bot Image" src="./image.png"/>;
}

export default BotImage;
