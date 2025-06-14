import React from "react";
import "./Pareamento.css";
import { FaExclamationTriangle } from "react-icons/fa";

const Pareamento = () => {
  return (
    <div className="pareamento-card">
      <FaExclamationTriangle className="warning-icon" />
      <h2>Cinta não pareada</h2>
      <p>Aguardando conexão com o dispositivo...</p>
      <div className="spinner"></div>
    </div>
  );
};

export default Pareamento;
