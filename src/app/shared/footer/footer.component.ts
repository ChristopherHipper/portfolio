import { Component } from '@angular/core';
import { LogoComponent } from "../logo/logo.component";
import { SozialMediaIconsComponent } from "../sozial-media-icons/sozial-media-icons.component";
import { TranslatePipe } from '@ngx-translate/core';
import { RouterLink } from "@angular/router";

@Component({
    selector: 'app-footer',
    standalone: true,
    imports: [LogoComponent, SozialMediaIconsComponent, TranslatePipe, RouterLink],
    templateUrl: './footer.component.html',
    styleUrl: './footer.component.scss'
})
export class FooterComponent {
  icons:string[] = ['git-footer','mail-footer','linkedin-footer'];
}
