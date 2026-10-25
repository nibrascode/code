/** Nibras Schema: DBML-like text ⇄ model, SQL export and CREATE TABLE import. Pure functions. */
export type Column = { name: string; type: string; pk?: boolean; unique?: boolean; notNull?: boolean; increment?: boolean; default?: string };
export type Table = { name: string; columns: Column[] };
export type RefKind = ">" | "<" | "-" | "<>";
export type Ref = { a: { t: string; c: string }; b: { t: string; c: string }; kind: RefKind };
export type Model = { tables: Table[]; refs: Ref[] };
export type ParseError = { line: number; msg: string };

const ident = (s: string) => s.replace(/^["`[]|["`\]]$/g, "");
const quoteName = (s: string) => (/^[A-Za-z_][\w]*$/.test(s) ? s : `"${s.replace(/"/g, "")}"`);

function parseEndpoint(s: string) { const m = s.trim().match(/^"?([\w$]+)"?\."?([\w$]+)"?$/); return m ? { t: m[1], c: m[2] } : null; }

export function parse(text: string): { model: Model; errors: ParseError[] } {
  const tables: Table[] = []; const refs: Ref[] = []; const errors: ParseError[] = [];
  const lines = text.split("\n");
  let cur: Table | null = null; let curLine = 0;
  const inlineRefs: { from: { t: string; c: string }; spec: string; line: number }[] = [];
  for (let i = 0; i < lines.length; i++) {
    const raw = lines[i].replace(/\/\/.*$/, "").trim();
    if (!raw) continue;
    if (!cur) {
      let m = raw.match(/^table\s+"?([\w$]+)"?(?:\s+as\s+\w+)?\s*\{\s*$/i);
      if (m) { cur = { name: m[1], columns: [] }; curLine = i + 1; continue; }
      m = raw.match(/^ref(?:\s+\w+)?\s*:\s*(.+?)\s*(<>|>|<|-)\s*(.+?)\s*(\[.*\])?$/i);
      if (m) { const a = parseEndpoint(m[1]), b = parseEndpoint(m[3]); if (a && b) refs.push({ a, b, kind: m[2] as RefKind }); else errors.push({ line: i + 1, msg: "ref" }); continue; }
      if (/^(project|enum|tablegroup|note)\b/i.test(raw)) { // skip blocks we do not model
        if (raw.includes("{") && !raw.includes("}")) { while (i < lines.length && !lines[i].includes("}")) i++; }
        continue;
      }
      errors.push({ line: i + 1, msg: "syntax" }); continue;
    }
    if (raw === "}") { tables.push(cur); cur = null; continue; }
    if (/^(note|indexes)\b/i.test(raw)) { if (raw.includes("{") && !raw.includes("}")) { while (i < lines.length && !lines[i].includes("}")) i++; } continue; }
    const m = raw.match(/^"?([\w$]+)"?\s+([\w$]+(?:\s*\([^)]*\))?(?:\[\])?)\s*(\[(.*)\])?\s*$/);
    if (!m) { errors.push({ line: i + 1, msg: "column" }); continue; }
    const col: Column = { name: m[1], type: m[2].replace(/\s+/g, "") };
    const settings = m[4] ? splitTop(m[4]) : [];
    for (const sRaw of settings) {
      const s = sRaw.trim(), low = s.toLowerCase();
      if (low === "pk" || low === "primary key") col.pk = true;
      else if (low === "unique") col.unique = true;
      else if (low === "not null") col.notNull = true;
      else if (low === "null") col.notNull = false;
      else if (low === "increment") col.increment = true;
      else if (low.startsWith("default:")) col.default = s.slice(8).trim();
      else if (low.startsWith("ref:")) inlineRefs.push({ from: { t: cur.name, c: col.name }, spec: s.slice(4).trim(), line: i + 1 });
      else if (low.startsWith("note:")) { /* ignore */ }
      else if (s) errors.push({ line: i + 1, msg: "setting:" + s });
    }
    if (!col.notNull) delete col.notNull;
    cur.columns.push(col);
  }
  if (cur) { errors.push({ line: curLine, msg: "unclosed" }); tables.push(cur); }
  for (const r of inlineRefs) { const m = r.spec.match(/^(<>|>|<|-)\s*(.+)$/); const b = m ? parseEndpoint(m[2]) : null; if (m && b) refs.push({ a: r.from, b, kind: m[1] as RefKind }); else errors.push({ line: r.line, msg: "ref" }); }
  // Validate references.
  const has = (e: { t: string; c: string }) => tables.some((t) => t.name === e.t && t.columns.some((c) => c.name === e.c));
  const ok = refs.filter((r) => has(r.a) && has(r.b));
  if (ok.length < refs.length) errors.push({ line: 0, msg: "unknown-ref" });
  const dup = tables.map((t) => t.name).filter((n, i, a) => a.indexOf(n) !== i);
  if (dup.length) errors.push({ line: 0, msg: "dup:" + dup[0] });
  return { model: { tables, refs: ok }, errors };
}
function splitTop(s: string) { const out: string[] = []; let depth = 0, q = "", cur = ""; for (const ch of s) { if (q) { if (ch === q) q = ""; cur += ch; continue; } if (ch === "'" || ch === '"' || ch === "`") { q = ch; cur += ch; continue; } if (ch === "(") depth++; if (ch === ")") depth--; if (ch === "," && !depth) { out.push(cur); cur = ""; continue; } cur += ch; } if (cur.trim()) out.push(cur); return out; }

