import { Component, OnInit, Input } from '@angular/core';

import { CommonService } from '../../../shared/services';

@Component({
  selector: 'app-motives',
  templateUrl: './motives.component.html',
  styleUrls: ['./motives.component.scss']
})
export class MotivesComponent implements OnInit {
  @Input() totalMemberCount;
  @Input() sdiMemberCount;
  @Input() pendingSdiInvitationCount;
  percentageValue: number;

  constructor(
    private commonService: CommonService
  ) { }

  ngOnInit() {
    this.percentageValue = Math.round(this.sdiMemberCount * 100 / this.totalMemberCount);
  }

}
