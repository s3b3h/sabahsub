const fs = require('fs');
const NL = String.fromCharCode(10);

const SUBS = [
  {
    n: 1,
    token: 'r6d3k9w2',
    zeus: 'https://huzcone1u80s.snzasdesuecs.workers.dev/feed/AbuNuwas',
    tim9: '',
    bpb: true,
    bpb2: false,
    superjin: true,
    superjin2: false
  },
  {
    n: 2,
    token: 'm4q8z1v7',
    zeus: 'https://mpzcnxesub5s.h9zvw7ewuk9s.workers.dev/feed/AbuNuwas',
    tim9: 'https://api.tim9.ir/dl/djMsMjM3MDIsMTc5MTQwNTQ4NQ.GjbjEUnIt1zDiLbazd862GBY_5c6XQdeecTJyh-IwB4',
    bpb: true,
    bpb2: false,
    superjin: true,
    superjin2: false
  },
  {
    n: 3,
    token: 'h9c5t2x6',
    zeus: 'https://qfzb3eejuyls.9rzx6oe9uycs.workers.dev/feed/0727443Z',
    tim9: 'https://api.tim9.ir/dl/djMsMjM2OTksMTc5MTQwNDg3OA.g945PfBAAQZ0tUwIS2fj9Y-pTRWFOUTA2bitU7_OMI8',
    bpb: true,
    bpb2: false,
    superjin: true,
    superjin2: false
  },
  {
    n: 4,
    token: 'k8x2n7m4',
    zeus: 'https://ujzj0fe8ua4s.t6zthde5udls.workers.dev/feed/46416WLG',
    tim9: '',
    bpb: false,
    bpb2: true,
    superjin: false,
    superjin2: true
  },
  {
    n: 5,
    token: 't7h2j8r4',
    zeus: 'https://sczembecuxis.mizmy4etujes.workers.dev/feed/6OYL1WRB',
    tim9: 'https://api.tim9.ir/dl/djMsMjM3MDAsMTc5MTQwNDkzMA.RLeZqkxLeUrY-nO98nYyfTwi7WoCfNBL-3vDu6okL-0',
    bpb: false,
    bpb2: true,
    superjin: false,
    superjin2: true
  },
  {
    n: 6,
    token: 'b5m1c6w9',
    zeus: 'https://ubzhqnetujss.sabah-16.workers.dev/feed/8UGULZKC',
    tim9: 'https://api.tim9.ir/dl/djMsMjM2OTgsMTc5MTQwNDc1Nw.QEZLP-I1gPqEk1zDKdePPTuYNDLUKEgeMVNcx0bFFWI',
    bpb: false,
    bpb2: true,
    superjin: false,
    superjin2: true
  }
];

const SUPERJIN_URL =
  'https://alolo01-production-f942.up.railway.app/sub/djMsMSwxNzkxMDYwMjE1.WReIxmV-gYDCeN9C-swstPVCNrexMmR4tv81BcCW9Bc';

const SUPERJIN_ADDR =
  'alolo01-production-f942.up.railway.app';

const SUPERJIN2_ADDR =
  'alolo02-production-f222.up.railway.app';

