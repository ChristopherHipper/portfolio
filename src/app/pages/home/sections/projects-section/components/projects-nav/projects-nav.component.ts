import { Component, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-projects-nav',
  standalone: true,
  imports: [],
  templateUrl: './projects-nav.component.html',
  styleUrl: './projects-nav.component.scss'
})
export class ProjectsNavComponent {
  @Output() selectProject = new EventEmitter<string>();
  @Input() projects!: { name: string; label: string }[];

  activeProject:string = 'el-pollo-loco';

  getProjectName(projectName:string) {
    this.activeProject = projectName;
    this.selectProject.emit(projectName);
  };
}