export function serialize(m: Model): string {
  const out: string[] = [];
  for (const t of m.tables) {
    out.push(`Table ${quoteName(t.name)} {`);
    for (const c of t.columns) {
      const s: string[] = [];
      if (c.pk) s.push("pk"); if (c.increment) s.push("increment"); if (c.unique) s.push("unique"); if (c.notNull) s.push("not null"); if (c.default !== undefined && c.default !== "") s.push(`default: ${c.default}`);
      out.push(`  ${quoteName(c.name)} ${c.type || "varchar"}${s.length ? ` [${s.join(", ")}]` : ""}`);
    }
    out.push("}", "");
  }
  for (const r of m.refs) out.push(`Ref: ${r.a.t}.${r.a.c} ${r.kind} ${r.b.t}.${r.b.c}`);
  return out.join("\n").trim() + "\n";
}

export type Dialect = "postgres" | "mysql" | "sqlite";
const q = (d: Dialect, s: string) => (d === "mysql" ? "`" + s + "`" : '"' + s + '"');
function mapType(d: Dialect, t: string, inc?: boolean) {
  const low = t.toLowerCase();
  if (d === "postgres") { if (inc) return /big/.test(low) ? "bigserial" : "serial"; if (low === "datetime") return "timestamp"; if (low === "int") return "integer"; return t; }
  if (d === "mysql") { if (low === "timestamptz") return "timestamp"; if (low === "text[]" || low.endsWith("[]")) return "json"; if (low === "boolean" || low === "bool") return "boolean"; if (low === "varchar") return "varchar(255)"; if (low === "uuid") return "char(36)"; if (low === "jsonb") return "json"; return t; }
  if (/int/.test(low)) return "INTEGER"; if (/char|text|uuid|json|enum/.test(low)) return "TEXT"; if (/real|float|double|decimal|numeric/.test(low)) return "REAL"; if (/bool/.test(low)) return "INTEGER"; if (/date|time/.test(low)) return "TEXT"; if (/blob|bytea|binary/.test(low)) return "BLOB"; return t.toUpperCase();
}
/** FK placement for a ref: [child table.col] references [parent table.col]. */
function fk(r: Ref) { return r.kind === "<" ? { child: r.b, parent: r.a } : { child: r.a, parent: r.b }; }

