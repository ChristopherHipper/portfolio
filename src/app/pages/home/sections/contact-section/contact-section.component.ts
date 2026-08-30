import { Component } from '@angular/core';
import { ContactInfoComponent } from "./components/contact-info/contact-info.component";
import { ContactFormComponent } from "./components/contact-form/contact-form.component";
import { TranslatePipe } from '@ngx-translate/core';

@Component({
    selector: 'app-contact-section',
    standalone: true,
    imports: [ContactInfoComponent, ContactFormComponent, TranslatePipe],
    templateUrl: './contact-section.component.html',
    styleUrl: './contact-section.component.scss'
})
export class ContactSectionComponent {

}
