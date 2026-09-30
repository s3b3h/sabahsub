MAJMA OK: 12
JARIR OK: [عدد]

const fs = require('fs');

const SUBS = [
  { n: 1, token: 'r6d3k9w2', zeus: 'https://huzcone1u80s.snzasdesuecs.workers.dev/feed/AbuNuwas', spider: false, majma: true, jarir: true },
  { n: 2, token: 'm4q8z1v7', zeus: 'https://mpzcnxesub5s.h9zvw7ewuk9s.workers.dev/feed/AbuNuwas', spider: false, majma: true, jarir: true },
  { n: 3, token: 'h9c5t2x6', zeus: 'https://qfzb3eejuyls.9rzx6oe9uycs.workers.dev/feed/0727443Z', spider: false, majma: true, jarir: true },
  { n: 4, token: 'k8x2n7m4', zeus: 'https://ujzj0fe8ua4s.t6zthde5udls.workers.dev/feed/46416WLG', spider: false, majma: true, jarir: true },
  { n: 5, token: 't7h2j8r4', zeus: 'https://sczembecuxis.mizmy4etujes.workers.dev/feed/6OYL1WRB', spider: false, majma: true, jarir: true },
  { n: 6, token: 'b5m1c6w9', zeus: 'https://ubzhqnetujss.sabah-16.workers.dev/feed/8UGULZKC', spider: false, majma: true, jarir: true },
];

const JARIR_URL = 'https://raw.githubusercontent.com/patterniha/Free-Configs/main/configs.txt';

