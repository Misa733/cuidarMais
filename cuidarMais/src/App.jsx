import React from "react";
import Navbar from "./components/NavBar";
import Pareamento from "./components/Pareamento";
import { HistoricoPrm } from "./components/Historicoprm"; // Importa aqui

function App() {
  return (
    <div style={{ minHeight: "100vh", paddingBottom: "100px" }}>
      {/* Botão de histórico flutuante no topo */}
      <HistoricoPrm />

      <div style={{ padding: "20px" }}>
        <Pareamento />
      </div>

      <Navbar />
    </div>
  );
}

export default App;
