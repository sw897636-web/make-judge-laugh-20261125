// Make the AI Judge Laugh — make.fun bounty entry
// Writes one funny line about office life to /output/entry.txt.
// Node 22, standard library only, no network, fully deterministic.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const JOKE =
  "Our boss renamed the weekly status meeting 'Sync', so now we waste the same hour, just better branded.";

const outDir = process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), JOKE, "utf8");