export function toSql(m: Model, d: Dialect): string {
  const out: string[] = [`-- Generated by Nibras Schema (${d === "postgres" ? "PostgreSQL" : d === "mysql" ? "MySQL" : "SQLite"})`, ""];
  const extra: Table[] = []; const refs: Ref[] = [];
  for (const r of m.refs) {
    if (r.kind !== "<>") { refs.push(r); continue; }
    const ta = m.tables.find((t) => t.name === r.a.t), tb = m.tables.find((t) => t.name === r.b.t);
    const ca = ta?.columns.find((c) => c.name === r.a.c), cb = tb?.columns.find((c) => c.name === r.b.c);
    const name = `${r.a.t}_${r.b.t}`; const c1 = `${r.a.t}_${r.a.c}`, c2 = `${r.b.t}_${r.b.c}`;
    extra.push({ name, columns: [{ name: c1, type: ca?.type === "serial" ? "integer" : ca?.type ?? "integer", pk: true, notNull: true }, { name: c2, type: cb?.type === "serial" ? "integer" : cb?.type ?? "integer", pk: true, notNull: true }] });
    refs.push({ a: { t: name, c: c1 }, b: r.a, kind: ">" }, { a: { t: name, c: c2 }, b: r.b, kind: ">" });
  }
  const tables = [...m.tables, ...extra];
  const oneToOne = new Set(refs.filter((r) => r.kind === "-").map((r) => `${fk(r).child.t}.${fk(r).child.c}`));
  for (const t of tables) {
    const pks = t.columns.filter((c) => c.pk);
    const lines = t.columns.map((c) => {
      const sqliteAuto = d === "sqlite" && c.increment && c.pk && pks.length === 1;
      let s = `  ${q(d, c.name)} ${sqliteAuto ? "INTEGER" : mapType(d, c.type || "varchar", c.increment)}`;
      if (pks.length === 1 && c.pk) s += sqliteAuto ? " PRIMARY KEY AUTOINCREMENT" : " PRIMARY KEY";
      if (c.increment && d === "mysql") s += " AUTO_INCREMENT";
      if (c.notNull && !c.pk) s += " NOT NULL";
      if ((c.unique || oneToOne.has(`${t.name}.${c.name}`)) && !c.pk) s += " UNIQUE";
      if (c.default !== undefined && c.default !== "") s += ` DEFAULT ${sqlDefault(c.default, d)}`;
      return s;
    });
    if (pks.length > 1) lines.push(`  PRIMARY KEY (${pks.map((c) => q(d, c.name)).join(", ")})`);
    if (d === "sqlite") for (const r of refs) { const f = fk(r); if (f.child.t === t.name) lines.push(`  FOREIGN KEY (${q(d, f.child.c)}) REFERENCES ${q(d, f.parent.t)} (${q(d, f.parent.c)})`); }
    out.push(`CREATE TABLE ${q(d, t.name)} (`, lines.join(",\n"), `)${d === "mysql" ? " ENGINE=InnoDB" : ""};`, "");
  }
  if (d !== "sqlite") for (const r of refs) { const f = fk(r); out.push(`ALTER TABLE ${q(d, f.child.t)} ADD FOREIGN KEY (${q(d, f.child.c)}) REFERENCES ${q(d, f.parent.t)} (${q(d, f.parent.c)});`); }
  return out.join("\n").trim() + "\n";
}
function sqlDefault(v: string, d: Dialect) { const s = v.trim(); if (/^`now\(\)`$/i.test(s) && d !== "postgres") return "CURRENT_TIMESTAMP"; if (/^`.*`$/.test(s)) return s.slice(1, -1); if (/^'.*'$/.test(s) || /^-?\d+(\.\d+)?$/.test(s) || /^(true|false|null)$/i.test(s)) return s; if (/^\w+\(\)$/.test(s)) return s; return `'${s.replace(/^"|"$/g, "").replace(/'/g, "''")}'`; }

