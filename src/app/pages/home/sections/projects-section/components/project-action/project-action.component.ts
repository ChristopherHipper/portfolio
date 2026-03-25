import { Component, input } from '@angular/core';
import { PrimaryButtonComponent } from "../../../../../../shared/button/primary-button/primary-button.component";
import { SecondaryButtonComponent } from "../../../../../../shared/button/secondary-button/secondary-button.component";
import { Project } from '../../../../../../shared/interfaces/project.interface';

@Component({
  selector: 'app-project-action',
  imports: [PrimaryButtonComponent, SecondaryButtonComponent],
  templateUrl: './project-action.component.html',
  styleUrl: './project-action.component.scss',
})
export class ProjectActionComponent {
  project = input<Project>();
}
