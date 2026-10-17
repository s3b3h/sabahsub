const fs = require('fs');
const NL = String.fromCharCode(10);

const SUBS = [
  {
    n: 1,
    token: 'r6d3k9w2',
    tim9: '',
    superjin: true,
    superjin2: false
  },
  {
    n: 2,
    token: 'm4q8z1v7',
    tim9: 'https://api.tim9.ir/dl/djMsMjM3MDIsMTc5MTQwNTQ4NQ.GjbjEUnIt1zDiLbazd862GBY_5c6XQdeecTJyh-IwB4',
    superjin: true,
    superjin2: false
  },
  {
    n: 3,
    token: 'h9c5t2x6',
    tim9: 'https://api.tim9.ir/dl/djMsMjM2OTksMTc5MTQwNDg3OA.g945PfBAAQZ0tUwIS2fj9Y-pTRWFOUTA2bitU7_OMI8',
    superjin: true,
    superjin2: false
  },
  {
    n: 4,
    token: 'k8x2n7m4',
    tim9: '',
    superjin: false,
    superjin2: true
  },
  {
    n: 5,
    token: 't7h2j8r4',
    tim9: 'https://api.tim9.ir/dl/djMsMjM3MDAsMTc5MTQwNDkzMA.RLeZqkxLeUrY-nO98nYyfTwi7WoCfNBL-3vDu6okL-0',
    superjin: false,
    superjin2: true
  },
  {
    n: 6,
    token: 'b5m1c6w9',
    tim9: 'https://api.tim9.ir/dl/djMsMjM2OTgsMTc5MTQwNDc1Nw.QEZLP-I1gPqEk1zDKdePPTuYNDLUKEgeMVNcx0bFFWI',
    superjin: false,
    superjin2: true
  },
  {
    n: 7,
    token: 'f5n2q8z3',
    tim9: 'https://api.tim9.ir/dl/djMsMjU1MzcsMTc5MjA2MzEzMQ._yc-v6v_9fYcitPQ4qEX_S9rHIXbYktWESlN7dv32mQ',
    superjin: false,
    superjin2: false,
    jarir3: true
  },
  {
    n: 8,
    token: 'y7u5f2c8',
    tim9: 'https://api.tim9.ir/dl/djMsMjYwMTYsMTc5MjI2MTA2Nw.hCwasV-ldrpq9oed_L3GdR9UzpiYc9nYNA5zegn-kn0',
    superjin: false,
    superjin2: false,
    jarir3: false,
    jarir4: true
  }
];

const SUPERJIN_URL =
  'https://alolo01-production-f942.up.railway.app/sub/djMsMSwxNzkxMDYwMjE1.WReIxmV-gYDCeN9C-swstPVCNrexMmR4tv81BcCW9Bc';

const SUPERJIN_ADDR =
  'alolo01-production-f942.up.railway.app';

const SUPERJIN2_ADDR =
  'alolo02-production-f222.up.railway.app';

const JARIR4_URL =
  'https://8ge-eskp6umvgrcpb.pages.dev/uqD6oh3wd-i0/sub/raw?app=xray';

