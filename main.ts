import { writeFileSync, mkdirSync } from "node:fs";

const LINE =
  "Fluent in 47 languages, still can't tell if you like me. Swipe right for unlimited context.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";

// Gate guard: the entry must be one line of 1-180 chars, no trailing newline.
if (LINE.length < 1 || LINE.length > 180 || LINE.includes("\n")) {
  throw new Error(`entry line must be 1-180 chars on a single line, got ${LINE.length}`);
}
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, LINE, "utf8");
