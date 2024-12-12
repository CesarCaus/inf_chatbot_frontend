import React from "react";
import { FooterStyled } from "./styled.js";
import TextInput from "../../atoms/TextInput";

function Footer({ onSend }) {
  return (
    <FooterStyled>
      <TextInput />
    </FooterStyled>
  );
}

export default Footer;
