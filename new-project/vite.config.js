// vite.config.js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import { config } from "dotenv";

// Carga las variables de entorno desde el archivo .env
config();

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()], 
  
});
