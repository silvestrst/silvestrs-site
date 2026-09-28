# silvestrs-site

Source for my personal website, built with [Hugo](https://gohugo.io/) and hosted on GitHub Pages.
The theme is a small custom one that lives in this repository (`layouts/` and `static/`), so there
are no submodules or external dependencies.

## Run locally

Install Hugo 0.154 or newer (`sudo apt install hugo`, or a release binary from
https://github.com/gohugoio/hugo/releases), then:

```sh
hugo server
```

Open http://localhost:1313/. The site rebuilds on every file change.

## Edit content

| What | Where |
| --- | --- |
| About text on the home page | `content/_index.md` |
| Core expertise groups | `data/skills.yaml` |
| Experience page | `content/experience.md` |
| A personal project | one file per project in `content/projects/` |
| Open-source contributions (name, website, stat chip and its link, summary, tech tags) | `data/contributions.yaml` |
| Name, tagline, email, GitHub handle | `[params]` in `hugo.toml` |
| Avatar photo | `assets/images/avatar.jpg` (see below) |
| Colours and themes | `static/css/style.css` and the list in `static/js/theme.js` |

### Avatar

Save a photo as `assets/images/avatar.jpg` (`.jpeg`, `.png` and `.webp` also work). Hugo crops it
to a square automatically and uses it in the header, next to the About text, and as the favicon.
Without a photo, a pixel-style "ST" monogram is shown in the theme colours.

### Add a project

Copy an existing file in `content/projects/`, then edit the front matter:

```yaml
title: "Project name"
description: "One-line summary shown in the list."
status: "In progress"        # or "Released", or remove the line
tech: ["Rust", "Tokio"]
repo: "https://github.com/silvestrst/..."   # leave "" to hide the Source link
weight: 4                     # lower numbers appear first
```

The page body (Markdown) becomes the project's own page. Remove the `TODO` blockquotes once the
description is written.

## Deploy

Every push to `main` runs `.github/workflows/hugo.yaml`, which builds the site and publishes it to
GitHub Pages. Nothing under `public/` is committed.

One-time setup in the GitHub repository: **Settings → Pages → Build and deployment → Source:
GitHub Actions**.

The site is served at https://silvestrst.github.io/silvestrs-site/ until a custom domain is set.

### Custom domain (when `silvestrs.site` is registered)

1. At the registrar, add DNS records for GitHub Pages: `A` records for the apex (`silvestrs.site`)
   pointing at `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`, and a
   `CNAME` record for `www` pointing at `silvestrst.github.io`.
2. In the repository: **Settings → Pages → Custom domain**, enter `silvestrs.site`, save, and turn
   on **Enforce HTTPS** once the certificate is issued.
3. Add a file `static/CNAME` containing the single line `silvestrs.site` and push, so the domain
   survives future deployments.

`baseURL` in `hugo.toml` is already `https://silvestrs.site/`; the workflow overrides it with
whatever URL GitHub Pages reports, so no template changes are needed when the domain goes live.
