export interface Project {
  name: string;
  label: string;
  duration: string;
  technologies: string[];
  sections: ProjectSection[];
}

export interface ProjectSection {
  title: string;
  content: string
}