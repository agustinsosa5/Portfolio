import React, { useState } from "react";

function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
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
      <div>
         <h3>Contactame</h3>  
    <form onSubmit={handleSubmit}>
      <label>
        Nombre:
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </label>
      <label>
        Empresa:
        <input
          type="text"
          name="company"
          value={formData.company}
          onChange={handleChange}
        />
      </label>
      <label>
        Correo:
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </label>
      <label>
        Mensaje:
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
        />
      </label>
      <button type="submit">Enviar</button>
    </form>
    </div>    
  );
}

export default ContactForm;
