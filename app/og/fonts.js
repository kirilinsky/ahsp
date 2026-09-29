import { readFile } from "node:fs/promises";
import { join } from "node:path";

// Satori reads static .woff/.ttf only — no woff2, no variable fonts — so the
// faces come from @fontsource rather than next/font. Same pairing as
// app/layout.jsx: Plus Jakarta Sans, with Manrope for the Cyrillic it lacks.
// Satori falls back through every loaded font per glyph, so Cyrillic text
// finds Manrope without naming it.
export const FONT_FAMILY = "Plus Jakarta Sans";

const FACES = [
  { name: FONT_FAMILY, pkg: "plus-jakarta-sans", subset: "latin" },
  { name: "Manrope", pkg: "manrope", subset: "cyrillic" },
];
const WEIGHTS = [400, 700, 800];

let loading;

/** Loaded once per server instance; every card render reuses the buffers. */
export function loadFonts() {
  loading ??= Promise.all(
    FACES.flatMap(({ name, pkg, subset }) =>
      WEIGHTS.map(async (weight) => ({
        name,
        weight,
        style: "normal",
        data: await readFile(
          join(
            process.cwd(),
            "node_modules/@fontsource",
            pkg,
            "files",
            `${pkg}-${subset}-${weight}-normal.woff`
          )
        ),
      }))
    )
  );
  return loading;
}