/** Reads CREATE TABLE / ALTER TABLE … FOREIGN KEY statements. */
export function fromSql(sql: string, known: Table[] = []): Model {
  const src = sql.replace(/--[^\n]*/g, "").replace(/\/\*[\s\S]*?\*\//g, "");
  const tables: Table[] = []; const refs: Ref[] = [];
  const re = /create\s+table\s+(?:if\s+not\s+exists\s+)?([`"[\]\w.]+)\s*\(/gi;
  let m: RegExpExecArray | null;
  while ((m = re.exec(src))) {
    let depth = 1, i = re.lastIndex; while (i < src.length && depth) { if (src[i] === "(") depth++; else if (src[i] === ")") depth--; i++; }
    const body = src.slice(re.lastIndex, i - 1); re.lastIndex = i;
    const name = ident(m[1].split(".").pop()!);
    const t: Table = { name, columns: [] };
    for (const partRaw of splitTop(body)) {
      const part = partRaw.trim(); const low = part.toLowerCase();
      let x = low.match(/^(?:constraint\s+\S+\s+)?primary\s+key\s*\(([^)]+)\)/);
      if (x) { x[1].split(",").map((s) => ident(s.trim())).forEach((cn) => { const c = t.columns.find((c) => c.name.toLowerCase() === cn); if (c) c.pk = true; }); continue; }
      x = part.match(/^(?:constraint\s+\S+\s+)?foreign\s+key\s*\(([^)]+)\)\s*references\s+([`"[\]\w.]+)\s*\(([^)]+)\)/i);
      if (x) { refs.push({ a: { t: name, c: ident(x[1].trim()) }, b: { t: ident(x[2].split(".").pop()!), c: ident(x[3].trim()) }, kind: ">" }); continue; }
      x = low.match(/^(?:constraint\s+\S+\s+)?unique\s*(?:key\s*\S*\s*)?\(([^)]+)\)/);
      if (x) { const cols = x[1].split(","); if (cols.length === 1) { const c = t.columns.find((c) => c.name.toLowerCase() === ident(cols[0].trim())); if (c) c.unique = true; } continue; }
      if (/^(key|index|check|constraint)\b/i.test(part)) continue;
      const cm = part.match(/^([`"[]?[\w$]+[`"\]]?)\s+([\w]+(?:\s*\([^)]*\))?(?:\s+(?:varying|precision|unsigned|with(?:out)?\s+time\s+zone))*)(.*)$/i);
      if (!cm) continue;
      const rest = cm[3]; const r = rest.toLowerCase();
      const col: Column = { name: ident(cm[1]), type: cm[2].replace(/\s+/g, " ").toLowerCase().replace(/^character varying/, "varchar") };
      if (/primary\s+key/.test(r)) col.pk = true;
      if (/not\s+null/.test(r)) col.notNull = true;
      if (/\bunique\b/.test(r)) col.unique = true;
      if (/auto_increment|autoincrement|identity/.test(r) || /^(big)?serial$/.test(col.type)) { col.increment = true; if (/serial/.test(col.type)) col.type = col.type === "bigserial" ? "bigint" : "integer"; }
      const dm = rest.match(/default\s+('(?:[^']|'')*'|[^\s,]+(?:\(\))?)/i); if (dm) col.default = /^'/.test(dm[1]) ? dm[1] : /^[\d.-]+$|^(true|false|null)$/i.test(dm[1]) ? dm[1] : "`" + dm[1] + "`";
      const rm = rest.match(/references\s+([`"[\]\w.]+)\s*\(([^)]+)\)/i); if (rm) refs.push({ a: { t: name, c: col.name }, b: { t: ident(rm[1].split(".").pop()!), c: ident(rm[2].trim()) }, kind: ">" });
      t.columns.push(col);
    }
    tables.push(t);
  }
  const al = /alter\s+table\s+(?:only\s+)?([`"[\]\w.]+)\s+add\s+(?:constraint\s+\S+\s+)?foreign\s+key\s*\(([^)]+)\)\s*references\s+([`"[\]\w.]+)\s*\(([^)]+)\)/gi;
  while ((m = al.exec(src))) refs.push({ a: { t: ident(m[1].split(".").pop()!), c: ident(m[2].trim()) }, b: { t: ident(m[3].split(".").pop()!), c: ident(m[4].trim()) }, kind: ">" });
  const all = [...tables, ...known.filter((k) => !tables.some((t) => t.name === k.name))];
  const has = (e: { t: string; c: string }) => all.some((t) => t.name === e.t && t.columns.some((c) => c.name === e.c));
  return { tables, refs: refs.filter((r) => has(r.a) && has(r.b)) };
}

export const SAMPLE = `// Nibras Schema — write tables here or edit them on the canvas
Table users {
  id integer [pk, increment]
  full_name varchar [not null]
  email varchar [unique, not null]
  country_code int
  created_at timestamp [default: \`now()\`]
}

Table countries {
  code int [pk]
  name varchar [not null]
  continent_name varchar
}

Table orders {
  id integer [pk, increment]
  user_id integer [not null]
  status varchar [default: 'new']
  created_at timestamp
}

Table products {
  id integer [pk, increment]
  name varchar [not null]
  price decimal(10,2) [not null, default: 0]
}

Table order_items {
  order_id integer [pk]
  product_id integer [pk]
  quantity int [default: 1]
}

Table profiles {
  user_id integer [pk]
  bio text
}

Table tags {
  id integer [pk, increment]
  label varchar [unique]
}

Ref: users.country_code > countries.code
Ref: orders.user_id > users.id
Ref: order_items.order_id > orders.id
Ref: order_items.product_id > products.id
Ref: profiles.user_id - users.id
Ref: products.id <> tags.id
`;
