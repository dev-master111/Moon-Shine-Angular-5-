import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ClipboardModule } from 'ngx-clipboard';
import { SimpleNotificationsModule } from 'angular2-notifications';
import { AmChartsModule } from '@amcharts/amcharts3-angular';

import { ComponentsModule } from './components/components.module';

// Third Party Localization Module
import {
  L10nConfig,
  L10nLoader,
  LocalizationModule,
  LocaleValidationModule,
  StorageStrategy,
  ProviderType
} from 'angular-l10n';
const l10nConfig: L10nConfig = {
  locale: {
    languages: [
      { code: 'en', dir: 'ltr' }
    ],
    defaultLocale: { languageCode: 'en', countryCode: 'US' },
    currency: 'USD',
    storage: StorageStrategy.Cookie
  },
  translation: {
    providers: [
      { type: ProviderType.Static, prefix: '/assets/locale-' }
    ],
    caching: true,
    missingValue: 'No key',
    composedKeySeparator: '.',
    i18nPlural: true
  }
};

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    ClipboardModule,
    LocalizationModule.forRoot(l10nConfig),
    SimpleNotificationsModule.forRoot(),
    NgbModule.forRoot(),
    AmChartsModule,

    ComponentsModule
  ],
  exports: [
    HttpClientModule,
    LocalizationModule,
    LocaleValidationModule,
    ClipboardModule,
    SimpleNotificationsModule,
    NgbModule,
    AmChartsModule,

    ComponentsModule
  ]
})
export class SharedModule {
  constructor(public l10nLoader: L10nLoader) {
    this.l10nLoader.load();
  }
}
