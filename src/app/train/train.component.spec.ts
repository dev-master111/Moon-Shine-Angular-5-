import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule } from '@angular/common/http';
import { AmChartsService, AmChart } from '@amcharts/amcharts3-angular';

import { SharedModule } from '../shared/shared.module';
import { OrganizationSummaryModule } from './organization-summary/organization-summary.module';
// Third Party Localization Module
import {
  L10nConfig,
  L10nLoader,
  LocalizationModule,
  LocaleValidationModule,
  StorageStrategy,
  ProviderType,
  LocaleService,
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

import {
  CommonService,
  ColorizeMvsCsService
} from '../shared/services';

import { TrainComponent } from './train.component';
import { OverviewComponent } from './overview/overview.component';
import { CreateManagementTeamComponent } from './create-management-team/create-management-team.component';
import { RelationshipImpactComponent } from './relationship-impact/relationship-impact.component';
import { EditManagementTeamComponent } from './edit-management-team/edit-management-team.component';

describe('TrainComponent', () => {
  let component: TrainComponent;
  let fixture: ComponentFixture<TrainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        TrainComponent,
        OverviewComponent,
        CreateManagementTeamComponent,
        RelationshipImpactComponent,
        EditManagementTeamComponent
      ],
      imports: [
        RouterTestingModule,
        SharedModule,
        OrganizationSummaryModule
      ],
      providers: [
        AmChartsService,
        LocaleService,
        TranslationService,
        CommonService,
        ColorizeMvsCsService
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
