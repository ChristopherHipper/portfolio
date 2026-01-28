import { Component, Input } from '@angular/core';
import { Project } from '../../interfaces/project.interface';
import { ProjectInfoComponent } from "../project-info/project-info.component";
import { ProjectMetaComponent } from "../project-meta/project-meta.component";
import { ProjectPreviewComponent } from "../project-preview/project-preview.component";

@Component({
  selector: 'app-project-detail',
  standalone: true,
  imports: [ProjectInfoComponent, ProjectMetaComponent, ProjectPreviewComponent],
  templateUrl: './project-detail.component.html',
  styleUrl: './project-detail.component.scss'
})
export class ProjectDetailComponent {
  @Input()project!:Project;
}
