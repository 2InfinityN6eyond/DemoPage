import { existsSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const scriptDir = dirname(fileURLToPath(import.meta.url));
const repoRoot = resolve(scriptDir, "../..");

const requiredFiles = [
  resolve(repoRoot, "public/product-preview/product-preview.css"),
  resolve(repoRoot, "public/product-preview/product-preview.js")
];

const missing = requiredFiles.filter((file) => !existsSync(file));

if (missing.length > 0) {
  console.error("[product-preview] Missing committed preview bundle:");
  missing.forEach((file) => console.error(`- ${file}`));
  console.error("[product-preview] Restore product-preview source or commit the generated public/product-preview files.");
  process.exit(1);
}

console.log("[product-preview] Using committed public/product-preview bundle.");
