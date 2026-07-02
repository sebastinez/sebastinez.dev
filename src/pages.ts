import type { Link, Project, ProjectLink } from "./types.ts";
import { escapeHtml } from "./escape.ts";

type NavItem = "links" | "projects";

function layout(title: string, active: NavItem, body: string): string {
  return `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${escapeHtml(title)}</title>
<link rel="stylesheet" href="/style.css">
<link rel="alternate" type="application/rss+xml" title="sebastinez.dev links" href="/links.xml">
</head>
<body>
<header class="nav">
<a class="nav-title" href="/">sebastinez.dev</a>
<nav>
<a href="links.html"${active === "links" ? ' aria-current="page"' : ""}>[links]</a>
<a href="projects.html"${active === "projects" ? ' aria-current="page"' : ""}>[projects]</a>
</nav>
</header>
<main>
${body}
</main>
</body>
</html>
`;
}

function renderLinkItem(link: Link): string {
  const note = link.note
    ? `\n<p class="note">${escapeHtml(link.note)}</p>`
    : "";
  return `<li class="link-entry">
<a href="${escapeHtml(link.url)}">${escapeHtml(link.title)}</a>
<time datetime="${escapeHtml(link.date)}">${escapeHtml(link.date)}</time>${note}
</li>`;
}

export function renderLinksPage(links: Link[]): string {
  const sorted = [...links].sort((a, b) => b.date.localeCompare(a.date));
  const body = sorted.length
    ? `<ul class="links">\n${sorted.map(renderLinkItem).join("\n")}\n</ul>`
    : `<p>No links yet.</p>`;
  return layout("sebastinez.dev — links", "links", body);
}

function renderProjectLinks(links: ProjectLink[]): string {
  return links
    .map((l) => `<a href="${escapeHtml(l.url)}">${escapeHtml(l.label)}</a>`)
    .join(" · ");
}

function renderProjectItem(project: Project): string {
  return `<li class="project-entry">
<div class="project-header">
<h2>${escapeHtml(project.name)}</h2>
<span class="status status-${escapeHtml(project.status)}">${escapeHtml(project.status)}</span>
</div>
<p>${escapeHtml(project.description)}</p>
<p class="project-links">${renderProjectLinks(project.links)}</p>
</li>`;
}

export function renderProjectsPage(projects: Project[]): string {
  const sorted = [...projects].sort((a, b) =>
    b.date_added.localeCompare(a.date_added),
  );
  const body = sorted.length
    ? `<ul class="projects">\n${sorted.map(renderProjectItem).join("\n")}\n</ul>`
    : `<p>No projects yet.</p>`;
  return layout("sebastinez.dev — projects", "projects", body);
}
