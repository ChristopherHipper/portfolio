import { Component, inject, input } from '@angular/core';
import { NavComponent } from './nav/nav.component';
import { LogoComponent } from "../logo/logo.component";
import { LanguageSwitchComponent } from "./language-switch/language-switch.component";
import { DeviceService } from '../services/device.service';

@Component({
    selector: 'app-header',
    standalone: true,
    imports: [NavComponent, LogoComponent, LanguageSwitchComponent],
    templateUrl: './header.component.html',
    styleUrl: './header.component.scss'
})
export class HeaderComponent {
    mobile = inject(DeviceService)
}
