const fs = require('fs');

const SUBS = [
  { n: 1, token: 'r6d3k9w2', zeus: 'https://huzcone1u80s.snzasdesuecs.workers.dev/feed/AbuNuwas', spider: false, rail: true },
  { n: 2, token: 'm4q8z1v7', zeus: 'https://mpzcnxesub5s.h9zvw7ewuk9s.workers.dev/feed/AbuNuwas', spider: false, rail: true },
  { n: 3, token: 'h9c5t2x6', zeus: 'https://qfzb3eejuyls.9rzx6oe9uycs.workers.dev/feed/0727443Z', spider: false, rail: true },
  { n: 4, token: 'k8x2n7m4', zeus: 'https://ujzj0fe8ua4s.t6zthde5udls.workers.dev/feed/46416WLG', spider: false, rail: true },
  { n: 5, token: 't7h2j8r4', zeus: 'https://sczembecuxis.mizmy4etujes.workers.dev/feed/6OYL1WRB', spider: false, rail: true },
  { n: 6, token: 'b5m1c6w9', zeus: 'https://ubzhqnetujss.sabah-16.workers.dev/feed/8UGULZKC', spider: false, rail: true },
];

const RAIL = [
  'vless://4221b1da-5ebd-4833-9c2c-f0f8175549c2@juzojuzojuzo0-sloper-production.up.railway.app:443?encryption=none&security=tls&sni=juzojuzojuzorail0rail-production.up.railway.app&fp=chrome&alpn=http%2F1.1&type=ws&host=juzojuzojuzorail0rail-production.up.railway.app&path=%2FSideRail%2Fws-LGX3xaN0#icubaby%2FSideRail%20-%20VLESS-WS',
  'vless://4221b1da-5ebd-4833-9c2c-f0f8175549c2@juzojuzojuzo0-sloper-production.up.railway.app:443?encryption=none&security=tls&sni=juzojuzojuzorail0rail-production.up.railway.app&fp=chrome&alpn=h2%2Chttp%2F1.1&type=xhttp&host=juzojuzojuzorail0rail-production.up.railway.app&path=%2FSideRail%2Fxhttp--NoC0FE6#icubaby%2FSideRail%20-%20VLESS-XHTTP',
  'vmess://ew0KICAidiI6ICIyIiwNCiAgInBzIjogImljdWJhYnkvU2lkZVJhaWwgLSBWTWVzcy1XUyIsDQogICJhZGQiOiAianV6b2p1em9qdXpvMC1zbG9wZXItcHJvZHVjdGlvbi51cC5yYWlsd2F5LmFwcCIsDQogICJwb3J0IjogIjQ0MyIsDQogICJpZCI6ICI0MjIxYjFkYS01ZWJkLTQ4MzMtOWMyYy1mMGY4MTc1NTQ5YzIiLA0KICAiYWlkIjogIjAiLA0KICAic2N5IjogImF1dG8iLA0KICAibmV0IjogIndzIiwNCiAgInR5cGUiOiAibm9uZSIsDQogICJob3N0IjogImp1em9qdXpvanV6b3JhaWwwcmFpbC1wcm9kdWN0aW9uLnVwLnJhaWx3YXkuYXBwIiwNCiAgInBhdGgiOiAiL1NpZGVSYWlsL3dzLUVwN3FQOUJHIiwNCiAgInRscyI6ICJ0bHMiLA0KICAic25pIjogImp1em9qdXpvanV6b3JhaWwwcmFpbC1wcm9kdWN0aW9uLnVwLnJhaWx3YXkuYXBwIiwNCiAgImFscG4iOiAiaHR0cC8xLjEiLA0KICAiZnAiOiAiY2hyb21lIiwNCiAgImNzIjogIiIsDQogICJpbnNlY3VyZSI6ICIwIiwNCiAgInZjbiI6ICIiLA0KICAicGNzIjogIiIsDQogICJkaWFsTW9kZSI6ICIiDQp9',
  'trojan://GtB2RF22MSGW7tPO@juzojuzojuzo0-sloper-production.up.railway.app:443?security=tls&sni=juzojuzojuzorail0rail-production.up.railway.app&fp=chrome&alpn=http%2F1.1&type=ws&host=juzojuzojuzorail0rail-production.up.railway.app&path=%2FSideRail%2Fws-P5af01Xv#icubaby%2FSideRail%20-%20Trojan-WS',
  'vless://4221b1da-5ebd-4833-9c2c-f0f8175549c2@juzojuzojuzo0-sloper-production.up.railway.app:443?encryption=none&security=tls&sni=juzojuzojuzorail0rail-production.up.railway.app&fp=chrome&alpn=http%2F1.1&type=httpupgrade&host=juzojuzojuzorail0rail-production.up.railway.app&path=%2FSideRail%2Fhttpupgrade-C6RQyBMA#icubaby%2FSideRail%20-%20VLESS-HTTPUpgrade',
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

function getRail() {
  return RAIL.map((line, i) => {
    const proto = getName(line).split(' - ').pop().trim();
    return setName(line, `🇳🇱 │ Abu al-Atahiya │ ⚡ │ ${i + 1} │ ${proto}`);
  });
}

async function main() {
  fs.mkdirSync('sub', { recursive: true });
  const rail = getRail();
  console.log('RAIL OK:', rail.length);

  for (const s of SUBS) {
    const out = [];
    try { const z = await getZeus(s.zeus); out.push(...z); console.log(`#${s.n} ZEUS OK:`, z.length); }
    catch (e) { console.log(`#${s.n} ZEUS ERROR:`, e.message); }
    if (s.spider) out.push(...getSpider());
    if (s.rail) out.push(...rail);
    if (out.length === 0) { console.log(`#${s.n} nothing, keeping old file`); continue; }
    fs.writeFileSync(`sub/${s.token}.txt`, Buffer.from(out.join('\n'), 'utf-8').toString('base64'));
    console.log(`#${s.n} saved:`, out.length);
  }
}

main();
