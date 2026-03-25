import { Component, input} from '@angular/core';
import { Project } from '../../../../../../shared/interfaces/project.interface';
import { ProjectInfoComponent } from "../project-info/project-info.component";
import { ProjectMetaComponent } from "../project-meta/project-meta.component";
import { ProjectPreviewComponent } from "../project-preview/project-preview.component";
import { ProjectActionComponent } from "../project-action/project-action.component";

@Component({
    selector: 'app-project-detail',
    standalone: true,
    imports: [ProjectInfoComponent, ProjectMetaComponent, ProjectPreviewComponent, ProjectActionComponent],
    templateUrl: './project-detail.component.html',
    styleUrl: './project-detail.component.scss'
})
export class ProjectDetailComponent {
  project = input<Project>();
}
