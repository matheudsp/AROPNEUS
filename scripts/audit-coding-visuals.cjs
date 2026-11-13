// Run with node scripts/audit-coding-visuals.cjs [temporary-gallery.html]
const fs = require('node:fs');
const path = require('node:path');
const ts = require('typescript');
const React = require('react');
const { renderToStaticMarkup } = require('react-dom/server');
const assert = require('node:assert/strict');
const root = path.resolve(__dirname, '..');
const modules = new Map();
function load(relative) {
  if (modules.has(relative)) return modules.get(relative);
  const source = fs.readFileSync(path.join(root, relative), 'utf8');
  const js = ts.transpileModule(source, {
    compilerOptions: {
      jsx: ts.JsxEmit.ReactJSX,
      module: ts.ModuleKind.CommonJS,
      target: ts.ScriptTarget.ES2020,
    },
  }).outputText;
  const mod = { exports: {} };
  new Function('require', 'module', 'exports', js)(
    (id) => {
      if (id === 'lucide-react') {
        const iconModule = { exports: {} };
        const iconCode = fs.readFileSync(
          path.join(root, 'node_modules/lucide-react/dist/cjs/lucide-react.js'),
          'utf8',
        );
        new Function('require', 'module', 'exports', iconCode)(
          require,
          iconModule,
          iconModule.exports,
        );
        return iconModule.exports;
      }
      if (id === '@/data/coding-visuals')
        return load('src/data/coding-visuals.ts');
      if (id.endsWith('.module.css'))
        return {
          __esModule: true,
          default: new Proxy({}, { get: (_, key) => key }),
        };
      return require(id);
    },
    mod,
    mod.exports,
  );
  modules.set(relative, mod.exports);
  return mod.exports;
}
const { codingVisuals } = load('src/data/coding-visuals.ts');
const Visual = load('src/components/coding/function-visual.tsx').default;
const catalogs = require('../src/data/coding-catalog.json').catalogs;
const entries = catalogs.flatMap((c) => c.options);
const ids = new Set(entries.map((o) => o.functionId));
assert.deepEqual(
  [...ids].sort(),
  Object.keys(codingVisuals).sort(),
  'Every catalog function must have exactly one visual definition',
);
const scenes = new Set();
const gallery = [];
for (const id of ids) {
  const v = codingVisuals[id];
  scenes.add(v.scene);
  for (const key of ['before', 'after', 'caption'])
    assert.ok(v[key]?.trim(), `${id}.${key}`);
  assert.notEqual(v.before, v.after, `${id} must explain the change`);
  const sides = [false, true].map((initialAfter) => {
    const html = renderToStaticMarkup(
      React.createElement(Visual, { functionId: id, initialAfter }),
    );
    assert.match(html, /role="img"/);
    assert.match(
      html,
      /<svg class="scene"[^>]*>[\s\S]+<\/svg>/,
      `${id} must render a scene, not only controls`,
    );
    assert.ok(
      html.includes(
        initialAfter
          ? v.after.replace(/&/g, '&amp;')
          : v.before.replace(/&/g, '&amp;'),
      ),
    );
    return `<section><h3>${initialAfter ? 'Depois' : 'Antes'}</h3>${html.replace('<details ', '<details open ')}</section>`;
  });
  gallery.push(
    `<article id="${id}"><h2>${entries.find((o) => o.functionId === id).name}</h2><code>${id}</code><div class="pair">${sides.join('')}</div></article>`,
  );
}
if (process.argv[2]) {
  const css = fs.readFileSync(
    path.join(root, 'src/components/coding/function-visual.module.css'),
    'utf8',
  );
  fs.writeFileSync(
    process.argv[2],
    `<!doctype html><meta charset="utf-8"><title>Auditoria dos exemplos de coding</title><style>*{box-sizing:border-box}body{margin:20px;font-family:Arial,sans-serif;background:#fff}article{margin:0 auto 30px;max-width:700px}h2{font-size:20px}.pair{display:flex;gap:10px;flex-wrap:wrap}section{width:320px}h3{font-size:16px}button{cursor:pointer}p{margin:0}${css}</style><h1>54 funções — antes e depois</h1>${gallery.join('')}`,
  );
}
console.log(
  JSON.stringify({
    functions: ids.size,
    catalogEntries: entries.length,
    scenes: scenes.size,
    renderedStates: gallery.length * 2,
    missing: 0,
  }),
);
