import { Component, Input } from '@angular/core';
import { Project } from '../../interfaces/project.interface';
import { SkillIconsComponent } from "../../../../../../shared/skill-icons/skill-icons.component";

@Component({
  selector: 'app-project-meta',
  standalone: true,
  imports: [SkillIconsComponent],
  templateUrl: './project-meta.component.html',
  styleUrl: './project-meta.component.scss'
})
export class ProjectMetaComponent {
  @Input()project!:Project;
}
