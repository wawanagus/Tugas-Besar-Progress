/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { BarangItemComponent } from './barang-item.component';

describe('BarangItemComponent', () => {
  let component: BarangItemComponent;
  let fixture: ComponentFixture<BarangItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BarangItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BarangItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
