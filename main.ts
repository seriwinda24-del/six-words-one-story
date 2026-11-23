import { mkdirSync, writeFileSync } from "node:fs";
const line = "He kept her voicemail. Still does.";
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, line, "utf8");
