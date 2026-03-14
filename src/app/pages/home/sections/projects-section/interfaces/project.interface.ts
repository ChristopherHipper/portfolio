export interface Project {
  name: string;
  label: string;
  technologies: string[];
  sections: ProjectSection[];
  image:string,
  links:string[]
}

export interface ProjectSection {
  title: string;
  content: string
}