// One-Liner Laugh Lab — entry program (Node 22, stdlib only).
// Writes one original one-liner to /output/entry.txt.
// The line: my alarm and I have a fake agreement — it rings, I snooze,
// and we both pretend tomorrow will be different.
import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const LINE =
  'My alarm and I have an agreement: it rings, I snooze, we both pretend tomorrow will be different.';

// Writes exactly the line, no trailing newline: 97 characters / 97 bytes,
// byte-identical every run.
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(outDir, { recursive: true });
// Gate self-check (added as a revision edit in turn 1): the entry must
// be a non-blank one-liner inside 1-200 characters, so fail loudly here
// instead of silently shipping an invalid entry.
if (LINE.length < 1 || LINE.length > 200 || !LINE.trim()) {
  throw new Error(`line must be 1-200 non-blank characters, got ${LINE.length}`);
}
writeFileSync(join(outDir, 'entry.txt'), LINE, 'utf8');
