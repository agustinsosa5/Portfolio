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

  //referencia a elementos del Dom.
  const alertMsg = useRef(null);
  const alertMsgEnviando = useRef(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  //alertas de enviado.
  const show = () => alertMsg.current.classList.toggle("hide");
  const showEnviando = () => alertMsgEnviando.current.classList.toggle("hide");
  const hide = () => (alertMsg.current.style.display = "none");
  const hideEnviando = () => (alertMsgEnviando.current.style.display = "none");

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

 /*  const backend = process.env.EXPRESS_BACKEND_URL; */
  const handleSubmit = async (e) => {   
    e.preventDefault();
    showEnviando();
    try {
      const response = await fetch("https://backend-jq1g.onrender.com/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        // Si la respuesta es exitosa
        console.log("Código de estado:", response.status);
        hideEnviando();
        show();
        closeAlert();
      } else {
        // Si la respuesta no es exitosa
        console.error("Código de estado:", response.status);
        show("Error al enviar el mensaje Por favor, inténtalo de nuevo.");
      }
    } catch (error) {
      // Manejar los errores de la solicitud
      console.error("Error al enviar la solicitud:", error);
      show("Error al enviar el mensaje. Por favor, inténtalo de nuevo.");
    }
  };

  return (
    <div className="form-container" id="contact">
      <div className="alert mensaje hide" ref={alertMsg}>
        Mensaje Enviado!
      </div>
      <div className="alert mensaje hide" ref={alertMsgEnviando}>
        Enviando...
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
            autoComplete="off"
            id="name"
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
            autoComplete="off"
            id="email"
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
            autoComplete="off"
            id="subject"
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
