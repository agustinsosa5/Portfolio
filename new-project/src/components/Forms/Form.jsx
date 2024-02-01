import React, { useState, useRef } from "react";
import "../../assets/Styles/index.css";

import "../../assets/Styles/form.css";

function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const alertMsg = useRef(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const show = () => (alertMsg.current.style.display = "block");
  const hide = () => (alertMsg.current.style.display = "none");

  const closeAlert = () => {
    setTimeout(() => {
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
      hide();
    }, 3000);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    show();
    closeAlert();

    try {
      const response = await fetch("http://localhost:3001/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
    } catch (error) {
      throw "No se logra enviar mensaje: " + error;
    }
  };

  return (
    <div className="form-container" id="contact">
      <div className="alert" ref={alertMsg}>
        <span className="mensaje spans">Mensaje enviado!</span>
      </div>
      <div className="image-mail"></div>
      <form onSubmit={handleSubmit} className="form">
        <h1>CONTACTAR</h1>
        <div className="container-input">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <label htmlFor="name">Nombre</label>
        </div>

        <div className="container-input">
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <label className="label" htmlFor="email">
            Correo
          </label>
        </div>

        <div className="container-input">
          <input
            type="text"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            required
          />
          <label htmlFor="subject">Asunto</label>
        </div>

        <div className="container-textarea">
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}

export default ContactForm;