const SUPERJIN2 = [
  'vmess://ew0KICAidiI6ICIyIiwNCiAgInBzIjogIlx1RDgzRFx1REM4RSBcdUQ4MzVcdURERDdcdUQ4MzVcdURERjZcdUQ4MzVcdURERUVcdUQ4MzVcdURERkFcdUQ4MzVcdURERkNcdUQ4MzVcdUQ4MzVcdUQ4MzVcdURERkJcdUQ4MzVcdURERjEgfCDYrNuM2YbaqdizIHwgXHVEODM1XHVERTRFXHVEODM1XHVERTZBXHVEODM1XHVERTY1XHVEODM1XHVERTVBXHVEODM1XHVERTY3IFx1RDgzNVx1RERERFx1RDgzNVx1RERGNlx1RDgzNVx1RERFQlx1RDgzNVx1RERFQiIsDQogICJhZGQiOiAiYWxvbG8wMi1wcm9kdWN0aW9uLWYyMjIudXAucmFpbHdheS5hcHAiLA0KICAicG9ydCI6ICI0NDMiLA0KICAiaWQiOiAiZGVmNzcwODMtMDhjYi00YjJiLWFlZmUtYWJjYzg5ODkwYTQ1IiwNCiAgImFpZCI6ICIwIiwNCiAgInNjeSI6ICJhdXRvIiwNCiAgIm5ldCI6ICJ3cyIsDQogICJ0eXBlIjogIm5vbmUiLA0KICAiaG9zdCI6ICJhbG9sbzAyLXByb2R1Y3Rpb24udXAucmFpbHdheS5hcHAiLA0KICAicGF0aCI6ICIvdHcvMmYyODU0YjUtMWRlYS00NzU4LTk5MDgtZDQ0NDkxNjYwMjkxP2VkPTI1NjAiLA0KICAidGxzIjogInRscyIsDQogICJzbmkiOiAiYWxvbG8wMi1wcm9kdWN0aW9uLnVwLnJhaWx3YXkuYXBwIiwNCiAgImFscG4iOiAiaHR0cC8xLjEiLA0KICAiZnAiOiAiZWRnZSIsDQogICJjcyI6ICIiLA0KICAiaW5zZWN1cmUiOiAiMCIsDQogICJ2Y24iOiAiIiwNCiAgInBjcyI6ICIiLA0KICAiZGlhbE1vZGUiOiAiIg0KfQ==',
  'vless://6e8f5128-0036-430b-af35-3996bfc58855@alolo02-production-f222.up.railway.app:443?encryption=none&security=tls&sni=alolo02-production.up.railway.app&fp=firefox&alpn=http%2F1.1&type=ws&host=alolo02-production.up.railway.app&path=%2Fstream%2F4b7c4d43-b876-465f-8a7e-b53fca6e4291%3Fed%3D2560',
  'trojan://koK2yAYj0ilsytdn2CVTBC_euPFTXWv7@alolo02-production-f222.up.railway.app:443?security=tls&sni=alolo02-production.up.railway.app&fp=safari&alpn=http%2F1.1&type=ws&host=alolo02-production.up.railway.app&path=%2Flive%2F23779095-6cc4-4d9d-84ec-3585a2ed573e%3Fed%3D2560',
  'vless://6e8f5128-0036-430b-af35-3996bfc58855@alolo02-production-f222.up.railway.app:443?encryption=none&security=tls&sni=alolo02-production.up.railway.app&fp=chrome&alpn=http%2F1.1&type=ws&host=alolo02-production.up.railway.app&path=%2Fws%2Fc4edddb5-6b79-4bc4-9a50-883c3f1e5d44%3Fed%3D2560',
  'vless://6e8f5128-0036-430b-af35-3996bfc58855@alolo02-production-f222.up.railway.app:443?encryption=none&security=tls&sni=alolo02-production.up.railway.app&fp=ios&alpn=http%2F1.1&type=httpupgrade&host=alolo02-production.up.railway.app&path=%2Fcdn%2F08455509-2527-4009-9133-40f34fac8747%3Fed%3D2560'
];

