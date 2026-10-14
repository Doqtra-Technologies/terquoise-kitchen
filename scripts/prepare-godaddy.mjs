// Packages the standalone build for GoDaddy cPanel Node.js hosting.
// Run via `npm run build:godaddy`; upload the resulting zip and extract it
// into the Node.js app's Application root.
import { cpSync, existsSync, rmSync } from "node:fs";
import { execFileSync } from "node:child_process";

const standalone = ".next/standalone";
const zip = "godaddy-deploy.zip";

if (!existsSync(`${standalone}/server.js`)) {
  console.error("No standalone build found. Run `next build` with output: \"standalone\" first.");
  process.exit(1);
}

// server.js only serves these if they sit next to it.
cpSync("public", `${standalone}/public`, { recursive: true });
cpSync(".next/static", `${standalone}/.next/static`, { recursive: true });

// Images are unoptimized, so sharp is never loaded; its binaries are built
// for this machine's OS and would be dead weight on GoDaddy's Linux servers.
for (const dir of ["sharp", "@img"]) {
  rmSync(`${standalone}/node_modules/${dir}`, { recursive: true, force: true });
}

rmSync(zip, { force: true });
try {
  // bsdtar (Windows 10+, macOS) writes zip archives with -a.
  execFileSync("tar", ["-a", "-c", "-f", zip, "-C", standalone, "."], { stdio: "inherit" });
  console.log(`\nReady: ${zip}`);
} catch {
  console.log(`\nZip step failed; upload the contents of ${standalone}/ instead.`);
}
