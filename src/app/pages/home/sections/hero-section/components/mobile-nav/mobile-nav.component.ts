import { Component, output } from '@angular/core';
import { LogoComponent } from '../../../../../../shared/logo/logo.component';

@Component({
  selector: 'app-mobile-nav',
  imports: [LogoComponent],
  templateUrl: './mobile-nav.component.html',
  styleUrl: './mobile-nav.component.scss',
})
export class MobileNavComponent {
  burgerMenu = output();
}
