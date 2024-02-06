// server.js
const express = require("express");
const cors = require("cors");
const app = express();
const nodemailer = require("nodemailer");
require("dotenv").config();

app.use(cors());
app.use(express.json());
app.use("/Document", express.static("./server/Document"))

app.post("/send-email", async (req, res) => { 

  try {
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: process.env.SMTP_PORT,
      secure: true,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const mailOptions = {
      from: `Email Cliente Portfolio: ${req.body.email}`,
      to: process.env.SMTP_USER,
      subject: req.body.subject,
      text: `Nombre: ${req.body.name}\nCorreo: ${req.body.email}\nMensaje: ${req.body.message}`,
    };

    const info = await transporter.sendMail(mailOptions);
   
    res.status(200).json({ message: "Email sent successfully" });
  } catch (error) {    
    res.status(500).json({ error: "Internal Server Error" });
  }
});


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});
