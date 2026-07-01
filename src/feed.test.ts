import { assertEquals, assertStringIncludes } from "@std/assert";
import { renderLinksFeed } from "./feed.ts";
import type { Link } from "./types.ts";

const links: Link[] = [
  {
    url: "https://older.com",
    title: "Older link",
    date: "2026-01-01",
  },
  {
    url: "https://newer.com",
    title: "Newer link",
    note: "A good read",
    date: "2026-02-01",
  },
];

Deno.test("renderLinksFeed produces well-formed RSS 2.0 XML", () => {
  const xml = renderLinksFeed(links);
  assertStringIncludes(xml, '<?xml version="1.0" encoding="UTF-8"?>');
  assertStringIncludes(xml, '<rss version="2.0">');
  assertStringIncludes(xml, "<channel>");
});

Deno.test("renderLinksFeed includes one item per link", () => {
  const xml = renderLinksFeed(links);
  const itemCount = xml.match(/<item>/g)?.length ?? 0;
  assertEquals(itemCount, 2);
});

Deno.test("renderLinksFeed includes titles and links for each item", () => {
  const xml = renderLinksFeed(links);
  assertStringIncludes(xml, "<title>Older link</title>");
  assertStringIncludes(xml, "<link>https://older.com</link>");
  assertStringIncludes(xml, "<title>Newer link</title>");
  assertStringIncludes(xml, "<link>https://newer.com</link>");
});

Deno.test("renderLinksFeed orders items reverse-chronologically", () => {
  const xml = renderLinksFeed(links);
  assertEquals(
    xml.indexOf("Newer link") < xml.indexOf("Older link"),
    true,
  );
});

Deno.test("renderLinksFeed includes correct pubDate for each item", () => {
  const xml = renderLinksFeed(links);
  const expected = new Date("2026-01-01T00:00:00Z").toUTCString();
  assertStringIncludes(xml, `<pubDate>${expected}</pubDate>`);
});

Deno.test("renderLinksFeed omits item description when note is absent", () => {
  const xml = renderLinksFeed([links[0]]);
  const descriptionCount = xml.match(/<description>/g)?.length ?? 0;
  assertEquals(descriptionCount, 1); // only the channel-level description
});
