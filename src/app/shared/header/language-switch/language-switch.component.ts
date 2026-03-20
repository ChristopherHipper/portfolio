import { Component, inject } from '@angular/core'
import { LanguageService } from '../../services/language.service'

@Component({
    selector: 'app-language-switch',
    standalone: true,
    imports: [],
    templateUrl: './language-switch.component.html',
    styleUrl: './language-switch.component.scss'
})
export class LanguageSwitchComponent {
    language = inject(LanguageService);
}
