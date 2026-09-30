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
  'vless://0e8e60ce-fb19-488e-beb3-13a4d51194d8@spiderpanel-production-fdf3.up.railway.app:443?encryption=none&security=tls&sni=siderail-production-32d6.up.railway.app&fp=chrome&alpn=http%2F1.1&type=ws&host=siderail-production-32d6.up.railway.app&path=%2FSideRail%2Fws-WtbYr_KR#icubaby%2FSideRail%20-%20VLESS-WS',
  'vless://0e8e60ce-fb19-488e-beb3-13a4d51194d8@spiderpanel-production-fdf3.up.railway.app:443?encryption=none&security=tls&sni=siderail-production-32d6.up.railway.app&fp=chrome&alpn=h2%2Chttp%2F1.1&type=xhttp&host=siderail-production-32d6.up.railway.app&path=%2FSideRail%2Fxhttp-qICDYFTg#icubaby%2FSideRail%20-%20VLESS-XHTTP',
  'vmess://ew0KICAidiI6ICIyIiwNCiAgInBzIjogImljdWJhYnkvU2lkZVJhaWwgLSBWTWVzcy1XUyIsDQogICJhZGQiOiAic2lkZXJhaWwtcHJvZHVjdGlvbi0zMmQ2LnVwLnJhaWx3YXkuYXBwIiwNCiAgInBvcnQiOiAiNDQzIiwNCiAgImlkIjogIjBlOGU2MGNlLWZiMTktNDg4ZS1iZWIzLTEzYTRkNTExOTRkOCIsDQogICJhaWQiOiAiMCIsDQogICJzY3kiOiAiYXV0byIsDQogICJuZXQiOiAid3MiLA0KICAidHlwZSI6ICJub25lIiwNCiAgImhvc3QiOiAic2lkZXJhaWwtcHJvZHVjdGlvbi0zMmQ2LnVwLnJhaWx3YXkuYXBwIiwNCiAgInBhdGgiOiAiL1NpZGVSYWlsL3dzLVBqd0VHUE16IiwNCiAgInRscyI6ICJ0bHMiLA0KICAic25pIjogInNpZGVyYWlsLXByb2R1Y3Rpb24tMzJkNi51cC5yYWlsd2F5LmFwcCIsDQogICJhbHBuIjogImh0dHAvMS4xIiwNCiAgImZwIjogImNocm9tZSIsDQogICJjcyI6ICIiLA0KICAiaW5zZWN1cmUiOiAiMCIsDQogICJ2Y24iOiAiIiwNCiAgInBjcyI6ICIiLA0KICAiZGlhbE1vZGUiOiAiIg0KfQ==',
  'trojan://un1LnoiCPwnW2TtR@spiderpanel-production-fdf3.up.railway.app:443?security=tls&sni=siderail-production-32d6.up.railway.app&fp=chrome&alpn=http%2F1.1&type=ws&host=siderail-production-32d6.up.railway.app&path=%2FSideRail%2Fws-lzZ134n8#icubaby%2FSideRail%20-%20Trojan-WS',
  'vless://0e8e60ce-fb19-488e-beb3-13a4d51194d8@spiderpanel-production-fdf3.up.railway.app:443?encryption=none&security=tls&sni=siderail-production-32d6.up.railway.app&fp=chrome&alpn=http%2F1.1&type=httpupgrade&host=siderail-production-32d6.up.railway.app&path=%2FSideRail%2Fhttpupgrade-KrSmZI_A#icubaby%2FSideRail%20-%20VLESS-HTTPUpgrade',
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
