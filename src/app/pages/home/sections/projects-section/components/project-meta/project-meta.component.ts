import { Component, Input } from '@angular/core';
import { Project } from '../../interfaces/project.interface';

@Component({
  selector: 'app-project-meta',
  standalone: true,
  imports: [],
  templateUrl: './project-meta.component.html',
  styleUrl: './project-meta.component.scss'
})
export class ProjectMetaComponent {
  @Input()project!:Project;
}
