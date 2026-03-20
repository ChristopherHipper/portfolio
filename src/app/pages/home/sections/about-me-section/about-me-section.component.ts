import { Component } from '@angular/core';
import { IconTextComponent } from "./components/icon-text/icon-text.component";
import { SecondaryButtonComponent } from "../../../../shared/button/secondary-button/secondary-button.component";
import { ScrollAnimationDirective } from '../../../../shared/directives/scroll-animation.directive';
import { RouterLink } from "@angular/router";
import {TranslatePipe} from '@ngx-translate/core';

@Component({
    selector: 'app-about-me-section',
    standalone: true,
    imports: [IconTextComponent, SecondaryButtonComponent, ScrollAnimationDirective, RouterLink, TranslatePipe],
    templateUrl: './about-me-section.component.html',
    styleUrl: './about-me-section.component.scss'
})
export class AboutMeSectionComponent {
  
}
