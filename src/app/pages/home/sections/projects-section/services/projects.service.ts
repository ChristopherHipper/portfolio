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
      links: ['https://el-pollo-loco.christopher-hipper.de/', 'https://github.com/ChristopherHipper/el-pollo-loco']
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
      links: ['https://join.christopher-hipper.de/', 'https://github.com/ChristopherHipper/Join']
    },
    {
      name: 'poll-app',
      label: 'Poll-App',
      technologies: ['Angular', 'Supabase'],
      sections: [
        {
          title: 'PROJECTS.poll-app.sections.about.title',
          content: 'PROJECTS.poll-app.sections.about.content'
        },
        {
          title: 'PROJECTS.poll-app.sections.process.title',
          content: 'PROJECTS.poll-app.sections.process.content'
        },
        {
          title: 'PROJECTS.poll-app.sections.learning.title',
          content: 'PROJECTS.poll-app.sections.learning.content'
        },
      ],
  image: 'poll-app.png',
  links: ['https://poll-app.christopher-hipper.de/', 'https://github.com/ChristopherHipper/poll-app']
},
  ];
}
