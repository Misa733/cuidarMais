import React from "react";

const conexoes = [
  { id: 1, data: "2025-06-14 10:10", status: "Conectado" },
  { id: 2, data: "2025-06-14 08:45", status: "Desconectado" },
  { id: 3, data: "2025-06-13 22:20", status: "Conectado" },
];

export function HistoricoConexoes() {
  return (
    <div style={cardStyle}>
      <h3 style={{ marginBottom: 10 }}>Histórico de Conexões</h3>
      <ul style={{ listStyle: "none", padding: 0 }}>
        {conexoes.map((item) => (
          <li key={item.id} style={{ marginBottom: 8, fontSize: 14 }}>
            <strong>{item.status}</strong> em {item.data}
          </li>
        ))}
      </ul>
    </div>
  );
}

const cardStyle = {
  backgroundColor: "#fff",
  padding: 20,
  borderRadius: 12,
  boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
};
