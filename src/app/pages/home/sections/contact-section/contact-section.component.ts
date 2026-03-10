import { Component } from '@angular/core';
import { ContactInfoComponent } from "./components/contact-info/contact-info.component";
import { ContactFormComponent } from "./components/contact-form/contact-form.component";
import { ScrollAnimationDirective } from '../../../../shared/directives/scroll-animation.directive';

@Component({
    selector: 'app-contact-section',
    standalone: true,
    imports: [ContactInfoComponent, ContactFormComponent, ScrollAnimationDirective],
    templateUrl: './contact-section.component.html',
    styleUrl: './contact-section.component.scss'
})
export class ContactSectionComponent {

}
