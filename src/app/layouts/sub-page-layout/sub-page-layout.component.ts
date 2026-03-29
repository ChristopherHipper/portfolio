import { Component, inject, signal } from '@angular/core';
import { FooterComponent } from '../../shared/footer/footer.component';
import { HeaderComponent } from '../../shared/header/header.component';
import { RouterOutlet } from '@angular/router';
import { MobileNavComponent } from "../../shared/header/mobile-nav/mobile-nav.component";

import { DeviceService } from '../../shared/services/device.service';
import { NavigationService } from '../../shared/services/navigation.service';

@Component({
    selector: 'app-sub-page-layout',
    standalone: true,
    imports: [HeaderComponent, RouterOutlet, FooterComponent, MobileNavComponent],
    templateUrl: './sub-page-layout.component.html',
    styleUrl: './sub-page-layout.component.scss'
})
export class SubPageLayoutComponent {
    mobile = inject(DeviceService);
    mobileNav = inject(NavigationService);
    isInit = signal(false);

    ngOnInit() {

        setTimeout(() => {
            this.isInit.set(true);
        }, 10)

    }

}
