import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
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

import { AmChartsService, AmChart } from '@amcharts/amcharts3-angular';
import { CommonService, ColorizeMvsCsService } from '../../shared/services';

import { OrganizationSummaryComponent } from './organization-summary.component';
import { ConflictComponent } from './conflict/conflict.component';
import { MotivesComponent } from './motives/motives.component';
import { StrengthsComponent } from './strengths/strengths.component';
import { ConflictBarComponent } from '../../shared/components/conflict-bar/conflict-bar.component';

describe('OrganizationSummaryComponent', () => {
  let component: OrganizationSummaryComponent;
  let fixture: ComponentFixture<OrganizationSummaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule,
        LocalizationModule.forRoot(l10nConfig),
        LocaleValidationModule.forRoot(),
        NgbModule.forRoot()
      ],
      declarations: [
        OrganizationSummaryComponent,
        ConflictComponent,
        MotivesComponent,
        StrengthsComponent,
        ConflictBarComponent
      ],
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
    fixture = TestBed.createComponent(OrganizationSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
