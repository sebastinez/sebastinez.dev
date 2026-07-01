import type { Link } from "./types.ts";
import { escapeHtml } from "./escape.ts";

const SITE_URL = "https://sebastinez.dev";

function toRfc822(date: string): string {
  return new Date(`${date}T00:00:00Z`).toUTCString();
}

function renderItem(link: Link): string {
  const description = link.note
    ? `\n<description>${escapeHtml(link.note)}</description>`
    : "";
  return `<item>
<title>${escapeHtml(link.title)}</title>
<link>${escapeHtml(link.url)}</link>
<guid>${escapeHtml(link.url)}</guid>
<pubDate>${toRfc822(link.date)}</pubDate>${description}
</item>`;
}

export function renderLinksFeed(links: Link[]): string {
  const sorted = [...links].sort((a, b) => b.date.localeCompare(a.date));
  const items = sorted.map(renderItem).join("\n");

  return `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0">
<channel>
<title>sebastinez.dev — links</title>
<link>${SITE_URL}/links.html</link>
<description>Links I've found interesting</description>
${items}
</channel>
</rss>
`;
}