const JARIR3 = [
  'vless://6eaad7c5-e9c7-4015-81b9-464a7fb4a5f2@104.21.36.156:443?encryption=none&security=tls&sni=mebPb0.MeBpB0.WORKErS.Dev&fp=chrome&alpn=http%2F1.1&ech=cloudflare-ech.com%2Budp%3A%2F%2F1.1.1.1&type=ws&host=mebpb0.mebpb0.workers.dev&path=%2FeyJqdW5rIjoiWHRxRDFYTkIiLCJwcm90b2NvbCI6InZsIiwibW9kZSI6InByb3h5aXAiLCJwYW5lbElQcyI6WyIxOTUuMjAxLjE1MC40IiwiMTg4LjI0NS4xNjEuMTQxIiwiNDkuMTMuMjI4Ljg1IiwiNzkuMTM3LjE5Ny4yMTIiXX0%3D%3Fed%3D2560#Technamooz%203%20-%20VLESS%20-%20IPv4%20%3A%20443',
  'vless://6eaad7c5-e9c7-4015-81b9-464a7fb4a5f2@172.67.196.121:443?encryption=none&security=tls&sni=mEbpB0.meBpB0.WORkErs.deV&fp=chrome&alpn=http%2F1.1&ech=cloudflare-ech.com%2Budp%3A%2F%2F1.1.1.1&type=ws&host=mebpb0.mebpb0.workers.dev&path=%2FeyJqdW5rIjoiQWV6bTI3TWZjIiwicHJvdG9jb2wiOiJ2bCIsIm1vZGUiOiJwcm94eWlwIiwicGFuZWxJUHMiOlsiMTk1LjIwMS4xNTAuNCIsIjE4OC4yNDUuMTYxLjE0MSIsIjQ5LjEzLjIyOC44NSIsIjc5LjEzNy4xOTcuMjEyIl19%3Fed%3D2560#Technamooz%204%20-%20VLESS%20-%20IPv4%20%3A%20443',
  'vless://6eaad7c5-e9c7-4015-81b9-464a7fb4a5f2@www.speedtest.net:443?encryption=none&security=tls&sni=MeBPB0.mEBpb0.WOrkERs.deV&fp=chrome&alpn=http%2F1.1&ech=cloudflare-ech.com%2Budp%3A%2F%2F1.1.1.1&type=ws&host=mebpb0.mebpb0.workers.dev&path=%2FeyJqdW5rIjoicHh4QmVzNkF2c3pWY0M2IiwicHJvdG9jb2wiOiJ2bCIsIm1vZGUiOiJwcm94eWlwIiwicGFuZWxJUHMiOlsiMTk1LjIwMS4xNTAuNCIsIjE4OC4yNDUuMTYxLjE0MSIsIjQ5LjEzLjIyOC44NSIsIjc5LjEzNy4xOTcuMjEyIl19%3Fed%3D2560#Technamooz%202%20-%20VLESS%20-%20Domain%20%3A%20443',
  'vless://6eaad7c5-e9c7-4015-81b9-464a7fb4a5f2@www.fiverr.com:443?encryption=none&security=tls&sni=meBpb0.mEbPb0.wORKeRS.DeV&fp=chrome&alpn=http%2F1.1&ech=cloudflare-ech.com%2Budp%3A%2F%2F1.1.1.1&type=ws&host=mebpb0.mebpb0.workers.dev&path=%2FeyJqdW5rIjoiYXFNQklUT2l0SDhqaWciLCJwcm90b2NvbCI6InZsIiwibW9kZSI6InByb3h5aXAiLCJwYW5lbElQcyI6WyIxOTUuMjAxLjE1MC40IiwiMTg4LjI0NS4xNjEuMTQxIiwiNDkuMTMuMjI4Ljg1IiwiNzkuMTM3LjE5Ny4yMTIiXX0%3D%3Fed%3D2560#Technamooz%206%20-%20VLESS%20-%20Clean%20IP%20%3A%20443',
  'vless://6eaad7c5-e9c7-4015-81b9-464a7fb4a5f2@mebpb0.mebpb0.workers.dev:443?encryption=none&security=tls&sni=MEBpb0.mEbPB0.wOrkERS.dEv&fp=chrome&alpn=http%2F1.1&ech=cloudflare-ech.com%2Budp%3A%2F%2F1.1.1.1&type=ws&host=mebpb0.mebpb0.workers.dev&path=%2FeyJqdW5rIjoiUHVMZzdnc0VTWnZNQjdEIiwicHJvdG9jb2wiOiJ2bCIsIm1vZGUiOiJwcm94eWlwIiwicGFuZWxJUHMiOlsiMTk1LjIwMS4xNTAuNCIsIjE4OC4yNDUuMTYxLjE0MSIsIjQ5LjEzLjIyOC44NSIsIjc5LjEzNy4xOTcuMjEyIl19%3Fed%3D2560#Technamooz%201%20-%20VLESS%20-%20Domain%20%3A%20443',
  'vless://6eaad7c5-e9c7-4015-81b9-464a7fb4a5f2@chatgpt.com:443?encryption=none&security=tls&sni=mEBPB0.mEBpb0.wORKeRs.DEV&fp=chrome&alpn=http%2F1.1&ech=cloudflare-ech.com%2Budp%3A%2F%2F1.1.1.1&type=ws&host=mebpb0.mebpb0.workers.dev&path=%2FeyJqdW5rIjoidlVieFozTk92eXdNaXN6RCIsInByb3RvY29sIjoidmwiLCJtb2RlIjoicHJveHlpcCIsInBhbmVsSVBzIjpbIjE5NS4yMDEuMTUwLjQiLCIxODguMjQ1LjE2MS4xNDEiLCI0OS4xMy4yMjguODUiLCI3OS4xMzcuMTk3LjIxMiJdfQ%3D%3D%3Fed%3D2560#Technamooz%205%20-%20VLESS%20-%20Clean%20IP%20%3A%20443',
  'vless://6eaad7c5-e9c7-4015-81b9-464a7fb4a5f2@mebpb0.mebpb0.workers.dev:443?encryption=none&security=tls&sni=MEBpb0.mEbPB0.wOrkERS.dEv&fp=chrome&alpn=http%2F1.1&type=ws&host=mebpb0.mebpb0.workers.dev&path=%2FeyJqdW5rIjoiUHVMZzdnc0VTWnZNQjdEIiwicHJvdG9jb2wiOiJ2bCIsIm1vZGUiOiJwcm94eWlwIiwicGFuZWxJUHMiOlsiMTk1LjIwMS4xNTAuNCIsIjE4OC4yNDUuMTYxLjE0MSIsIjQ5LjEzLjIyOC44NSIsIjc5LjEzNy4xOTcuMjEyIl19%3Fed%3D2560#Technamooz%201%20-%20VLESS%20-%20Domain%20%3A%20443',
  'vless://6eaad7c5-e9c7-4015-81b9-464a7fb4a5f2@www.speedtest.net:443?encryption=none&security=tls&sni=MeBPB0.mEBpb0.WOrkERs.deV&fp=chrome&alpn=http%2F1.1&type=ws&host=mebpb0.mebpb0.workers.dev&path=%2FeyJqdW5rIjoicHh4QmVzNkF2c3pWY0M2IiwicHJvdG9jb2wiOiJ2bCIsIm1vZGUiOiJwcm94eWlwIiwicGFuZWxJUHMiOlsiMTk1LjIwMS4xNTAuNCIsIjE4OC4yNDUuMTYxLjE0MSIsIjQ5LjEzLjIyOC44NSIsIjc5LjEzNy4xOTcuMjEyIl19%3Fed%3D2560#Technamooz%202%20-%20VLESS%20-%20Domain%20%3A%20443',
  'vless://6eaad7c5-e9c7-4015-81b9-464a7fb4a5f2@104.21.36.156:443?encryption=none&security=tls&sni=mebPb0.MeBpB0.WORKErS.Dev&fp=chrome&alpn=http%2F1.1&type=ws&host=mebpb0.mebpb0.workers.dev&path=%2FeyJqdW5rIjoiWHRxRDFYTkIiLCJwcm90b2NvbCI6InZsIiwibW9kZSI6InByb3h5aXAiLCJwYW5lbElQcyI6WyIxOTUuMjAxLjE1MC40IiwiMTg4LjI0NS4xNjEuMTQxIiwiNDkuMTMuMjI4Ljg1IiwiNzkuMTM3LjE5Ny4yMTIiXX0%3D%3Fed%3D2560#Technamooz%203%20-%20VLESS%20-%20IPv4%20%3A%20443',
  'vless://6eaad7c5-e9c7-4015-81b9-464a7fb4a5f2@172.67.196.121:443?encryption=none&security=tls&sni=mEbpB0.meBpB0.WORkErs.deV&fp=chrome&alpn=http%2F1.1&type=ws&host=mebpb0.mebpb0.workers.dev&path=%2FeyJqdW5rIjoiQWV6bTI3TWZjIiwicHJvdG9jb2wiOiJ2bCIsIm1vZGUiOiJwcm94eWlwIiwicGFuZWxJUHMiOlsiMTk1LjIwMS4xNTAuNCIsIjE4OC4yNDUuMTYxLjE0MSIsIjQ5LjEzLjIyOC44NSIsIjc5LjEzNy4xOTcuMjEyIl19%3Fed%3D2560#Technamooz%204%20-%20VLESS%20-%20IPv4%20%3A%20443',
  'vless://6eaad7c5-e9c7-4015-81b9-464a7fb4a5f2@chatgpt.com:443?encryption=none&security=tls&sni=mEBPB0.mEBpb0.wORKeRs.DEV&fp=chrome&alpn=http%2F1.1&type=ws&host=mebpb0.mebpb0.workers.dev&path=%2FeyJqdW5rIjoidlVieFozTk92eXdNaXN6RCIsInByb3RvY29sIjoidmwiLCJtb2RlIjoicHJveHlpcCIsInBhbmVsSVBzIjpbIjE5NS4yMDEuMTUwLjQiLCIxODguMjQ1LjE2MS4xNDEiLCI0OS4xMy4yMjguODUiLCI3OS4xMzcuMTk3LjIxMiJdfQ%3D%3D%3Fed%3D2560#Technamooz%205%20-%20VLESS%20-%20Clean%20IP%20%3A%20443',
  'vless://6eaad7c5-e9c7-4015-81b9-464a7fb4a5f2@www.fiverr.com:443?encryption=none&security=tls&sni=meBpb0.mEbPb0.wORKeRS.DeV&fp=chrome&alpn=http%2F1.1&type=ws&host=mebpb0.mebpb0.workers.dev&path=%2FeyJqdW5rIjoiYXFNQklUT2l0SDhqaWciLCJwcm90b2NvbCI6InZsIiwibW9kZSI6InByb3h5aXAiLCJwYW5lbElQcyI6WyIxOTUuMjAxLjE1MC40IiwiMTg4LjI0NS4xNjEuMTQxIiwiNDkuMTMuMjI4Ljg1IiwiNzkuMTM3LjE5Ny4yMTIiXX0%3D%3Fed%3D2560#Technamooz%206%20-%20VLESS%20-%20Clean%20IP%20%3A%20443',
  'vless://6eaad7c5-e9c7-4015-81b9-464a7fb4a5f2@www.ignitelimit.com:443?encryption=none&security=tls&sni=MEBpb0.MeBPB0.woRKeRs.DEv&fp=chrome&alpn=http%2F1.1&type=ws&host=mebpb0.mebpb0.workers.dev&path=%2FeyJqdW5rIjoiUFZjYlZJR0YxZHVoVWl5IiwicHJvdG9jb2wiOiJ2bCIsIm1vZGUiOiJwcm94eWlwIiwicGFuZWxJUHMiOlsiMTk1LjIwMS4xNTAuNCIsIjE4OC4yNDUuMTYxLjE0MSIsIjQ5LjEzLjIyOC44NSIsIjc5LjEzNy4xOTcuMjEyIl19%3Fed%3D2560#Technamooz%207%20-%20VLESS%20-%20Clean%20IP%20%3A%20443',
  'vless://6eaad7c5-e9c7-4015-81b9-464a7fb4a5f2@188.114.98.0:443?encryption=none&security=tls&sni=auth.vercel.com&fp=chrome&alpn=http%2F1.1&type=ws&host=auth.vercel.com&path=%2FeyJqdW5rIjoiQW1kbDBRcW9HOWxpIiwicHJvdG9jb2wiOiJ2bCIsIm1vZGUiOiJwcm94eWlwIiwicGFuZWxJUHMiOlsiMTk1LjIwMS4xNTAuNCIsIjE4OC4yNDUuMTYxLjE0MSIsIjQ5LjEzLjIyOC44NSIsIjc5LjEzNy4xOTcuMjEyIl19%3Fed%3D2560#Technamooz%208%20-%20VLESS%20C%20-%20IPv4%20%3A%20443',
  'vless://6eaad7c5-e9c7-4015-81b9-464a7fb4a5f2@www.ignitelimit.com:443?encryption=none&security=tls&sni=MEBpb0.MeBPB0.woRKeRs.DEv&fp=chrome&alpn=http%2F1.1&ech=cloudflare-ech.com%2Budp%3A%2F%2F1.1.1.1&type=ws&host=mebpb0.mebpb0.workers.dev&path=%2FeyJqdW5rIjoiUFZjYlZJR0YxZHVoVWl5IiwicHJvdG9jb2wiOiJ2bCIsIm1vZGUiOiJwcm94eWlwIiwicGFuZWxJUHMiOlsiMTk1LjIwMS4xNTAuNCIsIjE4OC4yNDUuMTYxLjE0MSIsIjQ5LjEzLjIyOC44NSIsIjc5LjEzNy4xOTcuMjEyIl19%3Fed%3D2560#Technamooz%207%20-%20VLESS%20-%20Clean%20IP%20%3A%20443',
  'vless://6eaad7c5-e9c7-4015-81b9-464a7fb4a5f2@188.114.98.0:443?encryption=none&security=tls&sni=auth.vercel.com&fp=chrome&alpn=http%2F1.1&ech=cloudflare-ech.com%2Budp%3A%2F%2F1.1.1.1&type=ws&host=auth.vercel.com&path=%2FeyJqdW5rIjoiQW1kbDBRcW9HOWxpIiwicHJvdG9jb2wiOiJ2bCIsIm1vZGUiOiJwcm94eWlwIiwicGFuZWxJUHMiOlsiMTk1LjIwMS4xNTAuNCIsIjE4OC4yNDUuMTYxLjE0MSIsIjQ5LjEzLjIyOC44NSIsIjc5LjEzNy4xOTcuMjEyIl19%3Fed%3D2560#Technamooz%208%20-%20VLESS%20C%20-%20IPv4%20%3A%20443'
];

