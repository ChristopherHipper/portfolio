import { Component, Input } from '@angular/core';
import { SkillIconsComponent } from "../../../../../shared/skill-icons/skill-icons.component";

@Component({
  selector: 'app-single-skill',
  standalone: true,
  imports: [SkillIconsComponent],
  templateUrl: './single-skill.component.html',
  styleUrl: './single-skill.component.scss'
})
export class SingleSkillComponent {
  @Input() skill:string = '';

  getSkillImg(){
    return `assets/img/icons/skills/${this.skill}.png`
  }
}