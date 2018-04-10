import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { NotificationsService } from 'angular2-notifications';

import { Motive } from '../../shared/models';

@Component({
  selector: 'app-organization-summary',
  templateUrl: './organization-summary.component.html',
  styleUrls: ['./organization-summary.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class OrganizationSummaryComponent implements OnInit {
  selectedTab: string;
  motives: Motive[];

  constructor(
    private _notifications: NotificationsService
  ) { }

  public ngOnInit() {
    this.selectedTab = 'motives';
    this.motives = [
      {
        text: 'blue',
        percentage: 12
      },
      {
        text: 'red',
        percentage: 18
      },
      {
        text: 'green',
        percentage: 10
      },
      {
        text: 'hub',
        percentage: 25
      },
      {
        text: 'blue-green',
        percentage: 12
      },
      {
        text: 'red-green',
        percentage: 15
      },
      {
        text: 'red-blue',
        percentage: 8
      }
    ];
  }

  public downloadPdfReport() {
    this._notifications.html(`Download PDF Report Button Clicked!`, 'success', {
      clickToClose: true,
      pauseOnHover: true,
      showProgressBar: false,
      timeOut: 2000,
      position: ['middle', 'center']
    });
  }
}
