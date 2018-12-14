/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { BarangStartComponent } from './barang-start.component';

describe('BarangStartComponent', () => {
  let component: BarangStartComponent;
  let fixture: ComponentFixture<BarangStartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BarangStartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BarangStartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
