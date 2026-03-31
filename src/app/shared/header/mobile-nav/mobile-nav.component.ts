import { Component, inject} from '@angular/core';
import { LanguageSwitchComponent } from "../language-switch/language-switch.component";
import { RouterLink } from "@angular/router";
import { TranslatePipe } from '@ngx-translate/core';
import { NavigationService } from '../../services/navigation.service';
import { ClickOutsideDirective } from "../../directives/click-outside.directive";

@Component({
  selector: 'app-mobile-nav',
  imports: [LanguageSwitchComponent, RouterLink, TranslatePipe, ClickOutsideDirective],
  templateUrl: './mobile-nav.component.html',
  styleUrl: './mobile-nav.component.scss',
})
export class MobileNavComponent {
  nav = inject(NavigationService);
  navList = this.nav.navList();
}
