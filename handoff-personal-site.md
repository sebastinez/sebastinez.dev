# Handoff: Personal Site Redesign

## Context
User is redesigning their personal site (currently broken/non-functional). Goal is explicitly
**not** a glorified about-me page. Decisions made so far, in order:

1. **Concept**: Curated bookmark list (links they liked) + a durable-projects list, presented
   feed-style rather than as blog posts. No blogging — low motivation/time for that.
2. **Stack**: Static HTML, minimal CSS, **no JavaScript**.
3. **Hosting/deploy model**: Git repo, hosted on a VPS. VPS checks daily (cron) for new commits,
   pulls them, and regenerates the site.
4. **Source of truth**: A single structured data file (`entries.yaml` or similar — not decided/
   built yet) with two sections: `links:` (URL + short note) and `projects:` (name, description,
   status, links — richer per-entry).
5. **Build step**: A generator script (Python/Jinja2 or similar, not yet written) reads the
   source file and produces:
   - `index.html` (landing/nav)
   - `links.html`
   - `projects.html`
   - `feed.xml` (RSS/Atom) — likely per-section feeds (`links.xml`, `projects.xml`), since
     projects change rarely and may not need their own feed.
   - Key point already agreed: the RSS feed is **not** parsed from index.html at runtime;
     both HTML and XML are generated from the same source data at build/commit time.
6. **Site structure inspiration**: Hacker News nav style — thin plain-text nav bar
   (`[links] [projects] [about]`), separate pages per category rather than a single page with
   anchor sections. This was the last decision made before handoff.
7. **Mobile input problem (iOS)**: User travels and wants to add links from their phone without
   full git workflow.
   - **Links**: proposed solution is an iOS Shortcut using the Share Sheet → prompts for
     optional note → calls GitHub API to append to `entries.yaml` and commit directly. This was
     the agreed approach but **not yet built**.
   - **Projects**: agreed these are added rarely and can just be done via the GitHub mobile app
     (edit YAML directly) or a more elaborate multi-field Shortcut, no urgency to build this now.

## Not yet done / open work
- `entries.yaml` structure has not actually been drafted (only described conceptually).
- Generator script (YAML → HTML + XML) has not been written.
- iOS Shortcut for link-adding has not been built (needs GitHub API calls + PAT setup).
- HN-style HTML/CSS templates not yet designed.
- VPS-side cron/pull/build automation not yet specified (just "daily check, pull, regenerate").

## Suggested next steps (pick up here)
1. Draft `entries.yaml` schema (links + projects sections).
2. Write the generator script producing index/links/projects HTML + feed(s).
3. Build the iOS Shortcut for adding links via GitHub API.
4. Design minimal HN-style CSS/templates.
5. Write the VPS cron script (git pull + run generator + reload).

## Suggested skills for next session
- **frontend-design** — for the HN-style minimal HTML/CSS templates (step 4).
- No docx/pptx/xlsx/pdf skills apply; this is a pure code/static-site task.

## Sensitive info
None discussed in this conversation (no keys, tokens, or PII shared). Note: eventual GitHub PAT
for the iOS Shortcut will need careful handling (scoped token, stored in Shortcuts app securely)
— not yet created.
