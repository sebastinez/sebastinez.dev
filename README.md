# sebastinez.dev

A statically generated personal site built from a single YAML data file
(`entries.yaml`): a links feed and a projects list. No client-side
JavaScript, no templating library, no build step beyond running a Deno
script.

## Authoring

Edit `entries.yaml`, then commit and push. That's the entire workflow —
see the file for the `links:` and `projects:` shape.

## Build

Requires [Deno](https://deno.com/).

```sh
deno task build   # reads entries.yaml, writes dist/
deno task test     # runs unit tests for loader/pages/feed
```

`dist/` is gitignored and always regenerated from `entries.yaml`; it is
never committed.

## Deploy (VPS reference)

The site is served by Caddy pointed at the repo's `dist/` directory, with
automatic HTTPS — see [`Caddyfile`](./Caddyfile) (update the `root` path
to match the clone location on the VPS). A daily cron job pulls the repo
(over a read-only, repo-scoped SSH deploy key) and rebuilds:

```
crontab:
  0 6 * * * cd /path/to/sebastinez.dev && git pull && deno run --allow-read --allow-write generate.ts >> build.log 2>&1
```

Build/pull failures are appended to `build.log` on the VPS for manual
inspection; there's no real-time alerting for this low-stakes personal
site.
