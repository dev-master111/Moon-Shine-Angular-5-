import { Component, OnInit, ViewEncapsulation } from '@angular/core';

import { Motive } from '../../shared/models';

@Component({
  selector: 'app-organization-summary',
  templateUrl: './organization-summary.component.html',
  styleUrls: ['./organization-summary.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class OrganizationSummaryComponent implements OnInit {
  curTab: string;
  motives: Motive[];

  constructor() { }

  ngOnInit() {
    this.curTab = 'motives';
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

}
