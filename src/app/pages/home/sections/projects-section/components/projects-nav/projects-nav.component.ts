import { Component, input, signal, output } from '@angular/core';
import { Project } from '../../../../../../shared/interfaces/project.interface';

@Component({
    selector: 'app-projects-nav',
    standalone: true,
    imports: [],
    templateUrl: './projects-nav.component.html',
    styleUrl: './projects-nav.component.scss'
})
export class ProjectsNavComponent {
  selectProject = output<string>()
  projects = input<Project[]>();
  activeProject = signal('el-pollo-loco');

  getProjectName(projectName:string) {
    this.activeProject.set(projectName);
    this.selectProject.emit(projectName);
  };
}
