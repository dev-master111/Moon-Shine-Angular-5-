import { Component, OnInit, Input } from '@angular/core';
import { Language, TranslationService } from 'angular-l10n';
import { template, templateSettings } from 'lodash';

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

  constructor(
    public translationService: TranslationService
  ) { }

  ngOnInit() {

  }

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
