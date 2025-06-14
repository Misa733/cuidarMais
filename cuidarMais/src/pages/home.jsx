import React from "react";
import { BpmAtual } from "../components/BpmAtual";
import { HistoricoConexoes } from "../components/HistoricoConexoes";
import { DashboardQuedas } from "../components/DashboardQuedas";
import { Modal } from "../components/modal";

function Home() {
  return (
    <div
      style={{
        display: "grid",
        gap: 20,
        gridTemplateColumns: "1fr", // default para celular
        padding: 20,
      }}
    >
      <div
        style={{
          display: "grid",
          gap: 20,
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
        }}
      > <Modal/>
        <BpmAtual />
        <HistoricoConexoes />
        <DashboardQuedas />
      </div>
    </div>
  );
}

export default Home;
