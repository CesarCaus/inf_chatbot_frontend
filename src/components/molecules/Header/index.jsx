import React from "react";
import { Apresentation, Box, View, ViewRow } from "./styled";
import BotImage from "../../atoms/BotImage";

function Header({ onMessageClick }) {
  const list = [
    "O que é o Instituto de Informática?",
    "O que é o estágio curricular?",
    "Qual o email do Professor Cássio?",
    "Quantos Professores tem o Instituto de Informática?"
  ];

  return (
    <View>
      <BotImage width="150px" height="150px" />
      <Apresentation>
        Olá, meu nome é Beatrix, estou aqui para responder as suas dúvidas a respeito do Instituto de Informática da Universidade Federal de Goiás - UFG
      </Apresentation>
      <ViewRow>
        {list.map((element, index) => (
          <Box onClick={() => onMessageClick(element)} key={index}>
            {element}
          </Box>
        ))}
      </ViewRow>
    </View>
  );
}

export default Header;
