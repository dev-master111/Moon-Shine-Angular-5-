import { Injectable } from '@angular/core';

@Injectable()
export class ColorizeMvsCsService {
  public currentAssessment: any;

  constructor() { }

  /**
   * Wrap conflict sequence words associated with a user's personality results in
   * <span> tags with the proper css class so that we can show the word with
   * it's appropriate color in the UI.
   *
   * @param {cssClass} cssClass Optional css class to be applied to the main span element
   * @returns string
   */
  public conflictSequenceHtml(conflict: string, cssClass?: string): string {
    let innerContent = '';
    if (!conflict) {
      return innerContent;
    }

    let color        = conflict;
    const colorLower = color.toLowerCase();
    let spanStart    = '<span class="color text-uppercase';
    const spanEnd    = '</span>';
    if (cssClass) {
      spanStart += ` ${cssClass}`;
    }

    // When the value is "HUB", the H should be blue, the U should be
    // red, and the B should be green.
    if (colorLower === 'hub') {
      // each letter in hub has a different color so we need to
      // treat this color differently
      const letters = color.split('');
      letters.forEach((letter: string) => {
        innerContent += `${spanStart} ${letter.toLowerCase()}">${letter}${spanEnd}`;
      });
    } else {
      // Replace the letters with spans containing classes to show
      // each letter  in it's respective color
      color = color.replace(/B/, `${spanStart} blue">b${spanEnd}`);
      color = color.replace(/G/, `${spanStart} green">g${spanEnd}`);
      innerContent = color.replace(/R/, `${spanStart} red">r${spanEnd}`);
    }

    return innerContent;
  }

  /**
   * Wrap movitational words associated with a user's personality results in
   * <span> tags with the proper css class so that we can show the word with
   * it's appropriate color in the UI.
   *
   * @returns {string} HTML string containing the users personality type
   */
  public motivesHtml(motives: string): string {
    let innerContent = '';
    if (!motives) {
      return innerContent;
    }

    innerContent = this.formatColorString(motives);

    return innerContent;
  }

  /**
   * Format word(s) so that the word is shown in the color it describes
   *
   * @param {string} wordString A string containing the words that need to be wrapped in spans with
   *                            the appropriate CSS classess such that the word is colored in the color
   *                            associated with the word.
   * @returns {string} A string containing the original words wrapped in span tags with
   *                   the appropriate CSS classess.
   */
  public formatColorString(wordString: string): string {
    let htmlString = '';
    if (!wordString) {
      return htmlString;
    }

    const colors = wordString.split('-');
    let i = 1;

    colors.forEach((color: string) => {
      const colorLower = color.toLowerCase();

      if (colorLower === 'hub') {
        // each letter in hub has a different color so we need to
        // treat this color differently
        const letters = color.split('');
        letters.forEach((letter: string) => {
          htmlString += `<span class="color ${letter.toLowerCase()}">${letter}</span>`;
        });
      } else {
        htmlString += `<span class="color ${colorLower}">${color}</span>`;
        if (colors.length > 1 && i !== colors.length) {
          htmlString += '-';
        }
      }

      i += 1;
    });

    return htmlString;
  }

}
