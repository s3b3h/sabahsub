const fs = require('fs');

const TOKEN = 'p3w9v5q1';
const ZEUS_URL = 'https://xizl09e7uqns.86zjccecujfs.workers.dev/feed/XMXVCNQQ';
const SLOPER_URL = 'https://web-production-7d4a2f.up.railway.app/sub-group/vsdB3SfOWt0e2KwXPpYdxg';

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

async function main() {
  const out = [];

  // 1. ZEUS
  try {
    const lines = toLines(await get(ZEUS_URL));
    for (const line of lines) {
      const name = getName(line);
      if (BAD_WORDS.some(w => name.includes(w))) continue;
      out.push(setName(line, zeusName(name)));
    }
    console.log('ZEUS OK:', out.length);
  } catch (e) { console.log('ZEUS ERROR:', e.message); }

  // 2. Sloper (1-8 only)
  try {
    const picked = [];
    for (const line of toLines(await get(SLOPER_URL))) {
      const m = getName(line).match(/(\d+)\s*$/);
      if (!m) continue;
      const n = parseInt(m[1], 10);
      if (n < 1 || n > 8) continue;
      picked.push([n, setName(line, `🇳🇱 │ Abu al-Atahiya │ ⚡ │ ${n}`)]);
    }
    picked.sort((a, b) => a[0] - b[0]);
    out.push(...picked.map(p => p[1]));
    console.log('SLOPER OK:', picked.length);
  } catch (e) { console.log('SLOPER ERROR:', e.message); }

  // 3. Save
  if (out.length === 0) { console.log('Nothing fetched, keeping old file'); return; }
  fs.mkdirSync('sub', { recursive: true });
  fs.writeFileSync(`sub/${TOKEN}.txt`, Buffer.from(out.join('\n'), 'utf-8').toString('base64'));
  console.log('Saved:', out.length);
}

main();
