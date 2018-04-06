import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from './../shared/shared.module';
import { TrainRoutingModule } from './train-routing.module';
import { OrganizationSummaryModule } from './organization-summary/organization-summary.module';

import { TrainComponent } from './train.component';
import { OverviewComponent } from './overview/overview.component';
import { CreateManagementTeamComponent } from './create-management-team/create-management-team.component';
import { RelationshipImpactComponent } from './relationship-impact/relationship-impact.component';
import { EditManagementTeamComponent } from './edit-management-team/edit-management-team.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    TrainRoutingModule,
    OrganizationSummaryModule
  ],
  declarations: [TrainComponent, OverviewComponent, CreateManagementTeamComponent, RelationshipImpactComponent, EditManagementTeamComponent]
})
export class TrainModule { }
