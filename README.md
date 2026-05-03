# Now Hiring Salespeople — Website

Static marketing site for the *Now Hiring Salespeople* book and ecosystem.

## Files

```
/
├── index.html         Marketing homepage
├── prep.html          Prep Like a Pro (97-question tool, candidates)
├── speaking.html      Speaking & Campus Program (career services)
├── hire-right.html    Hire Right / S.T.O.R.Y. Method (sales leaders)
├── about.html         About Steve Richey
├── css/styles.css     Full design system
├── js/site.js         Mobile nav, active link, async Formspree submit
└── images/            (you populate this)
```

## Images you need to drop in

Save these into the `images/` folder using these exact filenames so the site picks them up automatically:

| Filename | Used on | Notes |
|---|---|---|
| `images/book-cover.jpg` | index.html hero | 3D book mockup (front cover + spine, on a neutral background with built-in shadow). Roughly 800×1200px works well. |
| `images/author.jpg` | index.html, about.html | The headshot. Square crop, 600×600px or larger. |

Optional (referenced if you want to add product imagery later):
- `images/workbook.jpg` — companion workbook cover

## Email forms

All forms post to Formspree endpoint `https://formspree.io/f/xeenjqaj`. Submissions are sent via JavaScript, so the user stays on the page and sees an inline success message. The forms still work as standard POST forms if JS is disabled.

Each form passes a hidden `source` field so you can tell in Formspree which page generated the lead (`homepage-cta`, `prep-page`, `speaking-page`, `hire-right-page`, `about-page`).

## Hosting

This is plain HTML/CSS/JS — no build step. Drop the whole folder onto any static host:
- Netlify (drag-and-drop deploy)
- Vercel
- GitHub Pages
- Cloudflare Pages
- Any S3/CDN

## Editing copy

All copy is inline in the HTML files. Brand voice rules (from the design spec):

- Always "Steve" in copy. "Steve Richey" for full-name references.
- Headlines ALL CAPS, body sentence case.
- Direct, no fluff, no hedging.
- Orange (`#E8300A`) only for accents, numbers, links — never body text.
- No emoji.
