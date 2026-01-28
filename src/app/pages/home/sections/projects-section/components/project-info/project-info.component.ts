import { Component, Input } from '@angular/core';
import { Project } from '../../interfaces/project.interface';

@Component({
  selector: 'app-project-info',
  standalone: true,
  imports: [],
  templateUrl: './project-info.component.html',
  styleUrl: './project-info.component.scss'
})
export class ProjectInfoComponent {
  @Input()project!:Project;
}
