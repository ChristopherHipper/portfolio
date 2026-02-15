import { Component } from '@angular/core';
import { IconTextComponent } from "./components/icon-text/icon-text.component";
import { SecondaryButtonComponent } from "../../../../shared/button/secondary-button/secondary-button.component";
import { ScrollAnimationDirective } from '../../../../shared/directives/scroll-animation.directive';

@Component({
  selector: 'app-about-me-section',
  standalone: true,
  imports: [IconTextComponent, SecondaryButtonComponent, ScrollAnimationDirective],
  templateUrl: './about-me-section.component.html',
  styleUrl: './about-me-section.component.scss'
})
export class AboutMeSectionComponent {
  
}
