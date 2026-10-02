const fs = require('fs');

const SUBS = [
  { n: 1, token: 'r6d3k9w2', zeus: 'https://huzcone1u80s.snzasdesuecs.workers.dev/feed/AbuNuwas', spider: false, majma: true },
  { n: 2, token: 'm4q8z1v7', zeus: 'https://mpzcnxesub5s.h9zvw7ewuk9s.workers.dev/feed/AbuNuwas', spider: false, majma: true },
  { n: 3, token: 'h9c5t2x6', zeus: 'https://qfzb3eejuyls.9rzx6oe9uycs.workers.dev/feed/0727443Z', spider: false, majma: true },
  { n: 4, token: 'k8x2n7m4', zeus: 'https://ujzj0fe8ua4s.t6zthde5udls.workers.dev/feed/46416WLG', spider: false, majma: true },
  { n: 5, token: 't7h2j8r4', zeus: 'https://sczembecuxis.mizmy4etujes.workers.dev/feed/6OYL1WRB', spider: false, majma: true },
  { n: 6, token: 'b5m1c6w9', zeus: 'https://ubzhqnetujss.sabah-16.workers.dev/feed/8UGULZKC', spider: false, majma: true },
];

const MAJMA = [
  'vless://e081da45-9fae-4687-9376-f9a6a0dbbe83@104.20.28.233:80?encryption=none&security=none&type=ws&host=e33xr.qzz.io&path=%2Fid-amz#5845',
  'vless://bfb1ec97-a326-4cf3-adcf-d2a0e2dc49f8@199.232.78.159:443?encryption=none&security=tls&sni=ssl.fastly.com&type=ws&host=pan2e.global.ssl.fastly.net&path=%2F#🇺🇸 4499',
  'vless://7d0fd363-16d2-43ce-9d6d-ed2c15d2cb7c@51.15.16.68:2053?encryption=none&security=reality&sni=www.apple.com&fp=random&pbk=Zotx4F9CI6_q9yeKCKIHDjwzCv_Aq7WSo7N0Zc1A6Sc&sid=3c99c85cbb6b3b44&type=tcp&headerType=none#🇳🇱 6625',
  'vless://5d16ac22-6eea-426f-b778-6f4c2961faef@176.109.104.103:9881?encryption=none&security=reality&sni=dl.google.com&fp=firefox&pbk=Dfgu8Ey0M8Hz4gXGZAwQ3H9jLt2HByVsjAOTWiuKDB0&type=grpc&authority=&serviceName=grpc-tunnel&mode=gun#🇷🇺 6354',
  'vless://XpnTeam-59@199.232.78.160:443?encryption=none&security=tls&sni=ssl.fastly.com&fp=chrome&alpn=http%2F1.1&type=ws&host=Appxdn.global.ssl.fastly.net&path=%2F#🇺🇸 8461',
  'vless://5d16ac22-6eea-426f-b778-6f4c2961faef@176.109.111.7:9881?encryption=none&security=reality&sni=dl.google.com&fp=chrome&pbk=Dfgu8Ey0M8Hz4gXGZAwQ3H9jLt2HByVsjAOTWiuKDB0&sid=aa&type=grpc&authority=%2F%3FTELEGRAM--MARAMBASHI--MARAMBASHI&serviceName=grpc-tunnel&mode=gun#🇷🇺 5935',
  'vless://5d16ac22-6eea-426f-b778-6f4c2961faef@176.108.245.167:9881?encryption=none&security=reality&sni=dl.google.com&fp=chrome&pbk=Dfgu8Ey0M8Hz4gXGZAwQ3H9jLt2HByVsjAOTWiuKDB0&sid=aabbccdd&type=grpc&authority=&serviceName=grpc-tunnel&mode=gun#🇷🇺 1537',
  'vless://ebeb7358-9fc0-4222-a0e5-d8bc274a8856@199.232.78.159:443?encryption=none&security=tls&sni=ssl.fastly.com&type=ws&host=swissjji.global.ssl.fastly.net.&path=%2F#🇺🇸 6968',
  'ss://Y2hhY2hhMjAtaWV0Zi1wb2x5MTMwNTpnSmU3dW1TdEljazVNaWVn@20.166.59.119:443#🇮🇪 68',
  'vless://ebeb7358-9fc0-4222-a0e5-d8bc274a8856@199.232.78.159:443?encryption=none&security=tls&sni=ssl.fastly.com&type=ws&host=looazjboijji.global.ssl.fastly.net.&path=%2F#248',
  'trojan://humanity@188.114.97.6:443?security=tls&sni=www.pleadcourt.org&fm=%7B%22tcp%22%3A%5B%7B%22type%22%3A%22fragment%22%2C%22settings%22%3A%7B%22packets%22%3A%22tlshello%22%2C%22lengths%22%3A%5B%220%22%2C%22104%22%2C%221%22%5D%2C%22delays%22%3A%5B%220%22%5D%2C%22maxSplit%22%3A%220%22%7D%7D%2C%7B%22type%22%3A%22fragment%22%2C%22settings%22%3A%7B%22packets%22%3A%221-1%22%2C%22lengths%22%3A%5B%22114%22%2C%221%22%5D%2C%22delays%22%3A%5B%221%22%5D%2C%22maxSplit%22%3A%2211%22%7D%7D%5D%7D&type=ws&host=www.pleadcourt.org&path=%2Fassignment#136',
  'vless://55af8466-53cd-46f4-aef9-5378f5ac34a4@n2.akan1.ir:8443?encryption=none&security=tls&sni=home.akan1.ir&fp=chrome&type=xhttp&host=home.akan1.ir&path=%2F&mode=auto&extra=%7B%22mode%22%3A%22auto%22%2C%22xPaddingBytes%22%3A%22100-1000%22%7D#189',
  'trojan://ymk9eBP4Ams3-ncYCV4kDAezUzBfkR8x@31.129.42.164:6443?security=tls&sni=node111.ichost.cloud&fp=ios&alpn=h2%2Chttp%2F1.1&type=tcp&headerType=none#🇷🇺 141',
];