const MAJMA = [
  'ss://Y2hhY2hhMjAtaWV0Zi1wb2x5MTMwNTpyNUQ2WU9TclQ2a0M3NnJv@20.123.34.66:443#mlmvpn2229',
  'ss://MjAyMi1ibGFrZTMtY2hhY2hhMjAtcG9seTEzMDU6UzVOSG9TbDFiZ2E5QlBud0VWTGgreUNpVDNLRWhrc0pPNnFycDNBZTJlND0=@158.178.158.96:45819#mlmvpn3300',
  'vless://ff2936d3-caa4-4b79-bb96-1475bd39ceda@113.30.154.75:443?flow=xtls-rprx-vision&fp=random&pbk=SbVKOEMjK0sIlbwg4akyBg5mL5KZwwB-ed4eEE7YnRc&security=reality&sid=&sni=sellflow.org&type=tcp#mlmvpn4215',
  'trojan://mitivpn@199.232.78.160:443?security=tls&sni=ssl.fastly.com&alpn=http/1.1&type=ws&host=mitivpn---us--s---mitivpn-11.global.ssl.fastly.net&path=/---@MiTiVPN---@MiTiVPN/---@MiTiVPN---@MiTiVPN/---@MiTiVPN---@MiTiVPN/D-e1i@MiTiVPN---@MiTiVPN/---@MiTiVPN---@MiTiVPN/---@MiTiVPN---@MiTiVPN#mlmvpn4529',
  'trojan://mitivpn@199.232.78.188:443?path=/?Telegram---PLANB_NET---PLANB_NET---PLANB_NET---PLANB_NET&allowInsecure=0&host=mitivpn---gb--s---mitivpn-1.global.ssl.fastly.net&sni=ssl.fastly.com&security=tls&alpn=http/1.1&fp=chrome&insecure=0&type=ws#mlmvpn2115',
  'trojan://mitivpn@199.232.78.101:443?path=/---@GHOFLSHCAN---@GHOFLSHCAN/---@GHOFLSHCAN---@GHOFLSHCAN/---@GHOFLSHCAN---@GHOFLSHCAN/NLSus---@GHOFLSHCAN---@GHOFLSHCAN/---@GHOFLSHCAN---@GHOFLSHCAN/---@GHOFLSHCAN---@GHOFLSHCAN&security=tls&alpn=http/1.1&insecure=0&host=mitivpn---de--s---mitivpn-11.global.ssl.fastly.net&fp=chrome&type=ws&allowInsecure=0&sni=ssl.fastly.com#mlmvpn9602',
  'trojan://mitivpn@167.82.76.7:443?security=tls&alpn=http/1.1&insecure=0&host=mitivpn---us--s---mitivpn-11.global.ssl.fastly.net&fp=chrome&type=ws&allowInsecure=0&sni=ssl.fastly.com#mlmvpn6658',
  'trojan://mitivpn@199.232.78.170:443?security=tls&alpn=http/1.1&insecure=0&host=mitivpn---de--s---mitivpn-11.global.ssl.fastly.net&fp=chrome&type=ws&allowInsecure=0&sni=ssl.fastly.com#mlmvpn9512',
  'ss://YWVzLTEyOC1nY206MTY4MzU1MWVhZTRlZWFiYTVkYjgwN2VhMjZlYjEyMDQ=@103.214.108.219:17521#mlmvpn8314',
  'vless://7c973569-71da-4d18-8c80-aa4c8ee2f257@216.195.196.86:8443?flow=xtls-rprx-vision&fp=chrome&pbk=5wGgDloyck_L25Y5rkWorpV3IK00pK0Lki7LR0VY0io&security=reality&sid=4fba6fd2c74fd18f&sni=www.cloudflare.com&type=tcp#mlmvpn947',
  'vless://aa7c2760-e4c3-4034-9455-40a8a584f64c@199.232.78.159:443/?type=ws&encryption=none&flow=&host=pannn1.global.ssl.fastly.net&path=/&security=tls&sni=ssl.fastly.com&alpn=networld_vpn-channel@.networld_vpn-channel@.networld_vpn-channel@.networld_vpn-channel@.networld_vpn-channel@.networld_vpn-channel@.networld_vpn-#mlmvpn6199',
  'vless://8079ccd4-4b4b-44e2-92f0-8f0367ad9c24@bgroup.us2.ilovegairport.com:443?&security=reality&flow=xtls-rprx-vision&pbk=s8KrYQFpXXkbCvW6ORmVrm4yC5GpVxCHfIoV9Z_FiUY&sid=afe73effea&fp=chrome&sni=us-west-2.console.aws.amazon.com&type=tcp&headerType=none&host=us-west-2.console.aws.amazon.com&path=%2F#mlmvpn6152',
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
  return decodeSub(text).split(/\r?\n/).map(s => s.trim()).filter(s => /^[a-z0-9]+:\/\//i.test(s));
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

async function getJarir() {
  const out = [];
  let n = 0;
  for (const line of toLines(await get(JARIR_URL))) {
    try {
      const scheme = line.split('://')[0].toLowerCase();
      let flag, proto;
      if (scheme === 'vmess') {
        const obj = JSON.parse(Buffer.from(line.slice(8).split('#')[0], 'base64').toString('utf-8'));
        flag = majmaFlag((obj.ps || '') + ' ' + (obj.host || ''));
        proto = majmaProto('vmess', obj.net, false);
      } else {
        const h = line.indexOf('#');
        const base = h === -1 ? line : line.slice(0, h);
        const q = base.includes('?') ? base.slice(base.indexOf('?') + 1) : '';
        const net = (q.match(/(?:^|&)type=([^&]+)/) || ['', ''])[1].toLowerCase();
        flag = majmaFlag(getName(line) + ' ' + base);
        proto = majmaProto(scheme, net, /security=reality/.test(q));
      }
      n++;
      out.push(setName(line.startsWith('vmess://') ? line.split('#')[0] : line, (flag ? flag + ' │ ' : '') + `Jarir │ ${n} │ ${proto}`));
    } catch {}
  }
  return out;
}

async function main() {
  fs.mkdirSync('sub', { recursive: true });
  const majma = getMajma();
  console.log('MAJMA OK:', majma.length);

  let jarir = [];
  try { jarir = await getJarir(); console.log('JARIR OK:', jarir.length); }
  catch (e) { console.log('JARIR ERROR:', e.message); }

  for (const s of SUBS) {
    const out = [];
    try { const z = await getZeus(s.zeus); out.push(...z); console.log(`#${s.n} ZEUS OK:`, z.length); }
    catch (e) { console.log(`#${s.n} ZEUS ERROR:`, e.message); }
    if (s.spider) out.push(...getSpider());
    if (s.majma) out.push(...majma);
    if (s.jarir) out.push(...jarir);
    if (out.length === 0) { console.log(`#${s.n} nothing, keeping old file`); continue; }
    fs.writeFileSync(`sub/${s.token}.txt`, Buffer.from(out.join('\n'), 'utf-8').toString('base64'));
    console.log(`#${s.n} saved:`, out.length);
  }
}

main();
