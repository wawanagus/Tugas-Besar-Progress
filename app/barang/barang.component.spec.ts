/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { BarangComponent } from './barang.component';

describe('BarangComponent', () => {
  let component: BarangComponent;
  let fixture: ComponentFixture<BarangComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BarangComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BarangComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
