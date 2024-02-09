// vite.config.js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import { config } from "dotenv";

// Carga las variables de entorno desde el archivo .env
config();

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    proxy: {
      "/send-email": process.env.EXPRESS_BACKEND_URL, // Ajusta el puerto si es necesario
    },
  },
  define: {
    // Define las variables de entorno para que estén disponibles en tu código
    "process.env": process.env,
  },
});
