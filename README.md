# Bruce Zhu · Research Notes

Academic site built with Quartz 5 and deployed on GitHub Pages.

`content/` is maintained by the publishing workflow in the Obsidian source
repository. Edit the public-source copies in Obsidian rather than editing the
generated copy here. Site navigation, appearance, and deployment live in this
repository.

To preview locally with Node.js 24:

```sh
npm ci
npx quartz plugin install
npx quartz build --serve
```

The first-level sections are `notes/` and `projects/`. Figures are ordinary
files referenced by relative Markdown links.
