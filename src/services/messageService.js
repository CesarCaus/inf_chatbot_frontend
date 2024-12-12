// src/services/messageService.js

let messages = [];

export const getMessages = () => {
  return [...messages];
};

export const addMessage = (message) => {
  if (!message || !message.type || !message.message) {
    console.error("Mensagem inválida. Certifique-se de fornecer os campos 'type' e 'message'.");
    return;
  }

  messages = [...messages, message];

  setTimeout(() => {
    addReceivedMessage();
  }, 1000);
};

const addReceivedMessage = async () => {
  try {
    const lastSentMessage = messages[messages.length - 1];

    if (!lastSentMessage || lastSentMessage.type !== "sent") {
      console.error("Nenhuma mensagem enviada disponível para gerar resposta.");
      return;
    }

    const response = await fetch("http://localhost:8000/api/chat/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        text: lastSentMessage.message, // Texto da última mensagem enviada
        type: lastSentMessage.type,   // Tipo da mensagem (sempre 'sent')
      }),
    });

    if (!response.ok) {
      throw new Error(`Erro na API: ${response.status}`);
    }

    const data = await response.json();

    const receivedMessage = {
      type: "received",
      message: data.text, 
    };

    messages = [...messages, receivedMessage];
  } catch (error) {
    console.error("Erro ao adicionar mensagem recebida:", error);
  }
};

export const reset = () => {
  messages = [];
};
