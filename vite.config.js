import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react({
      babel: {
        plugins: [["babel-plugin-react-compiler"]],
      },
    }),
  ],
  server: {
    host: "0.0.0.0",
    port: 5000,
    strictPort: true,
    allowedHosts: [
      "localhost",
      "127.0.0.1",
      "0.0.0.0",
      "192.168.1.100",
      "a18ea806-24f3-406b-ad90-6a3389071b2d-00-39z3reqmg8zr7.pike.replit.dev",
    ],
  },
});
