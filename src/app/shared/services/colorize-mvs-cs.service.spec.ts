import { TestBed, inject } from '@angular/core/testing';

import { ColorizeMvsCsService } from './colorize-mvs-cs.service';

describe('ColorizeMvsCsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ColorizeMvsCsService]
    });
  });

  it('should be created', inject([ColorizeMvsCsService], (service: ColorizeMvsCsService) => {
    expect(service).toBeTruthy();
  }));

  it('#conflictSequenceHtml should work', inject([ColorizeMvsCsService], (service: ColorizeMvsCsService) => {
    expect(service.conflictSequenceHtml('B')).toBe('<span class=\"color text-uppercase blue\">b</span>');
  }));

  it('#conflictSequenceHtmlForConflictBarOnly should work', inject([ColorizeMvsCsService], (service: ColorizeMvsCsService) => {
    expect(service.conflictSequenceHtmlForConflictBarOnly('[BRG] = [Accommodate-Assert-Analyze]'))
      .toBe('[<span class=\"color blue\">B</span><span class=\"color red\">R</span><span class=\"color green\">G</span>]'
        + ' = [<span class=\"color blue\">Accommodate</span>-<span class=\"color red\">Assert</span>'
        + '-<span class=\"color green\">Analyze</span>]');
  }));

  it('#motivesHtml should work', inject([ColorizeMvsCsService], (service: ColorizeMvsCsService) => {
    expect(service.motivesHtml('B-G-R'))
      .toBe('<span class=\"color b\">B</span>-<span class=\"color g\">G</span>-<span class=\"color r\">R</span>');
  }));

  it('#formatColorString should work', inject([ColorizeMvsCsService], (service: ColorizeMvsCsService) => {
    expect(service.formatColorString('B-G-R'))
      .toBe('<span class=\"color b\">B</span>-<span class=\"color g\">G</span>-<span class=\"color r\">R</span>');
  }));
});