const COUNTRY = { us: '🇺🇸', de: '🇩🇪', gb: '🇬🇧', uk: '🇬🇧', nl: '🇳🇱', fr: '🇫🇷', ca: '🇨🇦', fi: '🇫🇮', se: '🇸🇪', tr: '🇹🇷', sg: '🇸🇬', jp: '🇯🇵', ru: '🇷🇺', ie: '🇮🇪' };

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

function majmaFlag(text) {
  const f = text.match(/[\u{1F1E6}-\u{1F1FF}]{2}/u);
  if (f) return f[0];
  const c = text.toLowerCase().match(/---([a-z]{2})--/);
  if (c && COUNTRY[c[1]]) return COUNTRY[c[1]];
  if (/german|\.ger\./i.test(text)) return '🇩🇪';
  return '';
}

function majmaProto(scheme, net, reality) {
  const P = { vless: 'VLESS', vmess: 'VMess', trojan: 'Trojan', ss: 'SS' };
  const T = { ws: 'WS', xhttp: 'XHTTP', httpupgrade: 'HTTPUpgrade', tcp: 'TCP', raw: 'TCP', grpc: 'gRPC' };
  const p = P[scheme] || scheme.toUpperCase();
  if (reality) return p + '-Reality';
  return T[net] ? p + '-' + T[net] : p;
}

function getMajma() {
  return MAJMA.map(line => {
    const i = line.lastIndexOf('#');
    const base = i === -1 ? line : line.slice(0, i);
    const tag = i === -1 ? '' : line.slice(i + 1);
    const code = (tag.match(/(\d+)\s*$/) || ['', ''])[1];
    const scheme = base.split('://')[0].toLowerCase();
    if (scheme === 'vmess') {
      const obj = JSON.parse(Buffer.from(base.slice(8), 'base64').toString('utf-8'));
      const flag = majmaFlag((obj.ps || '') + ' ' + (obj.host || '') + ' ' + tag);
      const name = (flag ? flag + ' │ ' : '') + `Abu al-Atahiya │ ⚡ │ ${code} │ ` + majmaProto('vmess', obj.net, false);
      obj.ps = name;
      return 'vmess://' + Buffer.from(JSON.stringify(obj), 'utf-8').toString('base64');
    }
    const q = base.includes('?') ? base.slice(base.indexOf('?') + 1) : '';
    const net = (q.match(/(?:^|&)type=([^&]+)/) || ['', ''])[1].toLowerCase();
    const reality = /security=reality/.test(q);
    const flag = majmaFlag(base + ' ' + tag);
    const name = (flag ? flag + ' │ ' : '') + `Abu al-Atahiya │ ⚡ │ ${code} │ ` + majmaProto(scheme, net, reality);
    return base + '#' + encodeURIComponent(name);
  });
}

async function main() {
  fs.mkdirSync('sub', { recursive: true });
  const majma = getMajma();
  console.log('MAJMA OK:', majma.length);

  for (const s of SUBS) {
    const out = [];
    try { const z = await getZeus(s.zeus); out.push(...z); console.log(`#${s.n} ZEUS OK:`, z.length); }
    catch (e) { console.log(`#${s.n} ZEUS ERROR:`, e.message); }
    if (s.spider) out.push(...getSpider());
    if (s.majma) out.push(...majma);
    if (out.length === 0) { console.log(`#${s.n} nothing, keeping old file`); continue; }
    fs.writeFileSync(`sub/${s.token}.txt`, Buffer.from(out.join('\n'), 'utf-8').toString('base64'));
    console.log(`#${s.n} saved:`, out.length);
  }
}

main();
