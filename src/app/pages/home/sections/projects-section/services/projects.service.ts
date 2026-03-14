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
      technologies: ['HTML', 'CSS', 'JavaScript'],
      sections: [
        {
          title: 'About the Project',
          content: 'A simple jump-and-run game based on object-oriented approach. Help Pepe to cross the dangerous desert and defeat The Giant Chicken.'
        },
        {
          title: 'How I have organised my work process',
          content: 'I organized the project by splitting the game into small, logical components. Using object-oriented programming, every component was implemented as a separate class, supported by additional helper and logic classes. Regular testing helped me improve gameplay and fix bugs early.'
        },
        {
          title: 'What I have learnt',
          content: "This project strengthened my understanding of JavaScript's object-oriented programming. I learned to manage a game loop with FPS, handle collisions, animations, and player input. Additionally, I improved my skills in structuring bigger projects and generate clean, maintainable code wich improved my confidence as a developer"
        },
      ],
      image: 'el-pollo-loco.png',
      links: ['', 'https://github.com/ChristopherHipper/el-pollo-loco']
    },
    {
      name: 'join',
      label: 'Join',
      technologies: ['HTML', 'CSS', 'JavaScript', 'Firebase', 'Git'],
      sections: [{
        title: 'About the Project',
        content: 'Task manager inspired by the Kanban System, Create and organize tasks using drag and drop functions, assign users and categories'
      },
      {
        title: 'How I have organised my work process',
        content: 'We met every few days to review progress, redistribute tasks, and support each other with challenges. This helped us stay aligned and solve problems efficiently as a team. My primary focus was on the login and sign-up features, along with the task summarization, creation, and editing. A clear task distribution and continuous communication ensured consistent project progress.'
      },
      {
        title: 'My group work experience',
        content: 'Working in a team of four improved my communication and collaboration skills. We coordinated tasks, discussed solutions, and supported each other when facing technical challenges. Using Git and Firebase required close coordination to avoid conflicts and ensure data consistency. Overall, the team collaboration made the project more efficient and closer to real-world development workflows.'
      },
      ],
      image: 'join.png',
      links: ['', 'https://github.com/ChristopherHipper/Join']
    },
    {
      name: 'protfolio',
      label: 'Portfolio',
      technologies: ['Angular', 'CSS', 'TypeScript'],
      sections: [{
        title: 'About the Project',
        content: 'Portfolio Website developed with Angular, TypeScript, and SCSS. It employs modern frontend development techniques. Includes a modular layout with interactive elements and a contact form, all in a responsive design.'
      },
      {
        title: 'How I have organised my work process',
        content: 'I structured the project using Angular’s component-based architecture to keep the application modular and maintainable. I used Angular routing to organize the navigation between pages and created separate components where shared logic was required.'
      },
      {
        title: 'What I have learnt',
        content: 'Through this project I gained practical experience with Angular and modern frontend development using TypeScript. I learned how to structure applications with components, services, and routing while keeping the code modular and scalable. Additionally, I improved my understanding of data binding, component communication, and reusable UI design.'
      },
      ],
  image: '',
  links: ['', 'https://github.com/ChristopherHipper/portfolio']
},
  ];
}
