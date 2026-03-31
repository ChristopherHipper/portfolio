import { Component, inject, signal } from '@angular/core';
import { ProjectsNavComponent } from "./components/projects-nav/projects-nav.component";
import { ProjectDetailComponent } from "./components/project-detail/project-detail.component";
import { Project } from '../../../../shared/interfaces/project.interface';
import { ProjectsService } from './services/projects.service';
import { ScrollAnimationDirective } from '../../../../shared/directives/scroll-animation.directive';
import {TranslatePipe} from '@ngx-translate/core';

@Component({
  selector: 'app-projects-section',
  standalone: true,
  imports: [ProjectsNavComponent, ProjectDetailComponent, ScrollAnimationDirective,TranslatePipe],
  templateUrl: './projects-section.component.html',
  styleUrl: './projects-section.component.scss'
})
export class ProjectsSectionComponent {
  projectService = inject(ProjectsService);
  currentProject = signal<Project>(this.projectService.projects[0]);
  previousProject = signal<Project | undefined>(undefined);

  getProject(name: string) {
    const foundProject = this.projectService.projects.find(
      project => project.name === name
    );
    if (foundProject) {
      this.previousProject.set(this.currentProject());
      this.currentProject.set(foundProject);
      setTimeout(() => {
        this.previousProject.set(undefined);
      }, 200);
    };
  };
}
