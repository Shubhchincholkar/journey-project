import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// basic vite config, nothing fancy
export default defineConfig({
  plugins: [react(), tailwindcss()],
});
