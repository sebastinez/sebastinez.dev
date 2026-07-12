import { parseEntries } from "./src/loader.ts";
import { renderLinksPage, renderProjectsPage } from "./src/pages.ts";
import { renderLinksFeed } from "./src/feed.ts";
import { copy } from "@std/fs";

const LOG_FILE = "build.log";

async function logError(message: string): Promise<void> {
  const line = `[${new Date().toISOString()}] ERROR: ${message}\n`;
  await Deno.writeTextFile(LOG_FILE, line, { append: true });
}

async function main(): Promise<void> {
  const yamlText = await Deno.readTextFile("entries.yaml");
  const entries = parseEntries(yamlText);

  await Deno.mkdir("dist", { recursive: true });

  const linksHtml = renderLinksPage(entries.links);
  const projectsHtml = renderProjectsPage(entries.projects);
  const feedXml = renderLinksFeed(entries.links);
  const css = await Deno.readTextFile("static/style.css");

  copy("projects", "dist/projects");

  await Promise.all([
    Deno.writeTextFile("dist/index.html", linksHtml),
    Deno.writeTextFile("dist/links.html", linksHtml),
    Deno.writeTextFile("dist/projects.html", projectsHtml),
    Deno.writeTextFile("dist/links.xml", feedXml),
    Deno.writeTextFile("dist/style.css", css),
  ]);

  console.log("Site generated into dist/");
}

if (import.meta.main) {
  try {
    await main();
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error);
    await logError(message);
    console.error(`Build failed: ${message}`);
    Deno.exit(1);
  }
}
