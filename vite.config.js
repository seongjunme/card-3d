import restart from "vite-plugin-restart";
import react from "@vitejs/plugin-react";

export default {
  root: "src/",
  publicDir: "../static/",
  server: {
    host: true,
    open: true,
  },
  build: {
    outDir: "../dist",
    emptyOutDir: true,
    sourcemap: true,
  },
  plugins: [restart({ restart: ["../static/**"] }), react()],
};
