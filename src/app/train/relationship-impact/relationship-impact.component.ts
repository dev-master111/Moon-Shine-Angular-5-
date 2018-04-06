import { Component, OnInit, Input } from '@angular/core';

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

  constructor() { }

  ngOnInit() {
    this.relationshipImpacts = this.numberWithCommas(this.relationshipImpacts);
    this.sdiCompletedNumber = this.numberWithCommas(this.sdiCompletedNumber);
    this.sdiPendingNumber = this.numberWithCommas(this.sdiPendingNumber);
    this.feedbackCompletedNumber = this.numberWithCommas(this.relationshipImpacts);
    this.feedbackPendingNumber = this.numberWithCommas(this.feedbackPendingNumber);
    this.roleExpectationNumber = this.numberWithCommas(this.roleExpectationNumber);
    this.roleExpectationPendingNumber = this.numberWithCommas(this.roleExpectationPendingNumber);
  }

  numberWithCommas(num: number) {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  }

}
