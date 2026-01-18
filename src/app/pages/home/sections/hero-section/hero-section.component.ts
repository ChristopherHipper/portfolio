import { Component } from '@angular/core';
import { LogoComponent } from "../../../../shared/logo/logo.component";
import { SozialMediaIconsComponent } from "../../../../shared/sozial-media-icons/sozial-media-icons.component";
import { ScrollIndicatorComponent } from "../../../../shared/scroll-indicator/scroll-indicator.component";

@Component({
  selector: 'app-hero-section',
  standalone: true,
  imports: [LogoComponent, SozialMediaIconsComponent, ScrollIndicatorComponent],
  templateUrl: './hero-section.component.html',
  styleUrl: './hero-section.component.scss'
})
export class HeroSectionComponent {
  icons:string[] = ['git-hero','mail-hero','linkedin-hero']
  logoVariant:string = ''
}
