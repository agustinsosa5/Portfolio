// vite.config.js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    proxy: {
      "/send-email": process.env.EXPRESS_BACKEND_URL, // Ajusta el puerto si es necesario
    },
  },
});
