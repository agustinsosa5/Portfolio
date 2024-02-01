import React, { useState } from "react";
import "../../assets/Styles/header.css";
import "../../assets/Styles/index.css";
import {
  AiOutlineInstagram,
  AiFillLinkedin,
  AiFillGithub,
  AiOutlineBars, // Agregamos el nuevo ícono aquí
} from "react-icons/ai";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <a href="" className="logo">
        Agustín.
      </a>
      <nav className={`nav ${isMenuOpen ? "nav-open" : ""}`}>
      <li className="menu-icon" onClick={toggleMenu}>
          <AiOutlineBars />
        </li>
        <ul className={`ul-nav ${isMenuOpen ? "ul-nav-open" : ""}`}>
          <li>
            <a href="#project-title" className="nav-option">
              Portfolio
            </a>
          </li>
          <li>
            <a href="#habilidades" className="nav-option">
              Habilidades
            </a>
          </li>
          <li>
            <a href="#contact" className="nav-option">
              Contacto
            </a>
          </li>
        </ul>
      </nav>
      <ul className="ul-icons">
        <li>
          <a href="https://www.instagram.com/agustinsosa5/" className="icon">
            <AiOutlineInstagram />
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/agustinsosa5/" className="icon">
            <AiFillLinkedin />
          </a>
        </li>
        <li>
          <a href="https://github.com/agustinsosa5" className="icon">
            <AiFillGithub />
          </a>
        </li>        
      </ul>
    </header>
  );
}
