const fs = require('fs');

const SUBS = [
  { n: 1, token: 'r6d3k9w2', zeus: 'https://huzcone1u80s.snzasdesuecs.workers.dev/feed/AbuNuwas', spider: false, majma: true, jarir: true },
  { n: 2, token: 'm4q8z1v7', zeus: 'https://mpzcnxesub5s.h9zvw7ewuk9s.workers.dev/feed/AbuNuwas', spider: false, majma: true, jarir: true },
  { n: 3, token: 'h9c5t2x6', zeus: 'https://qfzb3eejuyls.9rzx6oe9uycs.workers.dev/feed/0727443Z', spider: false, majma: true, jarir: true },
  { n: 4, token: 'k8x2n7m4', zeus: 'https://ujzj0fe8ua4s.t6zthde5udls.workers.dev/feed/46416WLG', spider: false, majma: true, jarir: true },
  { n: 5, token: 't7h2j8r4', zeus: 'https://sczembecuxis.mizmy4etujes.workers.dev/feed/6OYL1WRB', spider: false, majma: true, jarir: true },
  { n: 6, token: 'b5m1c6w9', zeus: 'https://ubzhqnetujss.sabah-16.workers.dev/feed/8UGULZKC', spider: false, majma: true, jarir: true },
];

// JARIR: fixed servers (flag = country, ai = add AI to name)
const JARIR = [
  { flag: '', ai: true, line: 'vless://d02fcca7-e77f-42f1-94bf-5545eec68f0a@109.122.251.253:2053?security=reality&encryption=none&pbk=fY4zG7EPbiRzlabmT4p_LFuHj6vfMAEdxNoCt-bCPz8&headerType=none&fp=chrome&type=tcp&sni=play.google.com&sid=5c56ebc08e4ad1d9' },
  { flag: '🇫🇷', ai: false, line: 'vless://5d16ac22-6eea-426f-b778-6f4c2961faef@176.109.108.244:9880?mode=gun&security=reality&encryption=none&authority=&pbk=bnRIb3Er1i-K6NGGByCO9UbGfOvu43ZoiK7ulPd1SzU&fp=random&type=grpc&serviceName=grpc-tunnel&sni=dl.google.com&sid=aabb' },
  { flag: '🇬🇧', ai: false, line: 'vless://5d16ac22-6eea-426f-b778-6f4c2961faef@176.109.111.154:9881?mode=gun&security=reality&encryption=none&authority=&pbk=Dfgu8Ey0M8Hz4gXGZAwQ3H9jLt2HByVsjAOTWiuKDB0&fp=random&type=grpc&serviceName=grpc-tunnel&sni=dl.google.com' },
  { flag: '🇫🇮', ai: true, line: 'vless://e3e9805a-6c8b-4edd-8ee8-621df79806eb@142.228.52.79:8443?mode=gun&security=reality&encryption=none&authority=&pbk=B5-zPBBAI-UATY7rSvoggM1T65h9CfVw7yBluBNd-yI&fp=chrome&type=grpc&serviceName=&sni=fi.aksay.pro&sid=4a5f04a5ea205fc3' },
  { flag: '', ai: true, line: 'vless://d02fcca7-e77f-42f1-94bf-5545eec68f0a@109.122.251.253:4545?security=reality&encryption=none&pbk=lCZmgGgWOaJSXIyoeb2qmwpDnk_vTFwGoGmmbgUrhTs&headerType=none&fp=chrome&type=tcp&sni=google-analytics.com&sid=3cdd4ffa012ca22f' },
  { flag: '🇩🇰', ai: false, line: 'vless://5d16ac22-6eea-426f-b778-6f4c2961faef@176.109.111.7:9881?mode=gun&security=reality&encryption=none&authority=&pbk=Dfgu8Ey0M8Hz4gXGZAwQ3H9jLt2HByVsjAOTWiuKDB0&fp=random&type=grpc&serviceName=grpc-tunnel&sni=dl.google.com&sid=aa' },
  { flag: '🇸🇪', ai: false, line: 'vless://5d16ac22-6eea-426f-b778-6f4c2961faef@176.109.104.103:9881?mode=gun&security=reality&encryption=none&authority=&pbk=Dfgu8Ey0M8Hz4gXGZAwQ3H9jLt2HByVsjAOTWiuKDB0&fp=random&type=grpc&serviceName=grpc-tunnel&sni=dl.google.com' },
  { flag: '', ai: true, line: 'vless://d02fcca7-e77f-42f1-94bf-5545eec68f0a@109.122.251.253:12345?security=reality&encryption=none&pbk=no5OXXraenpTo6GxibdtA4fOFTMOmt4d6Dn2HPfUiAQ&headerType=none&fp=chrome&type=tcp&sni=play.google.com&sid=129faa21c67fd282' },
];

