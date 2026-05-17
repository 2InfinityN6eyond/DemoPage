# Deployment Guide

This document explains how to deploy the LogK homepage to GitHub Pages with a custom domain, including DNS setup on Gabia. It also explains the key terms so any team member can follow along.

---

## Key Terms

**GitHub Pages**
A free static hosting service built into GitHub. When enabled, GitHub automatically serves the files in your repository (or a specific branch/folder) as a public website. No separate server or hosting account needed.

**GitHub Actions**
GitHub's built-in CI/CD system. It runs automated scripts (called workflows) whenever you push code. This project uses a workflow at `.github/workflows/deploy.yml` that builds the Astro site and publishes it to GitHub Pages.

**Repository variable**
A named value stored in a GitHub repository's settings. Workflows can read these values at build time. Unlike secrets, variables are not encrypted and are visible in logs — appropriate for non-sensitive config like a site URL.

**Base path**
The URL prefix under which the site is served. A project Pages site at `username.github.io/my-repo` has a base path of `/my-repo`. All asset URLs (CSS, JS, images) must include this prefix or they will 404. A custom domain site is served from the root `/`, so no base path is needed.

**CNAME (DNS record type)**
"Canonical Name" — a DNS record that says "this hostname is an alias for another hostname." Used to point `www.logk.co.kr` at GitHub's servers.

**A record (DNS record type)**
Maps a hostname directly to an IPv4 address. Used to point the apex domain `logk.co.kr` (without `www`) at GitHub Pages IP addresses.

**Apex domain**
The root domain without any subdomain prefix, e.g. `logk.co.kr`. Also called the "naked domain." GitHub Pages can serve from the apex domain when A records are configured.

**DNS propagation**
After you add or change a DNS record, it takes time (minutes to 48 hours) for the change to spread across all DNS servers worldwide. Until propagation is complete, some users will still resolve the old address.

**HTTPS / TLS certificate**
GitHub Pages automatically issues a free TLS certificate via Let's Encrypt once DNS is verified. This enables `https://` and shows the padlock icon in browsers. You must enable "Enforce HTTPS" in GitHub Pages settings after the certificate is issued.

**CNAME file**
A plain text file named `CNAME` (no extension) placed in the root of the deployed output. It contains just the custom domain hostname. GitHub Pages reads this file to know which domain to serve the site on. Without it, the custom domain setting is lost every time a new deployment overwrites the `gh-pages` branch or Pages artifact.

---

## Project Deployment Model

This project is pushed to two GitHub repositories:

| Repo | Purpose | URL |
|------|---------|-----|
| Personal (`hjp/PAGE_DEMO`) | Development preview | `https://hjp.github.io/PAGE_DEMO/` |
| Company (`logk-dev/HomePage`) | Production | `https://www.logk.co.kr/` |

Both repos share the same source code and the same `deploy.yml` workflow. The difference is controlled by repository variables set per-repo in GitHub settings.

---

## Step 1 — Enable GitHub Pages on the Company Repo

1. Go to the company repository on GitHub.
2. Click **Settings** (top tab row).
3. In the left sidebar, click **Pages**.
4. Under **Source**, select **GitHub Actions**.
   - This tells GitHub to publish whatever the workflow uploads, rather than reading a branch directly.
5. Leave **Custom domain** blank for now — you will set it after DNS is configured.

---

## Step 2 — Set Repository Variables on the Company Repo

These variables tell the build workflow how to configure the site for the custom domain.

1. In the company repo, go to **Settings → Secrets and variables → Actions**.
2. Click the **Variables** tab (not Secrets).
3. Click **New repository variable** and add each of the following:

| Name | Value | Why |
|------|-------|-----|
| `SITE_URL` | `https://www.logk.co.kr` | Sets the canonical URL used in meta tags and the sitemap. |
| `BASE_PATH` | `/` | Tells the build there is no subpath prefix. All asset URLs will start from `/`. |
| `CUSTOM_DOMAIN` | `www.logk.co.kr` | The workflow writes this into a `CNAME` file in the build output so GitHub Pages keeps the custom domain after each deploy. |

---

