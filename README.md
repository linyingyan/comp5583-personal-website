# Yang Linying - COMP5583 personal website

Three independent static versions, with no build step or external assets:

| Folder | Method | Starting point |
|---|---|---|
| v0/ | Frozen initial website; original builder: Claude Sonnet 5 | Baseline tag v0-frozen |
| v1/ | In-context learning with three synthetic writing examples | Copy of V0; HTML project text edited; CSS/JS unchanged |
| v2/ | BM25 retrieval from official W3C accessibility guidance | Separate copy of V0; personal prose unchanged |

Run `python3 -m http.server 8000` in this directory and open `/v0/`, `/v1/`, or `/v2/`. Each `index.html` also opens directly from disk.

Public GitHub Pages URLs (deployment status is verified in the submission evidence):

- V0: https://linyingyan.github.io/comp5583-personal-website/v0/
- V1: https://linyingyan.github.io/comp5583-personal-website/v1/
- V2: https://linyingyan.github.io/comp5583-personal-website/v2/

The site exposes supplied project information and a public GitHub profile only. Student ID and submission records are kept outside this repository.

No external images, fonts, frameworks or templates are used. V2 implementation guidance is credited to W3C WCAG 2.2 and the ARIA Authoring Practices Guide (https://www.w3.org/TR/WCAG22/ and https://www.w3.org/WAI/ARIA/apg/patterns/disclosure/). Method inputs, retrieval sources and full evaluation evidence accompany the assignment submission.
