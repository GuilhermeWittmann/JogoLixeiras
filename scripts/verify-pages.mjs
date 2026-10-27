import assert from "node:assert/strict";
import { access, readFile, writeFile } from "node:fs/promises";
import path from "node:path";

const output = path.resolve("dist/client");
const html = await readFile(path.join(output, "index.html"), "utf8");
assert(html.includes("Lixo no Lugar Certo"), "Missing prerendered game title");
assert(html.includes("Guia das lixeiras"), "Missing prerendered start screen");
assert(!html.includes("This page didn't load"), "Prerender returned an error screen");

const references = [...html.matchAll(/(?:src|href)="([^"?#]+)(?:[?#][^"]*)?"/g)]
  .map((match) => match[1])
  .filter((url) => url.startsWith("/") && !url.startsWith("//"));
assert(references.some((url) => url.endsWith(".js")), "Missing JavaScript entry");
assert(references.some((url) => url.endsWith(".css")), "Missing stylesheet");
for (const url of references) {
  assert(url.startsWith("/JogoLixeiras/"), `Incorrect Pages base: ${url}`);
  await access(path.join(output, decodeURIComponent(url.slice("/JogoLixeiras/".length))));
}
await access(path.join(output, "favicon.ico"));
await writeFile(path.join(output, ".nojekyll"), "");
console.log(`GitHub Pages verified: prerendered HTML and ${references.length} local references in dist/client.`);