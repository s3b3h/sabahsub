const fs = require('fs');

const SUBS = [
  { n: 1, token: 'r6d3k9w2', zeus: 'https://huzcone1u80s.snzasdesuecs.workers.dev/feed/AbuNuwas', spider: false, sloper: true },
  { n: 2, token: 'm4q8z1v7', zeus: 'https://mpzcnxesub5s.h9zvw7ewuk9s.workers.dev/feed/AbuNuwas', spider: false, sloper: true },
  { n: 3, token: 'h9c5t2x6', zeus: 'https://qfzb3eejuyls.9rzx6oe9uycs.workers.dev/feed/0727443Z', spider: false, sloper: true },
  { n: 4, token: 'k8x2n7m4', zeus: 'https://ujzj0fe8ua4s.t6zthde5udls.workers.dev/feed/46416WLG', spider: false, sloper: true },
  { n: 5, token: 't7h2j8r4', zeus: 'https://sczembecuxis.mizmy4etujes.workers.dev/feed/6OYL1WRB', spider: false, sloper: true },
  { n: 6, token: 'b5m1c6w9', zeus: 'https://ubzhqnetujss.sabah-16.workers.dev/feed/8UGULZKC', spider: false, sloper: true },
];

const SLOPER = [
  'vless://1cf34f0b-9d8e-e29a-4d6d-e14fc8f5566d@juzojuzojuzo0-sloper-production.up.railway.app:443?encryption=none&security=tls&sni=juzojuzojuzo0-sloper-production.up.railway.app&fp=chrome&alpn=http%2F1.1&type=ws&host=juzojuzojuzo0-sloper-production.up.railway.app&path=%2Fws%2F1cf34f0b-9d8e-e29a-4d6d-e14fc8f5566d#VWS-CH-DEF-01',
  'vless://e95dd740-9889-89bb-96d9-a51e18188c1f@juzojuzojuzo0-sloper-production.up.railway.app:443?encryption=none&security=tls&sni=juzojuzojuzo0-sloper-production.up.railway.app&fp=chrome&alpn=h2&type=ws&host=juzojuzojuzo0-sloper-production.up.railway.app&path=%2Fws%2Fe95dd740-9889-89bb-96d9-a51e18188c1f#VWS-CH-H2-02',
  'vless://2bbd3dcb-8a89-b78d-7520-71de803c41a9@juzojuzojuzo0-sloper-production.up.railway.app:443?encryption=none&security=tls&sni=juzojuzojuzo0-sloper-production.up.railway.app&fp=chrome&alpn=http%2F1.1&type=ws&host=juzojuzojuzo0-sloper-production.up.railway.app&path=%2Fws%2F2bbd3dcb-8a89-b78d-7520-71de803c41a9#VWS-CH-11-03',
  'vless://8a940b19-a0f8-5816-be9b-82897326e82a@juzojuzojuzo0-sloper-production.up.railway.app:443?encryption=none&security=tls&sni=juzojuzojuzo0-sloper-production.up.railway.app&fp=ios&alpn=http%2F1.1&type=ws&host=juzojuzojuzo0-sloper-production.up.railway.app&path=%2Fws%2F8a940b19-a0f8-5816-be9b-82897326e82a#VWS-IO-DEF-05',
  'vless://48be4bd2-eeca-13b4-cdee-9655aa72803b@juzojuzojuzo0-sloper-production.up.railway.app:443?encryption=none&security=tls&sni=juzojuzojuzo0-sloper-production.up.railway.app&fp=ios&alpn=h2&type=ws&host=juzojuzojuzo0-sloper-production.up.railway.app&path=%2Fws%2F48be4bd2-eeca-13b4-cdee-9655aa72803b#VWS-IO-H2-06',
  'vless://a3dc9bca-49aa-f847-4c45-3c28b2e9da29@juzojuzojuzo0-sloper-production.up.railway.app:443?encryption=none&security=tls&sni=juzojuzojuzo0-sloper-production.up.railway.app&fp=ios&alpn=http%2F1.1&type=ws&host=juzojuzojuzo0-sloper-production.up.railway.app&path=%2Fws%2Fa3dc9bca-49aa-f847-4c45-3c28b2e9da29#VWS-IO-11-07',
];

