import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import compression from "vite-plugin-compression";

// https://vite.dev/config/
export default defineConfig({
  base: "/portfolio-page/",
  plugins: [
    react(),
    compression({
      algorithm: "brotliCompress",
      ext: ".br",
      threshold: 10240,
    }),
  ],
  resolve: {
    alias: {
      "@assets": path.resolve(__dirname, "./src/assets"),
      "@components": path.resolve(__dirname, "./src/components"),
      "@context": path.resolve(__dirname, "./src/context"),
      "@hooks": path.resolve(__dirname, "./src/hooks"),
      "@config": path.resolve(__dirname, "./src/config"),
      "@pages": path.resolve(__dirname, "./src/pages"),
    },
  },
});
