import { Component, OnInit, Input } from '@angular/core';
import { Language, TranslationService } from 'angular-l10n';
import { template, templateSettings } from 'lodash';
import { NotificationsService } from 'angular2-notifications';

import { User } from '../../shared/model';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent implements OnInit {
  @Language() lang: string;
  @Input() user: User;
  public translatedSdiDate: string = '';
  public options = {
    position: ['middle', 'center'],
  };

  constructor(
    private _notifications: NotificationsService,
    public translationService: TranslationService
  ) { }

  ngOnInit() {

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

  // TODO: Should move to a common service
  public translateTemplate(localizationKey: string, replacementObject: any): string {
    const translatedText = this.replaceTranslationTemplate(
      this.translationService.translate(localizationKey),
      replacementObject
    );

    return translatedText;
  }

  public replaceTranslationTemplate(translatedText: string, replacementObject: any): string {
    templateSettings.interpolate = /%{([\s\S]+?)}/g;
    const compiled = template(translatedText);
    return compiled(replacementObject);
  }
}