const SUPERJIN2 = [
  'vmess://ew0KICAidiI6ICIyIiwNCiAgInBzIjogIlx1RDgzRFx1REM4RSBcdUQ4MzVcdURERDdcdUQ4MzVcdURERjZcdUQ4MzVcdURERUVcdUQ4MzVcdURERkFcdUQ4MzVcdURERkNcdUQ4MzVcdUQ4MzVcdUQ4MzVcdURERkJcdUQ4MzVcdURERjEgfCDYrNuM2YbaqdizIHwgXHVEODM1XHVERTRFXHVEODM1XHVERTZBXHVEODM1XHVERTY1XHVEODM1XHVERTVBXHVEODM1XHVERTY3IFx1RDgzNVx1RERERFx1RDgzNVx1RERGNlx1RDgzNVx1RERFQlx1RDgzNVx1RERFQiIsDQogICJhZGQiOiAiYWxvbG8wMi1wcm9kdWN0aW9uLWYyMjIudXAucmFpbHdheS5hcHAiLA0KICAicG9ydCI6ICI0NDMiLA0KICAiaWQiOiAiZGVmNzcwODMtMDhjYi00YjJiLWFlZmUtYWJjYzg5ODkwYTQ1IiwNCiAgImFpZCI6ICIwIiwNCiAgInNjeSI6ICJhdXRvIiwNCiAgIm5ldCI6ICJ3cyIsDQogICJ0eXBlIjogIm5vbmUiLA0KICAiaG9zdCI6ICJhbG9sbzAyLXByb2R1Y3Rpb24udXAucmFpbHdheS5hcHAiLA0KICAicGF0aCI6ICIvdHcvMmYyODU0YjUtMWRlYS00NzU4LTk5MDgtZDQ0NDkxNjYwMjkxP2VkPTI1NjAiLA0KICAidGxzIjogInRscyIsDQogICJzbmkiOiAiYWxvbG8wMi1wcm9kdWN0aW9uLnVwLnJhaWx3YXkuYXBwIiwNCiAgImFscG4iOiAiaHR0cC8xLjEiLA0KICAiZnAiOiAiZWRnZSIsDQogICJjcyI6ICIiLA0KICAiaW5zZWN1cmUiOiAiMCIsDQogICJ2Y24iOiAiIiwNCiAgInBjcyI6ICIiLA0KICAiZGlhbE1vZGUiOiAiIg0KfQ==',
  'vless://6e8f5128-0036-430b-af35-3996bfc58855@alolo02-production-f222.up.railway.app:443?encryption=none&security=tls&sni=alolo02-production.up.railway.app&fp=firefox&alpn=http%2F1.1&type=ws&host=alolo02-production.up.railway.app&path=%2Fstream%2F4b7c4d43-b876-465f-8a7e-b53fca6e4291%3Fed%3D2560',
  'trojan://koK2yAYj0ilsytdn2CVTBC_euPFTXWv7@alolo02-production-f222.up.railway.app:443?security=tls&sni=alolo02-production.up.railway.app&fp=safari&alpn=http%2F1.1&type=ws&host=alolo02-production.up.railway.app&path=%2Flive%2F23779095-6cc4-4d9d-84ec-3585a2ed573e%3Fed%3D2560',
  'vless://6e8f5128-0036-430b-af35-3996bfc58855@alolo02-production-f222.up.railway.app:443?encryption=none&security=tls&sni=alolo02-production.up.railway.app&fp=chrome&alpn=http%2F1.1&type=ws&host=alolo02-production.up.railway.app&path=%2Fws%2Fc4edddb5-6b79-4bc4-9a50-883c3f1e5d44%3Fed%3D2560',
  'vless://6e8f5128-0036-430b-af35-3996bfc58855@alolo02-production-f222.up.railway.app:443?encryption=none&security=tls&sni=alolo02-production.up.railway.app&fp=ios&alpn=http%2F1.1&type=httpupgrade&host=alolo02-production.up.railway.app&path=%2Fcdn%2F08455509-2527-4009-9133-40f34fac8747%3Fed%3D2560'
];

