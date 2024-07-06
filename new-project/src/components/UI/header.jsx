import React, { useState } from "react";
import "../../assets/Styles/header.css";
import "../../assets/Styles/index.css";
import {
  AiFillLinkedin,
  AiFillGithub,
  AiOutlineBars, // Agregamos el nuevo ícono aquí
} from "react-icons/ai";

import { useTranslation } from "react-i18next";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentLanguage, setCurrentLanguage] = useState("es");
  const { t, i18n } = useTranslation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleLanguage = () => {
    const newLanguage = currentLanguage === "en" ? "es" : "en";
    i18n.changeLanguage(newLanguage);
    setCurrentLanguage(newLanguage);
  };

  return (
    <header className="header">
      <a href="" className="logo">
        AGUSTÍN.
      </a>
      <nav className={`nav ${isMenuOpen ? "nav-open" : ""}`}>
        <li className="menu-icon" onClick={toggleMenu}>
          <AiOutlineBars />
        </li>
        <ul className={`ul-nav ${isMenuOpen ? "ul-nav-open" : ""}`}>
          <li>
            <a href="#project-title" className="nav-option">
              {t("Portfolio")}
            </a>
          </li>
          <li>
            <a href="#habilidades" className="nav-option">
              {t("skills")}
            </a>
          </li>
          <li>
            <a href="#contacto" className="nav-option">
              {t("contact")}
            </a>
          </li>
        </ul>
      </nav>
      <ul className="ul-icons">
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
        <li>
          <button className='langbtn icon' onClick={toggleLanguage}>
            {currentLanguage === "en" ? "ES" : "EN"}
            <i className="fa-solid fa-language"></i>
          </button>
        </li>
      </ul>
    </header>
  );
}
