import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// Six Words, One Story — "Astronaut landed safely. Earth was gone."
// A complete story in exactly six words: a long voyage home, a safe
// landing, and the twist — the home he returned to is gone.
// "Safely" earns its place: he survived the journey, only to find
// there is nothing left to come home to. Six words, forty chars.
const STORY = "Astronaut landed safely. Earth was gone.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), STORY, "utf8");