const BPB = [
  'vless://75ddb271-ac67-4679-911f-bcfcf606a898@172.66.45.7:443?encryption=none&security=tls&sni=J52S0NCpuCr872vHT23.PageS.DeV&type=ws&host=j52s0ncpucr872vht23.pages.dev&path=%2Fvl%2Fi3o0BZeRY036G3A5uH%3Fed%3D2560',
  'vless://75ddb271-ac67-4679-911f-bcfcf606a898@172.66.46.249:443?encryption=none&security=tls&sni=j52s0NCPuCR872VHT23.pagEs.DEv&type=ws&host=j52s0ncpucr872vht23.pages.dev&path=%2Fvl%2FYiPwKKvJqLP5WmiKoNFlLw%3Fed%3D2560',
  'vless://75ddb271-ac67-4679-911f-bcfcf606a898@chatgpt.com:443?encryption=none&security=tls&sni=j52S0ncPUCR872VhT23.pagEs.Dev&type=ws&host=j52s0ncpucr872vht23.pages.dev&path=%2Fvl%2F685boF8dDSzCFbcVPpB169V81AwVRsb7%3Fed%3D2560',
  'vless://75ddb271-ac67-4679-911f-bcfcf606a898@www.fiverr.com:443?encryption=none&security=tls&sni=J52S0NcPUcR872VhT23.pAGES.DeV&type=ws&host=j52s0ncpucr872vht23.pages.dev&path=%2Fvl%2FEm6Hu6KNCuosrUf08w29KLdaP19T3%3Fed%3D2560',
  'vless://75ddb271-ac67-4679-911f-bcfcf606a898@172.66.45.7:2053?encryption=none&security=tls&sni=J52S0ncpUcR872VHT23.PagES.Dev&type=ws&host=j52s0ncpucr872vht23.pages.dev&path=%2Fvl%2FS9r6ECdtXff9BpaQ%3Fed%3D2560',
  'vless://75ddb271-ac67-4679-911f-bcfcf606a898@172.66.46.249:2053?encryption=none&security=tls&sni=j52s0nCpucR872vht23.PAgES.dev&type=ws&host=j52s0ncpucr872vht23.pages.dev&path=%2Fvl%2Fbw74jWEaa4EwBTXCe0U9e0plPTh%3Fed%3D2560',
  'vless://75ddb271-ac67-4679-911f-bcfcf606a898@chatgpt.com:2053?encryption=none&security=tls&sni=j52s0nCPUCr872vht23.PaGEs.dev&type=ws&host=j52s0ncpucr872vht23.pages.dev&path=%2Fvl%2FftrZBr1CuU0ViBW5e12v%3Fed%3D2560',
  'vless://75ddb271-ac67-4679-911f-bcfcf606a898@www.fiverr.com:2053?encryption=none&security=tls&sni=j52s0NcpuCR872VHT23.PaGEs.Dev&type=ws&host=j52s0ncpucr872vht23.pages.dev&path=%2Fvl%2FMd8mgwGTOYI88I9NVlCprZ63G73gvb%3Fed%3D2560',
  'trojan://5BLKCS%24QPFN2ToS.Oig@172.66.45.7:443?security=tls&sni=J52S0NCpuCr872vHT23.PageS.DeV&type=ws&host=j52s0ncpucr872vht23.pages.dev&path=%2Ftr%2FJluNIY9XRpMUOeMiRmAKlLOZTaNdVjZ%3Fed%3D2560',
  'trojan://5BLKCS%24QPFN2ToS.Oig@172.66.46.249:443?security=tls&sni=j52s0NCPuCR872VHT23.pagEs.DEv&type=ws&host=j52s0ncpucr872vht23.pages.dev&path=%2Ftr%2FgL2z7EEp2mJqDYHGBKxN%3Fed%3D2560',
  'trojan://5BLKCS%24QPFN2ToS.Oig@chatgpt.com:443?security=tls&sni=j52s0ncPUCR872VhT23.pagEs.Dev&type=ws&host=j52s0ncpucr872vht23.pages.dev&path=%2Ftr%2Fxm4TPbj8XGPDaRAAMJFaURrOC%3Fed%3D2560',
  'trojan://5BLKCS%24QPFN2ToS.Oig@www.fiverr.com:443?security=tls&sni=J52S0NcPUcR872VhT23.pAGES.DeV&type=ws&host=j52s0ncpucr872vht23.pages.dev&path=%2Ftr%2F3oNFbjBYxdWgC8rV2LVkhzUCoy63agdb%3Fed%3D2560',
  'trojan://5BLKCS%24QPFN2ToS.Oig@172.66.45.7:2053?security=tls&sni=J52S0ncpUcR872VHT23.PagES.Dev&type=ws&host=j52s0ncpucr872vht23.pages.dev&path=%2Ftr%2FndscRHyIPLCXSh0qOUQCOJ%3Fed%3D2560',
  'trojan://5BLKCS%24QPFN2ToS.Oig@172.66.46.249:2053?security=tls&sni=j52s0nCpucR872vht23.PAgES.dev&type=ws&host=j52s0ncpucr872vht23.pages.dev&path=%2Ftr%2Ft6CLdrvhqtNkndFBafRox1Q9JL%3Fed%3D2560',
  'trojan://5BLKCS%24QPFN2ToS.Oig@chatgpt.com:2053?security=tls&sni=j52s0nCPUCr872vht23.PaGEs.dev&type=ws&host=j52s0ncpucr872vht23.pages.dev&path=%2Ftr%2F6OGqYF0MoXs3w2mnVKIGFWAis%3Fed%3D2560',
  'trojan://5BLKCS%24QPFN2ToS.Oig@www.fiverr.com:2053?security=tls&sni=j52s0NcpuCR872VHT23.PaGEs.Dev&type=ws&host=j52s0ncpucr872vht23.pages.dev&path=%2Ftr%2FAJD8WbwhxxPosF7gjx4KSFCWk%3Fed%3D2560'
];

