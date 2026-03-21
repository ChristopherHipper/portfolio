import { Component } from '@angular/core';
import { ScrollAnimationDirective } from '../../../../../../shared/directives/scroll-animation.directive';
import {TranslatePipe} from '@ngx-translate/core';

@Component({
  selector: 'app-contact-info',
  imports: [ScrollAnimationDirective, TranslatePipe],
  templateUrl: './contact-info.component.html',
  styleUrl: './contact-info.component.scss',
})
export class ContactInfoComponent {

}
