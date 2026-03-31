import { Component, ElementRef, HostListener, inject, input, signal, ViewChild } from '@angular/core';
import { LogoComponent } from "../../../../shared/logo/logo.component";
import { SozialMediaIconsComponent } from "../../../../shared/sozial-media-icons/sozial-media-icons.component";
import { ScrollIndicatorComponent } from "../../../../shared/scroll-indicator/scroll-indicator.component";
import { TranslatePipe } from '@ngx-translate/core';
import { DeviceService } from '../../../../shared/services/device.service';
import { NavigationService } from '../../../../shared/services/navigation.service';
import { MobileNavComponent } from '../../../../shared/header/mobile-nav/mobile-nav.component';

@Component({
  selector: 'app-hero-section',
  standalone: true,
  imports: [LogoComponent, SozialMediaIconsComponent, ScrollIndicatorComponent, TranslatePipe, MobileNavComponent],
  templateUrl: './hero-section.component.html',
  styleUrl: './hero-section.component.scss'
})
export class HeroSectionComponent {
  mobile = inject(DeviceService);
  mobileNav = inject(NavigationService);

  icons = signal(['git-hero', 'mail-hero', 'linkedin-hero']);
  logoVariant = signal('');

  getId(id:string){
    const clickedNavItem = id.split('.')[1];
    return clickedNavItem;
  };

}
