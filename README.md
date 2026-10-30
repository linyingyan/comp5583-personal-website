# Yang Linying — personal website (COMP5583 assignment)

Three versions of the same static website:

| Folder | Version | How it was produced |
|---|---|---|
| `v0/` | V0 baseline | Builder agent + system prompt only (frozen, unchanged) |
| `v1/` | V1 | V0 + Technique 1: in-context learning (few-shot examples) |
| `v2/` | V2 | V0 + Technique 2: retrieval-augmented generation (WCAG 2.2 corpus) |

## How to open
Each version is plain HTML/CSS/JS with no build step and no external dependencies.

- Open `vX/index.html` directly in a browser, or
- Serve the folder locally: `python3 -m http.server 8000` and visit `http://localhost:8000/v0/` (or `/v1/`, `/v2/`).

Live versions are deployed on GitHub Pages (URLs in the report).