const MAJMA = [
  'vless://fdc48be3-a615-41ac-8bd1-ed844c931048@188.114.97.6:443?encryption=none&security=tls&sni=edgetunnel-4uw.pages.dev&alpn=http%2F1.1&fm=%7B%22tcp%22%3A%5B%7B%22type%22%3A%22fragment%22%2C%22settings%22%3A%7B%22packets%22%3A%22tlshello%22%2C%22lengths%22%3A%5B%220%22%2C%22104%22%5D%7D%7D%5D%7D&type=ws&host=edgetunnel-4uw.pages.dev&path=%2F#mlmvpn1',
  'vless://fdc48be3-a615-41ac-8bd1-ed844c931048@162.159.254.201:443?encryption=none&security=tls&sni=edgetunnel-4uw.pages.dev&fm=%7B%22tcp%22%3A%5B%7B%22type%22%3A%22fragment%22%2C%22settings%22%3A%7B%22packets%22%3A%22tlshello%22%2C%22lengths%22%3A%5B%220%22%2C%22104%22%2C%221%22%5D%2C%22delays%22%3A%5B%220%22%5D%2C%22maxSplit%22%3A%220%22%7D%7D%2C%7B%22type%22%3A%22fragment%22%2C%22settings%22%3A%7B%22packets%22%3A%221-1%22%2C%22lengths%22%3A%5B%22114%22%2C%221%22%5D%2C%22delays%22%3A%5B%221%22%5D%2C%22maxSplit%22%3A%2211%22%7D%7D%5D%7D&type=ws&host=edgetunnel-4uw.pages.dev&path=%2F%3Fed%23Telegram---PLANB_NET---PLANB_NET---PLANB_NET---PLANB_NET#mlmvpn2',
  'vless://fdc48be3-a615-41ac-8bd1-ed844c931048@188.114.97.6:443?encryption=none&security=tls&sni=edgetunnel-4uw.pages.dev&alpn=http%2F1.1&fm=%7B%22tcp%22%3A%5B%7B%22type%22%3A%22fragment%22%2C%22settings%22%3A%7B%22packets%22%3A%22tlshello%22%2C%22lengths%22%3A%5B%220%22%2C%22104%22%2C%221%22%5D%2C%22delays%22%3A%5B%220%22%5D%2C%22maxSplit%22%3A%220%22%7D%7D%2C%7B%22type%22%3A%22fragment%22%2C%22settings%22%3A%7B%22packets%22%3A%221-1%22%2C%22lengths%22%3A%5B%22114%22%2C%221%22%5D%2C%22delays%22%3A%5B%221%22%5D%2C%22maxSplit%22%3A%2211%22%7D%7D%5D%7D&type=ws&host=edgetunnel-4uw.pages.dev&path=%2Ffp%3Dchrome%3Fed%23%3Fed%3D512#mlmvpn3',
  'vless://fdc48be3-a615-41ac-8bd1-ed844c931048@188.114.97.6:443?encryption=none&security=tls&sni=edgetunnel-4uw.pages.dev&alpn=http%2F1.1&fm=%7B%22tcp%22%3A%5B%7B%22type%22%3A%22fragment%22%2C%22settings%22%3A%7B%22packets%22%3A%22tlshello%22%2C%22lengths%22%3A%5B%220%22%2C%22104%22%2C%221%22%5D%2C%22delays%22%3A%5B%220%22%5D%2C%22maxSplit%22%3A%220%22%7D%7D%2C%7B%22type%22%3A%22fragment%22%2C%22settings%22%3A%7B%22packets%22%3A%221-1%22%2C%22lengths%22%3A%5B%22114%22%2C%221%22%5D%2C%22delays%22%3A%5B%221%22%5D%2C%22maxSplit%22%3A%2211%22%7D%7D%5D%7D&type=ws&host=edgetunnel-4uw.pages.dev&path=%2Ffp%3Dchrome%3Fed%23TELEGRAM--MARAMBASHI--MARAMBASHI%3Fed%3D2560#mlmvpn4',
  'vless://fdc48be3-a615-41ac-8bd1-ed844c931048@162.159.254.201:443?encryption=none&security=tls&sni=edgetunnel-4uw.pages.dev&fm=%7B%22tcp%22%3A%5B%7B%22type%22%3A%22fragment%22%2C%22settings%22%3A%7B%22packets%22%3A%22tlshello%22%2C%22lengths%22%3A%5B%220%22%2C%22104%22%2C%221%22%5D%2C%22delays%22%3A%5B%220%22%5D%2C%22maxSplit%22%3A%220%22%7D%7D%2C%7B%22type%22%3A%22fragment%22%2C%22settings%22%3A%7B%22packets%22%3A%221-1%22%2C%22lengths%22%3A%5B%22114%22%2C%221%22%5D%2C%22delays%22%3A%5B%221%22%5D%2C%22maxSplit%22%3A%2211%22%7D%7D%5D%7D&type=ws&host=edgetunnel-4uw.pages.dev&path=%2F#mlmvpn5',
  'vless://fdc48be3-a615-41ac-8bd1-ed844c931048@104.21.91.244:443?encryption=none&security=tls&sni=edgetunnel-4uw.pages.dev&fm=%7B%22tcp%22%3A%5B%7B%22type%22%3A%22fragment%22%2C%22settings%22%3A%7B%22packets%22%3A%22tlshello%22%2C%22lengths%22%3A%5B%220%22%2C%22104%22%2C%221%22%5D%2C%22delays%22%3A%5B%220%22%5D%2C%22maxSplit%22%3A%220%22%7D%7D%2C%7B%22type%22%3A%22fragment%22%2C%22settings%22%3A%7B%22packets%22%3A%221-1%22%2C%22lengths%22%3A%5B%22114%22%2C%221%22%5D%2C%22delays%22%3A%5B%221%22%5D%2C%22maxSplit%22%3A%2211%22%7D%7D%5D%7D&type=ws&host=edgetunnel-4uw.pages.dev&path=%2F%3Fed%23Telegram---PLANB_NET---PLANB_NET---PLANB_NET---PLANB_NET#mlmvpn6',
  'vless://fdc48be3-a615-41ac-8bd1-ed844c931048@188.114.97.6:443?encryption=none&security=tls&sni=edgetunnel-4uw.pages.dev&alpn=http%2F1.1&fm=%7B%22tcp%22%3A%5B%7B%22type%22%3A%22fragment%22%2C%22settings%22%3A%7B%22packets%22%3A%22tlshello%22%2C%22lengths%22%3A%5B%220%22%2C%22104%22%2C%221%22%5D%2C%22delays%22%3A%5B%220%22%5D%2C%22maxSplit%22%3A%220%22%7D%7D%2C%7B%22type%22%3A%22fragment%22%2C%22settings%22%3A%7B%22packets%22%3A%221-1%22%2C%22lengths%22%3A%5B%22114%22%2C%221%22%5D%2C%22delays%22%3A%5B%221%22%5D%2C%22maxSplit%22%3A%2211%22%7D%7D%5D%7D&type=ws&host=edgetunnel-4uw.pages.dev&path=%2Ffp%3Dchrome%3Fed%23Telegram---PLANB_NET---PLANB_NET---PLANB_NET---PLANB_NET%3Fed%3D512#mlmvpn7',
  'vless://9e3132b8-b595-444a-833a-2de44789f9d7@188.114.97.6:443?encryption=none&security=tls&sni=shephe.dpdns.org&alpn=http%2F1.1&fm=%7B%22tcp%22%3A%5B%7B%22type%22%3A%22fragment%22%2C%22settings%22%3A%7B%22packets%22%3A%22tlshello%22%2C%22lengths%22%3A%5B%220%22%2C%22104%22%5D%7D%7D%5D%7D&type=ws&host=shephe.dpdns.org&path=%2F#mlmvpn8',
  'vless://fdc48be3-a615-41ac-8bd1-ed844c931048@104.21.5.115:443?encryption=none&security=tls&sni=edgetunnel-4uw.pages.dev&fp=unsafe&fm=%7B%22tcp%22%3A%5B%7B%22type%22%3A%22fragment%22%2C%22settings%22%3A%7B%22packets%22%3A%22tlshello%22%2C%22lengths%22%3A%5B%220%22%2C%22104%22%2C%221%22%5D%2C%22delays%22%3A%5B%220%22%5D%2C%22maxSplit%22%3A%220%22%7D%7D%2C%7B%22type%22%3A%22fragment%22%2C%22settings%22%3A%7B%22packets%22%3A%221-1%22%2C%22lengths%22%3A%5B%22114%22%2C%221%22%5D%2C%22delays%22%3A%5B%221%22%5D%2C%22maxSplit%22%3A%2211%22%7D%7D%5D%7D&type=ws&host=edgetunnel-4uw.pages.dev&path=%2F%3FTELEGRAM--MARAMBASHI--MARAMBASHI%3Fed%3D512#mlmvpn9',
  'vless://fdc48be3-a615-41ac-8bd1-ed844c931048@188.114.97.6:443?encryption=none&security=tls&sni=edgetunnel-4uw.pages.dev&alpn=http%2F1.1&fm=%7B%22tcp%22%3A%5B%7B%22type%22%3A%22fragment%22%2C%22settings%22%3A%7B%22packets%22%3A%22tlshello%22%2C%22lengths%22%3A%5B%220%22%2C%22104%22%5D%7D%7D%5D%7D&type=ws&host=edgetunnel-4uw.pages.dev&path=%2F%3F#mlmvpn10',
  'vless://5d16ac22-6eea-426f-b778-6f4c2961faef@176.108.245.167:9881?encryption=none&security=reality&sni=dl.google.com&fp=chrome&pbk=Dfgu8Ey0M8Hz4gXGZAwQ3H9jLt2HByVsjAOTWiuKDB0&sid=aabbccdd&type=grpc&authority=%2F%3FTelegram---PLANB_NET---PLANB_NET---PLANB_NET---PLANB_NET&serviceName=grpc-tunnel&mode=gun#%F0%9F%87%B7%F0%9F%87%BA%20mlmvpn11',
  'vless://bfb1ec97-a326-4cf3-adcf-d2a0e2dc49f8@199.232.78.159:443?encryption=none&security=tls&sni=ssl.fastly.com&type=ws&host=pan2e.global.ssl.fastly.net&path=%2F#%F0%9F%87%BA%F0%9F%87%B8%20mlmvpn12',
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
    let tagText = tag;
    try { tagText = decodeURIComponent(tag); } catch {}
    const flag = majmaFlag(base + ' ' + tagText);
    const name = (flag ? flag + ' │ ' : '') + `Abu al-Atahiya │ ⚡ │ ${code} │ ` + majmaProto(scheme, net, reality);
    return base + '#' + encodeURIComponent(name);
  });
}

function getJarir() {
  return JARIR.map((s, i) => {
    const base = s.line.split('#')[0];
    const scheme = base.split('://')[0].toLowerCase();
    const q = base.includes('?') ? base.slice(base.indexOf('?') + 1) : '';
    const net = (q.match(/(?:^|&)type=([^&]+)/) || ['', ''])[1].toLowerCase();
    const proto = majmaProto(scheme, net, /security=reality/.test(q));
    const name = (s.flag ? s.flag + ' │ ' : '') + `Jarir │ ${i + 1} │ ${proto}` + (s.ai ? ' │ AI' : '');
    return base + '#' + encodeURIComponent(name);
  });
}

async function main() {
  fs.mkdirSync('sub', { recursive: true });
  const majma = getMajma();
  console.log('MAJMA OK:', majma.length);
  const jarir = getJarir();
  console.log('JARIR OK:', jarir.length);

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
