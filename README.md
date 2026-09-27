# bramley.works

Personal site for Sam Bramley. Static HTML and CSS in `public/`, no build step.

## Local

Open `public/index.html` in a browser, or run `npx wrangler dev` for the full Worker.

## Deploy

Hosted on Cloudflare Workers with static assets. `www` redirects to the apex domain via `worker.js`.

```
npx wrangler deploy
```

## Notes

Background texture: `index.html` uses `bg-dots`. Swap the class to `bg-grid` for a grid, or remove the `.bg` element for none.