const BPB2 = [
  'vless://2fc83242-00df-4599-941b-1590777dc062@dk8kdcptc35y-2a3ouygvb7ehecry9c.pages.dev:443?encryption=none&host=dk8kdcptc35y-2a3ouygvb7ehecry9c.pages.dev&type=ws&security=tls&path=%2Fvl%2FCfv4t7YCT86Q9XlROlzKYw%3Fed%3D2560&sni=dk8kDCPtc35y-2a3ouygVB7eHecry9C.PaGes.DEv',
  'vless://2fc83242-00df-4599-941b-1590777dc062@172.66.47.82:443?encryption=none&host=dk8kdcptc35y-2a3ouygvb7ehecry9c.pages.dev&type=ws&security=tls&path=%2Fvl%2FLt1V2w3PjTO5EYpfUGcp%3Fed%3D2560&sni=Dk8KdCptc35y-2a3oUYgVb7EHeCry9C.PaGes.dEV',
  'vless://2fc83242-00df-4599-941b-1590777dc062@172.66.44.174:443?encryption=none&host=dk8kdcptc35y-2a3ouygvb7ehecry9c.pages.dev&type=ws&security=tls&path=%2Fvl%2FAsd4PtYXwFZxPBfMCTRauj6%3Fed%3D2560&sni=dK8KDCPTC35y-2A3ouYGVB7ehecRy9C.PaGeS.Dev',
  'vless://2fc83242-00df-4599-941b-1590777dc062@www.ignitelimit.com:443?encryption=none&host=dk8kdcptc35y-2a3ouygvb7ehecry9c.pages.dev&type=ws&security=tls&path=%2Fvl%2FAzujeRNiM5gWBnwwZg7NhUaB4xIfUHC%3Fed%3D2560&sni=Dk8kdcPTC35Y-2A3oUyGvb7EhECRY9c.PaGeS.DeV',
  'vless://2fc83242-00df-4599-941b-1590777dc062@chatgpt.com:443?encryption=none&host=dk8kdcptc35y-2a3ouygvb7ehecry9c.pages.dev&type=ws&security=tls&path=%2Fvl%2FDhNGuMFn9f9CqV6gL4zBUL31BlD0Ab%3Fed%3D2560&sni=DK8KDCPtc35Y-2a3oUyGVb7EhEcRy9C.pAgeS.dev',
  'vless://2fc83242-00df-4599-941b-1590777dc062@www.fiverr.com:443?encryption=none&host=dk8kdcptc35y-2a3ouygvb7ehecry9c.pages.dev&type=ws&security=tls&path=%2Fvl%2Fy9moEfFQfmojahlwmAXPHXxDPEgok%3Fed%3D2560&sni=DK8kDcPTc35Y-2a3ouYgvB7EhecRY9c.pAgeS.dEV',
  'vless://2fc83242-00df-4599-941b-1590777dc062@dk8kdcptc35y-2a3ouygvb7ehecry9c.pages.dev:2053?encryption=none&host=dk8kdcptc35y-2a3ouygvb7ehecry9c.pages.dev&type=ws&security=tls&path=%2Fvl%2FeTstea0rOCbkntrIC98V5%3Fed%3D2560&sni=DK8kptC35Y-2a3OuyGvB7ehEcRY9c.PAgeS.Dev',
  'vless://2fc83242-00df-4599-941b-1590777dc062@172.66.47.82:2053?encryption=none&host=dk8kdcptc35y-2a3ouygvb7ehecry9c.pages.dev&type=ws&security=tls&path=%2Fvl%2Ft8YsbTrkzECVOnmAO1CtiAt%3Fed%3D2560&sni=dk8kDCptC35Y-2a3OuYGvb7eHecRy9C.pAGeS.deV',
  'vless://2fc83242-00df-4599-941b-1590777dc062@172.66.44.174:2053?encryption=none&host=dk8kdcptc35y-2a3ouygvb7ehecry9c.pages.dev&type=ws&security=tls&path=%2Fvl%2FuZjVrIjDBDvWOHIB0F5NtZNwfn%3Fed%3D2560&sni=dk8KdCpTc35y-2a3ouYgVB7eheCRy9C.pAgES.dEv',
  'vless://2fc83242-00df-4599-941b-1590777dc062@www.ignitelimit.com:2053?encryption=none&host=dk8kdcptc35y-2a3ouygvb7ehecry9c.pages.dev&type=ws&security=tls&path=%2Fvl%2Fcx0h0B5GzW7CDM0zaMMO6hP%3Fed%3D2560&sni=DK8kDcPTC35y-2a3OUyGVb7EheCry9c.PAGes.dEV',
  'vless://2fc83242-00df-4599-941b-1590777dc062@chatgpt.com:2053?encryption=none&host=dk8kdcptc35y-2a3ouygvb7ehecry9c.pages.dev&type=ws&security=tls&path=%2Fvl%2FJTuQuFCUpwRakgMX%3Fed%3D2560&sni=Dk8KDCPtc35Y-2a3oUYGVB7Ehecry9C.PAGES.dev',
  'vless://2fc83242-00df-4599-941b-1590777dc062@www.fiverr.com:2053?encryption=none&host=dk8kdcptc35y-2a3ouygvb7ehecry9c.pages.dev&type=ws&security=tls&path=%2Fvl%2FgCu6Z8bEOuEi7lr25%3Fed%3D2560&sni=Dk8KdCptc35y-2a3oUYGvB7EhecRY9C.Pages.dev',
  'trojan://etmW1GglFakEXVcq12UZ@dk8kdcptc35y-2a3ouygvb7ehecry9c.pages.dev:443?host=dk8kdcptc35y-2a3ouygvb7ehecry9c.pages.dev&type=ws&security=tls&path=%2Ftr%2F4WlTMnD5VCicLFq42wKiZrBPTV%3Fed%3D2560&sni=dk8kDCPtc35y-2a3ouygVB7eHecry9C.PaGes.DEv',
  'trojan://etmW1GglFakEXVcq12UZ@172.66.47.82:443?host=dk8kdcptc35y-2a3ouygvb7ehecry9c.pages.dev&type=ws&security=tls&path=%2Ftr%2FP8vrCrMyvvrMfs1Pdw0YXo1bodK8Hte%3Fed%3D2560&sni=Dk8KdCptc35y-2a3oUYgVb7EHeCry9C.PaGes.dEV',
  'trojan://etmW1GglFakEXVcq12UZ@172.66.44.174:443?host=dk8kdcptc35y-2a3ouygvb7ehecry9c.pages.dev&type=ws&security=tls&path=%2Ftr%2F4tLCCGARz6Yd6dyRC%3Fed%3D2560&sni=dK8KDCPTC35y-2A3ouYGVB7ehecRy9C.PaGeS.Dev',
  'trojan://etmW1GglFakEXVcq12UZ@www.ignitelimit.com:443?host=dk8kdcptc35y-2a3ouygvb7ehecry9c.pages.dev&type=ws&security=tls&path=%2Ftr%2FkxFb7C0FB4Sha2yJXhmGZ6bxZ%3Fed%3D2560&sni=Dk8kdcPTC35Y-2A3oUyGvb7EhECRY9c.PaGeS.DeV',
  'trojan://etmW1GglFakEXVcq12UZ@chatgpt.com:443?host=dk8kdcptc35y-2a3ouygvb7ehecry9c.pages.dev&type=ws&security=tls&path=%2Ftr%2F2fBmsIZkxMqeOptiRUMO3s6xWPq1g3Fed%3D2560&sni=DK8KDCPtc35Y-2a3oUyGVb7EhEcRy9C.pAgeS.dev',
  'trojan://etmW1GglFakEXVcq12UZ@www.fiverr.com:443?host=dk8kdcptc35y-2a3ouygvb7ehecry9c.pages.dev&type=ws&security=tls&path=%2Ftr%2FwMllZze5KIM6dgSh%3Fed%3D2560&sni=DK8kDcPTC35Y-2A3oUyGvB7EhECRY9c.pAgeS.dEV',
  'trojan://etmW1GglFakEXVcq12UZ@dk8kdcptc35y-2a3ouygvb7ehecry9c.pages.dev:2053?host=dk8kdcptc35y-2a3ouygvb7ehecry9c.pages.dev&type=ws&security=tls&path=%2Ftr%2FEX41i35X8W7e7spLJcMsxCB09BP%3Fed%3D2560&sni=DK8kdcptC35Y-2a3OuyGvB7ehEcRY9c.PAgeS.Dev',
  'trojan://etmW1GglFakEXVcq12UZ@172.66.47.82:2053?host=dk8kdcptc35y-2a3ouygvb7ehecry9c.pages.dev&type=ws&security=tls&path=%2Ftr%2FcXwuXF9ZDUAkVsvg7L9ocHSFf95q%3Fed%3D2560&sni=dk8kDCptC35Y-2a3OuYGvb7eHecRy9C.pAGeS.deV',
  'trojan://etmW1GglFakEXVcq12UZ@172.66.44.174:2053?host=dk8kdcptc35y-2a3ouygvb7ehecry9c.pages.dev&type=ws&security=tls&path=%2Ftr%2F0MaVJHaLUxzl2SX6RuardLMQVnI8myN%3Fed%3D2560&sni=dk8KdCpTc35y-2a3ouYgVB7eheCRy9C.pAgES.dEv',
  'trojan://etmW1GglFakEXVcq12UZ@www.ignitelimit.com:2053?host=dk8kdcptc35y-2a3ouygvb7ehecry9c.pages.dev&type=ws&security=tls&path=%2Ftr%2FNtCGrJpDV1hYjP5FZ1%3Fed%3D2560&sni=DK8kDcPTC35y-2a3OUyGVb7EheCry9c.PAGes.dEV',
  'trojan://etmW1GglFakEXVcq12UZ@chatgpt.com:2053?host=dk8kdcptc35y-2a3ouygvb7ehecry9c.pages.dev&type=ws&security=tls&path=%2Ftr%2Fl6RPvy8fU4JMWArRkzLIzIMsOS7MHX%3Fed%3D2560&sni=Dk8KDCPtc35Y-2a3oUYGVB7Ehecry9C.PAGES.dev',
  'trojan://etmW1GglFakEXVcq12UZ@www.fiverr.com:2053?host=dk8kdcptc35y-2a3ouygvb7ehecry9c.pages.dev&type=ws&security=tls&path=%2Ftr%2FP1pnu1sUWi6nsDzHIZQC%3Fed%3D2560&sni=Dk8KdCptc35y-2a3oUYGvB7EhecRY9C.Pages.dev'
];

