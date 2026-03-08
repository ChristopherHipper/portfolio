import { Component, input, Input } from '@angular/core';

@Component({
    selector: 'app-skill-icons',
    standalone: true,
    imports: [],
    templateUrl: './skill-icons.component.html',
    styleUrl: './skill-icons.component.scss'
})
export class SkillIconsComponent {
    skill = input('');
    projectIcon = input()
  
    getSkillImg(){
      return `assets/img/icons/skills/${this.skill()}.png`
    }
}
