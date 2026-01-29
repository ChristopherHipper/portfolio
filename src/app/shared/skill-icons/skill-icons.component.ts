import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-skill-icons',
  standalone: true,
  imports: [],
  templateUrl: './skill-icons.component.html',
  styleUrl: './skill-icons.component.scss'
})
export class SkillIconsComponent {
    @Input() skill:string = '';
    @Input() projectIcon:boolean = false;
  
    getSkillImg(){
      return `assets/img/icons/skills/${this.skill}.png`
    }
}