const ECH = 'cloudflare-ech.com+udp://1.1.1.1';

const TLS_EXTRA =
  'fp=chrome&alpn=http%2F1.1&ech=' +
  encodeURIComponent(ECH) +
  '&insecure=0&allowInsecure=0';

const BAD_WORDS = [
  'پنل رایگان و غیر قابل فروش',
  'ساخت رایگان',
  'remaining'
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

function getName(line) {
  if (line.startsWith('vmess://')) {
    try {
      return JSON.parse(
        Buffer.from(line.slice(8), 'base64').toString('utf-8')
      ).ps || '';
    } catch {
      return '';
    }
  }

  const i = line.indexOf('#');

  if (i === -1) {
    return '';
  }

  try {
    return decodeURIComponent(line.slice(i + 1));
  } catch {
    return line.slice(i + 1);
  }
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

function setEch(line) {
  const scheme = line.split('://')[0].toLowerCase();

  if (scheme !== 'vless' && scheme !== 'trojan') {
    return line;
  }

  const h = line.indexOf('#');
  const body = h === -1 ? line : line.slice(0, h);
  const tag = h === -1 ? '' : line.slice(h);
  const q = body.indexOf('?');

  if (q === -1) {
    return line;
  }

  const parts = body.slice(q + 1).split('&');

  const sec =
    (parts.find(p => p.split('=')[0] === 'security') || '')
      .split('=')[1] || '';

  if (sec.toLowerCase() !== 'tls') {
    return line;
  }

  const drop = [
    'cs',
    'fm',
    'echConfigList',
    'fp',
    'alpn',
    'ech',
    'insecure',
    'allowInsecure'
  ];

  const keep = parts.filter(
    p => !drop.includes(p.split('=')[0])
  );

  return body.slice(0, q) +
    '?' +
    keep.join('&') +
    '&' +
    TLS_EXTRA +
    tag;
}

function zeusName(old) {
  const m = old.match(
    /[\u{1F1E6}-\u{1F1FF}]{2}/u
  );

  if (m) {
    const flag = m[0];

    if (flag === '🇦🇱') {
      return flag + ' │ AbuNuwas │ يوتيوب وسناب بدون تبليغ';
    }

    if (flag === '🇺🇸') {
      return flag + ' │ AbuNuwas │ AI';
    }

    if (flag === '🇺🇿') {
      return flag + ' │ AbuNuwas │ يوتيوب وسناب بدون تبليغ';
    }

    return flag + ' │ AbuNuwas';
  }

  if (old.includes('🌐')) {
    return '🇫🇷 │ AbuNuwas';
  }

  return '🏳️ │ AbuNuwas';
}

async function getZeus(url) {
  const out = [];

  for (const line of toLines(await get(url))) {
    const name = getName(line);

    if (BAD_WORDS.some(w => name.includes(w))) {
      continue;
    }

    out.push(
      setName(
        setEch(line),
        zeusName(name)
      )
    );
  }

  return out;
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

function getGroup(list, poet, icon) {
  return list.map((line, i) => {
    const scheme = line.split('://')[0].toLowerCase();
    const q = line.slice(line.indexOf('?') + 1);

    const net =
      (q.match(/(?:^|&)type=([^&]+)/) || ['', ''])[1]
        .toLowerCase();

    const name =
      poet +
      ' │ ' +
      icon +
      ' │ ' +
      (i + 1) +
      ' │ ' +
      majmaProto(scheme, net, false);

    return setEch(line) + '#' + encodeURIComponent(name);
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
          '🇳🇱 │ Jarir │ AI │ ' +
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
        '🇳🇱 │ Jarir │ AI │ ' +
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

  const bpb = getGroup(
    BPB,
    'Al-Farahidi',
    '💧'
  );

  const bpb2 = getGroup(
    BPB2,
    'Al-Farahidi',
    '💧'
  );

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

  console.log(
    'BPB OK:',
    bpb.length,
    '| BPB2 OK:',
    bpb2.length,
    '| SUPERJIN OK:',
    superjin.length,
    '| SUPERJIN2 OK:',
    superjin2.length
  );

  for (const s of SUBS) {
    const out = [];

    try {
      const z = await getZeus(s.zeus);

      out.push(...z);

      console.log(
        '#' + s.n + ' ZEUS OK:',
        z.length
      );
    } catch (e) {
      console.log(
        '#' + s.n + ' ZEUS ERROR:',
        e.message
      );
    }

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

    if (s.bpb) {
      out.push(...bpb);
    }

    if (s.bpb2) {
      out.push(...bpb2);
    }

    if (s.superjin) {
      out.push(...superjin);
    }

    if (s.superjin2) {
      out.push(...superjin2);
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
