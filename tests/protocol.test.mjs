import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';

const source = fs.readFileSync('src/worker.js', 'utf8');
const calls = [];
const delegated = new Response('adapter response', { status: 202 });
const astroWorker = { fetch(...args) { calls.push(args); return delegated; } };
const worker = new Function('astroWorker', source.replace(/^import .*;\n/, '').replace('export default', 'return'))(astroWorker);

test('apex HTTP GET and HEAD redirect before adapter with exact path and query', async () => {
  for (const method of ['GET', 'HEAD']) {
    const response = await worker.fetch(new Request('http://gatbawi.com/cookies/?probe=ssr%2Frow130&x=1&x=2', { method }), {}, {});
    assert.equal(response.status, 308);
    assert.equal(response.headers.get('location'), 'https://gatbawi.com/cookies/?probe=ssr%2Frow130&x=1&x=2');
    assert.equal(await response.text(), '');
  }
  assert.equal(calls.length, 0);
});
test('HTTPS and local HTTP delegate the original request, bindings and context', async () => {
  for (const url of ['https://gatbawi.com/cookies/', 'http://localhost:8130/cookies/', 'http://127.0.0.1:8130/', 'http://other.example/']) {
    const request = new Request(url); const env = {}; const context = {};
    assert.equal(await worker.fetch(request, env, context), delegated);
    assert.deepEqual(calls.at(-1), [request, env, context]);
  }
  assert.match(fs.readFileSync('wrangler.worker.toml', 'utf8'), /main = "\.\/src\/worker.js"/);
  assert.match(fs.readFileSync('wrangler.worker.toml', 'utf8'), /run_worker_first = true/);
});

test('adapter builds the guarded entry from explicit configuration', () => {
  assert.match(fs.readFileSync('astro.config.mjs', 'utf8'), /cloudflare\(\{ configPath: "\.\/wrangler\.worker\.toml" \}\)/);
  assert.match(source, /@astrojs\/cloudflare\/entrypoints\/server/);
  assert.doesNotMatch(source, /dist\/server\/entry/);
  const generated = fs.readFileSync('dist/server/entry.mjs', 'utf8');
  assert.match(generated, /url\.hostname === ["']gatbawi\.com["']/);
  assert.match(generated, /Response\.redirect\(url\.href, 308\)/);
  const config = JSON.parse(fs.readFileSync('dist/server/wrangler.json', 'utf8'));
  assert.equal(config.name, 'gatbawi');
  assert.equal(config.main, 'entry.mjs');
  assert.equal(config.assets.run_worker_first, true);
  assert.ok(config.userConfigPath.endsWith('/wrangler.worker.toml'));
  const deploy = JSON.parse(fs.readFileSync('.wrangler/deploy/config.json', 'utf8'));
  assert.equal(deploy.configPath, '../../dist/server/wrangler.json');
});

test('actual generated default handler redirects before its adapter delegate', async () => {
  const generated = fs.readFileSync('dist/server/entry.mjs', 'utf8');
  const start = generated.lastIndexOf('var worker_entry_default = ');
  const end = generated.indexOf('\n//#endregion', start);
  assert.ok(start >= 0 && end > start);
  let called = 0;
  const handler = new Function('server_default', generated.slice(start, end) + '\nreturn worker_entry_default;')({ fetch() { called++; return delegated; } });
  for (const method of ['GET', 'HEAD']) {
    const response = await handler.fetch(new Request('http://gatbawi.com/cookies/?probe=ssr%2Frow130&x=1&x=2', { method }), {}, {});
    assert.equal(response.status, 308);
    assert.equal(response.headers.get('location'), 'https://gatbawi.com/cookies/?probe=ssr%2Frow130&x=1&x=2');
    assert.equal(await response.text(), '');
  }
  assert.equal(called, 0);
  assert.equal(await handler.fetch(new Request('https://gatbawi.com/cookies/'), {}, {}), delegated);
  assert.equal(called, 1);
});
