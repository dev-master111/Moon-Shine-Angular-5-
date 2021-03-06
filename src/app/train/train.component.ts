import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Language, TranslationService } from 'angular-l10n';

import { User } from '../shared/models';

@Component({
  selector: 'app-train',
  templateUrl: './train.component.html',
  styleUrls: ['./train.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class TrainComponent implements OnInit {
  user: User;

  constructor(
    public translationService: TranslationService
  ) { }

  public ngOnInit() {
    this.user = {
      avatar: 'assets/images/teams/icon-susan-anderson@3x.png',
      name: 'Susan Anderson',
      jobTitle: 'Director of HR',
      motives: 'HUB',
      conflict: '[BR]-G',
      sdiDate: new Date('18 April 2017'),
      facilitatorBanner: '',
      facilitatorID: 'US12247',
      facilitatorRatingScore: 4.67,
      evaluationsScore: 346,
      classesNumber: 48,
      learnersNumber: 641,
      toolkitsNumber: 14,
      creditsNumber: 78,
      platformKey: '3076ab89c2ba4f882267818edfb68a3c',
    };
  }

}
