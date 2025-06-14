import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const historicoExemplo = [
  { id: 1, data: "2025-06-14 10:15", bpm: 72 },
  { id: 2, data: "2025-06-14 09:50", bpm: 75 },
  { id: 3, data: "2025-06-13 21:20", bpm: 70 },
];

export function Modal() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const handleNovoPareamento = () => {
    setOpen(false);
    navigate("/"); // vai para a tela de pareamento
  };

  return (
    <>
      {/* Botão flutuante no canto superior esquerdo */}
      <button
        onClick={() => setOpen(true)}
        aria-label="Abrir histórico"
        style={{
          position: "fixed",
          top: 20,
          left: 20,
          zIndex: 1001,
          background: "white",
          border: "1px solid #ccc",
          borderRadius: 8,
          padding: 8,
          boxShadow: "0 2px 6px rgba(0,0,0,0.2)",
        }}
      >
        {/* 3 tracinhos */}
        <div style={{ width: 25, height: 3, backgroundColor: "#333", margin: "4px 0" }} />
        <div style={{ width: 25, height: 3, backgroundColor: "#333", margin: "4px 0" }} />
        <div style={{ width: 25, height: 3, backgroundColor: "#333", margin: "4px 0" }} />
      </button>

      {/* Overlay atrás do modal */}
      {open && (
        <div
          onClick={() => setOpen(false)}
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            backgroundColor: "rgba(0,0,0,0.4)",
            zIndex: 1000,
          }}
        />
      )}

      {/* Modal (Drawer) da esquerda para a direita */}
      <aside
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "80vw",
          height: "100vh",
          backgroundColor: "#fff",
          boxShadow: "2px 0 8px rgba(0,0,0,0.2)",
          padding: 20,
          transform: open ? "translateX(0)" : "translateX(-100%)",
          transition: "transform 0.3s ease-in-out",
          zIndex: 1001,
          display: "flex",
          flexDirection: "column",
        }}
        aria-hidden={!open}
      >
        <header
          style={{
            marginBottom: 20,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <h2>Menu</h2>
          <button
            onClick={() => setOpen(false)}
            aria-label="Fechar histórico"
            style={{
              fontSize: 24,
              background: "transparent",
              border: "none",
              cursor: "pointer",
            }}
          >
            &times;
          </button>
        </header>

      
        {/* Botão para novo pareamento */}
        <button
          onClick={handleNovoPareamento}
          style={{
            marginTop: 20,
            padding: "12px",
            backgroundColor: "#2ecc71",
            color: "#fff",
            fontSize: 16,
            border: "none",
            borderRadius: 8,
            cursor: "pointer",
          }}
        >
          Novo Pareamento
        </button>
      </aside>
    </>
  );
}
