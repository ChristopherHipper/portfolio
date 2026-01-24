import { Component } from '@angular/core';
import { SingleSkillComponent } from "./single-skill/single-skill.component";

@Component({
  selector: 'app-skills-section',
  standalone: true,
  imports: [SingleSkillComponent],
  templateUrl: './skills-section.component.html',
  styleUrl: './skills-section.component.scss'
})
export class SkillsSectionComponent {
  skills: string[] = ['Angular','TypeScript', 'JavaScript', 'HTML', 'CSS', 'REST-API', 'Firebase', 'Git', 'Material Design' , 'Scrum']
}