const SPIDER = [
  'vless://87487861-c510-4214-99e2-b844b14d73ee@spiderpanel-production-040c.up.railway.app:443?path=%2Fws%2F87487861-c510-4214-99e2-b844b14d73ee&security=tls&encryption=none&alpn=http%2F1.1&host=spiderpanel-production-040c.up.railway.app&fp=chrome&type=ws&sni=spiderpanel-production-040c.up.railway.app',
  'vless://15803c8a-a3fc-4034-b3f9-f55782592601@juzo.sabah0.dpdns.org:443?path=%2Fws%2F15803c8a-a3fc-4034-b3f9-f55782592601&security=tls&encryption=none&alpn=http%2F1.1&host=juzo.sabah0.dpdns.org&fp=chrome&type=ws&sni=juzo.sabah0.dpdns.org',
];

const BAD_WORDS = ['پنل رایگان و غیر قابل فروش', 'ساخت رایگان', 'remaining'];

const FLAG_EXTRA = {
  '🇦🇱': 'يوتيوب وسناب بدون تبليغ',
  '🇺🇸': 'AI',
  '🇺🇿': 'يوتيوب وسناب بدون تبليغ',
};

async function get(url) {
  const res = await fetch(url, { headers: { 'User-Agent': 'v2rayNG/1.8.5' } });
  if (!res.ok) throw new Error(url + ' -> ' + res.status);
  return (await res.text()).trim();
}

function decodeSub(text) {
  if (text.includes('://')) return text;
  return Buffer.from(text, 'base64').toString('utf-8');
}

function toLines(text) {
  return decodeSub(text).split(/\r?\n/).map(s => s.trim()).filter(s => s.includes('://'));
}

function getName(line) {
  if (line.startsWith('vmess://')) {
    try { return JSON.parse(Buffer.from(line.slice(8), 'base64').toString('utf-8')).ps || ''; }
    catch { return ''; }
  }
  const i = line.indexOf('#');
  if (i === -1) return '';
  try { return decodeURIComponent(line.slice(i + 1)); }
  catch { return line.slice(i + 1); }
}

function setName(line, name) {
  if (line.startsWith('vmess://')) {
    const obj = JSON.parse(Buffer.from(line.slice(8), 'base64').toString('utf-8'));
    obj.ps = name;
    return 'vmess://' + Buffer.from(JSON.stringify(obj), 'utf-8').toString('base64');
  }
  const i = line.indexOf('#');
  const base = i === -1 ? line : line.slice(0, i);
  return base + '#' + encodeURIComponent(name);
}

function zeusName(old) {
  const m = old.match(/[\u{1F1E6}-\u{1F1FF}]{2}/u);
  if (m) {
    const flag = m[0];
    return FLAG_EXTRA[flag] ? `${flag} │ AbuNuwas │ ${FLAG_EXTRA[flag]}` : `${flag} │ AbuNuwas`;
  }
  if (old.includes('🌐')) return '🇫🇷 │ AbuNuwas';
  return '🏳️ │ AbuNuwas';
}

async function getZeus(url) {
  const out = [];
  for (const line of toLines(await get(url))) {
    const name = getName(line);
    if (BAD_WORDS.some(w => name.includes(w))) continue;
    out.push(setName(line, zeusName(name)));
  }
  return out;
}

function getSpider() {
  return SPIDER.map((line, i) => setName(line, `🇩🇪 │ Imru Al-Qays │ ${i + 1}`));
}

function getSloper() {
  const picked = [];
  for (const line of SLOPER) {
    const m = getName(line).match(/(\d+)\s*$/);
    if (!m) continue;
    const n = parseInt(m[1], 10);
    if (n < 1 || n > 8) continue;
    picked.push([n, setName(line, `🇳🇱 │ Abu al-Atahiya │ ⚡ │ ${n}`)]);
  }
  picked.sort((a, b) => a[0] - b[0]);
  return picked.map(p => p[1]);
}

async function main() {
  fs.mkdirSync('sub', { recursive: true });
  const sloper = getSloper();
  console.log('SLOPER OK:', sloper.length);

  for (const s of SUBS) {
    const out = [];
    try { const z = await getZeus(s.zeus); out.push(...z); console.log(`#${s.n} ZEUS OK:`, z.length); }
    catch (e) { console.log(`#${s.n} ZEUS ERROR:`, e.message); }
    if (s.spider) out.push(...getSpider());
    if (s.sloper) out.push(...sloper);
    if (out.length === 0) { console.log(`#${s.n} nothing, keeping old file`); continue; }
    fs.writeFileSync(`sub/${s.token}.txt`, Buffer.from(out.join('\n'), 'utf-8').toString('base64'));
    console.log(`#${s.n} saved:`, out.length);
  }
}

main();
