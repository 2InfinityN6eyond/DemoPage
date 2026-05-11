import { existsSync } from "node:fs";
import { resolve } from "node:path";
import { spawnSync } from "node:child_process";

const script = process.argv[2];
const validScripts = new Set(["build", "dev", "check"]);

if (!script || !validScripts.has(script)) {
  console.error("Usage: node ./scripts/preview-workspace.mjs <build|dev|check>");
  process.exit(1);
}

const workspacePackage = resolve(process.cwd(), "product-preview/package.json");

if (!existsSync(workspacePackage)) {
  console.log(`[preview-workspace] Skipping "${script}" because product-preview workspace is missing.`);
  process.exit(0);
}

const result = spawnSync("npm", ["--workspace", "product-preview", "run", script], {
  stdio: "inherit",
  shell: process.platform === "win32"
});

process.exit(result.status ?? 1);
