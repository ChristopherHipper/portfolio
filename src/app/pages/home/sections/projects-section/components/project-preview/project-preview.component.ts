import { Component, input, signal } from '@angular/core';
import { Project } from '../../../../../../shared/interfaces/project.interface';

@Component({
  selector: 'app-project-preview',
  standalone: true,
  templateUrl: './project-preview.component.html',
  styleUrl: './project-preview.component.scss'
})
export class ProjectPreviewComponent {
  project = input<Project>();
  changeProject = signal(true);

  ngOnChanges() {
    if (this.changeProject()) {
      this.changeProject.set(false);
      
      setTimeout(() => {
        this.changeProject.set(true);
      }, 300)
    }
  }
}
