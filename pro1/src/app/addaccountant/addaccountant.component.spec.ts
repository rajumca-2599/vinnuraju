import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddaccountantComponent } from './addaccountant.component';

describe('AddaccountantComponent', () => {
  let component: AddaccountantComponent;
  let fixture: ComponentFixture<AddaccountantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddaccountantComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddaccountantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
