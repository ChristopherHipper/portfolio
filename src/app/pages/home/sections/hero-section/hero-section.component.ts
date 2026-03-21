import { Component, input, signal } from '@angular/core';
import { LogoComponent } from "../../../../shared/logo/logo.component";
import { SozialMediaIconsComponent } from "../../../../shared/sozial-media-icons/sozial-media-icons.component";
import { ScrollIndicatorComponent } from "../../../../shared/scroll-indicator/scroll-indicator.component";
import { MobileNavComponent } from "./components/mobile-nav/mobile-nav.component";
import { RouterLink } from "@angular/router";
import { LanguageSwitchComponent } from "../../../../shared/header/language-switch/language-switch.component";
import {TranslatePipe} from '@ngx-translate/core';

@Component({
  selector: 'app-hero-section',
  standalone: true,
  imports: [LogoComponent, SozialMediaIconsComponent, ScrollIndicatorComponent, MobileNavComponent, RouterLink, LanguageSwitchComponent, TranslatePipe],
  templateUrl: './hero-section.component.html',
  styleUrl: './hero-section.component.scss'
})
export class HeroSectionComponent {
  icons = signal(['git-hero', 'mail-hero', 'linkedin-hero']);
  logoVariant = signal('');
  isMobile = input()
  navList = signal(['NAVIGATION.whyMe', 'NAVIGATION.skills', 'NAVIGATION.projects', 'NAVIGATION.contact']);
  mobileNav = signal(false)

  ngOnChanges(){
    if (!this.isMobile()) {
      this.mobileNav.set(false)
    }
  }
}
