/* // Form.jsx
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
      const response = await fetch("http://localhost:3000/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        // Si la respuesta es exitosa
        console.log("Código de estado:", response.status);
      } else {
        // Si la respuesta no es exitosa
        console.error("Código de estado:", response.status);
      }
    } catch (error) {
      // Manejar los errores de la solicitud
      console.error("Error al enviar la solicitud:", error);
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
 */

// Form.jsx
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

  const show = (message) => {
    alertMsg.current.textContent = message;
    alertMsg.current.style.display = "block";
  };
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
    
    try {
      const response = await fetch("http://localhost:3000/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        // Si la respuesta es exitosa
        console.log("Código de estado:", response.status);
        show("Mensaje enviado!");
        closeAlert();
      } else {
        // Si la respuesta no es exitosa
        console.error("Código de estado:", response.status);
        show("Error al enviar el mensaje.<br/> Por favor, inténtalo de nuevo.");
      }
    } catch (error) {
      // Manejar los errores de la solicitud
      console.error("Error al enviar la solicitud:", error);
      show("Error al enviar el mensaje. Por favor, inténtalo de nuevo.");
    }
  };

  return (
    <div className="form-container" id="contact">
      <div className="alert" ref={alertMsg}></div>
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
            /* id="name" */
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
            /* id="email" */
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
            /* id="subject" */
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