async function get(url) {
  const res = await fetch(url, {
    headers: {
      'User-Agent': 'v2rayNG/1.8.5'
    },
    signal: AbortSignal.timeout(20000)
  });

  if (!res.ok) {
    throw new Error(url + ' -> ' + res.status);
  }

  return (await res.text()).trim();
}

function decodeSub(text) {
  if (text.includes('://')) {
    return text;
  }

  return Buffer.from(text, 'base64').toString('utf-8');
}

function toLines(text) {
  return decodeSub(text)
    .split(NL)
    .map(s => s.trim())
    .filter(s => s.includes('://'));
}

function setName(line, name) {
  if (line.startsWith('vmess://')) {
    const obj = JSON.parse(
      Buffer.from(line.slice(8), 'base64').toString('utf-8')
    );

    obj.ps = name;

    return 'vmess://' +
      Buffer.from(JSON.stringify(obj), 'utf-8').toString('base64');
  }

  const i = line.indexOf('#');
  const base = i === -1 ? line : line.slice(0, i);

  return base + '#' + encodeURIComponent(name);
}

function majmaProto(scheme, net, reality) {
  const P = {
    vless: 'VLESS',
    vmess: 'VMess',
    trojan: 'Trojan',
    ss: 'SS'
  };

  const T = {
    ws: 'WS',
    xhttp: 'XHTTP',
    httpupgrade: 'HTTPUpgrade',
    tcp: 'TCP',
    raw: 'TCP',
    grpc: 'gRPC'
  };

  const p = P[scheme] || scheme.toUpperCase();

  if (reality) {
    return p + '-Reality';
  }

  return T[net] ? p + '-' + T[net] : p;
}

