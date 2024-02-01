const express = require("express");
const cors = require("cors");
const app = express();
const nodemailer = require("nodemailer");
require("dotenv").config();

app.use(cors());
app.use(express.json());
("use strict");

app.post("/send-email", async (req, res) => {
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    secure: true,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  async function main() {
    const mailOptions = {
      from:  `Email Cliente Portfolio: ${req.body.email}`,
      to: process.env.SMTP_USER,
      subject: req.body.subject,
      text: `Nombre: ${req.body.name}\nCorreo: ${req.body.email}\nMensaje: ${req.body.message}`,
    };

    const info = await transporter.sendMail(mailOptions);

    console.log("Message sent: %s", info.messageId);
  }

  main().catch(console.error);
});

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});
