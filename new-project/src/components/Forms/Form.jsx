import React, { useState } from "react";
import "../../assets/Styles/form.css";

function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí enviarías los datos al backend para que se encargue de enviar el correo.
  };

  return (
    <div className="form-container" id="contact">
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
          <label className="label" htmlFor="email">Correo</label>
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
