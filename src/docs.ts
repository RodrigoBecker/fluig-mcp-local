/**
 * Base de conhecimento TDN — busca BM25 sobre as páginas raspadas (markdown com frontmatter).
 * Índice em memória, construído na primeira chamada (≈1–3 s para ~1.900 páginas).
 */
import { existsSync, readdirSync, readFileSync } from "node:fs";
import { join } from "node:path";

export interface Page { slug: string; title: string; url: string; body: string; len: number; tf: Map<string, number> }

const STOP = new Set(
  "a o e de da do das dos em no na nos nas um uma uns umas para por com sem que se ao aos como mais ou é ser são foi pelo pela the of to and in is for on".split(" "),
);
export const norm = (s: string) => s.normalize("NFD").replace(/[̀-ͯ]/g, "").toLowerCase();
const tokenize = (s: string) => norm(s).split(/[^a-z0-9_]+/).filter((t) => t.length > 1 && !STOP.has(t));

export class TdnIndex {
  private pages: Page[] = [];
  private df = new Map<string, number>();
  private avgLen = 0;
  private built = false;
  constructor(readonly dir: string) {}

  get available() { return existsSync(this.dir); }
  get size() { this.build(); return this.pages.length; }

  private build() {
    if (this.built || !this.available) return;
    for (const f of readdirSync(this.dir)) {
      if (!f.endsWith(".md")) continue;
      const raw = readFileSync(join(this.dir, f), "utf-8");
      const fm = raw.match(/^---\n([\s\S]*?)\n---\n/);
      const meta = (k: string) => fm?.[1].match(new RegExp(`^${k}:\\s*"?(.*?)"?$`, "m"))?.[1] ?? "";
      const body = fm ? raw.slice(fm[0].length) : raw;
      const title = meta("title") || f.replace(/\.md$/, "");
      const toks = [...tokenize(title), ...tokenize(title), ...tokenize(title), ...tokenize(body)]; // título com peso 3
      const tf = new Map<string, number>();
      for (const t of toks) tf.set(t, (tf.get(t) ?? 0) + 1);
      for (const t of tf.keys()) this.df.set(t, (this.df.get(t) ?? 0) + 1);
      this.pages.push({ slug: f.replace(/\.md$/, ""), title, url: meta("url"), body, len: toks.length, tf });
    }
    this.avgLen = this.pages.reduce((a, p) => a + p.len, 0) / Math.max(1, this.pages.length);
    this.built = true;
  }

  search(query: string, limit = 8) {
    this.build();
    const q = [...new Set(tokenize(query))];
    const N = this.pages.length, k1 = 1.2, b = 0.75;
    const scored = this.pages.map((p) => {
      let s = 0;
      for (const t of q) {
        const f = p.tf.get(t); if (!f) continue;
        const n = this.df.get(t) ?? 0;
        const idf = Math.log(1 + (N - n + 0.5) / (n + 0.5));
        s += idf * ((f * (k1 + 1)) / (f + k1 * (1 - b + (b * p.len) / this.avgLen)));
      }
      return { p, s };
    }).filter((x) => x.s > 0).sort((a, b) => b.s - a.s).slice(0, limit);
    return scored.map(({ p, s }) => ({ slug: p.slug, title: p.title, url: p.url, score: +s.toFixed(2), snippet: snippet(p.body, q) }));
  }

  get(slug: string) { this.build(); return this.pages.find((p) => p.slug === slug); }

  /** Lista as seções (headings) de uma página ou devolve o texto de uma seção específica. */
  read(slug: string, section?: string, maxChars = 12000) {
    const p = this.get(slug);
    if (!p) return undefined;
    const headings = [...p.body.matchAll(/^(#{1,4})\s+(.+)$/gm)].map((m) => ({ level: m[1].length, text: m[2].trim(), idx: m.index! }));
    let text = p.body;
    if (section) {
      const i = headings.findIndex((h) => norm(h.text).includes(norm(section)));
      if (i >= 0) {
        const h = headings[i];
        const end = headings.slice(i + 1).find((x) => x.level <= h.level)?.idx ?? p.body.length;
        text = p.body.slice(h.idx, end);
      }
    }
    const truncated = text.length > maxChars;
    return { title: p.title, url: p.url, sections: headings.map((h) => "  ".repeat(h.level - 1) + h.text), text: text.slice(0, maxChars), truncated };
  }

  /** Catálogo de datasets internos a partir da página "Datasets internos". */
  internalDatasets() {
    const p = this.get("datasets-internos");
    if (!p) return [];
    const blocks = p.body.split(/^### /m).slice(1);
    return blocks.map((blk) => {
      const [head] = blk.split("\n");
      const [id, ...rest] = head.split(" - ");
      const version = blk.match(/Plataforma\s+([\d.]+)\s+ou superior/)?.[1];
      const cols = [...blk.matchAll(/^\|\s*([A-Za-z_][\w.]*)\s*\|\s*([^|]+)\|/gm)]
        .map((m) => ({ name: m[1], description: m[2].trim() }))
        .filter((c) => c.name !== "Coluna");
      return { id: id.trim(), description: rest.join(" - ").trim(), minVersion: version, columns: cols };
    });
  }
}

function snippet(body: string, q: string[], width = 260) {
  const n = norm(body);
  let pos = -1;
  for (const t of q) { pos = n.indexOf(t); if (pos >= 0) break; }
  const start = Math.max(0, pos - 80);
  return body.slice(start, start + width).replace(/\s+/g, " ").trim();
}
