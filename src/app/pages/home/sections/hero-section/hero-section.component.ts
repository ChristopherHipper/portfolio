import { Component, signal } from '@angular/core';
import { LogoComponent } from "../../../../shared/logo/logo.component";
import { SozialMediaIconsComponent } from "../../../../shared/sozial-media-icons/sozial-media-icons.component";
import { ScrollIndicatorComponent } from "../../../../shared/scroll-indicator/scroll-indicator.component";
import { MobileNavComponent } from "./components/mobile-nav/mobile-nav.component";

@Component({
  selector: 'app-hero-section',
  standalone: true,
  imports: [LogoComponent, SozialMediaIconsComponent, ScrollIndicatorComponent, MobileNavComponent],
  templateUrl: './hero-section.component.html',
  styleUrl: './hero-section.component.scss'
})
export class HeroSectionComponent {
  icons = signal(['git-hero', 'mail-hero', 'linkedin-hero']);
  logoVariant = signal('');
  mobile = signal(window.innerWidth < 1024)

  constructor() {
    window.addEventListener('resize', () => {
      this.mobile.set(window.innerWidth < 1024);
    });
  }
}
