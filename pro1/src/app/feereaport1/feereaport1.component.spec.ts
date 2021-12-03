import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Feereaport1Component } from './feereaport1.component';

describe('Feereaport1Component', () => {
  let component: Feereaport1Component;
  let fixture: ComponentFixture<Feereaport1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Feereaport1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Feereaport1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
