import { Component, inject} from '@angular/core';
import { NavComponent } from './nav/nav.component';
import { LogoComponent } from "../logo/logo.component";
import { LanguageSwitchComponent } from "./language-switch/language-switch.component";
import { DeviceService } from '../services/device.service';
import { MobileHeaderComponent } from "./mobile-header/mobile-header.component";
import { NavigationService } from '../services/navigation.service';

@Component({
    selector: 'app-header',
    standalone: true,
    imports: [NavComponent, LogoComponent, LanguageSwitchComponent, MobileHeaderComponent],
    templateUrl: './header.component.html',
    styleUrl: './header.component.scss'
})
export class HeaderComponent {
    mobile = inject(DeviceService);
    nav = inject(NavigationService);
}
