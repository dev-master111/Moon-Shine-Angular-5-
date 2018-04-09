import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AmChartsService, AmChart } from '@amcharts/amcharts3-angular';
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

import { CommonService, ColorizeMvsCsService } from '../../../shared/services';

import { MotivesComponent } from './motives.component';

describe('MotivesComponent', () => {
  let component: MotivesComponent;
  let fixture: ComponentFixture<MotivesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule,
        LocalizationModule.forRoot(l10nConfig),
        LocaleValidationModule.forRoot()
      ],
      declarations: [ MotivesComponent ],
      providers: [
        TranslationService,
        AmChartsService,
        CommonService,
        ColorizeMvsCsService
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MotivesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
