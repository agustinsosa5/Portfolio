// vite.config.js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    proxy: {
      "/send-email": "http://localhost:5000", // Ajusta el puerto si es necesario
    },
  },
});
