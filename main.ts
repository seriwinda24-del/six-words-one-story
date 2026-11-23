import { mkdirSync, writeFileSync } from "node:fs";

// Six Words, One Story — "He kept her voicemail. Still does."
// A complete story in exactly six words: grief and loyalty in one
// breath. "Still does" is the turn — a past habit that never ended,
// one whole life implied in the voicemail he cannot delete.
// Six words, thirty-four characters.
const STORY = "He kept her voicemail. Still does.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, STORY, "utf8");
