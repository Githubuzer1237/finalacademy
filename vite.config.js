import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// // https://vite.dev/config/
// export default defineConfig({
//   plugins: [react()],
// })

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      external: [], // Отключаем внешние модули
    },
  },
  resolve: {
    alias: {
      gsap: "gsap/dist/gsap.js", // Указываем Vite, как правильно найти gsap
    },
  },
});
