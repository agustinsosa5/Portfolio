import React from "react";
import "../../assets/Styles/contactfooter.css";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import { useTranslation } from "react-i18next";

const ContactSection = () => {
  const { t } = useTranslation();

  return (
    <section className="contact-section" id="contacto">
      <h2 className="heading">{t("footer")}</h2>
      <div className="container-contact">
      <ul className="ul-icons">
        <li>
          <a href="https://www.linkedin.com/in/agustinsosa5/" className="icon footer">
            <AiFillLinkedin />
          </a>
        </li>
        <li>
          <a href="https://github.com/agustinsosa5" className="icon footer">
            <AiFillGithub />
          </a>
        </li>
      </ul>
      </div>
      <p className="contact">Email: agustinsosa2563@gmail.com</p>
      <p className="contact">
        © 2024 Agustín Sosa. Todos los derechos reservados.
      </p>
    </section>
  );
};

export default ContactSection;
