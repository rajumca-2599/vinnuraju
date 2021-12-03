import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewaccountantComponent } from './viewaccountant.component';

describe('ViewaccountantComponent', () => {
  let component: ViewaccountantComponent;
  let fixture: ComponentFixture<ViewaccountantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewaccountantComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewaccountantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
