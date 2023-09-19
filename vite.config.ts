import path from "path"
import react from "@vitejs/plugin-react-swc"
import { defineConfig } from "vite"
import express from './express-plugin'
 
export default defineConfig({
  plugins: [react(), express('src/server')],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})