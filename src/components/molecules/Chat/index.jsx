import React, { useState, useEffect, useRef } from "react";
import { SentMessage, ReceivedMessage, View, BoxMessages } from "./styled";
import TypingEffect from "./typingEffect";
import Header from "../Header";
import HeaderBar from "../HeaderBar";
import BotImage from "../../atoms/BotImage";
import { getMessages, addMessage, reset } from "../../../services/messageService";

function Chat() {
  const [messages, setMessages] = useState([]);
  const messagesEndRef = useRef(null);

  useEffect(() => {
    const fetchMessages = () => {
      setMessages(getMessages());
    };

    fetchMessages();

    const interval = setInterval(fetchMessages, 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  
  const handleAddMessage = (message) => {
    addMessage({ message, type: "sent" });
    setMessages(getMessages()); 
  };

  const handleReset = () => {
    reset(); 
    setMessages([]); 
  };

  return (
    <View>
      <HeaderBar onReset={handleReset} />
      <Header onMessageClick={handleAddMessage} />
      <BoxMessages>
        {messages.map((element, index) => {
          if (element.type === "received" && element.message) {
            return (
              <div key={index}>
                <ReceivedMessage>
                  <TypingEffect text={element.message} />
                </ReceivedMessage>
                <BotImage width="40px" height="40px" />
              </div>
            );
          } else if (element.type === "sent") {
            return <SentMessage key={index}>{element.message}</SentMessage>;
          }
          return null;
        })}
        <div ref={messagesEndRef} />
      </BoxMessages>
    </View>
  );
}

export default Chat;
