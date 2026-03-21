import { Component } from '@angular/core';
import { LogoComponent } from "../logo/logo.component";
import { SozialMediaIconsComponent } from "../sozial-media-icons/sozial-media-icons.component";
import {TranslatePipe} from '@ngx-translate/core';

@Component({
    selector: 'app-footer',
    standalone: true,
    imports: [LogoComponent, SozialMediaIconsComponent, TranslatePipe],
    templateUrl: './footer.component.html',
    styleUrl: './footer.component.scss'
})
export class FooterComponent {
  icons:string[] = ['git-footer','mail-footer','linkedin-footer']
}
