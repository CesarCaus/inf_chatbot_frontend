import React, { useState } from "react";
import { HeaderStyled } from "./styled.js";
import { reset } from "../../../services/messageService.js";
import CustomModal from "../Modal/index.jsx";

function HeaderBar({ onReset }) {
  const [open, setOpen] = useState(false);

  // Função para abrir o modal
  const handleOpen = () => setOpen(true);

  // Função para fechar o modal
  const handleClose = () => setOpen(false);

  // Função para confirmar o reset
  const handleConfirmReset = () => {
    reset(); // Limpa as mensagens
    onReset(); // Atualiza o estado no Chat
    setOpen(false); // Fecha o modal
  };

  return (
    <HeaderStyled>
      <span onClick={handleOpen} className="material-symbols-outlined">delete</span>
      
      {/* Passando as props para o CustomModal */}
      <CustomModal
        open={open}
        handleClose={handleClose}
        handleConfirmReset={handleConfirmReset}
      />
    </HeaderStyled>
  );
}

export default HeaderBar;
