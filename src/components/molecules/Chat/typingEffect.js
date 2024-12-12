import React, { useState, useEffect } from "react";

const TypingEffect = ({ text }) => {
  const [displayText, setDisplayText] = useState(""); // Texto exibido
  const [index, setIndex] = useState(0); // Índice do caractere atual

  useEffect(() => {
    if (index < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText((prev) => prev + text[index]); // Adiciona o próximo caractere
        setIndex((prev) => prev + 1);
      }, 20); 

      return () => clearTimeout(timeout); // Limpa o timeout para evitar problemas
    }
  }, [index, text]);

  return <div>{displayText}</div>; // Renderiza o texto com o efeito
};

export default TypingEffect;
