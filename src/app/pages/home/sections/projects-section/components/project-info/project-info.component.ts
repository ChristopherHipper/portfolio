import { Component, input } from '@angular/core';
import { Project } from '../../../../../../shared/interfaces/project.interface';
import {TranslatePipe} from '@ngx-translate/core';

@Component({
    selector: 'app-project-info',
    standalone: true,
    imports: [TranslatePipe],
    templateUrl: './project-info.component.html',
    styleUrl: './project-info.component.scss'
})
export class ProjectInfoComponent {
  project = input<Project>();
}
