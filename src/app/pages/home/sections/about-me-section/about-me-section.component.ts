import { Component } from '@angular/core';
import { IconTextComponent } from "./components/icon-text/icon-text.component";
import { SecondaryButtonComponent } from "../../../../shared/button/secondary-button/secondary-button.component";

@Component({
  selector: 'app-about-me-section',
  standalone: true,
  imports: [IconTextComponent, SecondaryButtonComponent],
  templateUrl: './about-me-section.component.html',
  styleUrl: './about-me-section.component.scss'
})
export class AboutMeSectionComponent {
  
}
