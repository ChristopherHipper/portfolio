import { inject, Injectable, signal } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root',
})
export class LanguageService {
  private translate = inject(TranslateService);
  lang = signal('en')
  aboutMeInfos = signal(['ready to work remote..','located in Paderborn..'])

    getAboutmeInfos(){
      if (this.lang() === 'en') {
        this.aboutMeInfos.set(['ready to work remote..','located in Paderborn..' ])
      } else {
        this.aboutMeInfos.set(['bereit remote zu arbeiten..','ansässig in Paderborn..'])
      }
    }

    switchLanguage(language: string): void {
      if (language === this.lang()) {return}
      this.translate.use(language);
      this.lang.set(language)
      this.getAboutmeInfos()
  }
}
