import { Injectable } from '@angular/core';
import { Project } from '../interfaces/project.interface';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {
  projects: Project[] = [
    {
      name: 'el-pollo-loco',
      label: 'El-Pollo-Loco',
      duration: '5 weeks',
      technologies: ['html', 'css', 'js'],
      sections: [
        {
          title: 'About the Project',
          content: 'A simple jump-and-run game based on object-oriented approach. Help Pepe to cross the dangerous desert and defeat The Giant Chicken.'
        },
        {
          title: 'How I have organised my work process',
          content: 'I focused on clean code...'
        },
        {
          title: 'What I have learnt',
          content: 'Object-oriented JavaScript...'
        },
      ]
    },
    {
      name: 'join',
      label: 'Join',
      duration: '5 weeks',
      technologies: ['html', 'css', 'js'],
      sections: [{
        title: 'About the Project',
        content: 'A simple jump-and-run game...'
      },
      {
        title: 'How I have organised my work process',
        content: 'I focused on clean code...'
      },
      {
        title: 'My group work experience',
        content: 'Object-oriented JavaScript...'
      },]
    },
    {
      name: 'pokemon',
      label: 'Pokemon',
      duration: '5 weeks',
      technologies: ['html', 'css', 'js'],
      sections: [{
        title: 'About the Project',
        content: 'A simple jump-and-run game...'
      },
      {
        title: 'How I have organised my work process',
        content: 'I focused on clean code...'
      },
      {
        title: 'What I have learnt',
        content: 'Object-oriented JavaScript...'
      },]
    },
  ];
}
