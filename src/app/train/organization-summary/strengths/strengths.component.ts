import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';

import { CommonService } from '../../../shared/services';

@Component({
  selector: 'app-strengths',
  templateUrl: './strengths.component.html',
  styleUrls: ['./strengths.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class StrengthsComponent implements OnInit {
  @Input() memberCount;
  selectedButton: string;

  constructor(
    private commonService: CommonService
  ) { }

  public ngOnInit() {
    this.selectedButton = 'strengths';
  }

  public onStrengths() {
    this.selectedButton = 'strengths';
  }

  public onOverdone() {
    this.selectedButton = 'overdone';
  }
}
