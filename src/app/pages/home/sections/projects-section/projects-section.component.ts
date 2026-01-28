import { Component, inject } from '@angular/core';
import { ProjectsNavComponent } from "./components/projects-nav/projects-nav.component";
import { ProjectDetailComponent } from "./components/project-detail/project-detail.component";
import { Project } from './interfaces/project.interface';
import { ProjectsService } from './services/projects.service';

@Component({
  selector: 'app-projects-section',
  standalone: true,
  imports: [ProjectsNavComponent, ProjectDetailComponent],
  templateUrl: './projects-section.component.html',
  styleUrl: './projects-section.component.scss'
})
export class ProjectsSectionComponent {
  projects = inject(ProjectsService)

  constructor(public projectService: ProjectsService){
  }

  ngOnInit() {
    this.project = this.projectService.projects[0];
  };

  project!: Project;
  index!:number;

  getProject(name: string) {
    const foundProject = this.projectService.projects.find(project => project.name === name);
    if (foundProject) {
      this.project = foundProject;
    };
  };

}
