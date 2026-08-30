import { Component } from '@angular/core';
import { SingleSkillComponent } from "./single-skill/single-skill.component";
import {TranslatePipe} from '@ngx-translate/core';
import { PrimaryButtonComponent } from "../../../../shared/button/primary-button/primary-button.component";
import { RouterLink } from "@angular/router";

@Component({
    selector: 'app-skills-section',
    standalone: true,
    imports: [SingleSkillComponent, TranslatePipe, PrimaryButtonComponent, RouterLink],
    templateUrl: './skills-section.component.html',
    styleUrl: './skills-section.component.scss'
})
export class SkillsSectionComponent {
  skills: string[] = ['Angular','TypeScript', 'JavaScript', 'HTML', 'CSS', 'REST-API', 'Firebase', 'Git', 'Material Design' , 'Scrum', 'Supabase']
}
