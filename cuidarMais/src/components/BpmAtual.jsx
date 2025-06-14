import React from "react";

export function BpmAtual() {
  const bpmAtual = 74; // Valor simulado

  return (
    <div style={cardStyle}>
      <h3 style={{ marginBottom: 10 }}>BPM Atual</h3>
      <p style={{ fontSize: 32, fontWeight: "bold", color: bpmAtual > 100 ? "red" : "#333" }}>
        {bpmAtual} BPM
      </p>
    </div>
  );
}

const cardStyle = {
  backgroundColor: "#fff",
  padding: 20,
  borderRadius: 12,
  boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
  textAlign: "center",
};
