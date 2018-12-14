/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { BarangEditComponent } from './barang-edit.component';

describe('BarangEditComponent', () => {
  let component: BarangEditComponent;
  let fixture: ComponentFixture<BarangEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BarangEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BarangEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
