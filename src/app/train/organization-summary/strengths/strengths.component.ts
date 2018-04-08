import { Component, OnInit, Input } from '@angular/core';

import { CommonService } from '../../../shared/services';

@Component({
  selector: 'app-strengths',
  templateUrl: './strengths.component.html',
  styleUrls: ['./strengths.component.scss']
})
export class StrengthsComponent implements OnInit {
  @Input() memberCount;
  curTab: string;

  constructor(
    private commonService: CommonService
  ) { }

  ngOnInit() {
    this.curTab = 'strengths';
  }

}
