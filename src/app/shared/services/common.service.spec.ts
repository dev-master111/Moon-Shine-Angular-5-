import { TestBed, inject } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import {
  L10nConfig,
  L10nLoader,
  LocalizationModule,
  LocaleValidationModule,
  StorageStrategy,
  ProviderType,
  TranslationService
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

import { CommonService } from './common.service';

describe('CommonService', () => {
  let l10nLoader: L10nLoader;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule,
        LocalizationModule.forRoot(l10nConfig),
        LocaleValidationModule.forRoot(),
      ],
      providers: [
        TranslationService,
        CommonService
      ]
    });
  });

  beforeEach((done: any) => {
    l10nLoader = TestBed.get(L10nLoader);
    l10nLoader.load().then(() => done());
  });

  it('should be created', inject([CommonService], (service: CommonService) => {
    expect(service).toBeTruthy();
  }));

  it('#numberWithCommas should convert 1000 to 1,000', inject([CommonService], (service: CommonService) => {
    expect(service.numberWithCommas(1000)).toBe('1,000');
  }));

  it('#replaceTranslationTemplate should show Hello, test user!', inject([CommonService], (service: CommonService) => {
    expect(service.replaceTranslationTemplate('Hello, %{user}!', {user: 'test user'})).toBe('Hello, test user!');
  }));

  it('#translateTemplate should work', inject([CommonService, TranslationService],
    (service: CommonService, translateionService: TranslationService) => {
      expect(service.translateTemplate('discover_sections_results_header', { firstName: 'test' })).toBe('test, here are your results.');
    }
  ));
});
