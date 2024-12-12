import React, { useState } from "react";
import { StyledInput, Box } from "./styled.js";
import { addMessage } from "../../../services/messageService.js";

function TextInput() {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && inputValue.trim() !== "") {
      setMessage(inputValue);
      setInputValue(""); // Limpa o input após enviar
    }
  };

  const handleSpanClick = () => {
    if (inputValue.trim() !== "") {
      setMessage(inputValue);
      setInputValue(""); // Limpa o input após enviar
    }
  };

  return (
    <Box>
      <StyledInput
        type="text"
        placeholder="Type your message here..."
        value={inputValue}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
      />
      
      <span onClick={handleSpanClick} className="material-symbols-outlined">arrow_upward</span>

    </Box>
  );
}

// Função auxiliar para chamar addMessage
function setMessage(message) {

  let messageAtt = {
    "type":"sent",
    "message": message
  }

  addMessage(messageAtt);
}

export default TextInput;
