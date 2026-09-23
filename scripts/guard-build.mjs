#!/usr/bin/env node
/**
 * Preflight guard for `next build`.
 *
 * `next dev` and `next build` both write to .next/. If a build runs while a dev
 * server is live, it overwrites the dev runtime's chunks and every subsequent
 * request 500s with "__webpack_modules[moduleId] is not a function".
 *
 * This detects a running dev server by its development-only signature and aborts
 * the build before it can do damage. Pure Node, no deps, cross-platform.
 */

const ports = [
  process.env.PORT,
  process.env.DEV_PORT,
  '3000',
  '3001',
  '3002',
].filter(Boolean);

// App Router emits {"b":"development"} in the flight payload; Pages Router emits
// buildId:"development" and /_next/static/development/ chunk paths. The flight
// payload escapes its quotes, so backslashes are stripped before matching.
const DEV_SIGNATURE =
  /"b"\s*:\s*"development"|"buildId"\s*:\s*"development"|\/_next\/static\/development\//;

async function isDevServer(port) {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), 1500);
  try {
    const res = await fetch(`http://localhost:${port}/`, {
      signal: controller.signal,
      headers: { connection: 'close' },
    });
    const html = (await res.text()).replace(/\\/g, '');
    return DEV_SIGNATURE.test(html);
  } catch {
    return false;
  } finally {
    clearTimeout(timer);
  }
}

const running = [];
for (const port of [...new Set(ports)]) {
  if (await isDevServer(port)) running.push(port);
}

if (running.length > 0) {
  console.error('');
  console.error(`  ✖ next dev is running on port ${running.join(', ')}.`);
  console.error('    Building now would overwrite .next and corrupt the dev runtime.');
  console.error('    Stop the dev server first, then re-run the build.');
  console.error('');
  // Set the code and let the event loop drain — process.exit() here trips a
  // libuv assertion on Windows while the fetch socket is still closing.
  process.exitCode = 1;
}
