import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';
import { NotificationsService } from 'angular2-notifications';

import { User } from '../../shared/models';
import { ColorizeMvsCsService } from '../../shared/services';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class OverviewComponent implements OnInit {
  @Input() user: User;
  public translatedSdiDate: string = '';
  public options = {
    position: ['middle', 'center'],
  };

  constructor(
    private _notifications: NotificationsService,
    private colorizeMvsCsService: ColorizeMvsCsService
  ) { }

  ngOnInit() {
    // Initialize input data
    this.user = this.user || {
      avatar: '',
      name: '',
      jobTitle: '',
      motives: '',
      conflict: '',
      sdiDate: new Date(),
      facilitatorBanner: '',
      facilitatorID: '',
      facilitatorRatingScore: 0,
      evaluationsScore: 0,
      classesNumber: 0,
      learnersNumber: 0,
      toolkitsNumber: 0,
      creditsNumber: 0,
      platformKey: '',
    };
  }

  getGraphURL() {
    return `assets/images/Icons/Graph - ${Math.ceil(this.user.facilitatorRatingScore)}.svg`;
  }

  copiedToClipboardAlert() {
    this._notifications.html(`Copied to clipboard!`, 'success', {
      clickToClose: true,
      pauseOnHover: true,
      showProgressBar: false,
      timeOut: 2000,
      position: ['middle', 'center']
    });
  }

  reGenerate() {

  }
}
