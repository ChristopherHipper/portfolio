import { ApplicationConfig } from '@angular/core';
import { provideRouter, withInMemoryScrolling } from '@angular/router';

import { provideTranslateService, TranslateService } from "@ngx-translate/core";
import { provideTranslateHttpLoader } from "@ngx-translate/http-loader";

import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes, withInMemoryScrolling({ anchorScrolling: 'enabled', scrollPositionRestoration: 'enabled' })),
    provideHttpClient(),
    provideTranslateService({
      lang: 'en',
      fallbackLang: 'en',
      loader: provideTranslateHttpLoader({
        prefix: './assets/i18n/',
        suffix: '.json'
      })
    }),
  ]
};
