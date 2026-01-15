import { Component } from '@angular/core';
import { LogoComponent } from "../header/logo/logo.component";
import { SozialMediaIconsComponent } from "../sozial-media-icons/sozial-media-icons.component";

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [LogoComponent, SozialMediaIconsComponent],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  icons:string[] = ['git-footer','mail-footer','linkedin-footer']
}
