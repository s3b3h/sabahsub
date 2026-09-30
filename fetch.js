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
  'ss://MjAyMi1ibGFrZTMtY2hhY2hhMjAtcG9seTEzMDU6Y2dmcEZuVm4xOTB0WjV1NXRPaW5KZ1NRR25LOU9YRVYrOHErSFRURG9Ycz0@158.101.217.178:45819#mlmvpn5547',
  'trojan://mitivpn@167.82.76.7:443?security=tls&alpn=http/1.1&insecure=0&host=mitivpn---us--s---mitivpn-11.global.ssl.fastly.net&fp=chrome&type=ws&allowInsecure=0&sni=ssl.fastly.com#mlmvpn6658',
  'trojan://mitivpn@199.232.78.160:443?security=tls&sni=ssl.fastly.com&alpn=http/1.1&type=ws&host=mitivpn---us--s---mitivpn-11.global.ssl.fastly.net&path=/---@MiTiVPN---@MiTiVPN/---@MiTiVPN---@MiTiVPN/---@MiTiVPN---@MiTiVPN/D-e1i@MiTiVPN---@MiTiVPN/---@MiTiVPN---@MiTiVPN/---@MiTiVPN---@MiTiVPN#mlmvpn4529',
  'vless://d6962b1a-4701-4456-ba61-deb28c913a66@199.232.78.159:443?security=tls&encryption=none&insecure=0&host=pan2e.global.ssl.fastly.net&type=ws&allowInsecure=0&sni=ssl.fastly.com#mlmvpn524',
  'vless://6ba68c69-e108-502d-7b1c-e806fbc3cccd@german.0-vless.ger.hosting-96.ir:32244?security=reality&encryption=none&pbk=BVr9mUEWXHmB9JgkztcURl94b8E2-w8KBbGedfcsqws&headerType=none&fp=chrome&spx=%2F&type=tcp&sni=www.yahoo.com&sid=3de61cdafc0a4fd9#mlmvpn3941',
  'vless://aa7c2760-e4c3-4034-9455-40a8a584f64c@199.232.78.159:443/?type=ws&encryption=none&flow=&host=pannn1.global.ssl.fastly.net&path=/&security=tls&sni=ssl.fastly.com&alpn=networld_vpn-channel@.networld_vpn-channel@.networld_vpn-channel@.networld_vpn-channel@.networld_vpn-channel@.networld_vpn-channel@.networld_vpn-#mlmvpn6199',
  'trojan://mitivpn@199.232.78.188:443?path=/?Telegram---PLANB_NET---PLANB_NET---PLANB_NET---PLANB_NET&allowInsecure=0&host=mitivpn---gb--s---mitivpn-1.global.ssl.fastly.net&sni=ssl.fastly.com&security=tls&alpn=http/1.1&fp=chrome&insecure=0&type=ws#mlmvpn2115',
  'vless://d6962b1a-4701-4456-ba61-deb28c913a66@199.232.78.170:443?security=tls&encryption=none&insecure=0&host=pan2e.global.ssl.fastly.net&type=ws&allowInsecure=0&sni=ssl.fastly.com#mlmvpn7973',
  'trojan://mitivpn@199.232.78.101:443?path=/---@GHOFLSHCAN---@GHOFLSHCAN/---@GHOFLSHCAN---@GHOFLSHCAN/---@GHOFLSHCAN---@GHOFLSHCAN/NLSus---@GHOFLSHCAN---@GHOFLSHCAN/---@GHOFLSHCAN---@GHOFLSHCAN/---@GHOFLSHCAN---@GHOFLSHCAN&security=tls&alpn=http/1.1&insecure=0&host=mitivpn---de--s---mitivpn-11.global.ssl.fastly.net&fp=chrome&type=ws&allowInsecure=0&sni=ssl.fastly.com#mlmvpn9602',
  'vless://XpnTeam-51@199.232.78.160:443?path=/&security=tls&alpn=http/1.1&encryption=none&insecure=0&host=Appxdn.global.ssl.fastly.net&fp=chrome&type=ws&allowInsecure=0&sni=ssl.fastly.com#mlmvpn3294',
  'vless://XpnTeam-50@199.232.78.170:443?path=/&security=tls&alpn=http/1.1&encryption=none&insecure=0&host=Appxdn.global.ssl.fastly.net&fp=chrome&type=ws&allowInsecure=0&sni=ssl.fastly.com#mlmvpn1519',
  'trojan://mitivpn@199.232.78.170:443?security=tls&alpn=http/1.1&insecure=0&host=mitivpn---de--s---mitivpn-11.global.ssl.fastly.net&fp=chrome&type=ws&allowInsecure=0&sni=ssl.fastly.com#mlmvpn9512',
  'vless://XpnTeam-50@199.232.78.160:443?path=/&security=tls&alpn=http/1.1&encryption=none&insecure=0&host=Appxdn.global.ssl.fastly.net&fp=chrome&type=ws&allowInsecure=0&sni=ssl.fastly.com#mlmvpn6895',
  'vmess://eyJ2IjoiMiIsInBzIjoiVVMg8J+HuvCfh7ggfCBAUmF5ZGlrYWx4IHwgRDUzNDgyIiwiYWRkIjoibmljZS5pcmFuYXBwbGVjZW50ZXIuY29tIiwicG9ydCI6IjQ0MyIsImlkIjoiNmJhNjhjNjktZTEwOC01MDJkLTdiMWMtZTgwNmZiYzNjY2NkIiwiYWlkIjoiMCIsInNjeSI6ImF1dG8iLCJuZXQiOiJ4aHR0cCIsInR5cGUiOiJhdXRvIiwiaG9zdCI6ImhzYnNoaWpzYnVkZW55eW91ci1uYW1lLmdsb2JhbC5zc2wuZmFzdGx5Lm5ldCIsInBhdGgiOiIvY29uZmlndXJlL3NlcnZpY2VzL0xEVnZpSTlXTTBVR2x6QVM1UGdFVDciLCJ0bHMiOiJ0bHMiLCJzbmkiOiJkZWZhdWx0LnNzbC5mYXN0bHkubmV0IiwiYWxwbiI6ImgyIiwiZnAiOiJjaHJvbWUiLCJpbnNlY3VyZSI6IjAiLCJ2Y24iOiIiLCJwY3MiOiIifQ==#mlmvpn4821',
  'vmess://eyJhZGQiOiIxOTkuMjMyLjc4LjE2MCIsImFpZCI6IjAiLCJhbHBuIjoiaDIiLCJmcCI6ImNocm9tZSIsImhvc3QiOiJoc2JzaGlqc2J1ZGVueXlvdXItbmFtZS5nbG9iYWwuc3NsLmZhc3RseS5uZXQiLCJpZCI6IjZiYTY4YzY5LWUxMDgtNTAyZC03YjFjLWU4MDZmYmMzY2NjZCIsImluc2VjdXJlIjoiMCIsIm5ldCI6InhodHRwIiwicGF0aCI6Ii9jb25maWd1cmUvc2VydmljZXMvTERWdmlJOVdNMFVHbHpBUzVQZ0VUNyIsInBvcnQiOiI0NDMiLCJzY3kiOiJhdXRvIiwic25pIjoic3NsLmZhc3RseS5jb20iLCJ0bHMiOiJ0bHMiLCJ0eXBlIjoiYXV0byIsInYiOiIyIiwicHMiOiJVUyDwn4e68J+HuCB8IEBSYXlkaWthbHggfCBBOEVFRjUifQ==#mlmvpn1186',
  'vmess://eyJhZGQiOiIxOTkuMjMyLjc4LjE3MCIsImFpZCI6IjAiLCJhbHBuIjoiaDIiLCJmcCI6ImNocm9tZSIsImhvc3QiOiJoc2JzaGlqc2J1ZGVueXlvdXItbmFtZS5nbG9iYWwuc3NsLmZhc3RseS5uZXQiLCJpZCI6IjZiYTY4YzY5LWUxMDgtNTAyZC03YjFjLWU4MDZmYmMzY2NjZCIsImluc2VjdXJlIjoiMCIsIm5ldCI6InhodHRwIiwicGF0aCI6Ii9jb25maWd1cmUvc2VydmljZXMvTERWdmlJOVdNMFVHbHpBUzVQZ0VUNyIsInBvcnQiOiI0NDMiLCJwcyI6IlVTIPCfh7rwn4e4IHwgQFJheWRpa2FseCB8IDJEM0YxMiIsInNjeSI6ImF1dG8iLCJzbmkiOiJzc2wuZmFzdGx5LmNvbSIsInRscyI6InRscyIsInR5cGUiOiJhdXRvIiwidiI6IjIifQ==#mlmvpn9021',
  'vless://V2XNET@199.232.78.105:443?mode=auto&path=/&security=tls&alpn=h2&encryption=none&extra={"mode":"auto","xPaddingBytes":"100-1000"}&insecure=0&host=imcreeprddde43e.global.ssl.fastly.net&fp=chrome&type=xhttp&allowInsecure=0&sni=ssl.fastly.com#mlmvpn4332',
  'vless://9c781e88-7d5c-49ac-92b0-ef1ade8427aa@104.18.15.190:443?encryption=none&security=tls&sni=buy.tgseenrobo.ir&fp=chrome&alpn=h2&type=xhttp&host=buy.tgseenrobo.ir&path=%2FBf8uiGqzIKgPlKjaGeRFXPM2&mode=auto&extra=%7B%22downloadSettings%22%3A%7B%22tlsSettings%22%3A%7B%22serverName%22%3A%22buy.tgseenrobo.ir%22%2C%22alpn%22%3A%5B%22h2%22%5D%2C%22fingerprint%22%3A%22chrome%22%7D%2C%22address%22%3A%22buy.tgseenrobo.ir%22%2C%22port%22%3A443%2C%22security%22%3A%22tls%22%2C%22xhttpSettings%22%3A%7B%22headers%22%3A%7B%22User-Agent%22%3A%22Mozilla%2F5.0%20%28Windows%20NT%2010.0%3B%20Win64%3B%20x64%29%20AppleWebKit%2F537.36%20%28KHTML%2C%20like%20Gecko%29%20Chrome%2F142.0.7444.163%20Safari%2F537.36%22%7D%2C%22path%22%3A%22%2FBf8uiGqzIKgPlKjaGeRFXPM2%22%2C%22mode%22%3A%22auto%22%2C%22host%22%3A%22buy.tgseenrobo.ir%22%7D%2C%22network%22%3A%22xhttp%22%7D%2C%22headers%22%3A%7B%22User-Agent%22%3A%22Mozilla%2F5.0%20%28Windows%20NT%2010.0%3B%20Win64%3B%20x64%29%20AppleWebKit%2F537.36%20%28KHTML%2C%20like%20Gecko%29%20Chrome%2F142.0.7444.163%20Safari%2F537.36%22%7D%7D#mlmvpn1208',
];

const COUNTRY = { us: '🇺🇸', de: '🇩🇪', gb: '🇬🇧', uk: '🇬🇧', nl: '🇳🇱', fr: '🇫🇷', ca: '🇨🇦', fi: '🇫🇮', se: '🇸🇪', tr: '🇹🇷', sg: '🇸🇬', jp: '🇯🇵' };

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
      const flag = majmaFlag((obj.ps || '') + ' ' + (obj.host || ''));
      const name = (flag ? flag + ' │ ' : '') + `Abu al-Atahiya │ ⚡ │ ${code} │ ` + majmaProto('vmess', obj.net, false);
      obj.ps = name;
      return 'vmess://' + Buffer.from(JSON.stringify(obj), 'utf-8').toString('base64');
    }
    const q = base.includes('?') ? base.slice(base.indexOf('?') + 1) : '';
    const net = (q.match(/(?:^|&)type=([^&]+)/) || ['', ''])[1].toLowerCase();
    const reality = /security=reality/.test(q);
    const flag = majmaFlag(base);
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
