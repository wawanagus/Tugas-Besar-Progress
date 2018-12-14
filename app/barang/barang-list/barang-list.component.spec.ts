/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { BarangListComponent } from './barang-list.component';

describe('BarangListComponent', () => {
  let component: BarangListComponent;
  let fixture: ComponentFixture<BarangListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BarangListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BarangListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
