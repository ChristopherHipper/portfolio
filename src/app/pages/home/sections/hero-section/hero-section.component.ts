import { Component, ElementRef, HostListener, input, signal, ViewChild } from '@angular/core';
import { LogoComponent } from "../../../../shared/logo/logo.component";
import { SozialMediaIconsComponent } from "../../../../shared/sozial-media-icons/sozial-media-icons.component";
import { ScrollIndicatorComponent } from "../../../../shared/scroll-indicator/scroll-indicator.component";
import { MobileNavComponent } from "./components/mobile-nav/mobile-nav.component";
import { RouterLink } from "@angular/router";
import { LanguageSwitchComponent } from "../../../../shared/header/language-switch/language-switch.component";
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-hero-section',
  standalone: true,
  imports: [LogoComponent, SozialMediaIconsComponent, ScrollIndicatorComponent, MobileNavComponent, RouterLink, LanguageSwitchComponent, TranslatePipe],
  templateUrl: './hero-section.component.html',
  styleUrl: './hero-section.component.scss'
})
export class HeroSectionComponent {
  @ViewChild('nav') navRef!: ElementRef;
  @ViewChild('burgerBtn', { read: ElementRef }) burgerBtn!: ElementRef;
  @ViewChild('burgerBtn') burgerComponent!: MobileNavComponent;

  icons = signal(['git-hero', 'mail-hero', 'linkedin-hero']);
  logoVariant = signal('');
  isMobile = input()
  navList = signal(['NAVIGATION.whyMe', 'NAVIGATION.skills', 'NAVIGATION.projects', 'NAVIGATION.contact']);
  mobileNav = signal(false)

  getId(id:string){
    const clickedNavItem = id.split('.')[1]
    return clickedNavItem
  }

  @HostListener('document:click', ['$event'])
  handleClickOutside(event: MouseEvent) {
    if (!this.mobileNav()) return;

    const target = event.target as HTMLElement;
    console.log(target);
    

    const clickedInsideNav = this.navRef?.nativeElement.contains(target);
    const clickedBurger = this.burgerComponent?.burgerContainer?.nativeElement?.contains(target) ?? false;

    if (!clickedInsideNav && !clickedBurger) {
      this.mobileNav.set(false);
    }
  }
}
