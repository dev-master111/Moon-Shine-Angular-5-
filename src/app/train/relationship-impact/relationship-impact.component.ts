import { Component, OnInit, Input } from '@angular/core';

import { CommonService } from '../../shared/services';

@Component({
  selector: 'app-relationship-impact',
  templateUrl: './relationship-impact.component.html',
  styleUrls: ['./relationship-impact.component.scss']
})
export class RelationshipImpactComponent implements OnInit {
  @Input() relationshipImpacts;
  @Input() sdiCompletedNumber;
  @Input() sdiPendingNumber;
  @Input() feedbackCompletedNumber;
  @Input() feedbackPendingNumber;
  @Input() roleExpectationNumber;
  @Input() roleExpectationPendingNumber;

  constructor(
    private commonService: CommonService
  ) { }

  ngOnInit() {
    this.relationshipImpacts = this.commonService.numberWithCommas(this.relationshipImpacts);
    this.sdiCompletedNumber = this.commonService.numberWithCommas(this.sdiCompletedNumber);
    this.sdiPendingNumber = this.commonService.numberWithCommas(this.sdiPendingNumber);
    this.feedbackCompletedNumber = this.commonService.numberWithCommas(this.relationshipImpacts);
    this.feedbackPendingNumber = this.commonService.numberWithCommas(this.feedbackPendingNumber);
    this.roleExpectationNumber = this.commonService.numberWithCommas(this.roleExpectationNumber);
    this.roleExpectationPendingNumber = this.commonService.numberWithCommas(this.roleExpectationPendingNumber);
  }
}
