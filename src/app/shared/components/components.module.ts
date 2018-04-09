import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
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

import { IconButtonComponent } from './icon-button/icon-button.component';
import { ConflictBarComponent } from './conflict-bar/conflict-bar.component';

@NgModule({
  imports: [
    CommonModule,
    LocalizationModule.forRoot(l10nConfig)
  ],
  exports: [
    LocalizationModule,
    LocaleValidationModule,
    IconButtonComponent,
    ConflictBarComponent
  ],
  declarations: [
    IconButtonComponent,
    ConflictBarComponent
  ],
  entryComponents: []
})
export class ComponentsModule { }
