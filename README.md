# AiR Lab Website

The website of the Autonomous Intelligent Robotics (AiR) Laboratory at LSU New
Orleans. It is a [Create React App](https://create-react-app.dev/) single-page
application built with [MUI](https://mui.com/) and
[React Router](https://reactrouter.com/), deployed as a static site on GitHub
Pages.

**Live site:** https://redwannewaz.github.io/
**Repository:** `git@github.com:RedwanNewaz/RedwanNewaz.github.io.git`

---

## Table of contents

1. [Running the site locally](#1-running-the-site-locally)
2. [Hosting on GitHub Pages](#2-hosting-on-github-pages)
3. [Why a single-page app needs the 404 trick](#3-why-a-single-page-app-needs-the-404-trick)
4. [Serving from a different URL](#4-serving-from-a-different-url)
5. [Editing the content](#5-editing-the-content)
6. [Troubleshooting](#6-troubleshooting)

---

## 1. Running the site locally

You need [Node.js](https://nodejs.org/) 18 or newer (which includes npm).

```bash
git clone git@github.com:RedwanNewaz/RedwanNewaz.github.io.git
cd RedwanNewaz.github.io
npm install      # first time only
npm start
```

The dev server prints a URL, usually http://localhost:3000. It reloads on save.

To check what will actually ship, build the production bundle and serve it:

```bash
npm run build
npx serve -s build      # then open http://localhost:3000
```

The `-s` flag matters: it makes the local server fall back to `index.html` for
unknown paths, which is what lets `/publication` and `/funding` load directly.
GitHub Pages does **not** do this, which is what section 3 is about.

---

## 2. Hosting on GitHub Pages

The repository is a **user site** (`RedwanNewaz.github.io`), so GitHub serves it
at the domain root: `https://redwannewaz.github.io/`. Source code lives on the
working branch; the compiled site lives on a separate `gh-pages` branch. You
never commit the `build/` folder to the source branch — `.gitignore` excludes
it.

### Option A — automatic deploys with GitHub Actions (recommended)

A workflow is already committed at `.github/workflows/deploy.yml`. It installs
dependencies, runs `npm run build`, and force-pushes the result to `gh-pages`
on every push to `main`, `master`, or `redwan`.

One-time setup:

1. Push this repository to GitHub, including the `.github/` folder.
2. Go to **Settings → Pages**.
3. Under **Build and deployment → Source**, choose **Deploy from a branch**.
4. Set the branch to **`gh-pages`** and the folder to **`/ (root)`**, then
   **Save**.
5. Push a commit (or open the **Actions** tab and run
   *Build and deploy to GitHub Pages* manually via **Run workflow**).

The first deploy takes a couple of minutes. After that, every push republishes
the site. The Actions tab shows the build log if something fails.

If your default branch is not one of `main`, `master`, or `redwan`, add its
name to the `branches:` list at the top of `.github/workflows/deploy.yml`.

### Option B — manual deploys from your machine

The [`gh-pages`](https://www.npmjs.com/package/gh-pages) package and the
matching scripts are already in `package.json`:

```json
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -b gh-pages -d build"
}
```

To publish:

```bash
npm install      # once, to pull in the gh-pages dev dependency
npm run deploy
```

`predeploy` runs the build automatically, then `gh-pages` commits `build/` to
the `gh-pages` branch and pushes it. Configure **Settings → Pages** exactly as
in Option A.

Use this when you want to publish without pushing your source changes, or to
recover if Actions is unavailable. Note that a later Actions run will overwrite
whatever you pushed by hand.

### What gets deployed

`npm run build` produces a `build/` folder containing `index.html`, `404.html`,
hashed JS/CSS bundles under `static/`, and everything from `public/`. That
folder is the entire website — there is no server-side component, no database,
and no build step on GitHub's side beyond what the workflow does.

---

## 3. Why a single-page app needs the 404 trick

This is the one genuinely surprising part of hosting a React Router site on
GitHub Pages, so it is worth understanding before you change anything.

React Router handles `/research`, `/publication`, `/funding` and the rest **in
the browser**. There are no such folders on disk — only `index.html`. When a
visitor clicks a link inside the site, nothing is requested from the server and
everything works.

But when someone pastes `https://redwannewaz.github.io/funding` into the
address bar, presses reload on that page, or follows an external link to it,
the browser asks GitHub Pages for a file at `/funding`. That file does not
exist, so Pages returns its 404 page. A traditional host would be configured to
fall back to `index.html`; GitHub Pages offers no such setting.

The workaround, from
[rafgraph/spa-github-pages](https://github.com/rafgraph/spa-github-pages), is
split across two files that are already in this repository:

- **`public/404.html`** — served by GitHub whenever a path is not found. A small
  script rewrites the requested path into a query string and redirects to the
  site root, e.g. `/funding` becomes `/?/funding`.
- **`public/index.html`** — a matching snippet in `<head>` detects that query
  string and uses `history.replaceState` to put the real path back in the
  address bar. It runs before React boots, so React Router sees `/funding` and
  renders the right page.

The visitor sees a brief redirect and lands on the correct page with a clean
URL. Do not delete either script, and keep them in sync if you move the site.

If a deep link ever 404s after a change, that pair is the first thing to check.

---

## 4. Serving from a different URL

Two settings must agree with wherever the site is served from. The deafult branch for this website is ```redwan```.

| Where the site lives | `homepage` in `package.json` | `pathSegmentsToKeep` in `public/404.html` |
| --- | --- | --- |
| `https://redwannewaz.github.io/` (current) | `"/"` | `0` |
| `https://redwannewaz.github.io/airlab/` (project page) | `"https://redwannewaz.github.io/airlab"` | `1` |
| A custom domain at its root, e.g. `https://airlab.example.edu/` | `"/"` | `0` |

`homepage` tells the build where to point asset URLs. Get it wrong on a
subpath and you get a blank page with 404s for the JS and CSS bundles in the
browser console. `pathSegmentsToKeep` tells the 404 script how much of the path
is the site's base rather than a route.

### Adding a custom domain

1. Create a file `public/CNAME` containing only the hostname, no protocol and
   no trailing slash:

   ```
   airlab.example.edu
   ```

   Putting it in `public/` means every build copies it into `build/`, so the
   setting survives redeploys. (Setting the domain only in the Pages UI works
   until the next deploy wipes it.)

2. Ask whoever runs your DNS to add a `CNAME` record pointing your hostname at
   `redwannewaz.github.io`.

3. In **Settings → Pages**, confirm the custom domain is listed and tick
   **Enforce HTTPS** once the certificate is issued (this can take an hour).

---

## 5. Editing the content

Almost all text lives in `src/constants/data/`. You can update the site without
touching a React component.

| File | What it controls |
| --- | --- |
| `heroImageData.js` | The title and subtitle in the banner at the top of every page |
| `homeData.js` | Home page lead text, stat tiles, research thrusts, robot platform cards |
| `newsData.js` | The News page and the "Top News" box on the home page |
| `publicationData.js` | The Publications page (**auto-generated — see below**) |
| `researchData.js` | Research area cards and their detail pages |
| `projectData.js` | The Projects page (project websites) |
| `fundingData.js` | The Funding page: funded projects, equipment grants, collaborations |
| `advisingData.js` | The Join Us page |
| `teamData.js` | Team member cards |
| `contactData.js` | Contact cards |
| `linkData.js` | Profile links in the footer and on Contact, plus the lab address |
| `videoData.js` | The Videos page |

General rules:

- Every `id` within an array must be unique. Ids are used as React keys and to
  cross-link research areas to publications.
- Do not rename the keys inside an object; the components read them by name.
- Images belong in `src/assets/images/`, logos in `src/assets/logos/`. The data
  file stores only the file name (e.g. `"redwan.jpg"`), not a path. Leave the
  value as an empty string to fall back to the placeholder.

### Publications

`publicationData.js` is generated from the CV's BibTeX file rather than edited
by hand, so the website and the CV cannot drift apart. It carries a header
comment saying so. Each entry has a `category` of `"Journal Article"`,
`"Conference Paper"`, or `"Under Review"`, which drives the badge and the
"Filter By Type" control, and an optional `projectUrl` that renders a
"Project Site" chip.

To add a paper, add the BibTeX entry to the CV's `.bib` file and regenerate,
or — for a quick one-off — append an object in the same shape and add its year
to the `years` array if that year is not already listed.

### Videos

`videoData.js` holds two kinds of entry:

- `type: "youtube"` with a `videoId` (the bare id, no query string).
- `type: "file"` with a `src` pointing at an `.mp4`. The project websites host
  their own clips, so these are absolute URLs to those sites.

Group a video by setting `group`, and list the group in the `videoGroups`
array to control section order. Videos use `preload="none"`, so nothing
downloads until a visitor presses play. If a file URL breaks, the card falls
back to a "Watch on the project site" link instead of showing a dead player.

---

## 6. Troubleshooting

**A deep link 404s, but clicking through the site works.**
The `404.html` / `index.html` script pair is missing or out of sync. See
section 3. Also confirm `404.html` actually landed in `build/` after a build.

**The site loads as a blank white page.**
Open the browser console. If the JS and CSS files 404, `homepage` in
`package.json` does not match where the site is served from. See section 4.

**Changes are not showing up.**
Check the Actions tab for a failed run. If the run succeeded, it is usually the
browser or CDN cache — hard-reload with Ctrl/Cmd + Shift + R. GitHub's CDN can
take a minute or two.

**The build fails on a warning.**
The workflow sets `CI: false` so warnings do not fail the build. If you build
locally in a CI-like shell, use `CI=false npm run build`.

**Git shows every file as modified when nobody edited them.**
Line endings. This repo has a `.gitattributes` that normalizes to LF. Run
`git add --renormalize .` once to settle it.

**The custom domain resets after a deploy.**
`public/CNAME` is missing. Setting the domain only in the Pages UI does not
survive a redeploy. See section 4.
