import React from "react";
import "./NavBar.css";
import { FaHome, FaSearch, FaBell, FaUser } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const [active, setActive] = React.useState("home");

  const handleNavigate = (rota, nome) => {
    setActive(nome);
    navigate(rota);
  };

  return (
    <div className="navbar fixed-bottom">
      <div
        className={`nav-item ${active === "home" ? "active" : ""}`}
        onClick={() => handleNavigate("/Home", "home")}
      >
        <FaHome className="icon" />
        <span>Home</span>
      </div>

      <div
        className={`nav-item ${active === "search" ? "active" : ""}`}
        onClick={() => handleNavigate("/search", "search")}
      >
        <FaSearch className="icon" />
      </div>

      <div
        className={`nav-item ${active === "notificacoes" ? "active" : ""}`}
        onClick={() => handleNavigate("/notificacoes", "notificacoes")}
      >
        <FaBell className="icon" />
      </div>

      <div
        className={`nav-item ${active === "perfil" ? "active" : ""}`}
        onClick={() => handleNavigate("/perfil", "perfil")}
      >
        <FaUser className="icon" />
      </div>
    </div>
  );
};

export default Navbar;
