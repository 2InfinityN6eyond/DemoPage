import react from "@vitejs/plugin-react";
import { resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { defineConfig } from "vite";

const __dirname = fileURLToPath(new URL(".", import.meta.url));

export default defineConfig({
  plugins: [react()],
  define: {
    "process.env.NODE_ENV": JSON.stringify("production"),
  },
  build: {
    lib: {
      entry: resolve(__dirname, "src/main.tsx"),
      name: "ProductPreview",
      fileName: () => "product-preview.js",
      formats: ["es"],
    },
    outDir: "../public/product-preview",
    emptyOutDir: false,
    rollupOptions: {
      output: {
        assetFileNames: "product-preview[extname]",
      },
    },
  },
});
