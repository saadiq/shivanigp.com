# shivanigp.com

Personal website for Shivani Garg Patel — Sr. Strategic Advisor & Lecturer at UC Berkeley Haas.

Built with [Astro](https://astro.build). Deployed to [GitHub Pages](https://saadiq.github.io/shivanigp.com/).

## Development

```sh
bun install
bun dev        # localhost:4321
bun build      # production build to ./dist/
bun preview    # preview build locally
```

## Deployment

Pushes to `main` auto-deploy via GitHub Actions. The site is hosted at a subpath (`/shivanigp.com/`), configured via `base` in `astro.config.mjs`.
