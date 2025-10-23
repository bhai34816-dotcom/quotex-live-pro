Quotex Live Predictor — Pro (Netlify Ready)
---------------------------------------------

What is inside:
- index.html         -> main dashboard (ready to deploy)
- netlify/functions/proxy.js -> serverless proxy to avoid CORS (Netlify Functions)
- README.txt         -> this file

Quick deploy (Netlify, fastest):
1. Create a free Netlify account: https://app.netlify.com/
2. From Netlify dashboard -> Sites -> Add new site -> Deploy manually -> Drag & drop the ZIP file or the folder.
   - If you drag the folder, Netlify will detect functions automatically if using their CLI or Git integration.
3. To add the serverless function:
   - Option A (manual drag): Zip the folder and deploy; Netlify may accept functions in `netlify/functions` automatically for some deploy methods.
   - Option B (recommended): Create a git repo and push to GitHub, then create a Netlify site from that repo. Netlify will deploy functions in `netlify/functions` automatically.
4. After deploy, open the site URL on mobile Chrome. The dashboard should load and the site will call the proxy at: `/.netlify/functions/proxy?url=...`
5. If you see fetch errors, ensure functions are deployed (check Netlify functions tab) and that your site is served over HTTPS.

Alternative hosts:
- Vercel: Use `api/proxy.js` equivalent (adjust function code). GitHub Pages: only static (no functions) — the proxy won't work there.

Notes & safety:
- This tool provides signals only. Backtest strategies before trading real money.
- Some APIs may throttle. The proxy simply forwards responses; consider caching if you hit rate limits.
- If you want, I can give step-by-step guidance while you deploy and link the site here for testing.
