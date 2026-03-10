import { Component, signal } from '@angular/core';

@Component({
    selector: 'app-language-switch',
    standalone: true,
    imports: [],
    templateUrl: './language-switch.component.html',
    styleUrl: './language-switch.component.scss'
})
export class LanguageSwitchComponent {
  language = signal('english')

  switchLanguage(lang: 'german' | 'english'): void{
    if (lang === this.language())return;
    this.language.set(lang);
  }
}
