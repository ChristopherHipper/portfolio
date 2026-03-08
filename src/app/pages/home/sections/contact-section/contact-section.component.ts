import { Component } from '@angular/core';
import { ContactInfoComponent } from "./components/contact-info/contact-info.component";
import { ContactFormComponent } from "./components/contact-form/contact-form.component";

@Component({
    selector: 'app-contact-section',
    standalone: true,
    imports: [ContactInfoComponent, ContactFormComponent],
    templateUrl: './contact-section.component.html',
    styleUrl: './contact-section.component.scss'
})
export class ContactSectionComponent {

}
