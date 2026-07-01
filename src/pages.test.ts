import { assertEquals, assertStringIncludes } from "@std/assert";
import { renderLinksPage, renderProjectsPage } from "./pages.ts";
import type { Link, Project } from "./types.ts";

Deno.test("renderLinksPage - empty list shows placeholder", () => {
  const html = renderLinksPage([]);
  assertStringIncludes(html, "No links yet.");
});

Deno.test("renderLinksPage - single entry includes title, url and date", () => {
  const links: Link[] = [
    { url: "https://example.com", title: "Example", date: "2026-01-01" },
  ];
  const html = renderLinksPage(links);
  assertStringIncludes(html, 'href="https://example.com"');
  assertStringIncludes(html, "Example");
  assertStringIncludes(html, "2026-01-01");
});

Deno.test("renderLinksPage - entry without note omits note paragraph", () => {
  const links: Link[] = [
    { url: "https://example.com", title: "Example", date: "2026-01-01" },
  ];
  const html = renderLinksPage(links);
  assertEquals(html.includes('class="note"'), false);
});

Deno.test("renderLinksPage - entry with note includes note paragraph", () => {
  const links: Link[] = [
    {
      url: "https://example.com",
      title: "Example",
      date: "2026-01-01",
      note: "Worth a read",
    },
  ];
  const html = renderLinksPage(links);
  assertStringIncludes(html, 'class="note"');
  assertStringIncludes(html, "Worth a read");
});

Deno.test("renderLinksPage - sorts links reverse-chronologically", () => {
  const links: Link[] = [
    { url: "https://older.com", title: "Older", date: "2026-01-01" },
    { url: "https://newer.com", title: "Newer", date: "2026-02-01" },
  ];
  const html = renderLinksPage(links);
  assertEquals(html.indexOf("Newer") < html.indexOf("Older"), true);
});

Deno.test("renderProjectsPage - empty list shows placeholder", () => {
  const html = renderProjectsPage([]);
  assertStringIncludes(html, "No projects yet.");
});

Deno.test("renderProjectsPage - single entry includes name, description and status", () => {
  const projects: Project[] = [
    {
      name: "Example Project",
      description: "Does things",
      status: "tinkering",
      links: [{ label: "GitHub", url: "https://github.com/example" }],
      date_added: "2026-01-01",
    },
  ];
  const html = renderProjectsPage(projects);
  assertStringIncludes(html, "Example Project");
  assertStringIncludes(html, "Does things");
  assertStringIncludes(html, "tinkering");
});

Deno.test("renderProjectsPage - multiple links entries all rendered", () => {
  const projects: Project[] = [
    {
      name: "Multi-link project",
      description: "Has several destinations",
      status: "shipped",
      links: [
        { label: "GitHub", url: "https://github.com/example/multi" },
        { label: "Live demo", url: "https://multi.example.com" },
      ],
      date_added: "2026-01-01",
    },
  ];
  const html = renderProjectsPage(projects);
  assertStringIncludes(html, 'href="https://github.com/example/multi"');
  assertStringIncludes(html, 'href="https://multi.example.com"');
  assertStringIncludes(html, "GitHub");
  assertStringIncludes(html, "Live demo");
});

Deno.test("renderProjectsPage - sorts projects by date_added reverse-chronologically", () => {
  const projects: Project[] = [
    {
      name: "Older",
      description: "d",
      status: "dead",
      links: [],
      date_added: "2026-01-01",
    },
    {
      name: "Newer",
      description: "d",
      status: "tinkering",
      links: [],
      date_added: "2026-02-01",
    },
  ];
  const html = renderProjectsPage(projects);
  assertEquals(html.indexOf("Newer") < html.indexOf("Older"), true);
});
