import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../../shared/shared.module';

import { OrganizationSummaryComponent } from './organization-summary.component';
import { MotivesComponent } from './motives/motives.component';
import { ConflictComponent } from './conflict/conflict.component';
import { StrengthsComponent } from './strengths/strengths.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  declarations: [
    OrganizationSummaryComponent,
    MotivesComponent,
    ConflictComponent,
    StrengthsComponent
  ],
  exports: [
    OrganizationSummaryComponent
  ]
})
export class OrganizationSummaryModule { }
