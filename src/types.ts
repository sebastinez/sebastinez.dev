export interface Link {
  url: string;
  title: string;
  note?: string;
  date: string;
}

export interface ProjectLink {
  label: string;
  url: string;
}

export type ProjectStatus = "tinkering" | "shipped" | "dead";

export interface Project {
  name: string;
  description: string;
  status: ProjectStatus;
  links: ProjectLink[];
  date_added: string;
}

export interface Entries {
  links: Link[];
  projects: Project[];
}
