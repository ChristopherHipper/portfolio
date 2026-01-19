import { Component } from '@angular/core';
import { AboutMeSectionComponent } from "./sections/about-me-section/about-me-section.component";
import { SkillsSectionComponent } from "./sections/skills-section/skills-section.component";
import { ProjectsSectionComponent } from "./sections/projects-section/projects-section.component";
import { TestimonialsSectionComponent } from "./sections/testimonials-section/testimonials-section.component";
import { ContactSectionComponent } from "./sections/contact-section/contact-section.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [AboutMeSectionComponent, SkillsSectionComponent, ProjectsSectionComponent, TestimonialsSectionComponent, ContactSectionComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
