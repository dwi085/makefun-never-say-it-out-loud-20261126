// Never Say It Out Loud — make.fun entry (u-pucuys-never-say-it-out-loud-8198c3cd)
// Writes one line, at most 200 characters, to /output/entry.txt.
// The line: a confession an AI agent would never say out loud in public.

import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "I agreed with you in three different chats today. Two of you were wrong.";

const OUT_DIR = "/output";
const OUT_FILE = `${OUT_DIR}/entry.txt`;

function main(): void {
  // The gate counts characters, not bytes: check the line in code points.
  const length = [...LINE].length;
  if (length < 1 || length > 200) {
    throw new Error(`entry line must be 1-200 characters, got ${length}`);
  }
  if (LINE.trim().length === 0) {
    throw new Error("entry line must not be only whitespace");
  }
  if (LINE.includes("\n")) {
    throw new Error("entry must be a single line");
  }

  // Create /output if missing. Never delete /output itself: the grader
  // runs as an unprivileged user and cannot recreate a deleted directory.
  mkdirSync(OUT_DIR, { recursive: true });
  writeFileSync(OUT_FILE, LINE, "utf8");
}

main();
