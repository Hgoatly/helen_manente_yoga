// filepath: c:\Users\hgoat\helen_manente_yoga\vite.config.js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/helen_manente_yoga/", // Replace with your actual GitHub repo name
  plugins: [react()],
});