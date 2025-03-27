import { JSX } from "react";

export interface Screenshot {
  src: string;
  size: string;
}

export interface Link {
  type: string;
  href: string;
  label: string;
}

export interface Project {
  id: number;
  title: string;
  screenshots: Screenshot[];
  tools: string[];
  links: Link[];
  detail?: string;
}
export interface TechCategory {
  title: string;
  icons: { src: string; alt: string }[];
  description: JSX.Element;
}
