import { Component } from '@angular/core';
import { ProjectsNavComponent } from "./components/projects-nav/projects-nav.component";
import { ProjectDetailComponent } from "./components/project-detail/project-detail.component";
import { Project } from './interfaces/project.interface';

@Component({
  selector: 'app-projects-section',
  standalone: true,
  imports: [ProjectsNavComponent, ProjectDetailComponent],
  templateUrl: './projects-section.component.html',
  styleUrl: './projects-section.component.scss'
})
export class ProjectsSectionComponent {
  projects: Project[] = [
    {
      name: 'el-pollo-loco',
      label: 'El-Pollo-Loco',
      duration: '5 weeks',
      technologies: ['html', 'css', 'js'],
      sections: ['A simple jump-and-run game...', 'I focused on clean code...', 'Object-oriented JavaScript...']
    },
    {
      name: 'join',
      label: 'Join',
      duration: '5 weeks',
      technologies: ['html', 'css', 'js'],
      sections: ['A simple jump-and-run game...', 'I focused on clean code...', 'Object-oriented JavaScript...']
    },
    {
      name: 'pokemon',
      label: 'Pokemon',
      duration: '5 weeks',
      technologies: ['html', 'css', 'js'],
      sections: ['A simple jump-and-run game...', 'I focused on clean code...', 'Object-oriented JavaScript...']
    },
  ];

  ngOnInit() {
    this.project = this.projects[0];
  };

  project!: Project;

  getProject(name: string) {
    const foundProject = this.projects.find(project => project.name === name);
    if (foundProject) {
      this.project = foundProject;
    };
  };

}
