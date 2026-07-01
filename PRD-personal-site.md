# PRD: Personal Site Redesign

## Problem Statement

The user's personal site is currently broken/non-functional. They don't want a
generic "about me" page — they want a lightweight place to publish two kinds
of content they actually maintain: links they've found interesting (bookmarks
with a short note) and a durable list of their own projects. They have low
motivation/time for blogging, so anything resembling a blog-post workflow is
explicitly out. They also want the site to stay fast, dependency-free in the
browser, and cheap to operate day-to-day (edit a file, push, done).

## Solution

A statically generated site built from a single YAML data file
(`entries.yaml`) containing `links:` and `projects:` sections. A small Deno
script (`generate.ts`) reads that file and renders plain HTML pages and an
RSS feed via pure template-literal functions — no templating library, no
client-side JavaScript. The site is hosted on a VPS behind Caddy
(auto-HTTPS), with a daily cron job pulling the git repo and regenerating the
`dist/` output. Editing `entries.yaml` and pushing a commit is the entire
authoring workflow for v1 — no mobile-specific tooling yet.

## User Stories

1. As the site owner, I want to record a link with a URL, short title, and
   optional note in a single YAML file, so that adding a bookmark doesn't
   require writing a blog post.
2. As the site owner, I want each link entry to carry a date, so that links
   can be displayed and fed out in reverse-chronological order.
3. As the site owner, I want to record a project with a name, description,
   status, and one or more labeled links (e.g. "GitHub", "Live demo"), so
   that I can point visitors to multiple relevant destinations per project.
4. As the site owner, I want project status expressed in my own words
   (`tinkering` / `shipped` / `dead`) rather than a generic enum, so that the
   site reflects my voice rather than a project-management tool's vocabulary.
5. As the site owner, I want projects ordered by a `date_added` field, so
   that newer projects surface without me having to manually reorder a list.
6. As a visitor, I want the home page to show my links feed directly (not a
   generic landing page), so that I see real content on the very first
   click.
7. As a visitor, I want a stable `/links.html` URL in addition to `/`, so
   that I can bookmark or share a permanent link to the links page
   specifically.
8. As a visitor, I want a `/projects.html` page separate from the links
   page, so that I can browse durable project info without link-feed noise
   mixed in.
9. As a visitor, I want a thin nav bar with the site title (linking home)
   and `[links]` / `[projects]` items, so that navigation is obvious and
   unobtrusive.
10. As a visitor, I want to subscribe to an RSS feed of new links, so that I
    can follow updates without checking the site manually.
11. As the site owner, I want the RSS feed scoped to links only (no
    projects feed), so that I'm not maintaining feed infrastructure for
    content that rarely changes.
12. As a visitor using a screen reader or a very old/limited browser, I
    want the site to render as plain, semantic HTML with no JavaScript
    dependency, so that the content is accessible regardless of my client
    capabilities.
13. As a visitor, I want the site's visual design to use my system's font
    and to respect my OS light/dark preference automatically, so that it
    feels native without requiring a manual toggle.
14. As a visitor on any screen size, I want the content column to have a
    fixed, readable max-width, so that text doesn't stretch uncomfortably
    wide on large screens.
15. As the site owner, I want a build script that reads `entries.yaml` and
    produces all HTML pages and the RSS feed from that single source of
    truth, so that HTML and feed content can never drift out of sync with
    each other.
16. As the site owner, I want the build script to run as plain Deno
    TypeScript on the VPS (no compile-to-binary step, no Node/npm install),
    so that iterating on the generator doesn't require a separate build/ship
    cycle.
17. As the site owner, I want `dist/` to be gitignored and always rebuilt
    fresh from `entries.yaml` on every deploy, so that generated output
    never becomes a second source of truth that can drift from the data.
18. As the site owner, I want a daily cron job on the VPS that pulls the
    latest commit and regenerates the site, so that publishing a new entry
    is just "edit YAML, commit, push" with no manual deploy step.
19. As the site owner, I want the VPS to pull the repo over a read-only SSH
    deploy key scoped to just this repository, so that a compromised VPS
    credential can't be used to modify any other repository I own.
20. As the site owner, I want Caddy to serve `dist/` directly with
    automatic Let's Encrypt HTTPS, so that I don't have to hand-manage
    TLS certificates.
21. As the site owner, I want cron pull/build failures logged as errors to
    a log file, so that I have a record to check if the site ever stops
    updating, without needing real-time alerting for a low-stakes personal
    site.
22. As a developer maintaining the generator, I want the YAML-parsing,
    HTML-rendering, and RSS-rendering logic implemented as pure functions
    with no I/O, so that they can be unit tested with fixed input/output
    fixtures independent of the filesystem or network.

## Implementation Decisions

- **Data model (`entries.yaml`)**:
  - `links:` — list of entries with `url`, `title`, `note` (optional),
    `date`.
  - `projects:` — list of entries with `name`, `description`, `status`
    (one of `tinkering` / `shipped` / `dead`), `links` (list of
    `{label, url}` pairs), `date_added`.
  - No `about:` section — there is no about page in this design.