function getFixed(list) {
  return list.map((line, i) => {
    const scheme = line.split('://')[0].toLowerCase();
    const q = line.slice(line.indexOf('?') + 1);

    const net =
      (q.match(/(?:^|&)type=([^&]+)/) || ['', ''])[1]
        .toLowerCase();

    const name =
      '💧 │ Jarir │ ' +
      (i + 1) +
      ' │ ' +
      majmaProto(scheme, net, false);

    return setName(line, name);
  });
}

function getSuperjin(lines, addr) {
  const out = [];
  let n = 0;

  for (const line of lines) {
    const scheme = line.split('://')[0].toLowerCase();

    if (scheme === 'vmess') {
      try {
        const obj = JSON.parse(
          Buffer.from(
            line.slice(8).split('#')[0],
            'base64'
          ).toString('utf-8')
        );

        n++;
        obj.add = addr;
        obj.ps =
          '💧 │ Jarir │ ' +
          n +
          ' │ ' +
          majmaProto('vmess', obj.net, false);

        out.push(
          'vmess://' +
          Buffer.from(
            JSON.stringify(obj),
            'utf-8'
          ).toString('base64')
        );
      } catch {
      }

      continue;
    }

    const i = line.indexOf('#');
    let base = i === -1 ? line : line.slice(0, i);

    if (!/@[^?#]+:\d+/.test(base)) {
      continue;
    }

    base = base.replace(
      /@(\[[^\]]+\]|[^:\/?#@]+):(\d+)/,
      '@' + addr + ':$2'
    );

    const q = base.includes('?')
      ? base.slice(base.indexOf('?') + 1)
      : '';

    const net =
      (q.match(/(?:^|&)type=([^&]+)/) || ['', ''])[1]
        .toLowerCase();

    const reality = /security=reality/.test(q);

    n++;

    out.push(
      base +
      '#' +
      encodeURIComponent(
        '💧 │ Jarir │ ' +
        n +
        ' │ ' +
        majmaProto(scheme, net, reality)
      )
    );
  }

  return out;
}

async function getTim9(url) {
  return toLines(await get(url));
}

async function main() {
  fs.mkdirSync('sub', { recursive: true });

  const jarir3 = getFixed(JARIR3);

  let superjin = [];

  try {
    superjin = getSuperjin(
      toLines(await get(SUPERJIN_URL)),
      SUPERJIN_ADDR
    );
  } catch (e) {
    console.log(
      'SUPERJIN ERROR:',
      e.message
    );
  }

  const superjin2 = getSuperjin(
    SUPERJIN2,
    SUPERJIN2_ADDR
  );

  let jarir4 = [];

  try {
    jarir4 = getFixed(
      toLines(await get(JARIR4_URL))
    );
  } catch (e) {
    console.log(
      'JARIR4 ERROR:',
      e.message
    );
  }

  console.log(
    'SUPERJIN OK:',
    superjin.length,
    '| SUPERJIN2 OK:',
    superjin2.length,
    '| JARIR3 OK:',
    jarir3.length,
    '| JARIR4 OK:',
    jarir4.length
  );

  for (const s of SUBS) {
    const out = [];

    if (s.tim9) {
      try {
        const tim9 = await getTim9(s.tim9);

        out.push(...tim9);

        console.log(
          '#' + s.n + ' TIM9 OK:',
          tim9.length
        );
      } catch (e) {
        console.log(
          '#' + s.n + ' TIM9 ERROR:',
          e.message
        );
      }
    }

    if (s.superjin) {
      out.push(...superjin);
    }

    if (s.superjin2) {
      out.push(...superjin2);
    }

    if (s.jarir3) {
      out.push(...jarir3);
    }

    if (s.jarir4) {
      out.push(...jarir4);
    }

    if (out.length === 0) {
      console.log(
        '#' + s.n + ' nothing, keeping old file'
      );

      continue;
    }

    fs.writeFileSync(
      'sub/' + s.token + '.txt',
      Buffer.from(
        out.join(NL),
        'utf-8'
      ).toString('base64')
    );

    console.log(
      '#' + s.n + ' saved:',
      out.length
    );
  }
}

main();
