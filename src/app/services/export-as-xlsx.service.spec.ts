import { TestBed, inject } from '@angular/core/testing';

import { ExportAsXLSXService } from './export-as-xlsx.service';

describe('ExportAsXLSXService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ExportAsXLSXService]
    });
  });

  it('should be created', inject([ExportAsXLSXService], (service: ExportAsXLSXService) => {
    expect(service).toBeTruthy();
  }));
});
