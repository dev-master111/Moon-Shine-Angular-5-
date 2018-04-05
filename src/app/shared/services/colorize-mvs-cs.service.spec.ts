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
});