- **Module: Data loader** — reads and parses `entries.yaml` via `@std/yaml`
  (Deno's standard-library YAML parser), returns a typed structure
  (`{links: Link[], projects: Project[]}`). No rendering or I/O beyond the
  single file read; deep/stable interface intended to change rarely even as
  templates evolve.
- **Module: Page renderers** — pure functions that take parsed data and
  return an HTML string, with no file I/O:
  - `renderLinksPage(links)` → HTML used for both `dist/index.html` and
    `dist/links.html` (identical output, written to two paths since links is
    the home page).
  - `renderProjectsPage(projects)` → HTML for `dist/projects.html`.
  - Built with plain JS/TS template literals — no templating library
    (e.g. no Nunjucks/Eta), consistent with the project's minimal-dependency
    philosophy.
- **Module: Feed renderer** — pure function `renderLinksFeed(links)` →
  RSS 2.0 XML string for `dist/links.xml`. No feed is generated for
  projects.
- **Module: Build orchestrator (`generate.ts` main)** — the only impure
  piece. Calls the loader, calls each renderer, writes output files into
  `dist/`, and logs errors/warnings to a log file. Intentionally shallow —
  wiring and file I/O only, no business logic.
- **Runtime/tooling**: Deno (TypeScript), executed directly via
  `deno run` on the VPS — no `deno compile` step, no Node.js/npm. Chosen
  over Python (user preference) and over Node (native-TS execution exists in
  both runtimes now, making the choice a wash — user's preference for Deno
  decided it) and over Rust (avoids cross-compile/binary-shipping overhead
  for a script this small).
- **Site structure/navigation**: No "about" page. Nav consists of the site
  title (links to home) plus `[links]` and `[projects]` items. `/` and
  `/links.html` render identical content (links is the home page).
- **Visual design**: Not an imitation of any specific reference site (HN
  styling was considered and explicitly rejected in favor of an original
  look). A light CSS reset in the spirit of Tailwind's Preflight (strip
  default margins, list-style, font opinions) so semantic HTML carries the
  design with minimal decoration on top. System font stack (no web font
  requests). Light/dark handled purely via the `prefers-color-scheme` CSS
  media query — no JS toggle. Fixed, narrow max-width content column.
- **Feeds**: RSS 2.0 only, for links only. No Atom, no projects feed.
- **Hosting/deploy**:
  - GitHub repository, public, colocated with this local jj repo.
  - VPS runs Caddy, document root pointed directly at
    `<repo-clone-path>/dist/`, automatic HTTPS via Let's Encrypt.
  - Daily cron job on the VPS: `git pull` (via read-only SSH deploy key
    scoped to this repo only) followed by `deno run generate.ts`.
  - `dist/` is gitignored in the repository and always rebuilt fresh on
    every cron run — it is never committed.
  - Build/pull failures are logged as errors to a log file on the VPS; no
    other alerting for v1.
- **Mobile input (iOS Shortcut for adding links on the go)**: explicitly
  descoped from this PRD. Original plan (Shortcut → GitHub Contents API →
  direct commit) and an alternative (Shortcut → GitHub Actions
  `workflow_dispatch` → script-driven YAML append) were both considered and
  rejected for v1 due to added complexity (fragile YAML-via-text-manipulation
  in Option A, or an extra Actions workflow in Option B). For now,
  `entries.yaml` is edited by hand and pushed from the user's own machine.

## Testing Decisions

- Tests should assert on **external behavior only** — given a fixed
  `entries.yaml`-shaped input object, assert on the rendered HTML/XML string
  output (or key substrings/structure within it). No test should reach into
  internal template-building steps.
- **Data loader**: test with fixture YAML strings/files covering a normal
  case, a link with no `note`, and a project with multiple `links` entries;
  assert the parsed object shape matches expectations.
- **Page renderers**: test `renderLinksPage` and `renderProjectsPage` with
  fixed arrays of links/projects (including edge cases: empty list, single
  entry, entry with optional fields omitted); assert the output HTML
  contains the expected content in the expected structure.
- **Feed renderer**: test `renderLinksFeed` with a fixed links array;
  assert the output is well-formed RSS 2.0 XML with correct item count,
  titles, links, and dates.
- No prior art exists in this repository (it is a new, empty project), so
  these will be the first tests written; use whatever test runner ships
  with Deno (`Deno.test`) rather than pulling in an external test framework,
  consistent with the project's minimal-dependency approach.
- The build orchestrator is intentionally left untested in isolation — it
  is thin I/O glue around the three tested modules, not logic worth
  covering directly.

## Out of Scope

- The iOS Shortcut (or any other mobile/on-the-go authoring workflow) for
  adding links or projects — descoped for v1, to be revisited later.
- An `about` page or any biographical/about-me content.
- A projects RSS/Atom feed.
- Any client-side JavaScript, on the served site.
- A templating engine/library for HTML generation (deliberately using plain
  template literals instead).
- Tags/categories on links.
- `date_updated` (or similar) tracking on projects — only `date_added` is
  tracked.
- Setting up the GitHub repository itself (user will create it).
- Setting up Caddy/the VPS itself beyond the design decisions captured here.

## Further Notes

- This PRD reflects a full redesign discussion that resolved every open
  question from an earlier informal handoff document
  (`handoff-personal-site.md`), including several reversals mid-discussion
  (e.g. a proposed `links:` → `bookmarks:` rename was tried and then
  explicitly reverted back to `links`).
- The generator's YAML key naming (`links`, `projects`) and file naming
  (`links.html`, `links.xml`, `projects.html`) should stay consistent
  end-to-end; there is no split between internal naming and user-facing
  labels.
- Per user preference, this document is intentionally *not* being published
  to an issue tracker — it exists as a local markdown file only.
