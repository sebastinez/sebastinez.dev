import { assertEquals } from "@std/assert";
import { parseEntries } from "./loader.ts";

Deno.test("parses links and projects with all fields", () => {
  const yaml = `
links:
  - url: https://example.com
    title: Example
    note: A neat site
    date: 2026-01-01
projects:
  - name: Example Project
    description: Does things
    status: shipped
    links:
      - label: GitHub
        url: https://github.com/example/example
    date_added: 2026-01-02
`;
  const entries = parseEntries(yaml);
  assertEquals(entries.links.length, 1);
  assertEquals(entries.links[0], {
    url: "https://example.com",
    title: "Example",
    note: "A neat site",
    date: "2026-01-01",
  });
  assertEquals(entries.projects.length, 1);
  assertEquals(entries.projects[0].name, "Example Project");
  assertEquals(entries.projects[0].status, "shipped");
});

Deno.test("link without a note parses with note undefined", () => {
  const yaml = `
links:
  - url: https://example.com
    title: Example
    date: 2026-01-01
`;
  const entries = parseEntries(yaml);
  assertEquals(entries.links[0].note, undefined);
});

Deno.test("project with multiple links entries parses all of them", () => {
  const yaml = `
projects:
  - name: Multi-link project
    description: Has several destinations
    status: tinkering
    links:
      - label: GitHub
        url: https://github.com/example/multi
      - label: Live demo
        url: https://multi.example.com
    date_added: 2026-01-03
`;
  const entries = parseEntries(yaml);
  assertEquals(entries.projects[0].links.length, 2);
  assertEquals(entries.projects[0].links[1], {
    label: "Live demo",
    url: "https://multi.example.com",
  });
});

Deno.test("empty document parses to empty links and projects", () => {
  const entries = parseEntries("");
  assertEquals(entries.links, []);
  assertEquals(entries.projects, []);
});
