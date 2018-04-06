import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-organization-summary',
  templateUrl: './organization-summary.component.html',
  styleUrls: ['./organization-summary.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class OrganizationSummaryComponent implements OnInit {
  curTab: string;

  constructor() { }

  ngOnInit() {
    this.curTab = 'motives';
  }

}
