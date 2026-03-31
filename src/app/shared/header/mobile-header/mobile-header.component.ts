import { Component, inject } from '@angular/core';
import { LogoComponent } from "../../logo/logo.component";
import { NavigationService } from '../../services/navigation.service';

@Component({
  selector: 'app-mobile-header',
  imports: [LogoComponent],
  templateUrl: './mobile-header.component.html',
  styleUrl: './mobile-header.component.scss',
})
export class MobileHeaderComponent {
  nav = inject(NavigationService);

  onToggle(event: Event) {
    const checked = (event.target as HTMLInputElement).checked;
    this.nav.mobileNavIsOpen.set(checked);
  };

}
