import React from "react";
import Footer from "./components/molecules/Footer";
import './App.css';
import Chat from "./components/molecules/Chat";
import HeaderBar from "./components/molecules/HeaderBar";

function App() {
  return (
    <div className="App">
      <HeaderBar />
      <Chat />
      <Footer />
    </div>
  );
}

export default App;
