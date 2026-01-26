import { Component } from '@angular/core';
import { ProjectsNavComponent } from "./projects-nav/projects-nav.component";

@Component({
  selector: 'app-projects-section',
  standalone: true,
  imports: [ProjectsNavComponent],
  templateUrl: './projects-section.component.html',
  styleUrl: './projects-section.component.scss'
})
export class ProjectsSectionComponent {

}
