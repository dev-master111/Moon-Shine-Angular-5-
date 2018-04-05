import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from './../shared/shared.module';
import { TrainRoutingModule } from './train-routing.module';
import { TrainComponent } from './train.component';
import { OverviewComponent } from './overview/overview.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    TrainRoutingModule
  ],
  declarations: [TrainComponent, OverviewComponent]
})
export class TrainModule { }
