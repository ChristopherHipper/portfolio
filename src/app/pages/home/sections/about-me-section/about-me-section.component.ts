import { Component, inject } from '@angular/core';
import { ButtonComponent } from "../../../../shared/button/button.component";
import { IconTextComponent } from "./components/icon-text/icon-text.component";

@Component({
  selector: 'app-about-me-section',
  standalone: true,
  imports: [ButtonComponent, IconTextComponent],
  templateUrl: './about-me-section.component.html',
  styleUrl: './about-me-section.component.scss'
})
export class AboutMeSectionComponent {
  
}
