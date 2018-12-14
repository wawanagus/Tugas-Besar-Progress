/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { BarangService } from './barang.service';

describe('Service: Barang', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BarangService]
    });
  });

  it('should ...', inject([BarangService], (service: BarangService) => {
    expect(service).toBeTruthy();
  }));
});
