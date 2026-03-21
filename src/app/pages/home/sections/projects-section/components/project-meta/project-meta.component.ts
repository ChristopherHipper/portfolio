import { Component, input } from '@angular/core';
import { Project } from '../../interfaces/project.interface';
import { SkillIconsComponent } from "../../../../../../shared/skill-icons/skill-icons.component";
import {TranslatePipe} from '@ngx-translate/core';

@Component({
    selector: 'app-project-meta',
    standalone: true,
    imports: [SkillIconsComponent,TranslatePipe],
    templateUrl: './project-meta.component.html',
    styleUrl: './project-meta.component.scss'
})
export class ProjectMetaComponent {
  project = input<Project>();
}
