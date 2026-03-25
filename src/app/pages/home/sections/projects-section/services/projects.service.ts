import { Injectable } from '@angular/core';
import { Project } from '../../../../../shared/interfaces/project.interface';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {
  projects: Project[] = [
    {
      name: 'el-pollo-loco',
      label: 'El-Pollo-Loco',
      technologies: ['HTML', 'CSS', 'JavaScript'],
      sections: [
        {
          title: 'PROJECTS.elPolloLoco.sections.about.title',
          content: 'PROJECTS.elPolloLoco.sections.about.content'
        },
        {
          title: 'PROJECTS.elPolloLoco.sections.process.title',
          content: 'PROJECTS.elPolloLoco.sections.process.content'
        },
        {
          title: 'PROJECTS.elPolloLoco.sections.learning.title',
          content: 'PROJECTS.elPolloLoco.sections.learning.content'
        },
      ],
      image: 'el-pollo-loco.png',
      links: ['', 'https://github.com/ChristopherHipper/el-pollo-loco']
    },
    {
      name: 'join',
      label: 'Join',
      technologies: ['HTML', 'CSS', 'JavaScript', 'Firebase', 'Git'],
      sections: [
        {
          title: 'PROJECTS.join.sections.about.title',
          content: 'PROJECTS.join.sections.about.content'
        },
        {
          title: 'PROJECTS.join.sections.process.title',
          content: 'PROJECTS.join.sections.process.content'
        },
        {
          title: 'PROJECTS.join.sections.learning.title',
          content: 'PROJECTS.join.sections.learning.content'
        },
      ],
      image: 'join.png',
      links: ['', 'https://github.com/ChristopherHipper/Join']
    },
    {
      name: 'portfolio',
      label: 'Portfolio',
      technologies: ['Angular', 'CSS', 'TypeScript'],
      sections: [
        {
          title: 'PROJECTS.portfolio.sections.about.title',
          content: 'PROJECTS.portfolio.sections.about.content'
        },
        {
          title: 'PROJECTS.portfolio.sections.process.title',
          content: 'PROJECTS.portfolio.sections.process.content'
        },
        {
          title: 'PROJECTS.portfolio.sections.learning.title',
          content: 'PROJECTS.portfolio.sections.learning.content'
        },
      ],
  image: '',
  links: ['', 'https://github.com/ChristopherHipper/portfolio']
},
  ];
}
