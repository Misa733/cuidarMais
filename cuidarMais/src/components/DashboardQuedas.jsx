import React from "react";

const dados = [
  { dia: "Seg", quedas: 1 },
  { dia: "Ter", quedas: 0 },
  { dia: "Qua", quedas: 2 },
  { dia: "Qui", quedas: 0 },
  { dia: "Sex", quedas: 1 },
  { dia: "Sáb", quedas: 3 },
  { dia: "Dom", quedas: 0 },
];

export function DashboardQuedas() {
  return (
    <div style={cardStyle}>
      <h3 style={{ marginBottom: 10 }}>Riscos de Queda (últimos 7 dias)</h3>
      <div style={{ display: "flex", gap: 10 }}>
        {dados.map((item, index) => (
          <div key={index} style={{ textAlign: "center" }}>
            <div
              style={{
                height: `${item.quedas * 20}px`,
                width: 20,
                backgroundColor: item.quedas > 0 ? "#e74c3c" : "#2ecc71",
                marginBottom: 4,
              }}
            ></div>
            <small>{item.dia}</small>
          </div>
        ))}
      </div>
    </div>
  );
}

const cardStyle = {
  backgroundColor: "#fff",
  padding: 20,
  borderRadius: 12,
  boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
};
