import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Third Party Components for localization
import {
  L10nConfig,
  L10nLoader,
  LocalizationModule,
  LocaleValidationModule,
  StorageStrategy,
  ProviderType
} from 'angular-l10n';
import { IconButtonComponent } from './components/icon-button/icon-button.component';
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
    LocalizationModule.forChild(l10nConfig)
  ],
  declarations: [IconButtonComponent],
  exports: [
    LocalizationModule,
    LocaleValidationModule,
    IconButtonComponent
  ]
})
export class SharedModule {
  constructor(public l10nLoader: L10nLoader) {
    this.l10nLoader.load();
  }
}