## Step 3 — Configure DNS on Gabia

Log in to Gabia and open the DNS management panel for `logk.co.kr`.

Add the following records:

### For `www.logk.co.kr` (CNAME)

| Type | Host | Value | TTL |
|------|------|-------|-----|
| CNAME | `www` | `logk-dev.github.io` | 3600 |

Replace `logk-dev` with the actual GitHub organization username that owns the company repo. This record makes `www.logk.co.kr` an alias for the GitHub Pages address.

### For `logk.co.kr` (apex domain, A records)

Add all four A records. GitHub uses multiple IPs for redundancy.

| Type | Host | Value | TTL |
|------|------|-------|-----|
| A | `@` | `185.199.108.153` | 3600 |
| A | `@` | `185.199.109.153` | 3600 |
| A | `@` | `185.199.110.153` | 3600 |
| A | `@` | `185.199.111.153` | 3600 |

`@` means the apex domain itself (`logk.co.kr`). GitHub Pages will automatically redirect `logk.co.kr` to `www.logk.co.kr` once the custom domain is verified.

**Wait for DNS propagation.** This usually takes 5–30 minutes but can take up to 48 hours. You can check propagation status at [dnschecker.org](https://dnschecker.org) by entering `www.logk.co.kr`.

---

## Step 4 — Set the Custom Domain in GitHub Pages Settings

Once DNS has propagated:

1. Go to **Settings → Pages** in the company repo.
2. Under **Custom domain**, enter `www.logk.co.kr`.
3. Click **Save**.
4. GitHub will run a DNS check. Wait for it to show a green checkmark.

---

## Step 5 — Enable HTTPS

After the DNS check passes, GitHub automatically requests a TLS certificate. This usually takes a few minutes.

1. Refresh **Settings → Pages**.
2. Once the certificate is ready, the **Enforce HTTPS** checkbox becomes available.
3. Check **Enforce HTTPS**.

From this point on, all traffic to `www.logk.co.kr` is served over HTTPS.

---

## Step 6 — Deploy

Push to `main` on the company repo, or trigger the workflow manually:

1. Go to **Actions** in the company repo.
2. Click **Deploy to GitHub Pages** in the left list.
3. Click **Run workflow → Run workflow**.

The workflow will:
1. Install dependencies.
2. Build the Astro site with `SITE_URL=https://www.logk.co.kr` and no base path prefix.
3. Write `www.logk.co.kr` into `dist/CNAME`.
4. Upload and deploy to GitHub Pages.

---

## Verification Checklist

After deployment:

- [ ] `https://www.logk.co.kr/en/` loads correctly with styles
- [ ] `https://logk.co.kr` redirects to `https://www.logk.co.kr`
- [ ] Padlock icon appears in browser (HTTPS active)
- [ ] CSS, JS, and images all load (no 404s in browser DevTools Network tab)
- [ ] Language switching between EN and KO works
- [ ] Theme toggle works

---

## Personal Repo (No Custom Domain)

No repository variables are needed on the personal repo. The workflow automatically computes:

```
SITE_URL  → https://hjp.github.io/PAGE_DEMO
BASE_PATH → /PAGE_DEMO
```

GitHub Pages settings for the personal repo: **Source = GitHub Actions**, no custom domain.

---

## Troubleshooting

**Page loads but has no styles (blank/unstyled)**

The `BASE_PATH` is wrong. Asset URLs contain a subpath that does not match where the site is actually served. Confirm `BASE_PATH=/` is set in the company repo variables, then re-run the workflow.

**GitHub Pages DNS check fails**

DNS has not propagated yet, or the CNAME record is wrong. Double-check the CNAME value in Gabia exactly matches `<org-username>.github.io` with no trailing slash. Wait and retry.

**Custom domain resets to blank after each deploy**

The `CNAME` file is missing from the build output. Confirm the `CUSTOM_DOMAIN` repository variable is set. The workflow writes this file only when the variable is non-empty.

**`Enforce HTTPS` checkbox is greyed out**

The TLS certificate has not been issued yet. This happens when DNS is not fully propagated. Wait and refresh the page.
