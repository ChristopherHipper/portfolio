import { Component, inject } from '@angular/core';
import { ButtonComponent } from "../../../../shared/button/button.component";

@Component({
  selector: 'app-about-me-section',
  standalone: true,
  imports: [ButtonComponent,],
  templateUrl: './about-me-section.component.html',
  styleUrl: './about-me-section.component.scss'
})
export class AboutMeSectionComponent {
  titles:string[] = ['located in Germany', 'ready to work remote'];
}
