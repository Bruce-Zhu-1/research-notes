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


## Publishing from Obsidian

1. Edit a Markdown page in `公开发布/` in the Obsidian vault. The original
   working notes outside that folder stay in the vault. Move or copy any
   image for the public site into `公开发布/figures/` and check its relative
   link in Obsidian. The vault's default `image/` folder is outside this
   publishing directory.
2. Run **Git: Commit-and-sync**, or let the scheduled sync push the changes.
3. The vault workflow mirrors the tracked files in `公开发布/` to this
   repository's `content/` directory. This repository's Pages workflow
   then deploys the new build. The Actions tab in each repository shows
   its stage of the update.
4. Add new articles to `公开发布/notes/index.md` or projects to
   `公开发布/projects/index.md` when they should appear in the navigation
   lists.

The publishing folder and all its attachments are public after deployment.
Removing a file takes it off the current site; older commits may still
contain it.
