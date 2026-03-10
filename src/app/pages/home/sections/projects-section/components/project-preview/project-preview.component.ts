import { Component, input, signal } from '@angular/core';
import { Project } from '../../interfaces/project.interface';
import { SecondaryButtonComponent } from "../../../../../../shared/button/secondary-button/secondary-button.component";
import { PrimaryButtonComponent } from "../../../../../../shared/button/primary-button/primary-button.component";
import { ScrollAnimationDirective } from '../../../../../../shared/directives/scroll-animation.directive';

@Component({
  selector: 'app-project-preview',
  standalone: true,
  imports: [SecondaryButtonComponent, PrimaryButtonComponent, ScrollAnimationDirective],
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
      }, 10)
    }


  }
}
