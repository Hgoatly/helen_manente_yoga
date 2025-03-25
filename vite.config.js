import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { reactRouter } from "@react-router/dev/vite";
import tailwindcss from "@tailwindcss/vite";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  base: "/helen_manente_yoga/", // Replace with your actual GitHub repo name
  plugins: [react(), tailwindcss(), reactRouter(), tsconfigPaths()],
});
