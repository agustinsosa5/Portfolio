import logo from "../../assets/images/logo6.png";
import "../../assets/Styles/header.css";
import {
  AiOutlineInstagram,
  AiFillLinkedin,
  AiFillGithub,
} from "react-icons/ai";

export default function Header() {
  return (
    <header className="header">
      <a href="" className="container-img">
        <img src={logo} alt="Logo" className="logo"/>
      </a>
      <nav className="nav">
        <ul className="ul-nav">
         {/*  <li>
            <a href="" className="nav-option">
              Sobre Mi
            </a>
          </li> */}
          <li>
            <a href="" className="nav-option">
              Portfolio
            </a>
          </li>
          <li>
            <a href="" className="nav-option">
              Habilidades
            </a>
          </li>
          <li>
            <a href="" className="nav-option">
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
