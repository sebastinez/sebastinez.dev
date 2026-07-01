import { parse } from "@std/yaml";
import type { Entries } from "./types.ts";

export function parseEntries(yamlText: string): Entries {
  const data = parse(yamlText, { schema: "json" }) as
    | Partial<Entries>
    | null
    | undefined;
  return {
    links: data?.links ?? [],
    projects: data?.projects ?? [],
  };
}
